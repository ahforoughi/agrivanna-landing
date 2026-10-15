import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import TrialForm from "@/components/TrialForm";
import ConsentGatedAnalytics from "@/components/ConsentGatedAnalytics";
import LocaleProvider from "@/components/LocaleProvider";
import { getDictionary } from "@/lib/dictionaries";
import { HTML_LANG, LOCALES, OG_LOCALE, alternates, isLocale } from "@/lib/i18n";
import { REVEAL_SCRIPT } from "@/lib/reveal-script";
import { notFound } from "next/navigation";
import "../globals.css";

// Real Geist variable font (not the geist npm package — pulled from Google Fonts).
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14161A",
};

type Params = { params: Promise<{ lang: string }> };

/** Both languages are rendered at build time. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// Defaults for every page; each page sets its own title and alternates.
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    icons: { icon: "/logos/logo-mark.png" },
    metadataBase: new URL("https://agrivanna.com"),
    alternates: alternates(lang, "/"),
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      type: "website",
      locale: OG_LOCALE[lang],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={HTML_LANG[lang]} className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before the page's JavaScript so scroll-in text never waits on it */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
      </head>
      <body className="bg-ink-950 font-sans text-bone-50 antialiased">
        <LocaleProvider locale={lang} dictionary={t}>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer locale={lang} t={t} />
          <TrialForm />
          <CookieConsent />
          <ConsentGatedAnalytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
