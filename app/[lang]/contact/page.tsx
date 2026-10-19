import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { CONTACT_EMAIL } from "@/lib/cta";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("contact", "/contact");

/** The trial form from /software-leads, plus our email. */
export default async function ContactPage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const t = dict.softwareLeads;
  const p = dict.site.pages.contact;

  const OPTIONS = [
    { icon: Mail, title: p.emailTitle, body: p.emailBody, href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL, external: false },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        line1={t.headLine1}
        line2={t.headLine2}
        intro={t.intro}
        aside={
          <div className="grid gap-4">
            {OPTIONS.map(({ icon: Icon, ...o }) => (
              <Link
                key={o.title}
                href={o.href}
                target={o.external ? "_blank" : undefined}
                rel={o.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-lime-400/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-lime-400">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-lg font-medium text-bone-50">{o.title}</span>
                  <span className="mt-1 block text-sm text-bone-300">{o.body}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-lime-400">
                    {o.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        }
      />

      <section className="relative border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4">
          <Reveal>
            <TrialForm inline source="contact-page" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
