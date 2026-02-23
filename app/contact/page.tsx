"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Mail, MapPin, Linkedin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link href="/about" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/contact" className="text-[#2A5F36] font-semibold relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A5F36]"></span>
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

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-300 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/services" className="text-black hover:text-gray-600">Services</Link>
                <Link href="/about" className="text-black hover:text-gray-600">About us</Link>
                <Link href="/contact" className="text-[#2A5F36] font-semibold">Contact us</Link>
                <Button
                  className="bg-[#2A5F36] hover:bg-[#637D59] text-white w-full"
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
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
            Ready to revolutionize your livestock management? Let&apos;s discuss how Agrivanna can help optimize your farm operations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <Script
          src="https://js-na3.hsforms.net/forms/embed/342489770.js"
          strategy="afterInteractive"
          onError={() => console.error('Failed to load HubSpot forms script')}
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5F36] mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <div 
                className="hs-form-frame" 
                data-region="na3" 
                data-form-id="73493019-0b27-446a-94b6-3a4706038a81" 
                data-portal-id="342489770"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5F36] mb-6">Other Ways to Connect</h2>
              
              {/* Schedule Meeting Card */}
              <Card className="bg-[#2A5F36] text-white mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Calendar className="w-8 h-8" />
                    <h3 className="text-xl font-semibold">Schedule a Demo</h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Book a personalized demo to see how Agrivanna can transform your livestock management.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-6 py-3 w-full"
                    asChild
                  >
                    <a
                      href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Demo
                      <Calendar className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#2A5F36]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#2A5F36]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:info@agrivanna.com" className="text-[#2A5F36] hover:text-[#637D59] transition-colors">
                          info@agrivanna.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#2A5F36]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#2A5F36]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">Calgary, Alberta, Canada</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#2A5F36]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-6 h-6 text-[#2A5F36]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                        <a
                          href="https://www.linkedin.com/company/agrivanna/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2A5F36] hover:text-[#637D59] transition-colors"
                        >
                          LinkedIn Company Page
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Calgary, Alberta
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#2A5F36] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Calgary, Alberta</h3>
                  <p className="text-gray-600">Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
