"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, Target, Users, Globe, Heart, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const values = [
    {
      icon: Target,
      title: "Farmer-First",
      description: "Every decision we make is guided by what's best for farmers. We listen, learn, and build solutions that solve real problems."
    },
    {
      icon: Heart,
      title: "Animal Welfare",
      description: "Our technology is designed to improve the lives of livestock through better health monitoring and more humane management practices."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We're building cutting-edge technology that works in real-world farming conditions, especially designed for Alberta's unique challenges."
    }
  ]

  const team = [
    {
      name: "Amirhossein Foroughi",
      role: "Chief Executive Officer",
      linkedin: "https://www.linkedin.com/in/ahforoughi/",
      image: "/amirhossein-foroughi.jpeg"
    },
    {
      name: "Aminreza Abbasi",
      role: "Chief Technology Officer",
      linkedin: "https://www.linkedin.com/in/aminrezaabbasi/",
      image: "/aminreza-abbasi.JPG"
    },
    {
      name: "Haden Harrison",
      role: "Chief Operating Officer",
      linkedin: "https://www.linkedin.com/in/hadenharrison/",
      image: "/hayden-harrison.jpeg"
    },
    {
      name: "Bita Asghari",
      role: "Hardware Specialist, Ph.D.",
      linkedin: "https://www.linkedin.com/in/bita-asghari-b7710851/",
      image: "/bita-asghari.jpg"
    },
    {
      name: "Jade Alberts",
      role: "Mentor",
      linkedin: "https://www.linkedin.com/in/jadealberts/",
      image: "/jade-alberts.jpg"
    },
    {
      name: "Jason Donkersgoed",
      role: "Mentor",
      linkedin: "https://www.linkedin.com/in/jason-donkersgoed/",
      image: "/jason-donkersgoed.jpg"
    }
  ]

  

  const milestones = [
    {
      year: "2024",
      title: "Agrivanna Founded",
      description: "Founded in October 2024 by three passionate individuals committed to revolutionizing agriculture through innovative technology."
    },
    {
      year: "2024",
      title: "Vision & Mission Defined",
      description: "Established our core mission to help farmers optimize livestock management while improving animal welfare."
    },
    {
      year: "2025",
      title: "Technology Development",
      description: "Developing our comprehensive platform combining virtual fencing, AI weight tracking, health monitoring, and farm management."
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
              <Link href="/services" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/about" className="text-[#2A5F36] font-semibold relative group">
                About us
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
                <Link href="/services" className="text-black hover:text-gray-600">Services</Link>
                <Link href="/about" className="text-[#2A5F36] font-semibold">About us</Link>
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
              About Agrivanna
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              We&apos;re on a mission to revolutionize agriculture through innovative technology, 
              helping farmers sustainably feed our world while improving animal welfare and farm efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in October 2024, Agrivanna was born from a shared passion for revolutionizing agriculture 
                through innovative technology. Our founders came together with a simple yet powerful vision: 
                to help farmers optimize their operations while improving animal welfare and farm efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Led by Amirhossein Foroughi (CEO), Aminreza Abbasi (CTO), and Haden Harrison (COO), 
                we recognized that traditional livestock management methods were outdated and inefficient. 
                We saw an opportunity to apply cutting-edge AI and IoT technology to solve real-world farming challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re building a comprehensive platform that combines virtual fencing, AI weight tracking, 
                health monitoring, and farm management tools. Our mission is to empower farmers with technology 
                that actually works in their environment, helping them sustainably feed our world.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2A5F36] mb-2">Our Mission</h3>
                  <p className="text-gray-600">Empowering farmers with intelligent technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Our Values</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Meet Our Team</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              We&apos;re a diverse team of engineers, farmers, and innovators united by our passion for agriculture and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('/profile-placeholder.svg')) return;
                        target.src = '/profile-placeholder.svg';
                      }}
                    />
                    <Users className="w-16 h-16 text-gray-400 hidden" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">{member.name}</h3>
                  <p className="text-[#637D59] font-medium mb-4">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#0077B5] hover:bg-[#005885] text-white px-4 py-2 rounded transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors section removed; mentors are included in Our Team */}

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2A5F36] mb-4">Our Journey</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              From a small startup to a global leader in agricultural technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2A5F36]/30 hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6 relative">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 bg-[#2A5F36] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-[#2A5F36] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether you&apos;re a farmer looking to optimize your operation or a talented individual 
              passionate about agricultural technology, we&apos;d love to connect with you.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A5F36] text-lg px-8 py-3" asChild>
              <Link href="/careers">
                View Careers
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
