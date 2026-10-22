import Image from "next/image";
import Link from "next/link";
import LaunchForm from "./LaunchForm";

/**
 * agrivanna.com/launch: the Launch Party sign up page (Thu Nov 5 2026,
 * Platform Calgary). The booth QR code opens it with
 * ?utm_source=launchparty&utm_medium=qr&utm_campaign=cinw2026.
 * Sign ups go to the "Launch Party Signups" Google Sheet (booth/apps_script.gs).
 */
export default function LaunchPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60svh]"
        style={{ background: "radial-gradient(60% 55% at 80% 0%, rgba(166,255,61,0.12), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[520px] flex-col px-4 pb-10 pt-[max(1.75rem,env(safe-area-inset-top))]">
        <Link href="/" aria-label="Agrivanna home" className="self-start">
          <Image
            src="/logos/logo-dark.png"
            alt="Agrivanna"
            width={160}
            height={24}
            priority
            className="h-6 w-auto brightness-0 invert"
          />
        </Link>

        <p className="eyebrow mt-12">Calgary Launch Party</p>
        <h1 className="mt-5 text-[2.6rem] font-medium leading-[0.98] tracking-tightest sm:text-5xl">
          Try Agrivanna
          <br />
          <span className="text-lime-400">on your land.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-bone-300 sm:text-lg">
          Muddy hands, no signal? Just talk. Agrivanna writes the herd and pasture records for you.
        </p>

        <LaunchForm />

        <p className="mt-auto pt-12 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone-400">
          Built here. Backed here.
        </p>
      </div>
    </main>
  );
}
