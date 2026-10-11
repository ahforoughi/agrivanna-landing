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
import { useI18n } from "@/components/LocaleProvider";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { locale, t: dict } = useI18n();
  const t = dict.home;

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
            <p className="eyebrow">{t.eyebrow}</p>
          </Reveal>

          {/* Chute-side photo — sits BEHIND the heading on lg+ for a layered look.
              On mobile it stacks inline below the heading. Rendered before the heading
              in markup so the heading's relative z-10 paints on top on lg+. */}
          <div className="pointer-events-none absolute right-4 top-28 z-0 hidden w-[44%] max-w-[560px] lg:block xl:top-24">
            <Reveal delay={0.3}>
              <div className="media relative aspect-[16/10] opacity-90">
                <Image
                  src="/app/chute-side-weigh.jpg"
                  alt={t.heroPhotoAlt}
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
              <span className="block text-bone-50">{t.heroLine1}</span>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="block text-bone-300">{t.heroLine2}&nbsp;</span>
            </Reveal>
            <Reveal delay={0.25}>
              <VariableProximity
                label={t.heroLine3}
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
                alt={t.heroPhotoAlt}
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
                {t.heroBody}
              </p>
              <div className="pointer-events-auto flex flex-wrap gap-3">
                <TrialButton source="hero" />
                <Link href="#problem" className="btn">
                  {t.seeHow}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
              {t.testedOn}
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
                <p className="eyebrow">{t.problem.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                  {t.problem.headLine1}
                  <br />
                  <span className="text-bone-300">{t.problem.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  {t.problem.body}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/5 border-y border-white/5">
                {t.problem.friction.map((item, i) => (
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
                  {t.problem.punchline}
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
                <p className="eyebrow">{t.recording.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  {t.recording.headLine1}
                  <br />
                  <span className="text-ink-700">{t.recording.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  {t.recording.body}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-4">
                  {t.recording.bullets.map((b) => (
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
              {t.recording.appLanguageNote && (
                <Reveal delay={0.2}>
                  <p className="mt-6 rounded-2xl border border-ink-950/10 bg-white px-5 py-4 text-sm leading-relaxed text-ink-700">
                    {t.recording.appLanguageNote}
                  </p>
                </Reveal>
              )}
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.15}>
                <div className="flex justify-center lg:justify-start">
                  <DictationPhone
                    text={t.recording.dictation}
                    srLabel={t.recording.dictationSr}
                    lang={locale === "en" ? undefined : "en"}
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
                <p className="eyebrow">{t.recording.confirmEyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-6 text-3xl font-medium tracking-tighter text-ink-950 sm:text-4xl">
                  {t.recording.confirmLine1}
                  <br />
                  <span className="text-ink-700">{t.recording.confirmLine2}</span>
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
                  {t.recording.confirmBody}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ConfirmQueue t={t.confirmQueue} />
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
              <p className="eyebrow">{t.offline.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                {t.offline.headLine1}
                <br />
                <span className="text-lime-400">{t.offline.headLine2}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-base leading-relaxed text-bone-300">
                {t.offline.body}
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {t.offline.steps.map((s, i) => (
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
                <p className="eyebrow">{t.pasture.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  {t.pasture.headLine1}
                  <br />
                  <span className="text-ink-700">{t.pasture.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  {t.pasture.bodyBefore}
                  <strong className="font-medium text-ink-950">{t.pasture.bodyStrong}</strong>
                  {t.pasture.bodyAfter}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-4">
                  {t.pasture.bullets.map((b) => (
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
                    alt={t.pasture.mapAlt}
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
                  {t.pasture.fenceTag}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink-950 sm:text-3xl">
                  {t.pasture.fenceHeadBefore}{" "}
                  <span className="bg-lime-400 px-1.5 py-0.5 text-ink-950">
                    {t.pasture.fenceHeadHighlight}
                  </span>{" "}
                  {t.pasture.fenceHeadAfter}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
                  {t.pasture.fenceBody}
                </p>
              </div>
              <p className="text-base leading-relaxed text-ink-700 lg:col-span-5">
                {t.pasture.fenceHonest}
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
                <p className="eyebrow">{t.house.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  {t.house.headLine1}
                  <br />
                  <span className="text-bone-300">{t.house.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
                  {t.house.body}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <Image
                  src="/app/herd-web.png"
                  alt={t.house.imageAlt}
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
                <p className="eyebrow">{t.payoff.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  {t.payoff.headLine1}
                  <br />
                  <span className="text-ink-700">{t.payoff.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-ink-700">
                  {t.payoff.body}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-ink-950/10 border-y border-ink-950/10">
                {t.payoff.items.map((p, i) => (
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
                <p className="eyebrow">{t.builtWith.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  {t.builtWith.headLine1}
                  <br />
                  <span className="text-bone-300">{t.builtWith.headLine2}</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base leading-relaxed text-bone-300">
                {t.builtWith.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="media relative aspect-[4/3]">
                <Image
                  src="/story/team-ranch.jpg"
                  alt={t.builtWith.rosetownAlt}
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-6 bottom-6 w-max rounded-full bg-ink-950/85 px-4 py-2 backdrop-blur">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-50">
                    {t.builtWith.rosetown}
                  </p>
                </div>
              </div>
              <div className="media relative aspect-[4/3]">
                <Image
                  src="/story/rancher-interview.jpg"
                  alt={t.builtWith.nantonAlt}
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-6 bottom-6 w-max rounded-full bg-ink-950/85 px-4 py-2 backdrop-blur">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-50">
                    {t.builtWith.nanton}
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
                <p className="eyebrow">{t.pricing.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                  {t.pricing.heading}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base text-ink-700">
                {t.pricing.intro}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.05}>
              <div className="glow-card flex h-full flex-col p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight text-ink-950">
                    {t.pricing.planName}
                  </h3>
                  <p className="text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                    {t.pricing.price}
                    <span className="ml-2 text-base font-normal tracking-normal text-ink-700">
                      {t.pricing.perMonth}
                    </span>
                  </p>
                </div>
                <ul className="mt-8 space-y-3.5">
                  {t.pricing.includes.map((item) => (
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
                  {t.pricing.setupNote}
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.12}>
              <div className="glow-card flex h-full flex-col p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight text-ink-950">
                    {t.pricing.largeName}
                  </h3>
                  <p className="text-xl font-medium tracking-tight text-ink-700">
                    {t.pricing.largePrice}
                  </p>
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink-700">
                  {t.pricing.largeBody}
                </p>
                <div className="mt-auto pt-10">
                  <Link
                    href={DEMO_CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    {dict.bookCall} <ArrowUpRight className="h-4 w-4" />
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
                <p className="eyebrow">{t.features.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                  {t.features.headLine1}
                  <br />
                  <span className="text-bone-300">{t.features.headLine2}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">
                  {t.features.body}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              {/* Optical nudge: centres the phone in the whitespace beside the
                  copy rather than inside its grid column. */}
              <div className="flex justify-center lg:-translate-x-12">
                <Image
                  src="/app/record-session.png"
                  alt={t.features.imageAlt}
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
            {t.features.groups.map((g, gi) => (
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
              {t.cta.headLine1}
              <br />
              <span className="text-lime-400">{t.cta.headLine2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base text-bone-300">
              {t.cta.body}
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
                {dict.bookCall}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
