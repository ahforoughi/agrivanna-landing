"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CircleDot, ArrowRight, Menu, X, Smartphone, Radio, TrendingUp, Clock, DollarSign, Activity, Check, Sprout, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/Footer"
import { useInView } from "@/hooks/useInView"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { ref: howItWorksRef, isInView: howItWorksInView } = useInView()


  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <SpeedInsights />
      {/* Header - crystal bar centered with rounded corners */}
      <header className="absolute left-0 right-0 z-50 pt-4 top-[var(--announcement-height)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6 px-6 max-w-4xl mx-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.08)]">
            {/* Logo */}
            <div className="flex items-center animate-fade-in">
              <Link href="/">
                <Image
                  src="/LOGO-black.png"
                  alt="Agrivanna Logo"
                  width={222}
                  height={75}
                  className="h-6 w-auto hover:scale-105 transition-transform duration-300 brightness-0 invert"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/about" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/contact" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="!bg-primary-green hover:!bg-primary-green/90 !text-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                style={{ backgroundColor: '#288A5C' }}
                asChild
              >
                <a
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border border-white/20 py-4 bg-white/10 backdrop-blur-xl rounded-xl mt-2 shadow-[0_8px_32px_rgba(255,255,255,0.12)]">
              <nav className="flex flex-col space-y-4">
                <Link href="/services" className="text-white hover:text-neutral-gray">Services</Link>
                <Link href="/about" className="text-white hover:text-neutral-gray">About us</Link>
                <Link href="/contact" className="text-white hover:text-neutral-gray">Contact us</Link>
                <Button
                  className="!bg-primary-green hover:!bg-primary-green/90 !text-white w-full flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#288A5C', color: '#ffffff' }}
                  asChild
                >
                  <a
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error("Video failed to load:", e);
            // Fallback: hide video on error
            const video = e.currentTarget;
            if (video) {
              video.style.display = "none";
            }
          }}
        >
          <source src="/cow-grazing-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-primary-dark opacity-60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>Smarter livestock</span>
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>tracking, minimal</span>
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>effort.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Virtual grazing management, AI-enhanced smart weighing, health monitoring, and livestock lifecycle management in one platform.
            </p>
          </div>
          
          {/* Partners Section */}
          <div className="relative z-10 mt-16">
            <div className="text-center mb-4">
              <p className="text-white text-sm font-medium">Trusted Partners</p>
            </div>
            <div className="flex justify-center items-center space-x-12">
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
        </div>
      </section>


      {/* Features Section - 3 equal blocks */}
      <section id="product" className="py-24 px-4" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium text-left text-[#2A5F36] mb-4">
              The leading digital platform for managing pasture-based operations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Block 1: Remote fencing and herd moves */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0ea]">
                <Image
                  src="/cow-with-collar.png"
                  alt="Cow with Agrivanna smart collar in pasture"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2A5F36] border-2 border-[#637D59] flex items-center justify-center shrink-0">
                    <Radio className="w-5 h-5 text-[#C5E1C8]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A5F36] tracking-tight leading-tight">
                      Remote fencing and herd moves
                    </h3>
                    <p className="text-[#288A5C] font-medium text-sm mt-0.5 italic">
                      At the press of a button.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Eliminate the need for physical fencing infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Adjust grazing areas and move herds from your device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Unlocks previously un-grazable land</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 2: Grazing and Automated Pasture Planning */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0ea]">
                <Image
                  src="/grazing-pasture-planning.png"
                  alt="Aerial view of pasture with digital grazing boundaries and rotational planning grid"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2A5F36] border-2 border-[#637D59] flex items-center justify-center shrink-0">
                    <Sprout className="w-5 h-5 text-[#C5E1C8]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A5F36] tracking-tight leading-tight">
                    Grazing and Automated Pasture Planning
                  </h3>
                </div>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">We tell when and where to graze your cattle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Unlock rotational grazing (less feed costs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Track pasture growth and condition in near real time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3: Reproduction and Animal Wellbeing Insights */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0ea]">
                <Image
                  src="/reproduction-animal-wellbeing.png"
                  alt="Veterinarian and farmer with cattle, tablet and drone for animal health monitoring"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2A5F36] border-2 border-[#637D59] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-[#C5E1C8]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A5F36] tracking-tight leading-tight">
                    Reproduction and animal wellbeing insights
                  </h3>
                </div>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Cull smarter with complete animal profiles — ID, health history, birth weight, genetics, and pregnancy data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Monitor animal location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A5F36] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm leading-relaxed">Health/calving alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-20 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium mb-4">Real Results, Real Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how Agrivanna is transforming farms across Alberta and beyond
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <div className="text-white/80 text-lg">Reduction in Labor Costs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">3hrs</div>
              <div className="text-white/80 text-lg">Saved Per Day on Average</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">20%</div>
              <div className="text-white/80 text-lg">Increase in Feed Efficiency</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80 text-lg">Early Health Detection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section – tech-forward */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        className={`relative py-24 px-4 overflow-hidden ${howItWorksInView ? "how-it-works-animate" : ""}`}
        style={{
          background: "linear-gradient(180deg, #0f2d1f 0%, #1a3d2a 50%, #152a1f 100%)",
          backgroundImage: "linear-gradient(180deg, #0f2d1f 0%, #1a3d2a 50%, #152a1f 100%), radial-gradient(ellipse 80% 50% at 50% 0%, rgba(42, 95, 54, 0.15) 0%, transparent 50%)",
        }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="how-it-works-title text-4xl lg:text-5xl font-medium text-white mb-4">How It Works</h2>
            <p className="how-it-works-subtitle text-xl text-white/80 max-w-3xl mx-auto">
              Hardware, connectivity, and control—one integrated system
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connector line (desktop) – SVG with pathLength for line-draw */}
            <div className="how-it-works-connector absolute top-[7.5rem] left-0 right-0 h-0 hidden md:block" aria-hidden>
              <svg className="w-full h-2 overflow-visible" viewBox="0 0 400 8" fill="none" preserveAspectRatio="none">
                <path
                  className="how-it-works-line stroke-[#2A5F36] stroke-[2]"
                  d="M 20 4 L 190 4 L 210 4 L 380 4"
                  pathLength={1}
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {/* Card 1 – The Collar */}
              <div className="how-it-works-card how-it-works-card-1 group relative text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2A5F36]/10 hover:ring-2 hover:ring-[#2A5F36]/50 focus-within:ring-2 focus-within:ring-[#2A5F36]/50">
                <span className="font-mono text-sm text-[#2A5F36] tracking-wider">01</span>
                <div className="mt-4 mb-6 relative flex justify-center">
                  <div className="relative w-16 h-16 bg-[#2A5F36] rounded-lg flex items-center justify-center">
                    <CircleDot className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">The Collar</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Lightweight, solar-powered collars guide your livestock with gentle audio cues and vibration. Built to last in harsh farming conditions.
                </p>
              </div>

              {/* Card 2 – The Tower (signal rings) */}
              <div className="how-it-works-card how-it-works-card-2 group relative text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2A5F36]/10 hover:ring-2 hover:ring-[#2A5F36]/50 focus-within:ring-2 focus-within:ring-[#2A5F36]/50">
                <span className="font-mono text-sm text-[#2A5F36] tracking-wider">02</span>
                <div className="mt-4 mb-6 relative flex justify-center">
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#637D59]/60 animate-signal-pulse" aria-hidden />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#637D59]/50 animate-signal-pulse-delay" aria-hidden />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#637D59]/40 animate-signal-pulse-delay-2" aria-hidden />
                  </div>
                  <div className="relative w-16 h-16 bg-[#637D59] rounded-lg flex items-center justify-center z-10">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">The Tower</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Connects collars and app with no cell coverage needed. Solar-powered and easy to install, designed for remote Alberta farms.
                </p>
              </div>

              {/* Card 3 – The App (soft glow) */}
              <div className="how-it-works-card how-it-works-card-3 group relative text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2A5F36]/10 hover:ring-2 hover:ring-[#2A5F36]/50 focus-within:ring-2 focus-within:ring-[#2A5F36]/50">
                <span className="font-mono text-sm text-[#2A5F36] tracking-wider">03</span>
                <div className="mt-4 mb-6 relative flex justify-center">
                  <div className="relative w-16 h-16 bg-[#4A90E2] rounded-lg flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">The App</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Remotely manage and shift livestock, optimize grazing and feed management with virtual fencing. Access your farm anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Real Farmers, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by beef farmers from family operations to large-scale enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h4 className="font-bold text-[#2A5F36]">John & Sarah Miller</h4>
                <p className="text-sm text-gray-600">Alberta • 450 Head</p>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;We didn&apos;t think it would work with our operation, but Agrivanna has transformed how we manage our herd. We&apos;re saving hours every day and our feed costs are down significantly.&quot;
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h4 className="font-bold text-[#2A5F36]">Mike Thompson</h4>
                <p className="text-sm text-gray-600">Saskatchewan • 580 Cows</p>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;I would say we are saving 3 hours of labor a day. The virtual fencing alone has paid for itself, and the health monitoring caught issues we would have missed.&quot;
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h4 className="font-bold text-[#2A5F36]">Lisa & David Chen</h4>
                <p className="text-sm text-gray-600">Alberta • 320 Head</p>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;Agrivanna doesn&apos;t replace being a farmer, it helps you be a better farmer. It&apos;s another set of hands so I can focus on what matters most.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-6">Today&apos;s challenges are tomorrow&apos;s possibilities.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our purpose at Agrivanna is to provide farmer-focused solutions to sustainably feed our world. Our ambition is to accelerate innovation and efficiency to drive positive outcomes for farmers and the planet.
              </p>
              <Button
                size="lg"
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white text-lg px-8 py-3"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/sustainable-agriculture-family.png"
                alt="Family walking with cattle in a pastoral farm landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-6 text-white">
                <p className="text-lg sm:text-xl font-semibold drop-shadow-lg">
                  Sustainable agriculture and building a better future for farming and farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works
      <section id="how-it-works" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-dm-sans text-4xl font-bold text-white mb-4">How Agrivanna Works</h2>
            <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, effective livestock health management in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Monitor</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Use your smartphone to capture symptoms and behavioral changes in your livestock.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Analyze</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Our AI analyzes the data and provides instant health assessments and treatment suggestions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Connect</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Connect with veterinarians when needed and maintain compliance records automatically.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary-green" style={{ backgroundColor: '#288A5C' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ 
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            Together, we&apos;re helping change the world for good.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ 
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            Not everyone can claim to feed the world, but it is part of our every day. Behind everything we do for our farmers, there is one Agrivanna team making it happen. We are proud to put our curiosity to work, building a better and more sustainable world.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="!bg-white !text-primary-green hover:!bg-background-light text-lg px-8 py-3 flex items-center gap-2" style={{ backgroundColor: '#ffffff', color: '#288A5C' }} asChild>
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
