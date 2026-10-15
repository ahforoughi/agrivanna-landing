"use client";

/**
 * The platform, one product at a time — ElevenLabs-style tabs that advance on
 * their own with a progress bar, keep going under the pointer, and stay put
 * for anyone who prefers reduced motion. The button pauses them.
 */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Reveal from "@/components/Reveal";
import RndBadge from "@/components/RndBadge";
import { useI18n } from "@/components/LocaleProvider";

const TABS = [
  { key: "voice", path: "/product#ios-app" },
  { key: "pasture", path: "/product#pasture" },
  { key: "web", path: "/product#web-app" },
  { key: "fencing", path: "/product/virtual-fencing" },
] as const;

/** App screenshots, shown whole and centred; the phone ones already sit in an iPhone frame. */
const SHOTS = {
  voice: { src: "/app/voice-listening-phone.png", width: 681, height: 1455, phone: true },
  pasture: { src: "/app/pasture-satellite-phone.png", width: 681, height: 1455, phone: true },
  web: { src: "/app/web-dashboard.png", width: 1663, height: 909, phone: false },
} as const;

/** Which Software page section describes each screenshot (for its alt text). */
const SHOT_SECTION = { voice: "iosApp", pasture: "pasture", web: "webApp" } as const;

const DWELL_MS = 7000;

export default function ProductShowcase() {
  const { locale, t, href } = useI18n();
  const s = t.site.home;
  const sections = t.site.pages.software.sections;
  // The server can't know the visitor's motion setting, so the first render
  // matches it (as if motion were allowed) and the real setting applies once
  // the page has started; reading it straight away makes React throw away
  // and rebuild the whole page
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && !!prefersReduced;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const auto = !reduce && !paused;
  const tablist = useRef<HTMLDivElement>(null);

  // Keep the active tab in view on narrow screens, scrolling the row sideways only
  useEffect(() => {
    const row = tablist.current;
    const tab = row?.children[active] as HTMLElement | undefined;
    if (!row || !tab) return;
    const left = tab.offsetLeft - row.offsetLeft - 16;
    row.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const next = () => setActive((i) => (i + 1) % TABS.length);

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{s.productsEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                {s.productsLine1}
                <br />
                <span className="text-bone-300">{s.productsLine2}</span>
              </h2>
            </Reveal>
          </div>
          {!reduce && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="inline-flex h-10 w-10 items-center justify-center self-start rounded-full border border-white/15 text-bone-300 transition-colors hover:border-lime-400 hover:text-lime-400 md:self-auto"
              aria-label={paused ? s.showcasePlay : s.showcasePause}
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
          )}
        </div>

        <div className="mt-12">
          {/* Tabs, each with its own progress bar */}
          <div ref={tablist} role="tablist" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {TABS.map((tab, i) => {
              const on = i === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`showcase-tab-${tab.key}`}
                  aria-selected={on}
                  aria-controls={`showcase-panel-${tab.key}`}
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-sm transition-colors duration-200 ${
                    on ? "border-white/20 bg-white/[0.06] text-bone-50" : "border-white/10 text-bone-300 hover:text-bone-50"
                  }`}
                >
                  {s.showcase[tab.key].label}
                  {tab.key === "fencing" && (
                    <span className="rounded-full border border-lime-400/40 px-1.5 py-px font-mono text-[9px] uppercase tracking-[0.14em] text-lime-400">
                      {t.site.menu.rnd}
                    </span>
                  )}
                  {on && auto && (
                    <span
                      key={`${active}-${locale}`}
                      aria-hidden="true"
                      onAnimationEnd={next}
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-lime-400"
                      style={{ animation: `tab-progress ${DWELL_MS}ms linear forwards` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panels: stacked, so switching is a crossfade with nothing to load */}
          <div className="relative mt-8 grid">
            {TABS.map((tab, i) => {
              const on = i === active;
              const copy = s.showcase[tab.key];
              return (
                <div
                  key={tab.key}
                  role="tabpanel"
                  id={`showcase-panel-${tab.key}`}
                  aria-labelledby={`showcase-tab-${tab.key}`}
                  aria-hidden={!on}
                  className={`col-start-1 row-start-1 grid gap-10 transition-[opacity,transform] duration-300 ease-out lg:grid-cols-12 lg:items-center ${
                    on ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl font-medium tracking-tight text-bone-50 sm:text-4xl">{copy.head}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-bone-300">{copy.body}</p>
                    <Link
                      href={href(tab.path)}
                      tabIndex={on ? 0 : -1}
                      className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-lime-400"
                    >
                      {t.site.learnMore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900">
                      <div
                        className="absolute inset-0"
                        style={{ background: "radial-gradient(circle at 50% 35%, rgba(166,255,61,0.14), transparent 60%)" }}
                        aria-hidden="true"
                      />
                      {tab.key !== "fencing" && (
                        <div className={`absolute inset-0 flex items-center justify-center ${SHOTS[tab.key].phone ? "px-4 pt-5 pb-3 sm:pt-6 sm:pb-4" : "p-4 sm:p-8"}`}>
                          <Image
                            src={SHOTS[tab.key].src}
                            alt={sections[SHOT_SECTION[tab.key]].imageAlt}
                            width={SHOTS[tab.key].width}
                            height={SHOTS[tab.key].height}
                            quality={95}
                            sizes={SHOTS[tab.key].phone ? "(min-width: 1024px) 320px, 45vw" : "(min-width: 1024px) 680px, 100vw"}
                            className={
                              SHOTS[tab.key].phone
                                ? "h-full w-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)]"
                                : "h-auto max-h-full w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                            }
                          />
                        </div>
                      )}
                      {tab.key === "fencing" && (
                        <>
                          <RndBadge label={t.site.rndBadge} />
                          <Image
                            src="/story/hero-virtual-fence.jpg"
                            alt=""
                            fill
                            quality={90}
                            sizes="(min-width: 1024px) 680px, 100vw"
                            className="object-cover"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
