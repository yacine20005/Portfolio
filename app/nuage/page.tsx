"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SectionBackground } from "@/components/section-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import {
  Cloud,
  ShoppingCart,
  Users,
  MessageCircle,
  Trophy,
  Lock,
  Database,
  Zap,
  Heart,
  ExternalLink,
} from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useNuageTitleAnimation, useNuageContentAnimations } from "@/hooks/use-gsap-animations";
import { FaPython } from "react-icons/fa";
import { SiFlask, SiPostgresql, SiHtml5, SiCss3, SiVercel } from "react-icons/si";

const features = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Game Store",
    description:
      "Browse and purchase games with integrated wallet system, age verification (PEGI), and complete transaction history",
    status: "live",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Social Network",
    description:
      "Add friends, manage your social circle, and share game access with your network",
    status: "live",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Reviews & Ratings",
    description:
      "Rate games from 0-20, write reviews, and see what the community thinks",
    status: "live",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Achievement System",
    description:
      "Track your progress with achievements and see completion rates for all your games",
    status: "live",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Game Sharing",
    description:
      "Share your purchased games with friends - they can play without buying",
    status: "live",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Authentication",
    description:
      "Bcrypt password hashing, SQL injection protection, and 30-day persistent sessions",
    status: "live",
  },
];

const techStack = [
  {
    name: "Python",
    icon: <FaPython className="h-5 w-5" />,
    category: "Backend",
  },
  { name: "Flask", icon: <SiFlask className="h-5 w-5" />, category: "Framework" },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-5 w-5" />,
    category: "Database",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="h-5 w-5" />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="h-5 w-5" />,
    category: "Styling",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="h-5 w-5" />,
    category: "Deployment",
  },
];

const architectureHighlights = [
  {
    title: "Advanced SQL Views",
    description:
      "Custom materialized views like 'Boutique' aggregating 8 tables with STRING_AGG for genres and ROUND(AVG()) for ratings",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Bidirectional Relationships",
    description:
      "Optimized friendship system with CHECK constraints (idJoueur1 < idJoueur2) and UNION views to prevent duplicates",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Multi-Layer Validation",
    description:
      "SQL CHECK constraints, Python form validation, and business logic verification (age, funds, sharing rules)",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    title: "Transaction Management",
    description:
      "Complete financial tracking system with wallet balance, purchase history, and fund reloading",
    icon: <Zap className="h-5 w-5" />,
  },
];

