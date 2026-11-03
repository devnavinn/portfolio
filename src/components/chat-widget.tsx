"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpIcon, SparklesIcon, XIcon } from "lucide-react";
import { getWhatsAppLink } from "@/constant";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

export const OPEN_CHAT_EVENT = "open-chat";

export const openChat = () => window.dispatchEvent(new Event(OPEN_CHAT_EVENT));

const GREETING =
  "Hi! I'm Navin's AI assistant. Ask me about services, pricing, timelines, or past work — or tell me what you want to build.";

const suggestions = [
  "How much does a website cost?",
  "Can you build an AI chatbot for my business?",
  "What's included in the monthly retainer?",
  "Show me projects you've built",
];

const MAX_CHARS = 1500;
const HISTORY_LIMIT = 19; // keep the request under the API's 20-message cap

const Markdown = ({ text }: { text: string }) => (
  <ReactMarkdown
    components={{
      p: (p) => <p className="mb-2 last:mb-0" {...p} />,
      a: (p) => (
        <a
          className="font-medium text-sky-500 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          {...p}
        />
      ),
      ul: (p) => <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0" {...p} />,
      ol: (p) => <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0" {...p} />,
      strong: (p) => <strong className="font-semibold" {...p} />,
    }}
  >
    {text}
  </ReactMarkdown>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_CHAT_EVENT, handler);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim().slice(0, MAX_CHARS);
      if (!content || loading) return;

      const history: ChatMessage[] = [...messages, { role: "user", content }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setInput("");
      setLoading(true);

      // The API needs a user-first, alternating history.
      let payload = history.slice(-HISTORY_LIMIT);
      if (payload[0]?.role === "assistant") payload = payload.slice(1);

      const controller = new AbortController();
      abortRef.current = controller;

      const setReply = (reply: string) =>
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: reply },
        ]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          setReply(
            res.status === 429
              ? "You've sent a lot of messages — please try again in a few minutes, or message Navin on WhatsApp."
              : "Sorry, something went wrong. You can message Navin on WhatsApp instead."
          );
          return;
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let reply = "";
        for (; ;) {
          const { done, value } = await reader.read();
          if (done) break;
          reply += decoder.decode(value, { stream: true });
          setReply(reply);
        }
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setReply("Sorry, I couldn't connect. You can message Navin on WhatsApp instead.");
        }
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [messages, loading]
  );

  const lastQuestion = [...messages].reverse().find((m) => m.role === "user");
  const whatsappHref = getWhatsAppLink(
    lastQuestion
      ? `Hi Navin, I was chatting with your AI assistant about: "${lastQuestion.content.slice(0, 200)}"`
      : "Hi Navin, I'd like to discuss a project."
  );
  const waitingForFirstToken =
    loading && messages[messages.length - 1]?.content === "";

  return (
    <div className="print:hidden">
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Chat with Navin's AI assistant"
            className="group fixed bottom-[10.5rem] right-4 z-40 flex h-12 items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 pl-3 pr-3 text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:pr-4 md:bottom-[5.5rem] md:right-6"
          >
            <SparklesIcon size={24} />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[140px]">
              Ask my AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="AI assistant chat"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-x-2 bottom-20 top-20 z-[60] flex origin-bottom-right flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[min(620px,calc(100dvh-7rem))] md:w-[400px] dark:border-white/10 dark:bg-[#0b0f19]"
          >
            <div className="relative flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white">
                <SparklesIcon size={18} />
              </div>
              <div className="relative grow">
                <p className="text-sm font-semibold">Navin{"'"}s AI assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Live demo
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-900/5 dark:hover:bg-white/10"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="grow space-y-3 overflow-y-auto px-4 py-4">
              <Bubble role="assistant">
                <Markdown text={GREETING} />
              </Bubble>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-left text-xs text-slate-600 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:text-slate-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) =>
                m.content ? (
                  <Bubble key={i} role={m.role}>
                    {m.role === "assistant" ? <Markdown text={m.content} /> : m.content}
                  </Bubble>
                ) : null
              )}

              {waitingForFirstToken && (
                <Bubble role="assistant">
                  <span className="flex gap-1 py-1" aria-label="Typing">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-slate-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </span>
                </Bubble>
              )}
            </div>

            {messages.length > 0 && (
              <div className="px-4 pb-2">
                <Link
                  target="_blank"
                  href={whatsappHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-green-500/10 py-2 text-xs font-medium text-green-700 transition-colors hover:bg-green-500/20 dark:text-green-400"
                >
                  <WhatsAppIcon size={14} />
                  Continue with Navin on WhatsApp
                </Link>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-slate-200 p-3 dark:border-white/10"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50/60 p-1.5 pl-3 transition-colors focus-within:border-sky-500 dark:border-white/10 dark:bg-white/[0.03]">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  maxLength={MAX_CHARS}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask about services, pricing…"
                  className="max-h-28 min-h-[36px] grow resize-none bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white transition-opacity disabled:opacity-40"
                >
                  <ArrowUpIcon size={18} />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-400">
                AI can make mistakes. Confirm details with Navin.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Bubble = ({
  role,
  children,
}: {
  role: ChatMessage["role"];
  children: React.ReactNode;
}) => (
  <div className={cn("flex", role === "user" ? "justify-end" : "justify-start")}>
    <div
      className={cn(
        "max-w-[85%] break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
        role === "user"
          ? "whitespace-pre-wrap rounded-br-md bg-gradient-to-br from-sky-500 to-indigo-500 text-white"
          : "rounded-bl-md bg-slate-100 text-slate-800 dark:bg-white/[0.06] dark:text-slate-200"
      )}
    >
      {children}
    </div>
  </div>
);
