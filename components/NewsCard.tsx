import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Story = {
  href: string;
  image: string;
  imageZoom?: boolean;
  tag: string;
  title: string;
  source: string;
  date: string;
  summary: string;
};

/** One press item, as shown on /news and in the home page's latest-news strip. */
export default function NewsCard({ story: n, readMore }: { story: Story; readMore: string }) {
  return (
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
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${n.imageZoom ? "scale-110" : ""}`}
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
          {readMore} <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
