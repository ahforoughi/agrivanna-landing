import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { fmt, localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import ScanCredit from "@/components/ScanCredit";
import { COMPANY_LINKS, PRODUCT_LINKS, RESOURCE_LINKS, type MenuLink } from "@/lib/site-nav";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const l = t.footer.links;
  const href = (path: string) => localizePath(locale, path);

  const SOCIAL = [
    { href: "https://www.linkedin.com/company/agrivanna/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/agrivanna/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@Agrivanna", icon: Youtube, label: "YouTube" },
    { href: "mailto:info@agrivanna.com", icon: Mail, label: t.footer.social.email },
  ];

  const m = t.site.menu.items;
  const links = (list: MenuLink[]) =>
    list.map((x) => ({ href: href(x.path), label: m[x.key].label }));

  const COLUMNS = [
    {
      title: t.footer.columns.product,
      links: [...links(PRODUCT_LINKS), { href: href("/pricing"), label: l.pricing }],
    },
    { title: t.site.footerResources, links: links(RESOURCE_LINKS) },
    { title: t.footer.columns.company, links: links(COMPANY_LINKS) },
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
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/5 pb-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
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
          <div className="flex flex-wrap items-center gap-4">
            <p>{fmt(t.footer.copyright, { year: new Date().getFullYear() })}</p>
            <ScanCredit label={t.footer.scanCredit} />
          </div>
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
