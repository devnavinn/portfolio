export const SESSION_COOKIE = "admin_session";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7;

const encoder = new TextEncoder();

const sign = async (value: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(process.env.AUTH_SECRET ?? ""),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const createSessionToken = async () => {
  const expires = String(Date.now() + MAX_AGE_MS);
  return `${expires}.${await sign(expires)}`;
};

export const verifySessionToken = async (token?: string) => {
  if (!token || !process.env.AUTH_SECRET) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now()) return false;
  const expected = await sign(expires);
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++)
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  return diff === 0;
};

export const SESSION_MAX_AGE_S = MAX_AGE_MS / 1000;
