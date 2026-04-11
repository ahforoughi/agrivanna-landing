"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function CookiePolicyPage() {
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
              <Link href="/products" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
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
                <Link href="/products" className="text-black hover:text-gray-600">Products</Link>
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
            Cookie Policy
          </h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto">
            How Agrivanna uses cookies and similar technologies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-12 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                What are cookies?
              </h2>
              <p className="mb-2">
                Cookies are small text files stored on your device when you visit a website or use an app. They help the site or app remember your preferences, keep you signed in, and understand how the service is used so it can be improved.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                How we use cookies
              </h2>
              <p className="mb-2">
                Agrivanna uses cookies and similar technologies (e.g., local storage, pixels) to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep you logged in and secure your session</li>
                <li>Remember your settings and preferences</li>
                <li>Understand how our website and app are used (e.g., analytics)</li>
                <li>Improve performance, security, and user experience</li>
                <li>Support features such as forms and support tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Types of cookies we use
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Strictly necessary:</strong> Required for the service to work (e.g., authentication, security). These generally cannot be turned off.</li>
                <li><strong>Functional:</strong> Remember choices you make (e.g., language, region) to give you a better experience.</li>
                <li><strong>Analytics:</strong> Help us see how visitors use our site and app so we can improve them. Data is typically aggregated and anonymized.</li>
                <li><strong>Marketing (if used):</strong> Used to deliver relevant ads or measure ad effectiveness, where we have your consent or where permitted by law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Managing cookies
              </h2>
              <p className="mb-2">
                You can control many cookies through your browser or device settings. You can block or delete cookies, but some features may not work correctly if you do. For app-specific controls, check your device settings or the in-app options we provide.
              </p>
              <p className="mb-2">
                Where we use optional cookies (e.g., analytics or marketing), we will seek your consent where required by law and allow you to change your preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Updates
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or the law. We will post the updated version on this page and indicate when it was last revised. Continued use of our services after an update means you accept the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2A5F36] mb-4">
                Contact
              </h2>
              <p>
                For questions about our use of cookies or this policy, please contact us at{" "}
                <a href="mailto:info@agrivanna.com" className="text-[#2A5F36] hover:underline">info@agrivanna.com</a> or through our{" "}
                <Link href="/contact" className="text-[#2A5F36] hover:underline">Contact</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
