"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Brain, Shield, Users, ArrowRight, Menu, X, CheckCircle, Star, Globe, DollarSign, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const coreServices = [
    {
      icon: Stethoscope,
      title: "Virtual Grazing Management",
      subtitle: "GPS-Powered Smart Collars",
      shortDescription: "Control grazing zones without building physical fences. Define paddocks in real-time using your phone or web dashboard.",
      fullDescription: "A GPS-powered collar system that lets you control grazing zones without building physical fences. Animals wear smart collars that use GPS to detect boundary proximity and emit audio warnings with optional gentle vibrations to guide animals away from virtual boundaries. Instantly move grazing zones to rotate pastures, protect regrowth, or restrict high-nutrient zones to recovering animals.",
      features: [
        "GPS-based virtual fencing",
        "Real-time boundary adjustments",
        "Audio and vibration guidance",
        "Dynamic pasture rotation",
        "Offline operation capability",
        "No physical barriers needed"
      ],
      color: "#4A90E2",
      bgColor: "bg-blue-50",
      benefits: [
        "Eliminate fencing costs",
        "Flexible grazing management",
        "Instant pasture rotation",
        "Works in low-connectivity areas"
      ]
    },
    {
      icon: Brain,
      title: "AI-Enhanced Smart Weighing",
      subtitle: "Feeding Optimization",
      shortDescription: "Turn every step your cattle take into data for smarter, more profitable decisions.",
      fullDescription: "Integrated smart weighing captures weight data using sensors during natural animal movements. Track trends in weight gain, spot plateaus or signs of illness early, and automatically flag animals that fall behind herd averages. AI models suggest optimal rations based on weight, breed, age, and performance goals with Feed Conversion Ratio (FCR) analytics for cost-effective feeding strategies.",
      features: [
        "Smart weighing integration",
        "Growth & health monitoring",
        "AI-driven feed planning",
        "FCR analytics",
        "Early illness detection",
        "Economic optimization"
      ],
      color: "#637D59",
      bgColor: "bg-green-50",
      benefits: [
        "Maximize feed efficiency",
        "Early health detection",
        "Optimized growth rates",
        "Cost-effective feeding strategies"
      ]
    },
    {
      icon: Shield,
      title: "Health & Behavior Monitoring",
      subtitle: "Intelligent Safety System",
      shortDescription: "Prevent loss, stress, or poor performance with intelligent monitoring built into every collar.",
      fullDescription: "Detect abnormal resting patterns, overheating, or escape attempts using motion and location data. Get individualized alerts when animals show signs of distress, underperform in weight gain, or leave grazing boundaries. Automatically guide sick or underweight animals to designated rest and recover areas with minimal human intervention.",
      features: [
        "Behavioral insights",
        "Individualized alerts",
        "Protected zone routing",
        "Motion and location tracking",
        "Early distress detection",
        "Automated animal guidance"
      ],
      color: "#2A5F36",
      bgColor: "bg-emerald-50",
      benefits: [
        "Prevent animal loss",
        "Reduce stress indicators",
        "Improve performance",
        "Minimize human intervention"
      ]
    },
    {
      icon: Users,
      title: "Livestock Lifecycle Management",
      subtitle: "Complete Animal Profiles",
      shortDescription: "Manage every animal like a data-rich profile, from birth to sale.",
      fullDescription: "Track ID, breed, age, weight history, health treatments, parentage, and sales records all in one place. Log heat cycles, insemination events, and pregnancy checks with calving predictions and reminders. Manage task assignments, feed inventory tracking, and profitability dashboards for complete farm operations oversight.",
      features: [
        "Complete animal profiles",
        "Reproduction management",
        "Task & worker assignment",
        "Feed & inventory tracking",
        "Profitability dashboard",
        "Breeding tools & reminders"
      ],
      color: "#4A90E2",
      bgColor: "bg-blue-50",
      benefits: [
        "Complete lifecycle tracking",
        "Improved breeding outcomes",
        "Optimized labor efficiency",
        "Better profitability insights"
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: DollarSign,
      title: "Farm Operations & Financial Tools",
      subtitle: "Built for Lean Teams",
      shortDescription: "Built for lean teams and busy farmers. Manage tasks, inventory, and profitability all in one place.",
      fullDescription: "Assign treatment, feeding, and grazing tasks to team members with completion tracking and labor efficiency monitoring. Monitor supply levels and feeding schedules with alerts before running out of supplements or medications. Log expenses and revenue per animal with comprehensive reports to identify what's driving growth or impacting profitability.",
      features: [
        "Task & worker assignment",
        "Feed & inventory tracking",
        "Profitability dashboard",
        "Labor efficiency monitoring",
        "Supply level alerts",
        "Revenue per animal tracking"
      ],
      color: "#637D59",
      bgColor: "bg-green-50",
      benefits: [
        "Streamlined operations",
        "Reduced waste and costs",
        "Better profitability insights",
        "Improved team efficiency"
      ]
    },
    {
      icon: Settings,
      title: "Offline Capability & Modular Design",
      subtitle: "Alberta-Ready Technology",
      shortDescription: "Mobile-first, offline-ready system designed specifically for Alberta's ranchers.",
      fullDescription: "Use in the field with no signal - offline syncing ensures no data is lost and collars operate independently once programmed. Modular hardware and pricing model means no massive upfront costs, built to fit real-world needs of Alberta's ranchers. Compatible with LoRa, LTE, and future Bluetooth mesh with optional camera or scale modules that can be added later.",
      features: [
        "Mobile-first & offline-ready",
        "Designed for small & mid-sized farms",
        "Hardware agnostic integration",
        "Modular pricing model",
        "Open integration capabilities",
        "Optional camera & scale modules"
      ],
      color: "#2A5F36",
      bgColor: "bg-emerald-50",
      benefits: [
        "Works in remote areas",
        "No massive upfront costs",
        "Scalable as you grow",
        "Future-proof technology"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
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
              <Link href="/services" className="text-[#2A5F36] font-semibold relative group">
                Services
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
                <Link href="/services" className="text-[#2A5F36] font-semibold">Services</Link>
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
      <section className="relative bg-gradient-to-br from-[#2A5F36] to-[#637D59] py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              Comprehensive livestock management solutions powered by cutting-edge AI technology. 
              From virtual fencing to health monitoring, we provide everything you need for modern farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3 rounded-lg transition-all duration-300 "
                asChild
              >
                <Link
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Solutions</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Explore how Agrivanna can transform your farm operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                href={`#${service.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()}`}
                className="group"
              >
                <Card className="bg-white border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      {(() => {
                        const IconComponent = service.icon
                        return <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: service.color }}
                        />
                      })()}
                    </div>
                    <h3 className="text-lg font-bold text-[#2A5F36] mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{service.shortDescription}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Our Core Solutions</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Four powerful solutions working together to revolutionize your livestock management operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const anchorId = service.title.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim()
              return (
              <Card key={index} id={anchorId} className="bg-white border border-gray-200 overflow-hidden scroll-mt-20">
                <CardContent className="p-0">
                  {/* Service Header */}
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        {(() => {
                          const IconComponent = service.icon
                          return <IconComponent 
                            className="w-8 h-8" 
                            style={{ color: service.color }}
                          />
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#2A5F36]">{service.title}</h3>
                        <p className="text-lg text-[#637D59] font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                  </div>

                  {/* Features */}
                  <div className="p-8 border-b border-gray-100">
                    <h4 className="text-lg font-semibold text-[#2A5F36] mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#2A5F36] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-[#2A5F36] mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              See how Agrivanna is being used by farmers across Alberta and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4">Pasture Rotation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rotate grazing zones instantly without moving physical fences. Protect regrowth areas and optimize pasture utilization throughout the season.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#637D59] rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4">Feed Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered weight tracking suggests optimal feed rations based on individual animal needs, reducing costs while improving growth rates.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2A5F36] mb-4">Early Health Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor animal behavior 24/7 and receive alerts for abnormal patterns, enabling early intervention and reducing treatment costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Additional Features</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Powerful supporting tools that enhance your core livestock management capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      {(() => {
                        const IconComponent = feature.icon
                        return <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: feature.color }}
                        />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2A5F36]">{feature.title}</h3>
                      <p className="text-lg text-[#637D59] font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.fullDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.features.slice(0, 4).map((feat, featIndex) => (
                      <div key={featIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2A5F36] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Why Agrivanna Stands Apart</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Built for Alberta farmers, designed to evolve with your farm. More than a tool, it&apos;s a comprehensive system tailored for North American agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2A5F36] rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Holistic Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Combines virtual fencing, AI weight tracking, health monitoring, and farm management in one integrated platform with powerful additional features.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#637D59] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Alberta-Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Built for local terrain, connectivity, and livestock practices. Flexible connectivity options work even in low-signal areas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Modular Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale gradually without massive upfront costs. Start with essential features and expand as needed for small to mid-sized farms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2A5F36] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Smart Weighing</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrated weighing sensors capture data during natural movements, enabling AI-driven feeding optimization and early health detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Built for Alberta&apos;s Unique Needs</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Designed specifically for Canadian farmers with flexible connectivity and modular scalability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Flexible Connectivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compatible with LoRa, LTE, and future Bluetooth mesh. Works in remote areas with unreliable signal, designed for Alberta&apos;s diverse terrain.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#637D59] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Modular & Scalable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Start with essential features and expand as needed. No massive upfront costs. Perfect for small to mid-sized Alberta farms looking to scale gradually.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">Offline-First Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mobile-first and offline-ready. Use in the field with no signal. Full platform sync when back online ensures no data loss or grazing interruptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join Alberta farmers who are already using Agrivanna to optimize their livestock operations and increase productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial
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
