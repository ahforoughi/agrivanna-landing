"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ServiceTermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
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
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book demo
                </Link>
              </Button>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                  <Link
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book demo
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-16 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto">
            Service terms, privacy summary, and consent options for Agrivanna.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-12 text-gray-700">
            {/* Terms of Service */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Terms of Service
              </h2>
              <p className="mb-2">I agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agrivanna provides a software service for farm management and livestock health/compliance support; it may include AI-generated insights.</li>
                <li>The service is provided &quot;as-is&quot;; results may be incomplete or inaccurate, and you remain responsible for all farm/veterinary/compliance decisions.</li>
                <li>Agrivanna is not a substitute for a licensed veterinarian or professional advice.</li>
                <li>You will use the app lawfully, won&apos;t misuse it (e.g., hacking, scraping, reverse engineering, sharing accounts), and will provide accurate information.</li>
                <li>Your account/content remains yours, but you grant Agrivanna permission to host/process it to operate the service.</li>
                <li>Agrivanna may suspend/terminate access for policy violations, fraud, or security risks.</li>
                <li>Liability is limited to the extent permitted by law (no indirect/consequential damages).</li>
                <li>Terms may be updated; continued use after an update means acceptance.</li>
              </ul>
            </div>

            {/* Privacy & Data Use (summary) */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Privacy &amp; Data Use
              </h2>
              <p className="mb-2">I consent that Agrivanna may collect and use:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Account data:</strong> name, email/phone, organization, role, login credentials (hashed), support messages.</li>
                <li><strong>Farm &amp; livestock data you enter:</strong> herd records, symptoms/health notes, treatments, tasks, compliance logs, attachments/photos.</li>
                <li><strong>Device &amp; app data:</strong> device identifiers, app version, crash logs, performance analytics, approximate location (if enabled), timestamps, IP address.</li>
              </ul>
              <p className="mb-2"><strong>How data is used:</strong> to provide features, generate AI insights, improve accuracy, customer support, security/fraud prevention, billing, and required legal compliance.</p>
              <p className="mb-2"><strong>AI processing:</strong> your inputs may be processed by AI models to generate outputs; data may be retained to improve service quality unless you opt out (if offered).</p>
              <p className="mb-2"><strong>Sharing:</strong> only with vetted vendors (hosting, analytics, AI, customer support, payments) under confidentiality and only as needed; or when required by law; or with your explicit permission.</p>
              <p className="mb-2"><strong>Retention:</strong> kept as long as needed for the service, legal obligations, and backups; deleted/anonymized upon request where legally/technically feasible.</p>
              <p className="mb-2"><strong>Your rights:</strong> request access/correction/deletion, export data, withdraw marketing consent, manage permissions (e.g., location), and contact support for privacy requests.</p>
            </div>

            {/* Decision Support / Veterinary Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Decision Support / Veterinary Disclaimer
              </h2>
              <p>I understand outputs are informational and do not replace a licensed veterinarian.</p>
            </div>

            {/* User Responsibility */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                User Responsibility
              </h2>
              <p>I am responsible for actions taken based on the app and for following local regulations.</p>
            </div>

            {/* Consent to Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Consent to Contact (service communications)
              </h2>
              <p>I agree Agrivanna can contact me for onboarding, support, and critical service notices.</p>
            </div>

            {/* Optional: Pilot & Feedback */}
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                (Optional) Pilot &amp; Feedback
              </h2>
              <p>I agree to be contacted for interviews, pilots, and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
