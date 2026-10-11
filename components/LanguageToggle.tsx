"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "@/components/LocaleProvider";
import { LOCALES, LOCALE_COOKIE, localizePath, stripLocale, type Locale } from "@/lib/i18n";

/** Each language is named in itself, so a reader of either can find theirs. */
const NAMES: Record<Locale, string> = { en: "English", fr: "Français" };

/**
 * EN | FR switch. Real links, so it works without JavaScript and search engines
 * can follow it. With JavaScript it also remembers the choice in a cookie (read
 * by middleware.ts) and keeps the visitor's place, e.g. /#pricing → /fr#pricing.
 */
export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, t } = useI18n();
  const path = stripLocale(usePathname() || "/");

  const choose = (e: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    e.preventDefault();
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    if (next === locale) return;
    window.location.assign(localizePath(next, path) + window.location.search + window.location.hash);
  };

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <a
            key={l}
            href={localizePath(l, path)}
            hrefLang={l}
            lang={l}
            aria-label={NAMES[l]}
            aria-current={active ? "true" : undefined}
            onClick={(e) => choose(e, l)}
            className={`flex h-8 min-w-9 items-center justify-center rounded-full px-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors lg:h-9 lg:min-w-10 ${
              active ? "bg-bone-50 text-ink-950" : "text-bone-50/70 hover:text-lime-400"
            }`}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