export default function NuagePage() {
  const { scrollToSection } = useSmoothScroll();
  const titleRef = useNuageTitleAnimation();
  const contentScope = useNuageContentAnimations();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main id="main-content" role="main">
        {/* Full-screen Hero */}
        <section
          className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
          aria-labelledby="nuage-hero-heading"
        >
          <SectionBackground />

          <div className="flex flex-col items-center text-center gap-8">
            <div className="max-w-5xl px-6">
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-400/90 via-indigo-500/90 to-blue-500/90 shadow-lg shadow-purple-500/25 flex items-center justify-center animate-[fadeIn_1s_ease_0.1s_backwards]">
                    <Cloud className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <h1
                    id="nuage-hero-heading"
                    ref={titleRef}
                    className="font-bold tracking-tighter leading-none bg-gradient-to-r from-purple-400/90 via-indigo-500/90 to-blue-500/90 bg-[length:200%_100%] animate-[pulse_12s_linear_infinite] bg-clip-text text-transparent select-none text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] will-change-transform"
                    style={{ textShadow: "0 4px 24px rgba(139,92,246,0.25)" }}
                  >
                    Nuage
                  </h1>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-medium max-w-3xl animate-[fadeUp_1s_ease-out_0.35s_backwards]">
                  Your Digital Game Library in the Cloud.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-[fadeUp_1s_ease-out_0.5s_backwards]">
                  A full-stack web platform for managing your video game collection, sharing with friends, and tracking achievements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_1s_ease-out_0.65s_backwards]">
                  <Link
                    href="#features"
                    className="w-full sm:w-auto"
                    onClick={(e) => scrollToSection(e as any, "#features")}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <Zap className="h-5 w-5 mr-2" aria-hidden="true" />
                      Explore Features
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/yacine20005/Nuage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <FaGithub className="h-5 w-5 mr-2" aria-hidden="true" />
                      View on GitHub
                    </Button>
                  </Link>
                  <Link
                    href="https://nuage-sigma.vercel.app/boutique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600/90 hover:to-indigo-600/90"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" aria-hidden="true" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
                <div className="mt-10 hidden md:flex flex-col items-center gap-3 animate-[fadeIn_1.2s_ease_1s_backwards]">
                  <span className="text-xs uppercase tracking-widest text-purple-500/70">Scroll</span>
                  <div className="h-10 w-[2px] bg-gradient-to-b from-purple-500/60 to-indigo-500/0 rounded-full animate-[growLine_2.5s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative py-32 px-6"
          aria-labelledby="features-heading"
          ref={contentScope}
        >
          <SectionBackground />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 feature-header">
              <h2
                id="features-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent"
              >
                Comprehensive Game Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to manage, share, and enjoy your video game collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card group relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-colors">
                      <div className="text-purple-400">{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section
          className="relative py-32 px-6"
          aria-labelledby="architecture-heading"
        >
          <SectionBackground />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 feature-header">
              <h2
                id="architecture-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent"
              >
                Technical Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced architecture and database design patterns
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {architectureHighlights.map((item, index) => (
                <div
                  key={index}
                  className="feature-card group p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                      <div className="text-purple-400">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Database Schema Highlight */}
            <div className="feature-card p-10 rounded-2xl bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Advanced Database Schema
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">11</div>
                  <div className="text-muted-foreground">Tables</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">4</div>
                  <div className="text-muted-foreground">Custom Views</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-muted-foreground">Normalized</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          className="relative py-32 px-6"
          aria-labelledby="tech-stack-heading"
        >
          <SectionBackground />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 feature-header">
              <h2
                id="tech-stack-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent"
              >
                Tech Stack
              </h2>
              <p className="text-xl text-muted-foreground">
                Built with proven technologies for reliability and performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="feature-card group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-colors">
                      <div className="text-purple-400">{tech.icon}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {tech.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <section
          className="relative py-32 px-6"
          aria-labelledby="journey-heading"
        >
          <SectionBackground />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 feature-header">
              <h2
                id="journey-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent"
              >
                Complete User Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                From registration to game sharing in minutes
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Register & Login",
                  description:
                    "Create an account with secure bcrypt encryption. Login with username or email.",
                },
                {
                  step: "02",
                  title: "Browse Catalog",
                  description:
                    "Explore games sorted by title, date, rating, or sales. Advanced search by genre, developer, or publisher.",
                },
                {
                  step: "03",
                  title: "Purchase Games",
                  description:
                    "Automatic age verification (PEGI) and balance check. Instant transaction with full history.",
                },
                {
                  step: "04",
                  title: "Share with Friends",
                  description:
                    "Add friends to your network. Share your purchased games - they can play without buying.",
                },
                {
                  step: "05",
                  title: "Review & Rate",
                  description:
                    "Leave reviews (0-20 scale) and comments. Update your reviews anytime.",
                },
                {
                  step: "06",
                  title: "Track Progress",
                  description:
                    "View your achievements, completion rates, game library, and social connections on your profile.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="feature-card group flex gap-6 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                  style={{
                    opacity: 0,
                    transform: "translateX(-30px)",
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-bold text-purple-400/20 group-hover:text-purple-400/40 transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6">
          <SectionBackground />
          <div className="max-w-4xl mx-auto text-center">
            <div className="feature-header space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                Ready to Explore?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check out the live demo or dive into the source code to see how it works
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="https://nuage-sigma.vercel.app/boutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600/90 hover:to-indigo-600/90"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" aria-hidden="true" />
                    Try Live Demo
                  </Button>
                </Link>
                <Link
                  href="https://github.com/yacine20005/Nuage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <FaGithub className="h-5 w-5 mr-2" aria-hidden="true" />
                    View Source Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
