import "server-only";
import { z } from "zod";
import disposable from "disposable-email-domains";
import { TRIAL_SOURCES, type TrialSubmission } from "@/lib/cta";
import { UTM_KEYS, type Utm } from "@/lib/attio";

/**
 * The trial form's server-side checks that come on top of BotID, the hidden
 * field and the too-fast check in /api/trial: where the request came from, how
 * often one address sends, the shape of every field, and throwaway emails.
 */

// ---- same origin ---------------------------------------------------------------

const SITE_ORIGINS = ["https://agrivanna.com", "https://www.agrivanna.com"];

/** Our own pages only: the live site, this deploy's preview address, and localhost while developing. */
export function allowedOrigin(origin: string | null) {
  if (!origin) return false;
  const own = [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL].filter(Boolean).map((h) => `https://${h}`);
  if (SITE_ORIGINS.includes(origin) || own.includes(origin)) return true;
  return process.env.NODE_ENV !== "production" && /^http:\/\/localhost:\d+$/.test(origin);
}

// ---- rate limit ---------------------------------------------------------------

export const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map<string, number[]>();

/**
 * At most `max` sends per key (an IP, or a form plus an IP) in 10 minutes. Kept in
 * memory, so it's best effort: each server instance counts on its own. The Vercel
 * Firewall rule on /api/trial is the hard limit in front of it.
 */
export function rateLimited(key: string, now = Date.now(), max = RATE_LIMIT.max) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < RATE_LIMIT.windowMs)) hits.delete(k);
  return false;
}

export function resetRateLimit() {
  hits.clear();
}

export function clientIp(request: Request) {
  return (request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown").trim();
}

// ---- fields ---------------------------------------------------------------------

// Control characters (tabs and new lines are kept where a field can have them)
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u200B-\u200F\u2028\u2029\uFEFF]/g;
const text = (max: number, multiline = false) =>
  z
    .unknown()
    .transform((v) => (typeof v === "string" ? v : ""))
    .transform((v) => (multiline ? v.replace(CONTROL, "") : v.replace(CONTROL, "").replace(/\s+/g, " ")).trim().slice(0, max));

export const SignupSchema = z.object({
  name: text(80),
  email: z
    .unknown()
    .transform((v) => (typeof v === "string" ? v.replace(CONTROL, "").trim() : ""))
    .pipe(z.union([z.literal(""), z.email().max(254)])),
  phone: text(60),
  ranch: text(160),
  records: text(120),
  notes: text(2000, true),
  source: text(60),
  lang: z.unknown().transform((v): "en" | "fr" => (v === "fr" ? "fr" : "en")),
  page: text(200),
  utm: z
    .unknown()
    .transform((v) => (v && typeof v === "object" ? (v as Record<string, unknown>) : {}))
    .transform((v) => {
      const out: Utm = {};
      for (const k of UTM_KEYS) {
        const s = typeof v[k] === "string" ? (v[k] as string).replace(CONTROL, "").trim().slice(0, 200) : "";
        if (s) out[k] = s;
      }
      return out;
    }),
});

export type Signup = TrialSubmission & { page: string; utm: Utm };

/** Parsed fields (each cut to its maximum length), or "email" when the address isn't one. */
export function parseSignup(payload: unknown) {
  const r = SignupSchema.safeParse(payload ?? {});
  if (!r.success) {
    const field = String(r.error.issues[0]?.path[0] ?? "");
    return { ok: false as const, problem: field === "email" ? ("email" as const) : ("invalid" as const) };
  }
  const d = r.data;
  return {
    ok: true as const,
    data: { ...d, source: d.source || "website" } as Signup,
    fromOurPages: (TRIAL_SOURCES as readonly string[]).includes(d.source),
  };
}

// ---- throwaway email -----------------------------------------------------------

let throwaway: Set<string> | null = null;

/** Mailinator, 10minutemail and the rest of the ~120,000 known throwaway domains. */
export function isDisposable(email: string) {
  throwaway ??= new Set(disposable as string[]);
  const domain = email.split("@").pop()?.toLowerCase() ?? "";
  // a subdomain of a throwaway domain is throwaway too
  const parts = domain.split(".");
  for (let i = 0; i < parts.length - 1; i++) if (throwaway.has(parts.slice(i).join("."))) return true;
  return false;
}
