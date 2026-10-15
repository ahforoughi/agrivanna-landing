"use client";

import Reveal from "@/components/Reveal";
import TimelineSlider from "@/components/TimelineSlider";
import { useI18n } from "@/components/LocaleProvider";

/** Our story so far: the milestone slider, on the About page. */
export default function StorySection() {
  const { t } = useI18n();
  const n = t.news;
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-28">
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{n.storyEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tighter sm:text-5xl">{n.storyHeading}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base text-bone-300">{n.storyIntro}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <TimelineSlider />
        </Reveal>
      </div>
    </section>
  );
}
