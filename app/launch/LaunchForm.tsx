"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

/** Google Apps Script web app for the "Launch Party Signups" Sheet (booth/apps_script.gs). */
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw3fTPB50iGngbAgh4qXtGD5swvOeQyUEvT_-Nr38zMtN_BO2aFfdE91pdSsOVTuS4/exec";

const ROLES = [
  { value: "rancher", label: "Rancher" },
  { value: "investor", label: "Investor" },
  { value: "partner", label: "Partner" },
  { value: "team", label: "Want to join" },
] as const;

// Same field look as the site's trial form (components/TrialForm.tsx)
const field =
  "w-full rounded-xl border border-white/12 bg-ink-800 px-4 py-3.5 text-base text-bone-50 placeholder:text-bone-400 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 aria-[invalid=true]:border-[#ff8a7a]";
const label = "mb-2 block text-sm text-bone-300";
const errorText = "mt-2 text-sm text-[#ff8a7a]";

export default function LaunchForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; role?: string }>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [utm, setUtm] = useState({ utm_source: "direct", utm_medium: "", utm_campaign: "" });
  // For the confirmation email's spam check (see /api/launch): when the page opened
  const openedAt = useRef(Date.now());

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: p.get("utm_source") || "direct",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
    });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) next.email = "Please check your email address.";
    if (!role) next.role = "Please pick one.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // A bot filled the hidden field: pretend it worked, send nothing
    if (trap) return setState("done");

    setState("sending");
    try {
      // no-cors: the reply can't be read, so a resolved fetch counts as sent;
      // only a network failure rejects
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name: name.trim(),
          email: email.trim(),
          role,
          ...utm,
          website: "",
          page: window.location.pathname,
        }),
      });
      // Their confirmation email, from our own server. Not awaited: the sign up
      // has landed, so the page moves on whatever happens to the email.
      fetch("/api/launch", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), role, website: trap, elapsedMs: Date.now() - openedAt.current }),
      }).catch(() => {});
      setState("done");
      window.scrollTo(0, 0);
    } catch {
      setState("failed");
    }
  }

  if (state === "done") {
    return (
      <div className="mt-10 rounded-3xl border border-white/10 bg-ink-900/80 p-7 backdrop-blur" aria-live="polite">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">
          <Check className="h-6 w-6 text-ink-950" strokeWidth={3} />
        </span>
        <h2 className="mt-6 text-3xl font-medium tracking-tighter">You're on the list.</h2>
        <p className="mt-3 text-base leading-relaxed text-bone-300">
          Thanks for stopping by. We'll be in touch soon. If you're at the booth, ask us to run your pasture on the tablet.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur sm:p-7"
    >
      <div>
        <label htmlFor="name" className={label}>
          Your name
        </label>
        <input
          id="name"
          className={field}
          autoComplete="name"
          maxLength={200}
          value={name}
          aria-invalid={!!errors.name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className={errorText} role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={200}
          className={field}
          value={email}
          aria-invalid={!!errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={errorText} role="alert">{errors.email}</p>}
      </div>

      <fieldset>
        <legend className={label}>I'm a</legend>
        <div className="grid grid-cols-2 gap-2.5">
          {ROLES.map((r) => {
            const on = role === r.value;
            return (
              <button
                key={r.value}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setRole(r.value);
                  setErrors((x) => ({ ...x, role: undefined }));
                }}
                className={`flex min-h-[64px] items-center justify-center gap-2 whitespace-nowrap rounded-2xl border px-2 text-[0.95rem] font-medium transition-colors ${
                  on
                    ? "border-lime-400 bg-lime-400/10 text-lime-400"
                    : "border-white/12 bg-ink-800 text-bone-100 active:bg-ink-700"
                }`}
              >
                {on && <Check className="h-4 w-4" strokeWidth={3} />}
                {r.label}
              </button>
            );
          })}
        </div>
        {errors.role && <p className={errorText} role="alert">{errors.role}</p>}
      </fieldset>

      {/* Hidden from people and screen readers; bots fill it in */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
        </label>
      </div>

      <button type="submit" disabled={state === "sending"} className="btn btn-solid w-full justify-center !py-4 text-base">
        <span>{state === "sending" ? "Sending" : "Get early access"}</span>
        {state !== "sending" && <ArrowUpRight className="h-4 w-4" />}
      </button>

      {state === "failed" && (
        <p className={errorText} role="alert">
          That didn't go through. Check your connection and try again, or give your details to someone at the booth.
        </p>
      )}
    </form>
  );
}
