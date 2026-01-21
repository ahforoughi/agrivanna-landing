"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, Mail, MapPin, Linkedin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

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

              <Link href="/news" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/investment" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Investment
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/careers" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Careers
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
                <Link href="/news" className="text-black hover:text-gray-600">News</Link>
                <Link href="/investment" className="text-black hover:text-gray-600">Investment</Link>
                <Link href="/careers" className="text-black hover:text-gray-600">Careers</Link>
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
      <section className="relative bg-[#F2F2F2] py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#2A5F36] leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
            Ready to revolutionize your livestock management? Let&apos;s discuss how Agrivanna can help optimize your farm operations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Script
          src="https://js-na3.hsforms.net/forms/embed/342489770.js"
          strategy="afterInteractive"
          onLoad={() => {
            setIsScriptLoaded(true)
            // Give HubSpot a moment to process the form-frame divs
            setTimeout(() => {
              if (typeof window !== 'undefined' && window.hbspt?.forms?.loaded) {
                window.hbspt.forms.loaded()
              }
            }, 100)
          }}
          onError={() => console.error('Failed to load HubSpot forms script')}
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2A5F36] mb-6">Send us a Message</h2>
              <div 
                className="hs-form-frame" 
                data-region="na3" 
                data-form-id="73493019-0b27-446a-94b6-3a4706038a81" 
                data-portal-id="342489770"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#2A5F36] mb-6">Other Ways to Connect</h2>
              
              {/* Schedule Meeting Card */}
              <Card className="bg-[#2A5F36] text-white mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Calendar className="w-8 h-8" />
                    <h3 className="text-xl font-semibold">Schedule a Demo</h3>
                  </div>
                  <p className="text-[#F2F2F2] mb-4">
                    Book a personalized demo to see how Agrivanna can transform your livestock management.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-6 py-3"
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
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#2A5F36] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@agrivanna.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#2A5F36] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Calgary, Alberta, Canada</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <Linkedin className="w-6 h-6 text-[#2A5F36] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Follow Us</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Image
                  src="/LOGO-black.png"
                  alt="Agrivanna Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Agrivanna is a global leader in design, manufacture and distribution of agricultural technology and precision solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/agrivanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services#virtual-grazing-management" className="text-gray-300 hover:text-white transition-colors">Virtual Grazing Management</Link></li>
                <li><Link href="/services#ai-enhanced-smart-weighing" className="text-gray-300 hover:text-white transition-colors">AI-Enhanced Smart Weighing</Link></li>
                <li><Link href="/services#health--behavior-monitoring" className="text-gray-300 hover:text-white transition-colors">Health & Behavior Monitoring</Link></li>
                <li><Link href="/services#livestock-lifecycle-management" className="text-gray-300 hover:text-white transition-colors">Livestock Lifecycle Management</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/investment" className="text-gray-300 hover:text-white transition-colors">Investment</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/agrivanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Agrivanna Corporation. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Center</a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
                <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility Statement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
