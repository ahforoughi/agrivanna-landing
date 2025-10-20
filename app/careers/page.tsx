"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, Users, Heart, Target, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const values = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and open communication. Every voice matters in our mission to revolutionize agriculture."
    },
    {
      icon: Heart,
      title: "Mission-Driven Work",
      description: "Join us in making a real difference for farmers and the agricultural industry. Your work will directly impact food production worldwide."
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "As a growing startup, we offer unique opportunities to shape the company's direction and grow your career alongside ours."
    }
  ]


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

              <Link href="/careers" className="text-[#2A5F36] font-semibold relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A5F36]"></span>
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
                        <Link href="/careers" className="text-[#2A5F36] font-semibold">Careers</Link>
                        <Link href="/contact" className="text-black hover:text-gray-600">Contact us</Link>
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
            Join Our Mission
          </h1>
          <p className="text-xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
            Help us revolutionize agriculture through innovative technology. We&apos;re building the future of farming, one innovation at a time.
          </p>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Current Openings</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              We&apos;re always looking for passionate individuals to join our team.
            </p>
          </div>

          <Card className="bg-gray-50 border border-gray-200 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-[#637D59] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A5F36] mb-4">No Open Positions at the Moment</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&apos;re currently focused on building our core technology and don&apos;t have any open positions right now. 
                However, we&apos;re always interested in connecting with talented individuals who share our passion for 
                revolutionizing agriculture through technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Feel free to reach out to us to express your interest and we&apos;ll keep you in mind for future opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Why Work With Us</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Join a mission-driven team that&apos;s building the future of agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#2A5F36] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in Our Mission?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Even though we don&apos;t have open positions right now, we&apos;d love to connect with passionate individuals 
            who share our vision for revolutionizing agriculture through technology.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A5F36] text-lg px-8 py-3 bg-transparent" asChild>
              <Link
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
                <li><Link href="/about#team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
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
