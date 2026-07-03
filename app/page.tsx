"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Wifi, Sprout, Activity, HeartPulse } from "lucide-react";
import VariableProximity from "@/components/VariableProximity";
import PartnersMarquee from "@/components/PartnersMarquee";
import Reveal from "@/components/Reveal";

const PROBLEM_STATS = [
  { value: "83%", label: "of ranchers want rotational grazing but can't afford the fence" },
  { value: "$10K", label: "per mile to build traditional wire fencing" },
  { value: "100K+", label: "agricultural jobs unfilled by 2030" },
] as const;

const PILLARS = [
  {
    icon: Activity,
    title: "Offline-first",
    body: "Built for places cell towers forgot. Drones carry the network to the herd.",
  },
  {
    icon: Sprout,
    title: "Grazing intelligence",
    body: "The Pasture Readiness Score tells you where to move cattle, and when.",
  },
  {
    icon: Wifi,
    title: "Virtual boundaries",
    body: "Fence mountains, riparian zones, and leased land without wire or posts.",
  },
  {
    icon: HeartPulse,
    title: "Animal health",
    body: "Behavior and movement data surface sickness and calving events before you'd catch them by eye.",
  },
] as const;

const STATUS_ITEMS = [
  { k: "Status", v: "MVP · TRL 5" },
  { k: "Pilots", v: "Summer 2026" },
  { k: "Waitlist", v: "10+ ranches" },
  { k: "Interviews", v: "60+ ranchers" },
];

