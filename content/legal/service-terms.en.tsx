import Link from "next/link";
import type { LegalPage } from "@/components/LegalPage";

const page: LegalPage = {
  title: "Terms of service",
  description: "The terms for using the Agrivanna app and website.",
  intro: "The terms for using the Agrivanna app and website.",
  body: (
    <>
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
    </>
  ),
};

export default page;
