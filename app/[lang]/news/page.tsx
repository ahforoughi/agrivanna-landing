import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NEWS } from "@/lib/news";
import Reveal from "@/components/Reveal";
import TimelineSlider from "@/components/TimelineSlider";
import { getDictionary } from "@/lib/dictionaries";
import { alternates, fmt, pageLocale, type PageProps } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = getDictionary(locale).news;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(locale, "/news"),
  };
}

export default async function NewsPage({ params }: PageProps) {
  const t = getDictionary(await pageLocale(params)).news;
  const stories = NEWS.map((n) => ({ ...n, ...t.items[n.id] }));

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">{t.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-7xl lg:text-8xl">
                  {t.headLine1}
                  <br />
                  <span className="text-lime-400">{t.headLine2}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-10 max-w-xl text-base text-bone-300">
                  {t.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="media relative aspect-[4/3]">
                  <Image
                    src="/story/base-station-drone.jpg"
                    alt={t.photoAlt}
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* News list */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">{t.latestEyebrow}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                {t.latestHeading}
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300 md:inline">
              {fmt(t.storyCount, { count: stories.length })}
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((n, i) => (
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
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${"imageZoom" in n && n.imageZoom ? "scale-110" : ""}`}
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-50 backdrop-blur">
                      {t.tags[n.tag]}
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
                      {t.readMore} <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <Reveal>
              <p className="eyebrow">{t.watchEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                {t.watchHeading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="media relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/tWXcF0qAMlM"
                title="Agrivanna"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline — Greenlyte-style horizontal card slider */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow">{t.storyEyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tighter sm:text-5xl">
                  {t.storyHeading}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base text-bone-300">
                {t.storyIntro}
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
