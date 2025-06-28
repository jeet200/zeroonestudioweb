"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Palette,
  Bot,
  Video,
  Glasses,
  Cpu,
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Users,
  Zap,
  Globe,
  Target,
  Gamepad2,
  Trophy,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const services = [
    {
      icon: Monitor,
      title: "Web & App Design",
      description:
        "Epic UX/UI quests that level up your digital presence and boost user engagement!",
      color: "from-cyan-400 to-blue-500",
      gameTitle: "🎮 DESIGN QUEST",
    },
    {
      icon: Palette,
      title: "Branding",
      description:
        "Legendary brand identities that make your competition rage quit!",
      color: "from-pink-400 to-purple-500",
      gameTitle: "🎨 BRAND BOSS",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description:
        "Deploy intelligent NPCs that provide 24/7 customer support and engagement!",
      color: "from-green-400 to-emerald-500",
      gameTitle: "🤖 AI COMPANION",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Cinematic cutscenes and promotional content that tell your epic story!",
      color: "from-orange-400 to-red-500",
      gameTitle: "🎬 STORY MODE",
    },
    {
      icon: Glasses,
      title: "AR/VR Solutions",
      description:
        "Immersive virtual worlds and augmented reality experiences!",
      color: "from-indigo-400 to-purple-500",
      gameTitle: "🕶️ VR DIMENSION",
    },
    {
      icon: Cpu,
      title: "CGI & 3D Art",
      description:
        "Photorealistic 3D renders and animations that break the fourth wall!",
      color: "from-teal-400 to-cyan-500",
      gameTitle: "🎯 3D UNIVERSE",
    },
  ];

  const achievements = [
    {
      icon: Rocket,
      title: "Speed Run Development",
      description: "Lightning-fast delivery without glitches",
    },
    {
      icon: Trophy,
      title: "Boss-Level Quality",
      description: "Premium solutions that dominate the leaderboard",
    },
    {
      icon: Users,
      title: "Co-op Team",
      description: "Full-stack squad ready for any challenge",
    },
    {
      icon: Zap,
      title: "Power-Up Tech",
      description: "Cutting-edge tools and frameworks",
    },
    {
      icon: Sparkles,
      title: "Epic Clientele",
      description: "Players from around the globe",
    },
  ];

  const testimonials = [
    {
      name: "Sarah 'TechMaster' Johnson",
      company: "TechFlow Inc.",
      rating: 5,
      text: "01 Studio totally pwned our digital transformation! Our AI assistant is like having a legendary companion - engagement went through the roof! 🚀",
      avatar: "/placeholder.svg?height=60&width=60",
      level: "Level 85 CEO",
    },
    {
      name: "Michael 'CodeNinja' Chen",
      company: "Creative Labs",
      rating: 5,
      text: "The AR experience they crafted was absolutely mind-blowing! It's like they unlocked a secret level of creativity we never knew existed! 🎮",
      avatar: "/placeholder.svg?height=60&width=60",
      level: "Level 92 CTO",
    },
    {
      name: "Emily 'PixelQueen' Rodriguez",
      company: "StartupX",
      rating: 5,
      text: "From branding to web dev, 01 Studio delivered a perfect combo! Professional, creative, and totally game-changing! Achievement unlocked! 🏆",
      avatar: "/placeholder.svg?height=60&width=60",
      level: "Level 78 Founder",
    },
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Arena",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Epic shopping platform with AI-powered loot recommendations",
      difficulty: "LEGENDARY",
    },
    {
      title: "Brand Identity Pack",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete visual overhaul for tech startup guild",
      difficulty: "EPIC",
    },
    {
      title: "AR Product Showcase",
      category: "AR/VR",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive AR experience for furniture realm",
      difficulty: "MYTHIC",
    },
    {
      title: "AI Chatbot Interface",
      category: "AI Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Intelligent customer service companion",
      difficulty: "RARE",
    },
    {
      title: "3D Product Animation",
      category: "CGI",
      image: "/placeholder.svg?height=300&width=400",
      description: "Photorealistic product visualization magic",
      difficulty: "EPIC",
    },
    {
      title: "Corporate Cinematic",
      category: "Video Production",
      image: "/placeholder.svg?height=300&width=400",
      description: "Engaging company story and values presentation",
      difficulty: "LEGENDARY",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setScore((prev) => prev + 10);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setScore((prev) => prev + 5);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "LEGENDARY":
        return "text-yellow-400 bg-yellow-400/20";
      case "MYTHIC":
        return "text-purple-400 bg-purple-400/20";
      case "EPIC":
        return "text-blue-400 bg-blue-400/20";
      case "RARE":
        return "text-green-400 bg-green-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-cyan-400">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              01 STUDIO
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-400">
              <Gamepad2 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-mono">
                SCORE: {score}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400 rounded-lg hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 rounded-lg hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
            >
              QUESTS
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400 rounded-lg hover:from-green-500/40 hover:to-emerald-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400 rounded-lg hover:from-orange-500/40 hover:to-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25"
            >
              GUILD
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400 rounded-lg hover:from-pink-500/40 hover:to-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25"
            >
              CONNECT
            </button>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:from-yellow-300 hover:to-orange-400 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-yellow-400/25">
              🎮 DEMO MODE
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border-2 border-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-cyan-400" />
            ) : (
              <Menu className="text-cyan-400" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t-2 border-cyan-400">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {["HOME", "QUESTS", "GALLERY", "GUILD", "CONNECT"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(
                        item.toLowerCase() === "quests"
                          ? "services"
                          : item.toLowerCase() === "gallery"
                          ? "portfolio"
                          : item.toLowerCase() === "guild"
                          ? "about"
                          : item.toLowerCase() === "connect"
                          ? "contact"
                          : "home"
                      )
                    }
                    className="text-left px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400 rounded-lg hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300"
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400 rounded-full mb-6">
              <span className="text-green-400 font-mono text-sm">
                🎮 GAME MODE: ACTIVATED
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            LEVEL UP YOUR
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              DIGITAL GAME
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-mono">
            🚀 From AI companions to AR dimensions, we craft legendary digital
            experiences that dominate the leaderboard!
            <br />
            <span className="text-cyan-400">Ready Player One?</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold text-lg px-8 py-4 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-400/25"
            >
              🎯 START QUEST
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black font-bold text-lg px-8 py-4 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-400/25"
            >
              💬 JOIN PARTY
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">100+</div>
              <div className="text-xs text-gray-300">QUESTS COMPLETED</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-xs text-gray-300">PLAYERS SERVED</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">5+</div>
              <div className="text-xs text-gray-300">YEARS IN GAME</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400 rounded-full mb-6">
              <span className="text-purple-400 font-mono text-sm">
                🎮 SELECT YOUR QUEST
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EPIC QUESTS
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Choose your adventure and unlock legendary digital experiences! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black/50 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <Badge className="bg-cyan-400/20 text-cyan-400 border border-cyan-400 font-mono text-xs">
                      {service.gameTitle}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 mb-6 font-mono text-sm">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 p-0 font-bold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    ENTER QUEST →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400 rounded-full mb-6">
              <span className="text-yellow-400 font-mono text-sm">
                🏆 ACHIEVEMENTS UNLOCKED
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              POWER-UPS
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Why we're the ultimate gaming guild for your digital quests!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-yellow-400/25">
                  <achievement.icon className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 font-mono text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400 rounded-full mb-6">
              <span className="text-green-400 font-mono text-sm">
                🎨 HALL OF FAME
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              LEGENDARY BUILDS
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Epic projects that broke the internet and dominated the meta!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-black/50 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getDifficultyColor(
                        item.difficulty
                      )} font-mono text-xs font-bold`}
                    >
                      {item.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400 border border-green-400 font-mono text-xs"
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white font-bold">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-mono text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 border border-pink-400 rounded-full mb-6">
              <span className="text-pink-400 font-mono text-sm">
                💬 PLAYER REVIEWS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              GUILD TESTIMONIALS
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              What our fellow gamers say about their epic adventures!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/50 border-2 border-gray-700 hover:border-pink-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 text-yellow-400 fill-current animate-pulse"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl text-center text-gray-300 mb-8 italic font-mono">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-cyan-400 font-mono text-sm">
                      {testimonials[currentTestimonial].level}
                    </div>
                    <div className="text-gray-400 font-mono text-sm">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="text-gray-400 hover:text-white border-2 border-gray-600 hover:border-cyan-400"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="text-gray-400 hover:text-white border-2 border-gray-600 hover:border-cyan-400"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border border-blue-400 rounded-full mb-6">
              <span className="text-blue-400 font-mono text-sm">
                🎮 MEET THE GUILD
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              01 STUDIO GUILD
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              We're a legendary squad of creative technologists who live and
              breathe digital innovation! Our mission: Transform epic ideas into
              game-changing digital experiences! 🚀
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-black text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300 font-mono text-sm">EPIC QUESTS</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-black text-purple-400 mb-2">
                50+
              </div>
              <div className="text-gray-300 font-mono text-sm">
                GUILD MEMBERS
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-black text-green-400 mb-2">5+</div>
              <div className="text-gray-300 font-mono text-sm">
                YEARS GAMING
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-black text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-gray-300 font-mono text-sm">
                ONLINE STATUS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-400/20 to-red-400/20 border border-orange-400 rounded-full mb-6">
              <span className="text-orange-400 font-mono text-sm">
                📡 ESTABLISH CONNECTION
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              JOIN THE PARTY
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Ready to start your legendary quest? Let's team up! 🎮
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-black/50 border-2 border-gray-700 hover:border-orange-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white font-bold text-xl">
                    📨 SEND MESSAGE
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Player Name"
                      className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                    />
                  </div>
                  <Input
                    placeholder="Quest Subject"
                    className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                  />
                  <Textarea
                    placeholder="Describe your epic quest..."
                    rows={6}
                    className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-black font-bold transform hover:scale-105 transition-all duration-300">
                    🚀 LAUNCH MESSAGE
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">📧 Email Portal</div>
                  <div className="text-cyan-400 font-mono">
                    01studios.in@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">📞 Voice Chat</div>
                  <div className="text-purple-400 font-mono">
                    +91 9726128299
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">🏢 Guild HQ</div>
                  <div className="text-green-400 font-mono">
                    Ring Road , Bhavanagar
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                  🎯 Ready for Co-op Mode?
                </h3>
                <p className="text-gray-300 mb-4 font-mono text-sm">
                  Book a free strategy session and let's plan your next
                  legendary digital adventure!
                </p>
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold transform hover:scale-105 transition-all duration-300"
                >
                  🎮 BOOK STRATEGY SESSION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-black border-2 border-cyan-400 w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white font-bold">
                  🎮 BOOK STRATEGY SESSION
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-gray-400 hover:text-white border-2 border-gray-600 hover:border-red-400"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="text-gray-300 font-mono text-sm">
                Schedule a 30-minute free strategy session to plan your epic
                digital quest! 🚀
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
              />
              <Input
                placeholder="Company/Guild Name"
                className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
              />
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-mono">
                  🎯 Choose Your Quest
                </label>
                <select className="w-full p-2 bg-gray-800/50 border-2 border-gray-600 rounded-md text-white font-mono focus:border-cyan-400">
                  <option value="">Select your adventure...</option>
                  <option value="web-app">🖥️ Web & App Design Quest</option>
                  <option value="branding">🎨 Branding Boss Battle</option>
                  <option value="ai">🤖 AI Companion Development</option>
                  <option value="video">🎬 Video Production Story Mode</option>
                  <option value="ar-vr">🕶️ AR/VR Dimension</option>
                  <option value="cgi">🎯 CGI & 3D Universe</option>
                </select>
              </div>
              <Textarea
                placeholder="Describe your epic quest and goals..."
                rows={3}
                className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
              />
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-mono">
                  ⏰ Preferred Session Time
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="date"
                    className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono focus:border-cyan-400"
                  />
                  <select className="p-2 bg-gray-800/50 border-2 border-gray-600 rounded-md text-white font-mono focus:border-cyan-400">
                    <option value="">Select time...</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-mono"
                >
                  CANCEL
                </Button>
                <Button
                  onClick={() => {
                    alert(
                      "🎉 Strategy session booked! We'll contact you within 24 hours to confirm your epic adventure!"
                    );
                    setIsBookingModalOpen(false);
                    setScore((prev) => prev + 100);
                  }}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold"
                >
                  🚀 BOOK SESSION
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t-2 border-cyan-400 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                01 STUDIO
              </div>
              <p className="text-gray-400 mb-4 font-mono text-sm">
                Leveling up the digital world, one epic quest at a time! 🎮
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-cyan-400 border-2 border-gray-600 hover:border-cyan-400"
                >
                  <Target className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-purple-400 border-2 border-gray-600 hover:border-purple-400"
                >
                  <Globe className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-pink-400 border-2 border-gray-600 hover:border-pink-400"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 font-mono">
                🎯 QUEST MENU
              </h3>
              <ul className="space-y-2 text-gray-400 font-mono text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    🖥️ Web & App Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-purple-400 transition-colors"
                  >
                    🎨 Branding Quests
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-green-400 transition-colors"
                  >
                    🤖 AI Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    🎬 Video Production
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 font-mono">
                🏢 GUILD INFO
              </h3>
              <ul className="space-y-2 text-gray-400 font-mono text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Guild
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="hover:text-purple-400 transition-colors"
                  >
                    Hall of Fame
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-green-400 transition-colors"
                  >
                    Join Party
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Recruit Players
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 font-mono">
                📡 STAY CONNECTED
              </h3>
              <p className="text-gray-400 mb-4 font-mono text-sm">
                Get updates on our latest epic adventures!
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email..."
                  className="bg-gray-800/50 border-2 border-gray-600 text-white font-mono rounded-r-none focus:border-cyan-400"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold rounded-l-none">
                  JOIN
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-mono text-sm">
              &copy; 2024 01 STUDIO. All rights reserved. Crafted with 💜 for
              the gaming community!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
