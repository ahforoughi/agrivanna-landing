"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleDot, Radio, BrainCircuit, HeartPulse } from "lucide-react";
import Reveal from "@/components/Reveal";

type SolutionLayout = "single" | "offset" | "devices";
type Solution = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  layout: SolutionLayout;
  images: { src: string; alt: string }[];
  icon: typeof CircleDot;
};

const SOLUTIONS: Solution[] = [
  {
    id: "collar",
    index: "01",
    eyebrow: "Hardware",
    title: "Smart GPS Collar",
    body:
      "A solar-powered collar that replaces wire. Audio and mild stimulus cues keep cattle inside a virtual boundary drawn on a map — not strung through the pasture.",
    bullets: [
      "~99.7% containment effectiveness",
      "Solar-powered · low maintenance",
      "Edge compute for behavior data",
      "Built for mud, dust, and −40°C",
    ],
    layout: "offset",
    images: [
      { src: "/products/collar-cow.png", alt: "Cow wearing the Agrivanna collar in pasture" },
      { src: "/products/collar-alt.png", alt: "Agrivanna virtual fencing collar render" },
    ],
    icon: CircleDot,
  },
  {
    id: "drone",
    index: "02",
    eyebrow: "Network",
    title: "Mobile Drone Base Station",
    body:
      "The network that carries itself to the herd. A mobile drone base delivers communication across remote, rugged land with no cell service — at a fraction of the cost of fixed base stations.",
    bullets: [
      "Works without cellular coverage",
      "Redeployable with the herd",
      "Reaches canyons, leased land, and mountains",
      "Built for the weather that breaks radios",
    ],
    layout: "single",
    images: [{ src: "/products/drone.png", alt: "Agrivanna mobile drone base station" }],
    icon: Radio,
  },
  {
    id: "prs",
    index: "03",
    eyebrow: "Software",
    title: "Pasture Readiness Score",
    body:
      "The brain of the system. AI-generated grazing recommendations, automated rotations, ROI tracking, and animal health alerts — all on any device, including offline.",
    bullets: [
      "Virtual fencing + pasture mapping",
      "AI rotation recommendations",
      "Satellite-fed forage intelligence",
      "Health & behavior alerts",
    ],
    layout: "devices",
    images: [
      { src: "/products/prs-computer.png", alt: "PRS desktop software with satellite grazing map" },
      { src: "/products/prs-phone.png", alt: "PRS mobile herd view" },
    ],
    icon: BrainCircuit,
  },
];

