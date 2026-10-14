"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mic,
  WifiOff,
  Map,
  Monitor,
  Fence,
  LayoutGrid,
  Newspaper,
  CircleHelp,
  Info,
  Users,
  Handshake,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import TrialButton from "@/components/TrialButton";
import LanguageToggle from "@/components/LanguageToggle";
import RndBadge from "@/components/RndBadge";
import { useI18n } from "@/components/LocaleProvider";
import { DEMO_CALENDLY } from "@/lib/cta";
import { stripLocale } from "@/lib/i18n";
import {
  APP_URL,
  COMPANY_LINKS,
  HARDWARE_LINKS,
  SOFTWARE_LINKS,
  type MenuLink,
} from "@/lib/site-nav";

const ICONS: Record<MenuLink["key"], LucideIcon> = {
  voice: Mic,
  offline: WifiOff,
  pasture: Map,
  web: Monitor,
  fencing: Fence,
  features: LayoutGrid,
  news: Newspaper,
  faq: CircleHelp,
  about: Info,
  team: Users,
  partners: Handshake,
  contact: Mail,
};

type MenuId = "product" | "company";

/** Top bar, left to right. Dropdowns hold links; Pricing and News are plain tabs. */
type BarItem = { kind: "menu"; id: MenuId; links: MenuLink[] } | { kind: "link"; id: "pricing" | "news"; path: string };
const BAR: BarItem[] = [
  { kind: "menu", id: "product", links: [...SOFTWARE_LINKS, ...HARDWARE_LINKS] },
  { kind: "link", id: "pricing", path: "/pricing" },
  { kind: "link", id: "news", path: "/news" },
  { kind: "menu", id: "company", links: COMPANY_LINKS },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [mobileGroup, setMobileGroup] = useState<MenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { locale, t, href } = useI18n();
  const m = t.site.menu;
  const path = stripLocale(pathname || "/");

  const isActive = (link: MenuLink) => !link.path.includes("#") && link.path === path;
  const groupActive = (links: MenuLink[]) => links.some(isActive);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Escape or a click elsewhere closes an open dropdown.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  // Hover opens panels for a mouse only: a tap on a tablet also fires enter
  // events, which would open the panel and let the click close it again.
  // A short delay lets the pointer cross the gap between the bar and the panel.
  const hoverOpen = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(id);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 150);
  };

  const triggerClass = (active: boolean, expanded: boolean) =>
    `flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors xl:px-4 ${
      active || expanded ? "text-lime-400" : "text-bone-50/80 hover:text-bone-50"
    }`;

  const openItem = BAR.find((b) => b.kind === "menu" && b.id === menu) as Extract<BarItem, { kind: "menu" }> | undefined;

  /** One link in a dropdown panel: icon tile, label, one-line description. */
  const PanelLink = ({ link }: { link: MenuLink }) => {
    const Icon = ICONS[link.key];
    const item = m.items[link.key];
    return (
      <Link
        href={href(link.path)}
        onClick={() => setMenu(null)}
        className="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-white/5"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-400 transition-colors group-hover:border-lime-400/40">
          <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
        </span>
        <span>
          <span className="flex items-center gap-2 text-[0.95rem] font-medium text-bone-50 group-hover:text-lime-400">
            {item.label}
          </span>
          <span className="mt-0.5 block text-sm leading-snug text-bone-300">{item.desc}</span>
        </span>
      </Link>
    );
  };

  return (
    <header
      ref={headerRef}
      onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "pt-3" : "pt-6"}`}
    >
      <div className="relative mx-auto max-w-6xl px-3 sm:px-4">
        <nav
          className={`flex items-center justify-between rounded-full border border-white/10 px-3 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl transition-all duration-500 ${
            scrolled || menu ? "bg-ink-900/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]" : "bg-white/5"
          }`}
        >
          <Link href={href("/")} className="flex shrink-0 items-center gap-2" aria-label={t.nav.homeAria}>
            <Image
              src="/logos/logo-dark.png"
              alt="Agrivanna"
              width={160}
              height={36}
              className="h-5 w-auto brightness-0 invert sm:h-6 lg:h-7"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {BAR.map((b) => (
              <li key={b.id}>
                {b.kind === "link" ? (
                  <Link href={href(b.path)} onPointerEnter={(e) => e.pointerType === "mouse" && hoverClose()} className={triggerClass(path === b.path, false)}>
                    {m[b.id]}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(b.id)}
                    onClick={() => setMenu(menu === b.id ? null : b.id)}
                    aria-expanded={menu === b.id}
                    aria-controls="mega-menu"
                    className={triggerClass(groupActive(b.links), menu === b.id)}
                  >
                    {b.id === "product" ? m.product : m[b.id]}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${menu === b.id ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Phones get it inside the menu instead — there's no room in the bar */}
            <LanguageToggle className="hidden sm:flex" />
            <a
              href={APP_URL}
              className="hidden whitespace-nowrap rounded-full px-2 py-2 text-sm text-bone-50/80 transition-colors hover:text-bone-50 xl:inline-flex"
            >
              {m.login}
            </a>
            {/* .btn sets its own display, so the wrapper does the hiding. The
                French labels are longer and leave no room for it in the bar;
                it's in every dropdown instead. */}
            <span className={locale === "en" ? "hidden 2xl:contents" : "hidden"}>
              <Link
                href={DEMO_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn !py-[0.95rem] !px-5 !text-[0.98rem]"
              >
                {t.bookCall}
              </Link>
            </span>
            {/* Free trial — compact on mobile, full-size on desktop */}
            <TrialButton
              source="navbar"
              arrow={false}
              className="btn btn-solid whitespace-nowrap !py-1 !px-2.5 sm:!px-3 !text-[0.72rem] !gap-1 lg:!py-[0.95rem] lg:!px-6 lg:!text-[0.98rem] lg:!gap-[0.6rem]"
            >
              {t.nav.freeTrial}
            </TrialButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Desktop mega menu */}
        {openItem && (
          <div
            id="mega-menu"
            onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(openItem.id)}
            className="absolute inset-x-3 top-full hidden pt-3 sm:inset-x-4 lg:block"
          >
            <div className="panel-in grid grid-cols-12 gap-3 rounded-4xl border border-white/10 bg-ink-900/95 p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              {openItem.id === "product" ? (
                <>
                  {/* Software: everything for sale today */}
                  <div className="col-span-8 p-2">
                    <p className="px-3 pb-2 pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
                      {m.software}
                    </p>
                    <ul className="grid grid-cols-2 gap-1">
                      {SOFTWARE_LINKS.map((link) => (
                        <li key={link.key}>
                          <PanelLink link={link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Hardware: virtual fencing, in R&D */}
                  <div className="col-span-4 flex flex-col p-2">
                    <p className="px-1 pb-3 pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
                      {m.hardware}
                    </p>
                    <Link
                      href={href(HARDWARE_LINKS[0].path)}
                      onClick={() => setMenu(null)}
                      className="group flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/5 bg-ink-950/60 transition-colors hover:border-lime-400/40"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <RndBadge label={m.rnd} />
                        <Image
                          src="/story/hero-virtual-fence.jpg"
                          alt=""
                          fill
                          sizes="360px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-lg font-medium tracking-tight text-bone-50 group-hover:text-lime-400">
                          {m.hardwareCard.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-bone-300">{m.hardwareCard.body}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs uppercase tracking-[0.14em] text-lime-400">
                          {m.hardwareCard.link}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <ul className="col-span-12 grid grid-cols-3 content-start gap-1 p-2">
                  {openItem.links.map((link) => (
                    <li key={link.key}>
                      <PanelLink link={link} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {open && (
          <div className="panel-in mt-3 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-3xl border border-white/10 bg-ink-900/95 p-5 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col">
              {BAR.map((b) =>
                b.kind === "link" ? (
                  <li key={b.id}>
                    <Link
                      href={href(b.path)}
                      className={`flex items-center justify-between border-b border-white/5 py-4 text-base ${
                        path === b.path ? "text-lime-400" : "text-bone-50"
                      }`}
                    >
                      {m[b.id]}
                      <ArrowUpRight className="h-4 w-4 text-lime-400" />
                    </Link>
                  </li>
                ) : (
                  <li key={b.id} className="border-b border-white/5">
                    <button
                      type="button"
                      onClick={() => setMobileGroup(mobileGroup === b.id ? null : b.id)}
                      aria-expanded={mobileGroup === b.id}
                      className={`flex w-full items-center justify-between py-4 text-base ${
                        groupActive(b.links) ? "text-lime-400" : "text-bone-50"
                      }`}
                    >
                      {b.id === "product" ? m.product : m[b.id]}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 text-lime-400 transition-transform duration-300 ${mobileGroup === b.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileGroup === b.id && (
                      <div className="pb-3">
                        {(b.id === "product"
                          ? [
                              { title: m.software, links: SOFTWARE_LINKS },
                              { title: m.hardware, links: HARDWARE_LINKS },
                            ]
                          : [{ title: "", links: b.links }]
                        ).map((section) => (
                          <Fragment key={section.title || b.id}>
                            {section.title && (
                              <p className="px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                                {section.title}
                              </p>
                            )}
                            <ul>
                              {section.links.map((link) => {
                                const Icon = ICONS[link.key];
                                return (
                                  <li key={link.key}>
                                    <Link
                                      href={href(link.path)}
                                      onClick={() => setOpen(false)}
                                      className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-[0.95rem] ${
                                        isActive(link) ? "text-lime-400" : "text-bone-50/90"
                                      }`}
                                    >
                                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-lime-400" />
                                      {m.items[link.key].label}
                                      {link.rnd && (
                                        <span className="rounded-full border border-lime-400/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-lime-400">
                                          {m.rnd}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </Fragment>
                        ))}
                      </div>
                    )}
                  </li>
                )
              )}
              <li>
                <a href={APP_URL} className="flex items-center justify-between py-4 text-base text-bone-50">
                  {m.login}
                  <ArrowUpRight className="h-4 w-4 text-lime-400" />
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center justify-between sm:hidden">
              <span className="text-sm text-bone-300">{t.language.label}</span>
              <LanguageToggle />
            </div>
            <TrialButton source="navbar-mobile" className="btn btn-solid mt-5 w-full justify-center" />
            <Link
              href={DEMO_CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3 w-full justify-center"
            >
              {t.bookCall}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
