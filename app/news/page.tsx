import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NEWS } from "@/lib/news";
import Reveal from "@/components/Reveal";
import TimelineSlider from "@/components/TimelineSlider";

export const metadata = {
  title: "News & Timeline — Agrivanna",
  description:
    "Press, awards, and accelerator news from Agrivanna — plus our story from founding to first ranch pilots.",
};

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Press · Awards · Milestones</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-7xl lg:text-8xl">
              What we&apos;re
              <br />
              <span className="text-lime-400">building in public.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-base text-bone-300">
              Every accelerator, award, and article the company has picked up along the way,
              plus the story from founding to first ranch pilots.
            </p>
          </Reveal>
        </div>
      </section>

      {/* News list */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Latest</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                In the news.
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300 md:inline">
              {NEWS.length} stories
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={(i % 3) * 0.08}>
                <Link
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-ink-900 transition-colors hover:border-lime-400/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      quality={95}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-50 backdrop-blur">
                      {n.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-300">
                      {n.date} · {n.source}
                    </p>
                    <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight text-bone-50 group-hover:text-lime-400">
                      {n.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-bone-300">{n.summary}</p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-lime-400">
                      Read more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — Greenlyte-style horizontal card slider */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow">Our story so far</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tighter sm:text-5xl">
                  From Calgary to the herd — and beyond.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base text-bone-300">
                Every milestone since October 2024, plus what we&apos;re building toward next.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <TimelineSlider />
          </Reveal>
        </div>
      </section>
    </>
  );
}
