"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Footer from "@/components/Footer"

export default function PilotWaitlistPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center animate-fade-in">
              <Link href="/">
                <Image
                  src="/LOGO-black.png"
                  alt="Agrivanna Logo"
                  width={222}
                  height={75}
                  className="h-6 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book demo
                </a>
              </Button>
              <button
                className="lg:hidden p-3 -m-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-300 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/services" className="text-black hover:text-gray-600">Services</Link>
                <Link href="/about" className="text-black hover:text-gray-600">About us</Link>
                <Link href="/contact" className="text-black hover:text-gray-600">Contact us</Link>
                <Button className="bg-[#2A5F36] hover:bg-[#637D59] text-white w-full" asChild>
                  <a
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book demo
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-12 lg:py-16 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block text-white/90 text-xs font-semibold uppercase tracking-wider mb-3">
            Early access
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Join the Pilot Waitlist
          </h1>
          <p className="text-sm lg:text-base leading-relaxed text-white/90">
            Be among the first to experience Agrivanna and help shape the future of livestock health tracking.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 sm:py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-visible">
              <div className="p-8 sm:p-10 lg:p-14">
                <Script
                  src="https://js-na3.hsforms.net/forms/embed/342489770.js"
                  strategy="afterInteractive"
                  onError={() => console.error("Failed to load HubSpot forms script")}
                />
                <div
                  className="pilot-waitlist-form hs-form-frame"
                  data-region="na3"
                  data-form-id="fbf5d6e6-a3cf-4be6-8bd7-f4a83d1da0c8"
                  data-portal-id="342489770"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              We respect your privacy. Your information will only be used to contact you about the pilot program.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
