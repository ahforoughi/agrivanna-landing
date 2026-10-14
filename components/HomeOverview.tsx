"use client";

/**
 * "How it works", the three-step summary on the home page (dictionary key `site.home`).
 */
import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LocaleProvider";

export function HowItWorks() {
  const { t } = useI18n();
  const s = t.site.home;
  return (
    <section
      id="how"
      className="section-light relative scroll-mt-24 overflow-hidden border-t border-ink-950/10 py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="eyebrow">{s.howEyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
            {s.howLine1}
            <br />
            <span className="text-ink-700">{s.howLine2}</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-ink-950/10 bg-ink-950/10 md:grid-cols-3">
          {s.howSteps.map((step, i) => (
            <Reveal key={step.step} delay={0.05 * i}>
              <div className="flex h-full flex-col bg-cream-50 p-8 lg:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F6A14]">
                  {step.step}
                </p>
                <div className="mt-16">
                  <h3 className="text-2xl font-medium tracking-tight text-ink-950">{step.head}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-700">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
