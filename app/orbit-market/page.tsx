"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SectionBackground } from "@/components/section-background";
import { FloatingElements } from "@/components/floating-elements";
import { OrbitMarketScreenshots } from "@/components/orbit-market-screenshots";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Database,
  Download,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { GiAlienFire } from "react-icons/gi";
import { FaReact, FaPython, FaMobile, FaGithub } from "react-icons/fa";
import { SiExpo, SiFastapi, SiSqlite, SiTypescript } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: <GiAlienFire className="h-6 w-6" />,
    title: "Xûr Tracking",
    description:
      "Track Xûr's weekly inventory in real-time with detailed item information and stats",
    status: "live",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Live Updates",
    description:
      "Automatic refresh when Xûr arrives with his new weekly rotation",
    status: "live",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Detailed Stats",
    description:
      "View complete weapon and armor statistics, perks, and material costs",
    status: "live",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Data",
    description:
      "Direct integration with Bungie.net API for the most accurate information",
    status: "live",
  },
];

const techStack = [
  {
    name: "React Native",
    icon: <FaReact className="h-5 w-5" />,
    category: "Frontend",
  },
  { name: "Expo", icon: <SiExpo className="h-5 w-5" />, category: "Framework" },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-5 w-5" />,
    category: "Language",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="h-5 w-5" />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <FaPython className="h-5 w-5" />,
    category: "Backend",
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="h-5 w-5" />,
    category: "Database",
  },
];

const roadmapItems = [
  {
    phase: "Phase 1",
    status: "completed",
    title: "Destiny 2 - Xûr Tracker",
    description: "Real-time Xûr inventory tracking with complete item details",
  },
  {
    phase: "Phase 2",
    status: "in-progress",
    title: "All Destiny 2 Vendors",
    description: "Ada-1, Banshee-44, Saint-14, and more vendor tracking",
  },
  {
    phase: "Phase 3",
    status: "planned",
    title: "Warframe Integration",
    description: "World state tracking, invasions, alerts, and market data",
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: "Enhanced Features",
    description: "Community features, notifications, and cross-game dashboard",
  },
];

export default function OrbitMarketPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingElements />
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-32 relative">
        <SectionBackground />

        {/* Back to Portfolio Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Portfolio
          </Link>
        </div>

        <div className="flex flex-col items-center text-center gap-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/orbit-market-icon.png"
                alt="Orbit Market Icon"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Orbit Market
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Multi-Game Vendor & World State Tracker
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your ultimate companion for{" "}
              <strong className="text-primary">Destiny 2</strong> and{" "}
              <strong className="text-secondary">Warframe</strong>. Track vendor
              inventories, world states, and essential game information across
              multiple platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/yacine20005/Orbit-Market"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  <FaGithub className="h-5 w-5 mr-2" />
                  View on GitHub
                </Button>
              </Link>
              <Link
                href="https://api.yacine-hamadouche.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Live API
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">01</span>
            <h2 className="text-2xl md:text-3xl font-bold">Current Features</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Destiny 2 Xûr tracking is live and fully functional. More features
            coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    {feature.status === "live" && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">02</span>
            <h2 className="text-2xl md:text-3xl font-bold">Technology Stack</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Built with modern technologies for optimal performance and
            scalability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">03</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Architecture Overview
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Multi-game client-server architecture designed for scalability and
            performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FaMobile className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Mobile App</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Cross-platform UI (iOS/Android)</li>
              <li>• Offline-capable design</li>
              <li>• Push notifications</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-secondary" />
              <h3 className="text-lg font-semibold">Backend API</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• FastAPI framework</li>
              <li>• Multi-game routing</li>
              <li>• Manifest management</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold">External APIs</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bungie.net API</li>
              <li>• Warframe WorldState API</li>
              <li>• Real-time data sync</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">04</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Development Roadmap
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            From single-game utility to comprehensive multi-game information hub
          </p>
        </div>

        <div className="space-y-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 transition-all ${
                item.status === "completed"
                  ? "border-green-500/50 bg-green-500/5"
                  : item.status === "in-progress"
                  ? "border-primary/50 bg-primary/5"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.phase}
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs ${
                      item.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "completed"
                      ? "✅ Live"
                      : item.status === "in-progress"
                      ? "🚧 In Progress"
                      : "📋 Planned"}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">05</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Mobile Application
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Experience Orbit Market on your mobile device with our native
            application
          </p>
        </div>

        <OrbitMarketScreenshots />
      </section>

      {/* Download Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/orbit-market-adaptive-icon.png"
                alt="Orbit Market App Icon"
                width={120}
                height={120}
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Download Orbit Market
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the latest version of Orbit Market for Android and start
                tracking your favorite game vendors on the go. The app is
                currently in active development with new features being added
                regularly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="https://github.com/yacine20005/Orbit-Market/releases/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    <Download className="h-5 w-5 mr-2" />
                    Download APK
                  </Button>
                </Link>
                <Link
                  href="https://api.yacine-hamadouche.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    Try Live API
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Currently available for Android. iOS version coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <span className="text-primary text-sm mr-2">07</span>
            <h2 className="text-2xl md:text-3xl font-bold">Get Involved</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Orbit Market is open source and welcomes contributions. Check out
            the code, report issues, or suggest new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/yacine20005/Orbit-Market"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto">
                <FaGithub className="h-5 w-5 mr-2" />
                Star on GitHub
              </Button>
            </Link>
            <Link
              href="https://github.com/yacine20005/Orbit-Market/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <ExternalLink className="h-5 w-5 mr-2" />
                Report Issues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
