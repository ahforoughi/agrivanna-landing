"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News & Timeline" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-full border border-white/10 px-3 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-ink-900/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
              : "bg-white/5"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Agrivanna home">
            <Image
              src="/logos/logo-dark.png"
              alt="Agrivanna"
              width={160}
              height={36}
              className="h-4 w-auto brightness-0 invert sm:h-5 lg:h-6"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2 text-sm transition-colors ${
                      active ? "text-lime-400" : "text-bone-50/80 hover:text-bone-50"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-lime-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
                        active ? "scale-x-100" : ""
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* Desktop only: Book a demo */}
            <Link
              href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid hidden lg:inline-flex"
            >
              <span>Book a demo</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {/* Mobile/tablet: hamburger only — keeps the bar uncluttered */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-ink-900/95 p-5 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between border-b border-white/5 py-4 text-base last:border-b-0 ${
                        active ? "text-lime-400" : "text-bone-50"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 text-lime-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-5 w-full justify-center"
            >
              <span>Book a demo</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
