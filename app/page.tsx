"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import VariableProximity from "@/components/VariableProximity";
import DictationPhone from "@/components/DictationPhone";
import ConfirmQueue from "@/components/ConfirmQueue";
import PartnersMarquee from "@/components/PartnersMarquee";
import Reveal from "@/components/Reveal";
import { DEMO_CALENDLY } from "@/lib/cta";
import TrialButton from "@/components/TrialButton";
import { FEATURE_GROUPS } from "@/lib/features";

/** The worked example shown transcribing on the phone. The ConfirmQueue below
    shows the records Agrivanna pulls out of this exact note. */
const DICTATION =
  "Cow 418, the black baldy heifer. Calved around five this morning in the north pasture. Bull calf, no help needed, up and sucking already. Gave him yellow tag 418 and a shot of vitamin E and selenium. Guessing he's about 85 pounds. She's a good mom, a bit protective.";

/** The reason ranch records don't get kept. Stated plainly, in the order it happens. */
const FRICTION = [
  {
    head: "Your hands are already full.",
    body:
      "Calving, gloves, blood, colostrum, a tag in your teeth. Nobody is tapping through six screens at three in the morning to log a heifer.",
  },
  {
    head: "The notebook is the system.",
    body:
      "Tags on a scrap of paper, weights on the shop whiteboard, the rest carried in your head until the accountant asks in March.",
  },
  {
    head: "Nobody has a week to learn a program.",
    body:
      "Most ranch software wants more fields than you have answers for, and it wants them typed. So it gets opened once and never again.",
  },
] as const;

/** How a record gets from your mouth to the office. One place, three beats. */
const OFFLINE_STEPS = [
  { step: "01", head: "You talk", body: "Out at the chute, in the field, wherever you are." },
  {
    step: "02",
    head: "The phone keeps it",
    body: "Written to the device the second you stop. Bars or no bars.",
  },
  {
    step: "03",
    head: "It uploads itself",
    body: "Next time you hit signal or the yard Wi-Fi. Nothing for you to do.",
  },
] as const;

/** What better records are worth on a cow-calf operation. */
const PAYOFF = [
  {
    value: "60 lbs",
    claim:
      "more weaned calf per cow, for ranchers who keep records on every animal and actually use them.",
  },
  {
    value: "$400",
    claim: "of winter feed spent on one open cow you didn't catch at preg check.",
  },
  {
    value: "39 lbs",
    claim: "of weaning weight gone for every 21-day cycle a cow breeds late.",
  },
] as const;

