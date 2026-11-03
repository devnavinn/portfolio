import Anthropic from "@anthropic-ai/sdk";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-knowledge";
import { WHATSAPP_NUMBER } from "@/constant";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const client = new Anthropic();

const MAX_MESSAGES = 20;
const MAX_CHARS = 1500;
const RATE_LIMIT = 20; // requests per window per IP
const RATE_WINDOW_MS = 10 * 60 * 1000;

const FALLBACK_REPLY = `Sorry, I can't help with that one. For anything about your project, message Navin directly on [WhatsApp](https://wa.me/${WHATSAPP_NUMBER}).`;
const ERROR_REPLY = `Sorry, I'm having trouble right now. You can reach Navin directly on [WhatsApp](https://wa.me/${WHATSAPP_NUMBER}).`;

// Best-effort, per-instance limiter. Serverless instances don't share memory,
// so this slows abuse rather than guaranteeing a hard cap.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) {
    return null;
  }
  const messages: Anthropic.Beta.BetaMessageParam[] = [];
  for (let i = 0; i < raw.length; i++) {
    const m = raw[i];
    const expectedRole = i % 2 === 0 ? "user" : "assistant";
    if (
      m?.role !== expectedRole ||
      typeof m.content !== "string" ||
      !m.content.trim() ||
      m.content.length > MAX_CHARS * 3
    ) {
      return null;
    }
    messages.push({ role: expectedRole, content: m.content });
  }
  const last = messages[messages.length - 1];
  if (last.role !== "user" || (last.content as string).length > MAX_CHARS) {
    return null;
  }
  return messages;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return new Response("Too many messages — please try again in a few minutes.", {
      status: 429,
    });
  }

  const messages = parseMessages(await req.json().catch(() => null));
  if (!messages) {
    return new Response("Invalid request.", { status: 400 });
  }

  const encoder = new TextEncoder();

  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (text: string) => controller.enqueue(encoder.encode(text));
      try {
        const stream = client.beta.messages.stream(
          {
            model: "claude-opus-5-5",
            // Short chat replies; a hard cap keeps a public endpoint's cost bounded.
            max_tokens: 4096,
            output_config: { effort: "low" },
            // Re-run a classifier-declined turn on Anthropic's recommended fallback model.
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
            system: [
              {
                type: "text",
                text: CHAT_SYSTEM_PROMPT,
                cache_control: { type: "ephemeral" },
              },
            ],
            messages,
          },
          { signal: req.signal }
        );

        let sentText = false;
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            sentText = true;
            send(event.delta.text);
          }
        }

        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          send(sentText ? `\n\n${FALLBACK_REPLY}` : FALLBACK_REPLY);
        } else if (final.stop_reason === "max_tokens") {
          send("…");
        }
      } catch (error) {
        if (req.signal.aborted) return; // visitor closed the chat mid-reply
        if (error instanceof Anthropic.RateLimitError) {
          console.error("chat: Anthropic rate limit", error.message);
        } else if (error instanceof Anthropic.AuthenticationError) {
          console.error("chat: invalid or missing ANTHROPIC_API_KEY");
        } else if (error instanceof Anthropic.APIError) {
          console.error(`chat: API error ${error.status}`, error.message);
        } else {
          console.error("chat: unexpected error", error);
        }
        send(ERROR_REPLY);
      } finally {
        try {
          controller.close();
        } catch {
          // already closed by an abort
        }
      }
    },
  });

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
