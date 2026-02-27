"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/products" className="text-[#2A5F36] font-semibold relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A5F36]"></span>
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
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white rounded-lg px-6 py-2 transition-all duration-300 "
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

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-3 -m-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-300 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/products" className="text-[#2A5F36] font-semibold">Products</Link>
                <Link href="/about" className="text-black hover:text-gray-600">About us</Link>
                <Link href="/contact" className="text-black hover:text-gray-600">Contact us</Link>
                <Button
                  className="bg-[#2A5F36] hover:bg-[#637D59] text-white w-full"
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
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-12 sm:py-16 lg:py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Our Products
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed opacity-90">
              Real ranching tools built by people who understand farming. From satellite-powered grazing insights to hardware that works in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">See It In Action</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Watch Hayden (Our COO) walk through our Pasture Readiness Scoring system and grazing management platform.
            </p>
          </div>

            <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3jRNbjB9XeI" 
                title="Pasture Readiness Score MVP Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">What We&apos;re Building</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Two products working together: software that tells you where to graze, hardware that moves your herd there automatically
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product 1: Pasture Readiness Score */}
            <Card id="pasture-readiness-score" className="bg-white border-0 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col scroll-mt-20">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0ea]">
                <Image
                  src="/pasture-readiness-score.png"
                  alt="Aerial view of pasture with digital grazing boundaries showing red, yellow, and green zones"
                  fill
                  className="object-contain object-center scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2A5F36]">Pasture Readiness Score</h3>
                  <p className="text-lg text-[#637D59] font-medium">Satellite-Powered Grazing Intelligence</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Draw your paddocks on a map. Our system analyzes satellite imagery to tell you which areas are ready to graze and which need rest. Red means don&apos;t graze. Green means go.
                </p>

                <h4 className="text-lg font-semibold text-[#2A5F36] mb-4">Core Features</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2A5F36] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Paddock Analysis:</strong> Assess forage availability in real time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2A5F36] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Herd Management:</strong> Add herds in bulk (e.g., 150 yearlings, 900 lbs each)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2A5F36] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Grazing Plans:</strong> Calculate forage needs and match herds to paddocks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2A5F36] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Smart Onboarding:</strong> Quick setup predicts your farm infrastructure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2: Virtual Fencing Collar */}
            <Card id="virtual-fencing-collar" className="bg-white border-0 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col scroll-mt-20">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0ea]">
                <Image
                  src="/virtual-fencing-collar.png"
                  alt="Agrivanna GPS-enabled virtual fencing collar with solar panel"
                  fill
                  className="object-contain object-center scale-108"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2A5F36]">Virtual Fencing Collar</h3>
                  <p className="text-lg text-[#637D59] font-medium">Automated Herd Movement</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  GPS-enabled smart collars that use audio cues and gentle guidance to move cattle. Automate rotational grazing with virtually no labor. No more daily fence moves or long drives to check remote pastures.
                </p>

                <h4 className="text-lg font-semibold text-[#2A5F36] mb-4">How It Works</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#637D59] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Automated Movement:</strong> Move cattle paddock to paddock without physical fences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#637D59] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Health Alerts:</strong> Get notified when animals show concerning behavior</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#637D59] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Preventative Care:</strong> Flag animals not keeping up with the herd, or detect stolen/lost cattle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#637D59] flex-shrink-0" />
                    <span className="text-gray-700"><strong>Data Tracking:</strong> Vaccinations, birth weights, and breeding records</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Combined Value Prop - Interactive */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#2A5F36] mb-2">Choose Your Path</h3>
              <p className="text-gray-600">Click to explore each option</p>
            </div>
            
            {/* Option Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
              <button 
                onClick={() => {
                  const section = document.getElementById('software-section');
                  section?.classList.remove('hidden');
                  section?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  document.getElementById('hardware-section')?.classList.add('hidden');
                  document.getElementById('combined-section')?.classList.add('hidden');
                }}
                className="group relative bg-white border-4 border-[#2A5F36] rounded-2xl px-8 py-6 w-full md:w-64 hover:bg-[#2A5F36] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <h4 className="text-xl font-bold text-[#2A5F36] group-hover:text-white transition-colors">Software</h4>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors mt-1">Pasture Readiness Score</p>
                </div>
                {/* Arrow indicator */}
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-[#2A5F36] text-3xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </button>

              <button 
                onClick={() => {
                  const section = document.getElementById('hardware-section');
                  section?.classList.remove('hidden');
                  section?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  document.getElementById('software-section')?.classList.add('hidden');
                  document.getElementById('combined-section')?.classList.add('hidden');
                }}
                className="group relative bg-white border-4 border-[#2d8659] rounded-2xl px-8 py-6 w-full md:w-64 hover:bg-[#2d8659] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📡</div>
                  <h4 className="text-xl font-bold text-[#2d8659] group-hover:text-white transition-colors">Hardware</h4>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors mt-1">Virtual Fencing Collar</p>
                </div>
                {/* Arrow indicator */}
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-[#2d8659] text-3xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </button>

              <button 
                onClick={() => {
                  const section = document.getElementById('combined-section');
                  section?.classList.remove('hidden');
                  section?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  document.getElementById('software-section')?.classList.add('hidden');
                  document.getElementById('hardware-section')?.classList.add('hidden');
                }}
                className="group relative bg-white border-4 border-[#3d5a73] rounded-2xl px-8 py-6 w-full md:w-64 hover:bg-[#3d5a73] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="text-xl font-bold text-[#3d5a73] group-hover:text-white transition-colors">Combined Power</h4>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors mt-1">Software + Hardware</p>
                </div>
              </button>
            </div>

            {/* Content Sections */}
            
            {/* Software Section */}
            <div id="software-section" className="hidden">
              <div className="bg-gradient-to-br from-[#2A5F36]/10 to-[#2A5F36]/20 rounded-2xl p-8 border-2 border-[#2A5F36]/30 shadow-xl animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-[#2A5F36]">Pasture Readiness Score</h3>
                  </div>
                  <button 
                    onClick={() => {
                      document.getElementById('software-section')?.classList.add('hidden');
                      document.getElementById('hardware-section')?.classList.remove('hidden');
                    }}
                    className="bg-[#2d8659] text-white px-6 py-3 rounded-lg hover:bg-[#2d8659]/90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Next: Hardware
                    <span className="text-xl">→</span>
                  </button>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Satellites tell you where to graze. Red means rest. Green means go. Simple.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#2A5F36] mb-2">See Your Paddocks Live</h5>
                    <p className="text-gray-700 text-sm">Real-time forage readiness from space</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#2A5F36] mb-2">Plan in Minutes</h5>
                    <p className="text-gray-700 text-sm">Match herds to paddocks automatically</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Section */}
            <div id="hardware-section" className="hidden">
              <div className="bg-gradient-to-br from-[#2d8659]/10 to-[#2d8659]/20 rounded-2xl p-8 border-2 border-[#2d8659]/30 shadow-xl animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-[#2d8659]">Virtual Fencing Collar</h3>
                  </div>
                  <button 
                    onClick={() => {
                      document.getElementById('hardware-section')?.classList.add('hidden');
                      document.getElementById('combined-section')?.classList.remove('hidden');
                    }}
                    className="bg-[#3d5a73] text-white px-6 py-3 rounded-lg hover:bg-[#3d5a73]/90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                  >
                    See Combined Power
                    <span className="text-xl">→</span>
                  </button>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  No fences. No herding. Just audio cues that move cattle automatically.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#2d8659] mb-2">Zero Labor Movement</h5>
                    <p className="text-gray-700 text-sm">Audio cues guide the herd automatically</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#2d8659] mb-2">Stay Informed</h5>
                    <p className="text-gray-700 text-sm">Get alerts when something&apos;s wrong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Section */}
            <div id="combined-section">
              <div className="bg-gradient-to-br from-[#3d5a73]/10 to-[#3d5a73]/20 rounded-2xl p-8 border-2 border-[#3d5a73]/30 shadow-xl animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-bold text-[#3d5a73]">Software Meets Hardware</h3>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Software picks the paddock. Hardware moves the herd. You do nothing.
                </p>
                <div className="bg-white/80 p-6 rounded-xl border-l-4 border-[#3d5a73]">
                  <h5 className="font-bold text-[#3d5a73] text-xl mb-3">The Complete System</h5>
                  <p className="text-gray-700 text-lg">
                    Your system knows Paddock A is ready. Your collars guide the herd there automatically. Rotational grazing becomes hands-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">What You Can Do</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              See how ranchers use Agrivanna&apos;s platform and smart collar technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-t-4 border-t-[#2A5F36] border-x border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#2A5F36]/30 mb-2 h-[3.5rem] flex items-start">01</div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-start">Assess Paddock Readiness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Draw your paddocks on a map, and satellite analysis tells you which areas are ready to graze and which need rest.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-t-4 border-t-[#2d8659] border-x border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#2d8659]/30 mb-2 h-[3.5rem] flex items-start">02</div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-start">Generate Grazing Plans</h3>
                <p className="text-gray-600 leading-relaxed">
                  Add your herd details, and we calculate forage needs. Match herds to paddocks and get an optimal rotation schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-t-4 border-t-[#3d5a73] border-x border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#3d5a73]/30 mb-2 h-[3.5rem] flex items-start">03</div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-start">Automate with Virtual Fencing</h3>
                <p className="text-gray-600 leading-relaxed">
                  GPS collars move cattle paddock to paddock automatically. Get health alerts and eliminate daily fence checks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Why Ranchers Choose Agrivanna</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              We&apos;re not selling magic AI. We&apos;re building practical tools that solve actual ranching problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1a1f29]/25 to-[#1a1f29]/40 hover:from-[#1a1f29]/30 hover:to-[#1a1f29]/45 transition-all border-2 border-[#1a1f29]/40">
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-center justify-center">Data-Driven Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                Satellite imagery tells you which paddocks are ready to graze and which need rest. Make informed rotational grazing decisions backed by real forage data.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2d8659]/30 to-[#2d8659]/45 hover:from-[#2d8659]/35 hover:to-[#2d8659]/50 transition-all border-2 border-[#2d8659]/50">
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-center justify-center">Automate Daily Work</h3>
              <p className="text-gray-600 leading-relaxed">
                Virtual fencing collars move cattle paddock to paddock automatically. No daily fence moves, no driving miles to check on remote land.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#3d5a73]/30 to-[#3d5a73]/45 hover:from-[#3d5a73]/35 hover:to-[#3d5a73]/50 transition-all border-2 border-[#3d5a73]/50">
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-center justify-center">Designed for Ranchers</h3>
              <p className="text-gray-600 leading-relaxed">
                No per-animal data entry. Add herds in bulk. Track what matters: vaccinations, birth weights, genetics for smarter culling decisions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#95a5b0]/35 to-[#95a5b0]/50 hover:from-[#95a5b0]/40 hover:to-[#95a5b0]/55 transition-all border-2 border-[#95a5b0]/60">
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4 min-h-[3.5rem] flex items-center justify-center">Affordable Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We know ranchers already have enough expenses. Our pricing is built to make sense for your operation without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Try It?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book a demo to see the Pasture Readiness Score in action. Ask us about pricing, early collar access, or anything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
