"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PartnersMarquee from "@/components/PartnersMarquee";
import HomeHero from "@/components/home/HomeHero";
import ProductShowcase from "@/components/home/ProductShowcase";
import YourData from "@/components/home/YourData";
import { BuiltWithSection, ClosingCta } from "@/components/HomeSections";
import { HowItWorks } from "@/components/HomeOverview";
import { useI18n } from "@/components/LocaleProvider";

/**
 * Where the old one-page anchors live now, so links already shared
 * (agrivanna.com/#pricing and the like) still land on the right content.
 */
const MOVED_ANCHORS: Record<string, string> = {
  "#problem": "/product#ios-app",
  "#recording": "/product#ios-app",
  "#offline": "/product#ios-app",
  "#pasture": "/product#pasture",
  "#pricing": "/pricing",
  "#features": "/product#features",
};

/**
 * The home page, laid out the way ElevenLabs does theirs: a video hero, who
 * backs us, the products one tab at a time, how it works, who it's built with,
 * what happens to your data, and one closing ask. News and Pricing
 * have their own tabs, so they aren't repeated here.
 */
export default function HomePage() {
  const router = useRouter();
  const { href } = useI18n();

  useEffect(() => {
    const target = MOVED_ANCHORS[window.location.hash];
    if (target) router.replace(href(target));
  }, [router, href]);

  return (
    <>
      <HomeHero />
      <PartnersMarquee />
      <ProductShowcase />
      <HowItWorks />
      <BuiltWithSection />
      <YourData />
      <ClosingCta />
    </>
  );
}
