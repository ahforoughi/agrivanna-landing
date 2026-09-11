"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import {
  HEAD_OPTIONS,
  OPERATION_OPTIONS,
  OPEN_TRIAL_EVENT,
  RECORD_OPTIONS,
  trialMailto,
  type TrialSubmission,
} from "@/lib/cta";

const EMPTY: TrialSubmission = {
  name: "",
  email: "",
  phone: "",
  ranch: "",
  location: "",
  head: "",
  operation: "",
  records: "",
  notes: "",
  source: "website",
};

const field =
  "w-full rounded-xl border border-white/12 bg-ink-800 px-4 py-3 text-base text-bone-50 placeholder:text-bone-400 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400";
const label = "mb-2 block text-sm text-bone-300";

/**
 * Free trial request form. Opened from anywhere by dispatching OPEN_TRIAL_EVENT
 * (see openTrialForm in lib/cta), and also rendered inline via `inline`.
 */
export default function TrialForm({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(inline);
  const [data, setData] = useState<TrialSubmission>(EMPTY);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const firstField = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef<Element | null>(null);

  useEffect(() => {
    if (inline) return;
    const onOpen = (e: Event) => {
      restoreFocus.current = document.activeElement;
      setData((d) => ({ ...d, source: (e as CustomEvent<string>).detail || "website" }));
      setOpen(true);
    };
    window.addEventListener(OPEN_TRIAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_TRIAL_EVENT, onOpen);
  }, [inline]);

  const close = useCallback(() => {
    setOpen(false);
    if (restoreFocus.current instanceof HTMLElement) restoreFocus.current.focus();
  }, []);

  useEffect(() => {
    if (!open || inline) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // preventScroll keeps the modal header in view on short viewports
    firstField.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, inline, close]);

  const set = (k: keyof TrialSubmission) => (v: string) => setData((d) => ({ ...d, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (body?.ok) {
        setState("done");
        return;
      }
      if (body?.fallback) {
        // No mail credentials on the server — hand it to their mail client so
        // the enquiry still reaches us.
        window.location.href = trialMailto(data);
        setState("done");
        return;
      }
      setState("error");
      setError(body?.error || "That didn't go through. Email haden@agrivanna.com and we'll sort it.");
    } catch {
      window.location.href = trialMailto(data);
      setState("done");
    }
  }

  if (!open) return null;

  const form =
    state === "done" ? (
      <div className="py-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">
          <Check className="h-6 w-6 text-ink-950" />
        </div>
        <h3 className="mt-6 text-2xl font-medium tracking-tight text-bone-50">
          Got it. Talk soon.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-base text-bone-300">
          We&apos;ll be in touch within a day to get the ranch set up — pastures mapped, herds
          in, wand paired.
        </p>
        {!inline && (
          <button type="button" onClick={close} className="btn mt-8">
            Close
          </button>
        )}
      </div>
    ) : (
      <form onSubmit={submit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="tf-name">
              Your name <span className="text-lime-400">*</span>
            </label>
            <input
              id="tf-name"
              ref={firstField}
              required
              autoComplete="name"
              className={field}
              value={data.name}
              onChange={(e) => set("name")(e.target.value)}
            />
          </div>
          <div>
            <label className={label} htmlFor="tf-email">
              Email <span className="text-lime-400">*</span>
            </label>
            <input
              id="tf-email"
              type="email"
              required
              autoComplete="email"
              className={field}
              value={data.email}
              onChange={(e) => set("email")(e.target.value)}
            />
          </div>
          <div>
            <label className={label} htmlFor="tf-phone">
              Phone
            </label>
            <input
              id="tf-phone"
              type="tel"
              autoComplete="tel"
              className={field}
              value={data.phone}
              onChange={(e) => set("phone")(e.target.value)}
            />
          </div>
          <div>
            <label className={label} htmlFor="tf-ranch">
              Ranch name
            </label>
            <input
              id="tf-ranch"
              className={field}
              value={data.ranch}
              onChange={(e) => set("ranch")(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="tf-location">
            Nearest town and province
          </label>
          <input
            id="tf-location"
            placeholder="e.g. Nanton, AB"
            className={field}
            value={data.location}
            onChange={(e) => set("location")(e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="tf-head">
              How many head
            </label>
            <select
              id="tf-head"
              className={field}
              value={data.head}
              onChange={(e) => set("head")(e.target.value)}
            >
              <option value="">Choose one</option>
              {HEAD_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="tf-operation">
              What you run
            </label>
            <select
              id="tf-operation"
              className={field}
              value={data.operation}
              onChange={(e) => set("operation")(e.target.value)}
            >
              <option value="">Choose one</option>
              {OPERATION_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="tf-records">
            Where your records live now
          </label>
          <select
            id="tf-records"
            className={field}
            value={data.records}
            onChange={(e) => set("records")(e.target.value)}
          >
            <option value="">Choose one</option>
            {RECORD_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={label} htmlFor="tf-notes">
            Anything we should know
          </label>
          <textarea
            id="tf-notes"
            rows={3}
            placeholder="Wand or scale you use, how many pastures, what you're hoping to fix."
            className={`${field} resize-y`}
            value={data.notes}
            onChange={(e) => set("notes")(e.target.value)}
          />
        </div>

        {state === "error" && (
          <p role="alert" className="text-sm text-[#FF8A6B]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "sending"}
          className="btn btn-solid w-full justify-center disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send it"}
          {state !== "sending" && <ArrowUpRight className="h-4 w-4" />}
        </button>
        <p className="text-sm text-bone-400">
          No credit card. We read every one of these ourselves.
        </p>
      </form>
    );

  if (inline) {
    return (
      <div className="rounded-4xl border border-white/10 bg-ink-900 p-6 sm:p-8">{form}</div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[120] overflow-y-auto"
      style={{ background: "rgba(5,6,7,0.72)", backdropFilter: "blur(10px)" }}
      onClick={close}
    >
      {/* min-h-full + items-center centres a short panel and scrolls a tall one
          without clipping its top, which plain items-center would do. */}
      <div className="flex min-h-full items-start justify-center p-0 sm:items-center sm:p-4">
        {/* Full-height sheet on phones, centred card from sm up */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="tf-title"
          className="relative min-h-[100svh] w-full max-w-xl border-white/10 bg-ink-900 sm:min-h-0 sm:rounded-3xl sm:border"
          onClick={(e) => e.stopPropagation()}
        >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone-50/70 transition-colors hover:border-lime-400 hover:text-lime-400"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 pb-8 pt-8 sm:px-8">
          {state !== "done" && (
            <div className="mb-7 max-w-md">
              <p className="eyebrow">Free trial</p>
              <h2
                id="tf-title"
                className="mt-4 text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl"
              >
                Tell us about the outfit.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-bone-300">
                We set the ranch up by hand so it works on day one. Takes a minute — these are
                the same questions we&apos;d ask on a call.
              </p>
            </div>
          )}
            {form}
          </div>
        </div>
      </div>
    </div>
  );
}
