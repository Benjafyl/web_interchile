import { createHash } from "node:crypto";

export const MAX_CONTACT_BYTES = 16_384;
const WINDOW_MS = 15 * 60 * 1000;
const buckets = new Map<string, { attempts: number; reset: number }>();
let globalBucket = { attempts: 0, reset: 0 };

export function allowedOrigin(
  request: Request,
  canonicalOrigin: string,
  development = false,
) {
  const origin = request.headers.get("origin");
  if (!origin || request.headers.get("sec-fetch-site") === "cross-site")
    return false;
  const canonical = new URL(canonicalOrigin);
  const allowed = new Set([
    canonical.origin,
    `${canonical.protocol}//www.${canonical.hostname}`,
  ]);
  if (development) allowed.add(new URL(request.url).origin);
  return allowed.has(origin);
}

export function consumeContactLimit(request: Request, now = Date.now()) {
  for (const [key, bucket] of buckets)
    if (bucket.reset <= now) buckets.delete(key);
  if (globalBucket.reset <= now)
    globalBucket = { attempts: 0, reset: now + WINDOW_MS };
  // A global cap bounds abuse even if a client can spoof forwarding headers.
  if (globalBucket.attempts >= 200)
    return Math.ceil((globalBucket.reset - now) / 1000);
  const forwarding = (request.headers.get("x-forwarded-for") || "unknown")
    .split(",")[0]
    .trim()
    .slice(0, 128);
  const key = createHash("sha256").update(forwarding).digest("hex");
  const bucket = buckets.get(key) || { attempts: 0, reset: now + WINDOW_MS };
  if (bucket.attempts >= 5) return Math.ceil((bucket.reset - now) / 1000);
  if (buckets.size >= 2000 && !buckets.has(key)) return 60;
  bucket.attempts++;
  globalBucket.attempts++;
  buckets.set(key, bucket);
  return 0;
}

export async function readContactBody(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_CONTACT_BYTES) throw new RangeError("body_limit");
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("empty_body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_CONTACT_BYTES) {
      await reader.cancel();
      throw new RangeError("body_limit");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(
    new TextDecoder("utf-8", { fatal: true }).decode(bytes),
  ) as unknown;
}

type RecaptchaResult = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  challenge_ts?: string;
};
export function validRecaptchaResult(
  value: unknown,
  hostname: string,
  minimumScore: number,
  now = Date.now(),
) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const result = value as RecaptchaResult;
  const timestamp = Date.parse(result.challenge_ts || "");
  return (
    result.success === true &&
    result.action === "contact" &&
    [hostname, `www.${hostname}`].includes(result.hostname || "") &&
    typeof result.score === "number" &&
    Number.isFinite(result.score) &&
    result.score >= minimumScore &&
    result.score <= 1 &&
    Number.isFinite(timestamp) &&
    now - timestamp <= 120_000 &&
    timestamp - now <= 15_000
  );
}

export async function verifyRecaptcha(
  token: unknown,
  secret: string,
  hostname: string,
) {
  if (typeof token !== "string" || !token || token.length > 4096) return false;
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error("captcha_unavailable");
  const rawScore = Number(
    process.env.RECAPTCHA_MIN_SCORE ?? process.env.RECAPTCHA_SCORE_MIN ?? 0.5,
  );
  const minimumScore =
    Number.isFinite(rawScore) && rawScore >= 0 && rawScore <= 1
      ? rawScore
      : 0.5;
  return validRecaptchaResult(
    (await response.json()) as RecaptchaResult,
    hostname,
    minimumScore,
  );
}
