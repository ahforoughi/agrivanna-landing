import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of service — Agrivanna",
  description: "The terms for using the Agrivanna app and website.",
};

export default function ServiceTermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Legal</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl">
              Terms of service
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">
              The terms for using the Agrivanna app and website.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light border-t border-ink-950/10 py-20 sm:py-24">
        <div className="legal-prose mx-auto max-w-3xl px-4">
          <h2>Terms of service</h2>
          <ul>
            <li>
              Agrivanna provides a software service for ranch management and livestock
              health and compliance support. It may include AI-generated insights.
            </li>
            <li>
              The service is provided &quot;as is&quot;. Results may be incomplete or inaccurate,
              and you remain responsible for all ranch, veterinary, and compliance decisions.
            </li>
            <li>Agrivanna is not a substitute for a licensed veterinarian or professional advice.</li>
            <li>
              You will use the app lawfully and won&apos;t misuse it — no hacking, scraping,
              reverse engineering, or account sharing — and you will provide accurate information.
            </li>
            <li>
              Your account and content remain yours. You grant Agrivanna permission to host and
              process it in order to operate the service.
            </li>
            <li>
              Agrivanna may suspend or terminate access for policy violations, fraud, or security
              risks.
            </li>
            <li>
              Liability is limited to the extent permitted by law, with no indirect or
              consequential damages.
            </li>
            <li>Terms may be updated. Continued use after an update means acceptance.</li>
          </ul>

          <h2>Privacy</h2>
          <p>
            What we collect, how we use and share it, how long we keep it, and your choices are
            covered separately in the <Link href="/privacy">privacy policy</Link>.
          </p>

          <h2>Decision support and veterinary disclaimer</h2>
          <p>
            Outputs are informational and do not replace a licensed veterinarian.
          </p>

          <h2>User responsibility</h2>
          <p>
            You are responsible for actions taken based on the app and for following local
            regulations.
          </p>

          <h2>Service communications</h2>
          <p>
            Agrivanna may contact you for onboarding, support, and critical service notices.
          </p>

          <h2>Cookies</h2>
          <p>
            Cookie use is covered separately in the{" "}
            <Link href="/cookie-policy">cookie policy</Link>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms go to{" "}
            <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
