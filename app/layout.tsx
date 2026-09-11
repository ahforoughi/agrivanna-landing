import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import TrialForm from "@/components/TrialForm";
import ConsentGatedAnalytics from "@/components/ConsentGatedAnalytics";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Agrivanna — Ranch records you can speak instead of type",
  description:
    "Speak your herd and pasture records with gloves on. Works with no signal, syncs when you're back in range, and builds rotational grazing plans from satellite imagery. $50/month.",
  icons: { icon: "/logos/logo-mark.png" },
  metadataBase: new URL("https://agrivanna.com"),
  openGraph: {
    title: "Agrivanna — Run the herd, not the software",
    description:
      "Voice-first ranch records that work offline, plus pasture mapping and rotational grazing plans.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-ink-950 font-sans text-bone-50 antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <TrialForm />
        <CookieConsent />
        <ConsentGatedAnalytics />
      </body>
    </html>
  );
}
