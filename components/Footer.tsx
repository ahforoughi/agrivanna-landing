import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { DEMO_CALENDLY } from "@/lib/cta";
import { fmt, localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import TrialButton from "@/components/TrialButton";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const l = t.footer.links;
  const href = (path: string) => localizePath(locale, path);

  const SOCIAL = [
    { href: "https://www.linkedin.com/company/agrivanna/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/agrivanna/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@Agrivanna", icon: Youtube, label: "YouTube" },
    { href: "mailto:info@agrivanna.com", icon: Mail, label: t.footer.social.email },
  ];

  const COLUMNS = [
    {
      title: t.footer.columns.product,
      links: [
        { href: href("/#recording"), label: l.recording },
        { href: href("/#offline"), label: l.offline },
        { href: href("/#pasture"), label: l.pasture },
        { href: href("/#features"), label: l.features },
        { href: href("/#pricing"), label: l.pricing },
      ],
    },
    {
      title: t.footer.columns.company,
      links: [
        { href: href("/team"), label: l.team },
        { href: href("/news"), label: l.news },
        { href: "mailto:info@agrivanna.com", label: l.contact },
      ],
    },
    {
      title: t.footer.columns.legal,
      links: [
        { href: href("/privacy"), label: l.privacy },
        { href: href("/cookie-policy"), label: l.cookies },
        { href: href("/service-terms"), label: l.terms },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="noise" />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10">
        <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow mb-5">{t.footer.eyebrow}</p>
            <h2 className="text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
              {t.footer.headLine1}
              <br />
              <span className="text-lime-400">{t.footer.headLine2}</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <TrialButton source="footer" />
            <Link
              href={DEMO_CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {t.bookCall} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 border-y border-white/5 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logos/logo-dark.png"
              alt="Agrivanna"
              width={220}
              height={60}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-300">
              {t.footer.blurb}
            </p>
            <ul className="mt-6 flex gap-2">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-300 transition-colors hover:border-lime-400 hover:text-lime-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-bone-300">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-bone-50/90 transition-colors hover:text-lime-400"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-bone-300 md:flex-row md:items-center">
          <p>{fmt(t.footer.copyright, { year: new Date().getFullYear() })}</p>
          <a
            href="https://albertainnovates.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-bone-300 transition-colors hover:text-lime-400"
          >
            <span>{t.footer.support}</span>
            <Image
              src="/partners/alberta-innovates.png"
              alt="Alberta Innovates"
              width={220}
              height={86}
              className="h-5 w-auto object-contain brightness-0 invert opacity-60 transition-opacity group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
