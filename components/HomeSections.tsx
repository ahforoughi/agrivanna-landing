"use client";

/**
 * Sections shared by the home page and the inner pages, so
 * the copy lives in one place (dictionary key `home`).
 */
import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import TrialButton from "@/components/TrialButton";
import { useI18n } from "@/components/LocaleProvider";

/** What good records are worth. */
export function PayoffSection() {
  const { t: dict } = useI18n();
  const t = dict.home;
  return (
    <>
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
    </>
  );
}

/** The ranches it's built with. */
export function BuiltWithSection() {
  const { t: dict } = useI18n();
  const t = dict.home;
  return (
    <>
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
    </>
  );
}

/** The plan, and how pricing works. */
export function PricingSection() {
  const { t: dict } = useI18n();
  const t = dict.home;
  return (
    <>
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
                    {t.pricing.priceNote}
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
              <h3 className="text-xl font-medium tracking-tight text-ink-950">
                {t.pricing.howTitle}
              </h3>
              <ol className="mt-8 space-y-5">
                {t.pricing.howSteps.map((step) => (
                  <li key={step.step} className="flex gap-5 border-t border-ink-950/10 pt-5">
                    <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F6A14]">
                      {step.step}
                    </span>
                    <span>
                      <span className="block text-base font-medium text-ink-950">{step.head}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-700">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}

/** The full feature breakdown. */
export function FeaturesSection() {
  const { t: dict } = useI18n();
  const t = dict.home;
  return (
    <>
    {/* ────────────── FULL FEATURE BREAKDOWN ────────────── */}
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 grid gap-12 lg:grid-cols-12 lg:items-center">
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
                sizes="(min-width: 1024px) 230px, 55vw"
                className="h-auto w-full max-w-[200px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)] sm:max-w-[230px]"
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
    </>
  );
}

/** Closing band: the free trial. */
export function ClosingCta() {
  const { t: dict } = useI18n();
  const t = dict.home;
  return (
    <>
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
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}
