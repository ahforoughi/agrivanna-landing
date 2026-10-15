"use client";

/**
 * The home page's opening: the chute video full screen, with the headline over it.
 *
 * The video has the app on its left (3–28.5% of the frame's width) and the
 * chute on the right; the app must never be cut or covered:
 * - windows at least 9:8 wide (desktops, laptops, iPad landscape, narrowed
 *   windows) show it full screen behind the text, pinned left so the app is
 *   whole. The text centres on the screen when there's room, and otherwise in
 *   the space to the right of the app (globals.css, .hero-root / .hero-copy);
 * - taller or shorter windows (phones, iPad portrait, a phone on its side)
 *   show it above the text instead (.hero-video-box). Phones play a square cut
 *   made for them (hero-phone.*): the app screen centred over the chute
 *   footage from the same video, so nothing is blurred or empty and the file
 *   is half the size. Wider ones show the full frame from its left edge.
 *
 * Encodes (public/video): AV1 and HEVC at 1080p for wider screens, HEVC and
 * H.264 at 720p for phones; the 720p H.264 is also the catch-all fallback.
 * Muted, looping, inline and `autoplay`, so the browser starts it by itself
 * without waiting for this page's JavaScript; paused while off screen.
 *
 * Phones get H.264 only: some Android phones say they play HEVC in Chrome but
 * can't decode it, and a decode error never moves on to the next <source>.
 * As a safety net, if the video errors or still has no picture a few seconds
 * after it's on screen, it switches to the H.264 file that plays everywhere.
 * Where autoplay is blocked (iPhone Low Power Mode, data saver) it starts at
 * the visitor's first touch instead. There are no visible controls.
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TrialButton from "@/components/TrialButton";
import VariableProximity from "@/components/VariableProximity";
import { useI18n } from "@/components/LocaleProvider";

/** Phones (the square video cut); must match the layout in globals.css (.hero-video-box). */
const PHONE = "(max-width: 639px) and (max-aspect-ratio: 1124/1000), (max-width: 639px) and (max-height: 499px)";

export default function HomeHero() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();
  const home = t.home;

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    let rescued = false;
    let onScreen = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    // Phones that block autoplay (Low Power Mode, data saver) still allow play
    // after the visitor's first touch, so try again on that
    const GESTURES = ["touchstart", "pointerdown", "keydown"] as const;
    const onGesture = () => {
      GESTURES.forEach((g) => window.removeEventListener(g, onGesture));
      if (onScreen) v.play().catch(() => {});
    };
    const tryPlay = () =>
      v.play().catch(() => GESTURES.forEach((g) => window.addEventListener(g, onGesture, { once: true, passive: true })));

    // Swap, once, to an H.264 file every device can play (a different one from
    // whatever just failed) and try again
    const rescue = () => {
      if (rescued) return;
      rescued = true;
      v.src = v.currentSrc.endsWith("/hero-720.mp4") ? "/video/hero-phone.mp4" : "/video/hero-720.mp4";
      v.load();
      tryPlay();
    };
    const sources = Array.from(v.querySelectorAll("source"));
    v.addEventListener("error", rescue);
    // An error on the last <source> means none of them worked
    sources[sources.length - 1]?.addEventListener("error", rescue);

    const io = new IntersectionObserver(
      ([e]) => {
        clearTimeout(timer);
        onScreen = e.isIntersecting;
        if (!onScreen) {
          v.pause();
          return;
        }
        tryPlay();
        // On screen but still no picture after 4 s: the file isn't decoding here
        timer = setTimeout(() => {
          if (v.readyState < 2) rescue();
        }, 4000);
      },
      { threshold: 0.01 },
    );
    io.observe(v);
    return () => {
      clearTimeout(timer);
      io.disconnect();
      GESTURES.forEach((g) => window.removeEventListener(g, onGesture));
      v.removeEventListener("error", rescue);
      sources[sources.length - 1]?.removeEventListener("error", rescue);
    };
  }, []);

  return (
    <section
      ref={section}
      className="hero-root relative flex min-h-[100svh] flex-col overflow-hidden wide:items-center wide:justify-center wide:pb-16 wide:pt-28"
    >
      {/* Wide: fills the section behind the text. Tall: sits above the text
          (sizes in globals.css, .hero-video-box). Phones get their own cut of the
          video, made for them: the app screen centred over the chute footage. */}
      <div className="hero-video-box relative wide:absolute wide:inset-0">
        {/* The still frame, shown while the video loads; matches whichever cut plays */}
        <picture>
          <source media={PHONE} srcSet="/video/hero-phone-poster.jpg" />
          <img
            src="/video/hero-poster.jpg"
            alt=""
            fetchPriority="high"
            className="hero-video absolute inset-0 h-full w-full object-cover wide:object-left"
          />
        </picture>
        <video
          ref={video}
          className="hero-video absolute inset-0 h-full w-full object-cover wide:object-left"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={home.heroVideoLabel}
        >
          <source src="/video/hero-phone.mp4" type="video/mp4" media={PHONE} />
          <source src="/video/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero-1080.av1.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
          <source src="/video/hero-1080.hevc.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/video/hero-720.mp4" type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0 wide:hidden"
          style={{
            background:
              "linear-gradient(0deg, #14161A 0%, rgba(20,22,26,0.55) 14%, rgba(20,22,26,0) 32%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Wide screens: a soft dim plus a darker pool behind the centred text */}
      <div
        className="pointer-events-none absolute inset-0 hidden wide:block"
        style={{
          background:
            "radial-gradient(ellipse 42% 48% at calc(50% + var(--hero-shift, 0px) / 2) 52%, rgba(12,14,17,0.72), rgba(12,14,17,0) 100%), linear-gradient(0deg, rgba(20,22,26,0.85) 0%, rgba(20,22,26,0) 22%), linear-gradient(180deg, rgba(20,22,26,0.55) 0%, rgba(20,22,26,0) 18%), rgba(12,14,17,0.28)",
        }}
        aria-hidden="true"
      />

      <div className="hero-copy relative mx-auto -mt-10 w-full max-w-6xl px-4 pb-12 text-center wide:mt-0 wide:pb-0">
        <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[0.95] tracking-tightest sm:text-7xl lg:text-[6.25rem] wide:!text-[length:min(6.25rem,5.3vw)]">
          <Reveal delay={0.05}>
            <span className="block text-bone-50">{home.heroLine1}</span>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="block text-bone-300">{home.heroLine2}&nbsp;</span>
          </Reveal>
          <Reveal delay={0.25}>
            <VariableProximity
              label={home.heroLine3}
              className="inline-block text-lime-400"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={section}
              radius={160}
              falloff="gaussian"
            />
          </Reveal>
        </h1>
        <Reveal delay={0.35}>
          <p className="mx-auto mt-6 max-w-md text-base leading-snug text-bone-100/90 md:mt-8 md:max-w-lg md:text-lg wide:max-w-[min(32rem,34vw)]">
            {home.heroBody}
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrialButton source="hero" />
            <Link href="#how" className="btn">
              {home.seeHow}
            </Link>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
