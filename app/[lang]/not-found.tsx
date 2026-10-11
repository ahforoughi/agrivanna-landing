"use client";

import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

export default function NotFound() {
  const { t, href } = useI18n();
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      <title>{t.notFound.metaTitle}</title>
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <p className="eyebrow">{t.notFound.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl">
          {t.notFound.heading}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">{t.notFound.body}</p>
        <Link href={href("/")} className="btn btn-solid mt-10">
          {t.notFound.home}
        </Link>
      </div>
    </section>
  );
}
