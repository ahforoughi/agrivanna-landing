"use client";

import Image from "next/image";
import { useI18n } from "@/components/LocaleProvider";

// Each partner includes a link directly relevant to Agrivanna's relationship.
// What the relationship is called is per-language: partners.contexts in lib/dictionaries.
const PARTNERS = [
  {
    name: "NVIDIA",
    src: "/partners/nvidia.png",
    href: "https://www.nvidia.com/en-us/startups/",
    alt: "NVIDIA",
    tall: true,
  },
  {
    name: "Google Cloud",
    src: "/partners/google-cloud.png",
    href: "https://cloud.google.com/startup",
    alt: "Google Cloud",
    tall: true,
  },
  {
    name: "Alberta Innovates",
    src: "/partners/alberta-innovates.png",
    href: "https://albertainnovates.ca/",
    alt: "Alberta Innovates",
  },
  {
    name: "NuWest Interiors",
    src: "/partners/nuwest.png",
    href: "https://www.nuwestinteriors.com/",
    alt: "NuWest Interiors",
  },
  {
    name: "Plug and Play",
    src: "/partners/plug-and-play.png",
    href: "https://www.linkedin.com/posts/ahforoughi_agtech-aiinagriculture-aginnovation-activity-7397013956038488065-gNdZ",
    alt: "Plug and Play",
  },
  {
    name: "THRIVE SVG",
    src: "/partners/thrive-svg.png",
    href: "https://thriveagrifood.com/academy-cohort-vii/",
    alt: "THRIVE SVG AgTech Accelerator",
  },
  {
    name: "DeepSense",
    src: "/partners/deepsense.png",
    href: "https://deepsense.ca/",
    alt: "DeepSense",
  },
  {
    name: "Huber Ag Equipment",
    src: "/partners/huber-ag-equipment.png",
    href: "https://www.huberequipment.com",
    alt: "Huber Ag Equipment Ltd.",
  },
] as const;

export default function PartnersMarquee({ id }: { id?: string }) {
  const { t } = useI18n();
  // Duplicate for seamless loop; tripled so the strip always fills wide viewports.
  const loop = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p) => ({
    ...p,
    context: t.partners.contexts[p.name],
  }));

  return (
    <section id={id} className="relative scroll-mt-28 overflow-hidden border-y border-white/5 py-16">
      <div className="noise" />
      <div className="relative mx-auto mb-10 max-w-6xl px-4">
        <p className="eyebrow">{t.partners.eyebrow}</p>
        <h3 className="mt-3 max-w-xl text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">
          {t.partners.heading}
        </h3>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="marquee-track">
        {loop.map((p, i) => (
          <a
            key={`${p.name}-${i}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 transition-all duration-500 hover:border-lime-400/40 hover:bg-white/[0.05]"
            aria-label={`${p.name} — ${p.context}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={220}
              height={80}
              className={`w-auto object-contain brightness-0 invert opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${"tall" in p && p.tall ? "max-h-14" : "max-h-10"}`}
            />
            <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-bone-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {p.context}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
