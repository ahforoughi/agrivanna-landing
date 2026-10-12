"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

const STORAGE_KEY = "agrivanna-cookie-consent";

type Choice = "accepted" | "rejected";

/**
 * Consent gate for non-essential cookies. Vercel Analytics is only mounted
 * once a visitor accepts — see app/layout.tsx, which reads the same key.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t, href } = useI18n();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage blocked — show the banner rather than silently tracking.
      setVisible(true);
    }
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Nothing to persist to; the choice still applies for this page view.
    }
    window.dispatchEvent(new CustomEvent("agrivanna-consent", { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookie.aria}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-3xl border border-white/10 bg-ink-900/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <p className="text-sm leading-relaxed text-bone-300">
          {t.cookie.textBefore}
          <Link href={href("/cookie-policy")} className="text-lime-400 underline underline-offset-4">
            {t.cookie.link}
          </Link>
          {t.cookie.textAfter}
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="btn btn-sm min-h-11 justify-center px-5"
          >
            {t.cookie.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="btn btn-solid btn-sm min-h-11 justify-center px-5"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