const IMPACT = [
  { value: "700+", unit: "hrs", label: "Labour saved per year" },
  { value: "40%", unit: "", label: "More productive forage" },
  { value: "30–40%", unit: "", label: "More cattle on the same land" },
  { value: "Early", unit: "", label: "Illness & calving detection" },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ──────────────────────── Header ──────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">The system</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-7xl lg:text-8xl">
              One ranch.
              <br />
              <span className="text-bone-300">Three moving parts.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-base text-bone-300">
              Agrivanna is a hardware-network-software stack. Each piece solves a different
              ranch problem on its own. Together, they run the ranch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── Each solution ──────────────────────── */}
      {SOLUTIONS.map((s, i) => {
        const reversed = i % 2 === 1;
        const Icon = s.icon;
        return (
          <section
            key={s.id}
            id={s.id}
            className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
          >
            <div className="mx-auto max-w-6xl px-4">
              <div
                className={`grid gap-14 lg:grid-cols-12 lg:items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-bone-300">
                      <span className="text-lime-400">{s.index}</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span>{s.eyebrow}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
                        <Icon className="h-5 w-5 text-lime-400" />
                      </div>
                      <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
                        {s.title}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-6 text-base leading-relaxed text-bone-300">{s.body}</p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <ul className="mt-10 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 border-t border-white/5 pt-3 text-base text-bone-50/90"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-lime-400"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                {/* Images — layout depends on solution */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    {s.layout === "single" && (
                      <div className="media relative aspect-[4/3] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
                        <span className="absolute left-8 top-6 z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300">
                          Agrivanna / {s.index}
                        </span>
                        <div className="absolute inset-0 grid-backdrop opacity-40" />
                        <Image
                          src={s.images[0].src}
                          alt={s.images[0].alt}
                          fill
                          quality={95}
                          className="object-contain p-12"
                          sizes="(min-width: 1280px) 1400px, (min-width: 1024px) 1100px, 100vw"
                        />
                      </div>
                    )}

                    {s.layout === "offset" && (
                      /* Cow main, render off to side overlapping */
                      <div className="relative aspect-[4/3]">
                        {/* Primary photo (cow) */}
                        <div className="media absolute left-0 top-0 h-[88%] w-[88%] overflow-hidden">
                          <Image
                            src={s.images[0].src}
                            alt={s.images[0].alt}
                            fill
                            quality={95}
                            className="object-cover"
                            sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 900px, 100vw"
                          />
                          <span className="absolute left-6 top-5 z-10 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-50/90">
                            Agrivanna / {s.index}
                          </span>
                        </div>
                        {/* Secondary render (offset bottom-right, transparent bg) */}
                        <div className="absolute bottom-0 right-0 h-[55%] w-[42%]">
                          <div className="relative h-full w-full">
                            <Image
                              src={s.images[1].src}
                              alt={s.images[1].alt}
                              fill
                              quality={100}
                              className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
                              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 500px, 60vw"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {s.layout === "devices" && (
                      /* PRS — computer + phone, transparent backgrounds, professional layout */
                      <div className="relative">
                        <div className="media relative aspect-[4/3] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
                          <span className="absolute left-8 top-6 z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300">
                            Agrivanna / {s.index}
                          </span>
                          <div className="absolute inset-0 grid-backdrop opacity-40" />

                          {/* Desktop screen — anchor large to the left/back */}
                          <div className="absolute left-[6%] top-[14%] h-[72%] w-[72%]">
                            <Image
                              src={s.images[0].src}
                              alt={s.images[0].alt}
                              fill
                              quality={100}
                              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
                              sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 800px, 80vw"
                            />
                          </div>

                          {/* Phone — overlap front-right */}
                          <div className="absolute right-[6%] bottom-[6%] h-[78%] w-[26%]">
                            <Image
                              src={s.images[1].src}
                              alt={s.images[1].alt}
                              fill
                              quality={100}
                              className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)]"
                              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 320px, 40vw"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ─────────────── ANIMAL HEALTH CALLOUT (between solutions & impact) ─────────────── */}
      <section className="section-light relative overflow-hidden border-t border-ink-950/10 py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow">Bonus intelligence</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 flex items-center gap-4 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  <HeartPulse className="h-10 w-10 text-[#2F6A14]" />
                  Animal health, watched automatically.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-700">
                  Every collar streams behavior and movement data to the PRS. Illness,
                  calving events, and downed animals get surfaced before you&apos;d catch them
                  by eye — saving vet calls, animals, and time in the saddle.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-8 space-y-3">
                  {[
                    "Early illness detection from behavior shifts",
                    "Calving and mortality alerts",
                    "Culling decision support",
                    "Daily herd health summary on your phone",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 border-t border-ink-950/10 pt-3 text-base text-ink-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2F6A14]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="media relative aspect-[4/3]">
                  <Image
                    src="/story/beautiful-pasture.jpg"
                    alt="A healthy Alberta pasture at sunset"
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(min-width: 1280px) 800px, (min-width: 1024px) 700px, 100vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── Impact section ──────────────────────── */}
      <section
        id="impact"
        className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-28 sm:py-36"
      >
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Impact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-tighter sm:text-6xl">
              What this looks like
              <br />
              <span className="text-lime-400">on a working ranch.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {IMPACT.map((m, i) => (
              <Reveal key={m.label} delay={0.05 * i}>
                <div className="flex h-full flex-col justify-between bg-ink-950 p-8 lg:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                    / {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-16 text-5xl font-medium tracking-tighter text-bone-50 sm:text-6xl">
                    {m.value}
                    {m.unit && <span className="text-bone-300 text-3xl">{m.unit}</span>}
                  </p>
                  <p className="mt-3 text-base text-bone-300">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pricing — contact only */}
          <Reveal delay={0.2}>
            <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-4xl border border-white/10 bg-ink-900 p-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="eyebrow">Pricing</p>
                <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
                  Built around your herd.
                </h3>
                <p className="mt-4 text-base text-bone-300">
                  Every operation looks different. Reach out and we&apos;ll put together a
                  proposal that fits your acreage, herd size, and goals.
                </p>
              </div>
              <Link href="/#pilot" className="btn btn-solid">
                Contact for pricing <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
