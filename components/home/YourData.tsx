"use client";

import Link from "next/link";
import { ArrowRight, Ban, Download, Lock, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LocaleProvider";

const ICONS = [MapPin, Ban, Download, Lock];

/** What happens to a rancher's records — only what the privacy policy promises. */
export default function YourData() {
  const { t, href } = useI18n();
  const s = t.site.home;
  return (
    <section className="section-light relative overflow-hidden border-t border-ink-950/10 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{s.dataEyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
              {s.dataLine1}
              <br />
              <span className="text-ink-700">{s.dataLine2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href={href("/privacy")} className="btn mt-10">
              {s.dataLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-px border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:col-span-7">
          {s.dataPoints.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.head} delay={0.05 * i}>
                <div className="h-full bg-cream-50 p-8">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#2F6A14]" />
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-ink-950">{p.head}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
