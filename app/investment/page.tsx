"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, Calendar, Users, Target, TrendingUp, DollarSign, Globe, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const investmentHighlights = [
    {
      icon: Target,
      title: "Massive Market Opportunity",
      description: "The global livestock management market is valued at $4.2B and growing at 12.5% CAGR. Alberta's cattle industry alone represents $4.5B annually."
    },
    {
      icon: TrendingUp,
      title: "Proven Technology Stack",
      description: "Our platform combines GPS virtual fencing, AI weight tracking, health monitoring, and farm management - technologies proven in other industries, now optimized for agriculture."
    },
    {
      icon: Globe,
      title: "Scalable Business Model",
      description: "Modular hardware and SaaS pricing model allows for rapid scaling. Each collar generates recurring revenue while reducing customer acquisition costs over time."
    },
    {
      icon: Users,
      title: "Strong Founding Team",
      description: "Experienced team with deep agricultural knowledge, technical expertise, and proven track record in building and scaling technology companies."
    }
  ]

  const marketMetrics = [
    { metric: "$26B", label: "Total Addressable Market (TAM)" },
    { metric: "$3.9B", label: "Serviceable Available Market (SAM)" },
    { metric: "21.6%", label: "AI in AgTech CAGR" },
    { metric: "60,000+", label: "Farms in Canada" }
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

              <Link href="/investment" className="text-[#2A5F36] font-semibold relative group">
                Investment
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A5F36]"></span>
              </Link>

              <Link href="/careers" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Careers
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
                <Link href="/investment" className="text-[#2A5F36] font-semibold">Investment</Link>
                        <Link href="/careers" className="text-black hover:text-gray-600">Careers</Link>
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
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Investment Opportunity
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
            Join Agrivanna in revolutionizing agriculture through innovative technology. 
            We&apos;re seeking strategic investors to accelerate our mission of transforming livestock management.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a
              href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Investment Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Trusted Partners</p>
          </div>
          <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
            <a 
              href="https://www.plugandplaytechcenter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/pnp.svg"
                alt="Plug and Play Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </a>
            <a 
              href="https://thriveagrifood.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/svg.png"
                alt="THRIVE by SVG Ventures Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Market Opportunity</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              The agricultural technology market presents a massive $26B opportunity with AI in AgTech growing at 21.6% CAGR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {marketMetrics.map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#2A5F36]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#2A5F36]" />
                  </div>
                  <div className="text-4xl font-bold text-[#2A5F36] mb-2">{item.metric}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2A5F36] mb-6">Why Invest in Agrivanna?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2A5F36] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <strong>First-Mover Advantage:</strong> Virtual fencing technology is still in early adoption phase with significant room for growth
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2A5F36] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <strong>Recurring Revenue Model:</strong> SaaS subscription model with hardware sales creates predictable, scalable revenue streams
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2A5F36] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <strong>Proven Technology:</strong> GPS, AI, and IoT technologies are mature and proven in other industries
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2A5F36] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <strong>Strong Unit Economics:</strong> High customer lifetime value with low marginal costs for software delivery
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <DollarSign className="w-24 h-24 text-[#2A5F36] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Focus</h3>
                  <p className="text-gray-600">Technology development, market expansion, and team scaling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Investment Highlights</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Key factors that make Agrivanna an attractive investment opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#2A5F36] rounded-full flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2A5F36]">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Our Technology Platform</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              A comprehensive suite of integrated solutions that address the complete livestock management lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">Virtual Grazing Management</h3>
                  <p className="text-gray-600">GPS-powered smart collars eliminate the need for physical fences, reducing costs and increasing flexibility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#637D59] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">AI-Enhanced Smart Weighing</h3>
                  <p className="text-gray-600">Integrated weighing sensors with AI analytics optimize feeding strategies and detect health issues early.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">Health & Behavior Monitoring</h3>
                  <p className="text-gray-600">Continuous monitoring detects abnormal patterns, enabling proactive health management and reducing losses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">Livestock Lifecycle Management</h3>
                  <p className="text-gray-600">Complete animal profiles with breeding records, health history, and performance tracking.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Integrated Platform</h3>
                  <p className="text-gray-600">All solutions work together seamlessly for maximum impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Invest in the Future of Agriculture?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join us in transforming how farmers manage their livestock. Schedule a call to learn more about our investment opportunity 
            and how you can be part of the agricultural technology revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Investment Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A5F36] text-lg px-8 py-3" asChild>
              <Link href="/services">
                Explore Our Solutions
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}