const PLAN_INCLUDES = [
  "Unlimited head, unlimited pastures",
  "Voice records, chute sessions, wand and scale support",
  "Works offline on every device, syncs itself",
  "Pasture mapping, readiness and rotation planning",
  "Your data exports whenever you ask for it",
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
            <p className="eyebrow">Ranch records · Calgary, AB</p>
          </Reveal>

          {/* Chute-side photo — sits BEHIND the heading on lg+ for a layered look.
              On mobile it stacks inline below the heading. Rendered before the heading
              in markup so the heading's relative z-10 paints on top on lg+. */}
          <div className="pointer-events-none absolute right-4 top-28 z-0 hidden w-[44%] max-w-[560px] lg:block xl:top-24">
            <Reveal delay={0.3}>
              <div className="media relative aspect-[16/10] opacity-90">
                <Image
                  src="/app/chute-side-weigh.jpg"
                  alt="A rancher holding a phone showing Agrivanna's weigh screen beside a scale head indicator"
                  fill
                  priority
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 560px, 520px"
                />
                {/* Left-edge gradient blends the photo into the dark background
                    where it overlaps the heading */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,22,26,0.92) 0%, rgba(20,22,26,0.35) 18%, rgba(20,22,26,0) 38%)",
                  }}
                />
              </div>
            </Reveal>
          </div>

          <h1 className="relative z-10 mt-8 max-w-4xl text-6xl font-medium leading-[0.95] tracking-tightest sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]">
            <Reveal delay={0.05}>
              <span className="block text-bone-50">Run the herd.</span>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="block text-bone-300">Not the&nbsp;</span>
            </Reveal>
            <Reveal delay={0.25}>
              <VariableProximity
                label="software."
                className="inline-block text-lime-400"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={160}
                falloff="gaussian"
              />
            </Reveal>
          </h1>

          {/* Mobile-only rendering of the same photo — one or the other is shown,
              never both, and Next serves a single cached asset. */}
          <Reveal delay={0.3}>
            <div className="media relative mt-12 aspect-[16/10] w-full max-w-lg lg:hidden">
              <Image
                src="/app/chute-side-weigh.jpg"
                alt="A rancher holding a phone showing Agrivanna's weigh screen beside a scale head indicator"
                fill
                priority
                quality={95}
                className="object-cover"
                sizes="(min-width: 640px) 32rem, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 flex max-w-4xl flex-col gap-8 md:flex-row md:items-end md:justify-between lg:mt-14">
              <p className="text-lg leading-snug text-bone-300 md:max-w-md">
                Muddy hands, no signal, and no week to spare learning a program. So don&apos;t
                learn one — talk to it. Agrivanna keeps the herd and pasture records you never
                get around to writing down.
              </p>
              <div className="pointer-events-auto flex flex-wrap gap-3">
                <TrialButton source="hero" />
                <Link href="#problem" className="btn">
                  See how it works
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
              Built and tested on working Alberta ranches
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────── PARTNERS — directly under the hero for early trust ────── */}
      <PartnersMarquee />

      {/* ──────────────────────────── THE PAIN ──────────────────────────── */}
      <section
        id="problem"
        className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">The real problem</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                  The software was never
                  <br />
                  <span className="text-bone-300">the hard part.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  Getting anything into it is. Every ranch program in the last twenty years has
                  failed at the same place — the moment a person with dirty hands has to stop
                  working and type.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/5 border-y border-white/5">
                {FRICTION.map((item, i) => (
                  <Reveal key={item.head} delay={0.1 + i * 0.08}>
                    <li className="py-10">
                      <h3 className="text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">
                        {item.head}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-300">
                        {item.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.35}>
                <p className="mt-10 text-2xl font-medium tracking-tight text-lime-400 sm:text-3xl">
                  So don&apos;t type. Talk.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── RECORDING — dictation, then confirmation ────────────── */}
      <section
        id="recording"
        className="section-light relative overflow-hidden border-t border-ink-950/10 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Recording</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  Say it out loud.
                  <br />
                  <span className="text-ink-700">It&apos;s written down.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  Talk through the run the way you&apos;d tell your neighbour over the fence.
                  Agrivanna pulls the tags, weights and treatments out of what you said and
                  writes them into your records against the right animal.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Speak in your own words. No forms, no dropdowns, nothing to learn.",
                    "Your wand and scale head send tags and weights in without you keying a number.",
                    "Already keeping records somewhere? Send them over and we'll load the ranch for you.",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 border-t border-ink-950/10 pt-4 text-base leading-relaxed text-ink-700"
                    >
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#2F6A14]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.15}>
                <div className="flex justify-center lg:justify-start">
                  <DictationPhone
                    text={DICTATION}
                    className="max-w-[340px] drop-shadow-[0_30px_60px_rgba(20,22,26,0.22)] sm:max-w-[420px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* What the spoken note becomes */}
          <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Then confirm</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-6 text-3xl font-medium tracking-tighter text-ink-950 sm:text-4xl">
                  One tap and it&apos;s
                  <br />
                  <span className="text-ink-700">in the book.</span>
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
                  Everything you said out there comes back as plain rows — the calving, the
                  steers you moved, the cow you treated, where you dropped bales, where the salt
                  went. Check them or throw them out. Nothing touches your records until you say
                  yes, so a misheard tag never becomes a wrong record.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ConfirmQueue />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── OFFLINE — three beats, no screenshot ────────────── */}
      <section
        id="offline"
        className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
      >
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Offline first</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                No signal.
                <br />
                <span className="text-lime-400">Nothing lost.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-base leading-relaxed text-bone-300">
                The phone is the source of truth, not a server in a city. Coming in and out of
                coverage is not something you should have to think about, and a dead zone should
                never cost you a day&apos;s work.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {OFFLINE_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={0.05 * i}>
                <div className="flex h-full flex-col justify-between bg-ink-950 p-8 lg:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
                    {s.step}
                  </p>
                  <div className="mt-16">
                    <h3 className="text-2xl font-medium tracking-tight text-bone-50">{s.head}</h3>
                    <p className="mt-3 text-base leading-relaxed text-bone-300">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── PASTURE — cream ────────────── */}
      <section
        id="pasture"
        className="section-light relative overflow-hidden border-t border-ink-950/10 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:order-2 lg:col-span-5 lg:col-start-8">
              <Reveal>
                <p className="eyebrow">Pasture &amp; grazing</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  Grass mapped.
                  <br />
                  <span className="text-ink-700">Rotations planned.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  Get your pastures in however suits you — <strong className="font-medium text-ink-950">draw
                  them on the map, drive them in the truck, walk the fence line, or import the
                  boundaries you already have.</strong> Acres come out the other end either way.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Satellite imagery tells you which pasture has had enough rest, so it isn't a guess.",
                    "Build a rotation and move herds through it without redrawing anything.",
                    "Utilization heat maps show where they actually grazed, not where you sent them.",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 border-t border-ink-950/10 pt-4 text-base leading-relaxed text-ink-700"
                    >
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#2F6A14]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:order-1 lg:col-span-6 lg:col-start-1">
              <Reveal delay={0.15}>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/app/pasture-map.png"
                    alt="Satellite pasture map showing grazing status across paddocks"
                    width={758}
                    height={1600}
                    quality={95}
                    sizes="(min-width: 1024px) 320px, 60vw"
                    className="h-auto w-full max-w-[280px] drop-shadow-[0_30px_60px_rgba(20,22,26,0.22)] sm:max-w-[320px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Virtual fencing — stated once, honestly */}
          <Reveal delay={0.1}>
            <div className="mt-24 grid gap-8 rounded-4xl border border-ink-950/10 bg-white p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F6A14]">
                  In R&amp;D
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink-950 sm:text-3xl">
                  Built for the fences you already have.{" "}
                  <span className="bg-lime-400 px-1.5 py-0.5 text-ink-950">
                    Virtual boundaries
                  </span>{" "}
                  are coming.
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
                  No wire, no posts, no fixing what the elk went through. Cross-fence a quarter
                  without spending a dollar on materials or a weekend on labour, and put cattle
                  on ground you could never afford to fence — creek bottoms, bush, leased land,
                  the back of the hill.
                </p>
              </div>
              <p className="text-base leading-relaxed text-ink-700 lg:col-span-5">
                We&apos;re not going to sell you a collar that isn&apos;t ready. Virtual fencing
                is in research and development. The pastures you map and the rotations you build
                now are the ones it will run on, so nothing you do today gets thrown away.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── BACK AT THE HOUSE ────────────── */}
      <section className="relative overflow-hidden border-t border-white/5 py-28 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Back at the house</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  The same records,
                  <br />
                  <span className="text-bone-300">on the big screen.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  Everything you said at the chute is on the laptop by the time you come in. Sort
                  herds, check weights, see which cows are earning their feed, and pull an export
                  when the vet or the accountant asks.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <Image
                  src="/app/herd-web.png"
                  alt="Agrivanna herd list and animal records open in a browser"
                  width={2400}
                  height={1199}
                  quality={95}
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="h-auto w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── WHAT IT'S WORTH — cream ────────────── */}
      <section className="section-light relative overflow-hidden border-t border-ink-950/10 py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Why it pays</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  Records you keep
                  <br />
                  <span className="text-ink-700">are records you can decide from.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-ink-700">
                  Which cows to cull, which heifers to keep, when to pull the bull, which pasture
                  has had enough rest. Those are the decisions that move money, and every one of
                  them needs a record that got written down at the time.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-ink-950/10 border-y border-ink-950/10">
                {PAYOFF.map((p, i) => (
                  <Reveal key={p.value} delay={0.1 + i * 0.08}>
                    <li className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-8">
                      <span className="shrink-0 text-3xl font-medium tracking-tighter text-[#2F6A14] sm:w-32 sm:text-4xl">
                        {p.value}
                      </span>
                      <span className="text-base leading-relaxed text-ink-700">{p.claim}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── BUILT WITH RANCHERS ────────────── */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Who it&apos;s built with</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  Designed at the chute,
                  <br />
                  <span className="text-bone-300">not in a boardroom.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base leading-relaxed text-bone-300">
                We build alongside cattlemen running real terrain, real mud, and real weather —
                and with the University of Calgary, Alberta Innovates, and the Canadian Forage
                and Grassland Association.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="media relative aspect-[4/3]">
                <Image
                  src="/story/team-ranch.jpg"
                  alt="Ranch near Rosetown, Saskatchewan"
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-6 bottom-6 w-max rounded-full bg-ink-950/85 px-4 py-2 backdrop-blur">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-50">
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
                <div className="absolute inset-x-6 bottom-6 w-max rounded-full bg-ink-950/85 px-4 py-2 backdrop-blur">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-50">
                    Ranch near Nanton, AB
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────── PRICING ──────────────────────────── */}
      <section
        id="pricing"
        className="section-light relative overflow-hidden border-t border-ink-950/10 py-28"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Pricing</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  One price. No surprises.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base text-ink-700">
                No head count tiers, no sales call before you can see a number, no annual
                contract to get started.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.05}>
              <div className="glow-card flex h-full flex-col p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight text-ink-950">
                    Software access
                  </h3>
                  <p className="text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                    $50
                    <span className="ml-2 text-base font-normal tracking-normal text-ink-700">
                      / month
                    </span>
                  </p>
                </div>
                <ul className="mt-8 space-y-3.5">
                  {PLAN_INCLUDES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-ink-700"
                    >
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#2F6A14]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <TrialButton source="pricing" />
                </div>
                <p className="mt-5 text-sm text-ink-700">
                  Email us and we&apos;ll get you set up. Self-serve signup is on the way.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.12}>
              <div className="glow-card flex h-full flex-col p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight text-ink-950">
                    Large operations
                  </h3>
                  <p className="text-xl font-medium tracking-tight text-ink-700">
                    Let&apos;s talk
                  </p>
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  Community pastures, grazing associations, leased land under several owners, or
                  crews who need onboarding at the chute. Tell us how the operation is set up and
                  we&apos;ll price it properly.
                </p>
                <div className="mt-auto pt-10">
                  <Link
                    href={DEMO_CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Book a call <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── FULL FEATURE BREAKDOWN ────────────── */}
      <section
        id="features"
        className="relative overflow-hidden border-t border-white/5 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">What you get</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  Everything in the platform,
                  <br />
                  <span className="text-bone-300">for the one price.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">
                  No modules to add on, no per-head charges, no upsell when your herd grows.
                  Parts of this are still rolling out — ask us what&apos;s live on your ranch
                  today and we&apos;ll tell you straight.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              {/* Optical nudge: centres the phone in the whitespace beside the
                  copy rather than inside its grid column. */}
              <div className="flex justify-center lg:-translate-x-12">
                <Image
                  src="/app/record-session.png"
                  alt="Picking the jobs a chute session covers in the Agrivanna app"
                  width={758}
                  height={1600}
                  quality={95}
                  sizes="(min-width: 1024px) 260px, 55vw"
                  className="h-auto w-full max-w-[220px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)] sm:max-w-[260px]"
                />
              </div>
            </Reveal>
          </div>

          <div className="border-t border-white/10">
            {FEATURE_GROUPS.map((g, gi) => (
              <Reveal key={g.group} delay={0.05 * gi}>
                <div className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-12 lg:gap-10">
                  <h3 className="text-xl font-medium tracking-tight text-lime-400 lg:col-span-3">
                    {g.group}
                  </h3>
                  <dl className="grid gap-x-10 gap-y-6 lg:col-span-9 sm:grid-cols-2">
                    {g.items.map((item) => (
                      <div key={item.name}>
                        <dt className="flex items-start gap-2.5 text-base font-medium text-bone-50">
                          <Check
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-lime-400"
                          />
                          {item.name}
                        </dt>
                        <dd className="mt-1.5 pl-[26px] text-sm leading-relaxed text-bone-300">
                          {item.detail}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CTA ─────────────────────── */}
      <section id="trial" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-medium tracking-tighter sm:text-6xl">
              Try it on one chute run.
              <br />
              <span className="text-lime-400">You&apos;ll know by the last calf.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base text-bone-300">
              Send us a note and we&apos;ll set your ranch up ourselves — pastures mapped, herds
              in, wand paired. Then take it to the chute and see if it keeps up.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <TrialButton source="closing-cta" />
              <Link
                href={DEMO_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Book a call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
