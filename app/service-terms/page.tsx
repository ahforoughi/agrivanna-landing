import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of service — Agrivanna",
  description: "Agrivanna's service terms, privacy summary, and data use.",
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
              Service terms, privacy summary, and how your ranch data is handled.
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

          <h2>Privacy and data use</h2>
          <p>Agrivanna may collect and use:</p>
          <ul>
            <li>
              <strong>Account data.</strong> Name, email or phone, organization, role, login
              credentials (hashed), and support messages.
            </li>
            <li>
              <strong>Ranch and livestock data you enter.</strong> Herd records, health notes,
              treatments, tasks, compliance logs, pasture boundaries, and attachments or photos.
            </li>
            <li>
              <strong>Device and app data.</strong> Device identifiers, app version, crash logs,
              performance analytics, approximate location if enabled, timestamps, and IP address.
            </li>
          </ul>
          <h3>How data is used</h3>
          <p>
            To provide features, generate AI insights, improve accuracy, support customers, prevent
            fraud, handle billing, and meet legal obligations.
          </p>
          <h3>AI processing</h3>
          <p>
            Your inputs may be processed by AI models to generate outputs, such as turning a spoken
            note into a structured record. Data may be retained to improve service quality unless
            you opt out where that option is offered.
          </p>
          <h3>Sharing</h3>
          <p>
            Only with vetted vendors — hosting, analytics, AI, customer support, payments — under
            confidentiality and only as needed; where required by law; or with your explicit
            permission. We do not sell your ranch data.
          </p>
          <h3>Retention</h3>
          <p>
            Kept as long as needed for the service, legal obligations, and backups. Deleted or
            anonymized on request where legally and technically feasible.
          </p>
          <h3>Your rights</h3>
          <p>
            Request access, correction, or deletion, export your data, withdraw marketing consent,
            manage permissions such as location, and contact us for privacy requests.
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