const VALUE_GROUPS = [
  {
    label: "Direct savings",
    items: [
      "Skip $10,000+ per mile in wire, posts, and labour that traditional fencing costs to build.",
      "No fixed infrastructure bill — no cell towers, no Starlink subscription, no base-station install.",
    ],
  },
  {
    label: "Indirect savings",
    items: [
      "20–40% more usable forage per acre from properly timed rotational grazing, a smaller hay and feed bill.",
      "Hours back every week that used to go into building, checking, and repairing physical fence.",
      "Earlier illness and calving detection means fewer losses and fewer vet call-outs.",
    ],
  },
] as const;

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center overflow-hidden pt-36 pb-20"
      >
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="noise" />

        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(166,255,61,0.12), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Grazing intelligence · Calgary, AB</p>
          </Reveal>

          {/* Virtual fence photo — sits BEHIND the word "ranch" on lg+ for a layered look.
              On mobile it stacks inline below the heading. Rendered before the heading
              in markup so the heading's relative z-10 paints on top on lg+. */}
          <div className="pointer-events-none absolute right-4 top-28 z-0 hidden w-[42%] max-w-[520px] lg:block xl:top-24 xl:w-[42%] xl:max-w-[520px]">
            <Reveal delay={0.3}>
              <div className="media relative aspect-[4/3] opacity-90">
                <Image
                  src="/story/hero-virtual-fence.png"
                  alt="Cows grazing inside an Agrivanna virtual fence"
                  fill
                  priority
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 580px, 520px"
                />
                {/* Left-edge gradient blends the image into the dark background
                    where it overlaps with the word "ranch" */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,22,26,0.92) 0%, rgba(20,22,26,0.45) 24%, rgba(20,22,26,0) 58%)",
                  }}
                />
              </div>
            </Reveal>
          </div>

          <h1 className="relative z-10 mt-8 max-w-4xl text-6xl font-medium leading-[0.95] tracking-tightest sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]">
            <Reveal delay={0.05}>
              <span className="block text-bone-50">Run the ranch.</span>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="block text-bone-300">Not the&nbsp;</span>
            </Reveal>
            <Reveal delay={0.25}>
              <VariableProximity
                label="fence."
                className="inline-block text-lime-400"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={160}
                falloff="gaussian"
              />
            </Reveal>
          </h1>

          {/* Mobile-only: inline virtual fence photo below heading */}
          <Reveal delay={0.3}>
            <div className="media relative mt-12 aspect-[4/3] w-full max-w-lg lg:hidden">
              <Image
                src="/story/hero-virtual-fence.png"
                alt="Cows grazing inside an Agrivanna virtual fence"
                fill
                priority
                quality={95}
                className="object-cover"
                sizes="(min-width: 640px) 32rem, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 flex max-w-2xl flex-col gap-8 md:flex-row md:items-end md:justify-between lg:mt-14">
              <p className="text-lg leading-snug text-bone-300 md:max-w-md">
                Agrivanna is the operating system for grazing-based agriculture — virtual
                fencing, AI recommendations, and offline-first hardware built for working ranches.
              </p>
              <div className="pointer-events-auto flex flex-wrap gap-3">
                <Link href="/solutions" className="btn btn-solid">
                  See the system <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="#problem" className="btn">
                  Why it matters
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────── STATUS STRIP (WHITE / cream) ──────────────── */}
      <section className="section-light relative border-y border-ink-950/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4 md:py-16">
          {STATUS_ITEMS.map((item) => (
            <div key={item.k} className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
                {item.k}
              </span>
              <span className="text-2xl font-medium tracking-tight text-ink-950 sm:text-3xl">
                {item.v}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────── PROBLEM ──────────────────────────── */}
      <section
        id="problem"
        className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">The problem</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                  Rotational grazing works.
                  <br />
                  <span className="text-bone-300">
                    The fence is the bottleneck.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  Ranchers know rotational grazing improves soil, forage, and herd health. What
                  they don&apos;t have is time, labour, or ten grand a mile to build the fences
                  that make it possible.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <Link href="/solutions" className="mt-10 inline-flex btn">
                  How we fix it <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/5 border-y border-white/5">
                {PROBLEM_STATS.map((stat, i) => (
                  <Reveal key={stat.value} delay={0.1 + i * 0.08}>
                    <li className="flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-end">
                      <span className="text-6xl font-medium tracking-tighter text-lime-400 md:text-8xl">
                        {stat.value}
                      </span>
                      <span className="max-w-xs text-base text-bone-300 md:text-right">
                        {stat.label}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── VALUE TO THE RANCHER ──────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">The payoff</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                  What it&apos;s worth
                  <br />
                  <span className="text-bone-300">on your operation.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  Virtual fencing pays for itself twice — once in the capital you don&apos;t
                  spend on wire, and again in the forage and labour it frees up.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 max-w-sm rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                  <p className="text-5xl font-medium tracking-tighter text-lime-400 sm:text-6xl">
                    $60,000+
                  </p>
                  <p className="mt-3 text-sm text-bone-300">
                    CAD, estimated annual savings for a 150-head operation
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="media relative mb-10 aspect-[16/9]">
                  <Image
                    src="/story/cows-on-pasture.jpg"
                    alt="Cattle on open pasture"
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
                  />
                </div>
              </Reveal>
              <div className="grid gap-10 sm:grid-cols-2">
                {VALUE_GROUPS.map((group, i) => (
                  <Reveal key={group.label} delay={0.1 + i * 0.08}>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
                        {group.label}
                      </p>
                      <ul className="mt-6 space-y-4">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 border-t border-white/5 pt-4 text-base leading-relaxed text-bone-300"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PILLARS / STORY — WHITE SECTION ─────────────── */}
      <section className="section-light relative overflow-hidden border-t border-ink-950/10 py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">What Agrivanna is</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  Four parts of a single system.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base text-ink-700">
                Hardware, network, software, and a layer of animal-health intelligence. Together
                they are the operating system for the ranch.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="glow-card flex h-full flex-col p-8">
                  <p.icon className="h-6 w-6 text-[#2F6A14]" />
                  <h3 className="mt-10 text-xl font-medium tracking-tight text-ink-950">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hero story strip — correctly captioned */}
          <Reveal delay={0.1}>
            <div className="mt-24 grid gap-6 md:grid-cols-2">
              <div className="media relative aspect-[4/3]">
                <Image
                  src="/story/team-ranch.jpg"
                  alt="Ranch near Rosetown, Saskatchewan"
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-full bg-white/90 px-4 py-2 backdrop-blur w-max">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-950">
                    Ranch near Rosetown, SK
                  </p>
                </div>
              </div>
              <div className="media relative aspect-[4/3]">
                <Image
                  src="/story/rancher-interview.jpg"
                  alt="Ranch near Nanton, Alberta"
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-full bg-white/90 px-4 py-2 backdrop-blur w-max">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-950">
                    Ranch near Nanton, AB
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── PARTNERS MARQUEE ─────────────────────── */}
      <PartnersMarquee />

      {/* ─────────────────────── CTA ─────────────────────── */}
      <section id="pilot" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="flex justify-center">
              <p className="eyebrow">Summer 2026 pilots</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-medium tracking-tighter sm:text-6xl">
              Put the PRS
              <br />
              <span className="text-lime-400">on your ranch first.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base text-bone-300">
              We&apos;re selecting a small number of ranches for the first commercial
              deployment. Join the waitlist to be considered.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                className="btn btn-solid"
              >
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="mailto:info@agrivanna.com" className="btn">
                Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
