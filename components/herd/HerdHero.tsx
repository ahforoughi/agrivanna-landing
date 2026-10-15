"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TrialButton from "@/components/TrialButton";
import VariableProximity from "@/components/VariableProximity";
import { useI18n } from "@/components/LocaleProvider";

// three.js only loads in the browser, after the headline has painted
const HerdScene = dynamic(() => import("@/components/herd/HerdScene"), {
  ssr: false,
  loading: () => null,
});

type Copy = {
  /** The small label above the headline; the home page has none */
  eyebrow?: string;
  line1: string;
  line2: string;
  /** Lime, and swells as the pointer passes over it */
  line3: string;
  body: string;
};

/**
 * The 3D herd behind a three-line headline. Defaults to the home page's
 * words; other pages pass their own copy and buttons.
 */
export default function HerdHero({ copy, actions }: { copy?: Copy; actions?: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // Phones get a lighter scene; decided before the scene loads so it never swaps mid-way
  const [lite, setLite] = useState<boolean | null>(null);
  useEffect(() => setLite(window.matchMedia("(max-width: 767px)").matches), []);
  const { t: dict } = useI18n();
  const home = dict.home;
  const c: Copy = copy ?? {
    line1: home.heroLine1,
    line2: home.heroLine2,
    line3: home.heroLine3,
    body: home.heroBody,
  };

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden pb-12 pt-36 md:pb-20">
      <div className="absolute inset-0">{lite !== null && <HerdScene animate={!reduce} lite={lite} />}</div>
      {/* Keeps the headline readable over the scene: from the left on wide
          screens, from the bottom on phones where the text sits under the herd */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,22,26,0.82) 0%, rgba(20,22,26,0.45) 36%, rgba(20,22,26,0) 60%), linear-gradient(0deg, rgba(20,22,26,0.9) 0%, rgba(20,22,26,0) 32%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,22,26,0.97) 0%, rgba(20,22,26,0.9) 38%, rgba(20,22,26,0.35) 56%, rgba(20,22,26,0) 68%)",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none relative mx-auto w-full max-w-6xl px-4">
        {c.eyebrow && (
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">{c.eyebrow}</p>
          </Reveal>
        )}
        <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tightest sm:text-7xl lg:text-[7rem]">
          <Reveal delay={0.05}>
            <span className="block text-bone-50">{c.line1}</span>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="block text-bone-300">{c.line2}&nbsp;</span>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="pointer-events-auto">
              <VariableProximity
                label={c.line3}
                className="inline-block text-lime-400"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={ref}
                radius={160}
                falloff="gaussian"
              />
            </span>
          </Reveal>
        </h1>
        <Reveal delay={0.4}>
          <div className="mt-8 flex max-w-4xl flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
            <p className="text-base leading-snug text-bone-300 md:max-w-md md:text-lg">{c.body}</p>
            <div className="pointer-events-auto flex flex-wrap gap-3">
              {actions ?? (
                <>
                  <TrialButton source="hero-herd" />
                  <Link href="#how" className="btn">
                    {home.seeHow}
                  </Link>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
