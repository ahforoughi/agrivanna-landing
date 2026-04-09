import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";

const SOCIAL = [
  { href: "https://www.linkedin.com/company/agrivanna/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/agrivanna/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@Agrivanna", icon: Youtube, label: "YouTube" },
  { href: "mailto:info@agrivanna.com", icon: Mail, label: "Email" },
] as const;

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/solutions#collar", label: "Virtual fencing collar" },
      { href: "/solutions#drone", label: "Mobile drone base" },
      { href: "/solutions#prs", label: "PRS software" },
      { href: "/solutions#impact", label: "Rancher impact" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/team", label: "Team" },
      { href: "/news", label: "News & timeline" },
      { href: "https://agrivanna.notion.site/agrivanna-data-room", label: "Data room" },
      { href: "mailto:info@agrivanna.com", label: "Contact" },
    ],
  },
  {
    title: "For ranchers",
    links: [
      { href: "/#pilot", label: "Join the pilot" },
      { href: "/#problem", label: "The problem" },
      { href: "/solutions#impact", label: "Calculate ROI" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="noise" />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10">
        {/* Big brand mark */}
        <div className="relative mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="relative z-10 max-w-lg">
            <p className="eyebrow mb-5">The ranch, rewired</p>
            <h2 className="text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
              Less fence. More forage.
              <br />
              <span className="text-lime-400">Run the ranch.</span>
            </h2>
          </div>

          {/* Speckled Park cow — transparent PNG anchored beside the brand line.
              Sits center-right on lg+, bottom-right on mobile, behind the CTA buttons. */}
          <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden h-[140%] w-[42%] max-w-[460px] sm:block md:right-[max(0px,calc((100%-40rem)/2))] md:h-[130%] md:w-[38%] lg:right-[22%] lg:h-[150%] lg:w-[34%]">
            <Image
              src="/story/hero-speckled-park.png"
              alt=""
              aria-hidden="true"
              fill
              quality={100}
              className="object-contain object-right-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
              sizes="(min-width: 1024px) 440px, (min-width: 768px) 360px, 260px"
            />
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            <Link
              href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Book a demo <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/news" className="btn">
              Latest updates <ArrowUpRight className="h-4 w-4" />
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
              Canadian agtech. Grazing intelligence built for the working ranch —
              no signal, no fences, no problem.
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
          <p>© {new Date().getFullYear()} Agrivanna Inc. Calgary, Alberta.</p>
          <p className="font-mono uppercase tracking-widest">
            TRL 5 · MVP complete · Pilots Summer 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
