import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubSpotFormPopup from "@/components/HubSpotFormPopup";
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
  title: "Agrivanna — Grazing intelligence for working ranches",
  description:
    "Agrivanna is the operating system for grazing-based agriculture. Virtual fencing collars, offline drone base stations, and the Pasture Readiness Score.",
  icons: { icon: "/logos/logo-mark.png" },
  metadataBase: new URL("https://agrivanna.com"),
  openGraph: {
    title: "Agrivanna — Run the ranch, not the fence",
    description: "Virtual fencing, AI grazing intelligence, and offline-first ranch operations.",
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
        <HubSpotFormPopup />
        <Analytics />
      </body>
    </html>
  );
}
