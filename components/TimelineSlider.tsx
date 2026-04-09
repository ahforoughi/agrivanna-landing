"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Compass, Flag } from "lucide-react";
import { TIMELINE } from "@/lib/news";

/**
 * Horizontal card slider inspired by the Greenlyte "Our story so far" section.
 * Cards scroll horizontally with scroll-snap; prev/next buttons scroll by one card.
 * A dates strip underneath highlights the active card.
 */
export default function TimelineSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 20;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  }, []);

  // Track active index via scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const width = card.offsetWidth + 20;
      const idx = Math.round(track.scrollLeft / width);
      setActiveIndex(Math.min(Math.max(idx, 0), TIMELINE.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const width = card.offsetWidth + 20;
    track.scrollTo({ left: idx * width, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-8 sm:gap-6"
      >
        {TIMELINE.map((m, i) => {
          const isActive = i === activeIndex;
          const isFuture = m.status === "future";
          const isNow = m.status === "now";
          return (
            <article
              key={`${m.date}-${i}`}
              data-card
              className={`group relative flex w-[78vw] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border transition-all duration-500 sm:w-[360px] md:w-[380px] ${
                isActive
                  ? isNow
                    ? "border-lime-400 bg-lime-400/[0.08]"
                    : "border-white/20 bg-ink-800"
                  : "border-white/5 bg-ink-900"
              }`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-6 pt-6">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                    isNow ? "text-lime-400" : "text-bone-300"
                  }`}
                >
                  {m.date}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    isFuture
                      ? "text-bone-400"
                      : isNow
                      ? "text-lime-400"
                      : "text-bone-300"
                  }`}
                >
                  {isFuture ? "Planned" : isNow ? "In progress" : "Complete"}
                </span>
              </div>

              {/* Image or icon placeholder */}
              <div className="relative mt-5 aspect-[4/3] overflow-hidden bg-ink-800">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 420px, 80vw"
                  />
                ) : (
                  <div className="relative flex h-full items-center justify-center">
                    <div className="absolute inset-0 grid-backdrop opacity-30" />
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-full border ${
                        isNow
                          ? "border-lime-400/60 bg-lime-400/10 text-lime-400"
                          : isFuture
                          ? "border-white/15 bg-ink-700 text-bone-300"
                          : "border-lime-400/30 bg-lime-400/[0.06] text-lime-400"
                      }`}
                    >
                      {isNow ? (
                        <Compass className="h-9 w-9" />
                      ) : isFuture ? (
                        <Flag className="h-9 w-9" />
                      ) : (
                        <Sparkles className="h-9 w-9" />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <h3
                  className={`text-lg font-medium tracking-tight sm:text-xl ${
                    isNow ? "text-lime-400" : "text-bone-50"
                  }`}
                >
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">{m.body}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Date strip underneath (clickable) */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 overflow-x-auto no-scrollbar">
        {TIMELINE.map((m, i) => (
          <button
            key={`${m.date}-dot-${i}`}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              i === activeIndex
                ? m.status === "now"
                  ? "text-lime-400"
                  : "text-bone-50"
                : "text-bone-400 hover:text-bone-50"
            }`}
          >
            {m.date}
          </button>
        ))}
      </div>

      {/* Nav buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-bone-50 transition-colors hover:border-lime-400 hover:text-lime-400"
          aria-label="Previous milestone"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-ink-950 transition-colors hover:bg-bone-50"
          aria-label="Next milestone"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
