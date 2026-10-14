import type { Metadata } from "next";
import Image from "next/image";
import { NEWS } from "@/lib/news";
import Reveal from "@/components/Reveal";
import { ClosingCta } from "@/components/HomeSections";
import NewsCard from "@/components/NewsCard";
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
  const stories = NEWS.map((n) => ({
    ...n,
    ...t.items[n.id],
    tag: t.tags[n.tag],
    imageZoom: "imageZoom" in n && n.imageZoom,
  }));

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
                    src="/app/chute-side-weigh.jpg"
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
                <NewsCard story={n} readMore={t.readMore} />
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


      <ClosingCta />
    </>
  );
}
