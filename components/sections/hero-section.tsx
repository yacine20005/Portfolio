"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Send } from "lucide-react";
import { MdDownload } from "react-icons/md";
import { AnimatedCanvas } from "@/components/animated-canvas";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useGsapIntro, useHeroTitleElegantReveal } from "@/hooks/use-gsap-animations";
import { heroData } from "@/lib/data";

export function HeroSection() {
  const { scrollToSection } = useSmoothScroll();
  const introScope = useGsapIntro();
  useHeroTitleElegantReveal(introScope);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={introScope}
    >
      <AnimatedCanvas />

      <div className="container mx-auto relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div data-hero="title" className="relative">
            <h1
              className="select-none text-[6rem] xs:text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] font-bold tracking-tighter leading-none will-change-transform text-foreground"
              aria-label={heroData.name}
            >
              {heroData.name.split("").map((ch, i) => (
                <span
                  key={i}
                  data-hero-letter
                  className="inline-block will-change-transform"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>
          </div>
          <p data-hero="subtitle" className="text-xl md:text-2xl font-mono text-muted-foreground mt-4 md:mt-0 will-change-transform">
            {heroData.title}
          </p>
          <div data-hero="description" className="max-w-lg mx-auto mt-8 text-center will-change-transform">
            <p className="text-muted-foreground">{heroData.description}</p>
          </div>
          <div data-hero="cta" className="mt-8 will-change-transform">
            {/* First row: 3 main CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={heroData.cta.projects.href}
                onClick={(e) => scrollToSection(e, heroData.cta.projects.href)}
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                {heroData.cta.projects.text} <Code className="ml-2 h-4 w-4" />
              </a>
              <a
                href={heroData.cta.contact.href}
                onClick={(e) => scrollToSection(e, heroData.cta.contact.href)}
                className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                {heroData.cta.contact.text} <Send className="ml-2 h-4 w-4" />
              </a>
              <Link href={heroData.cta.cv.href} download>
                <Button
                  variant="outline"
                  className="rounded-full h-10 px-4 py-2 text-sm font-medium"
                >
                  {heroData.cta.cv.text} <MdDownload className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Second row: Spark Love + Orbit Market */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/spark-love" className="relative">
                <Button className="rounded-full h-10 px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 hover:from-pink-600 hover:via-rose-600 hover:to-fuchsia-700 text-white shadow-lg">
                  Spark Love
                </Button>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  NEW
                </span>
              </Link>
              <Link href="/orbit-market">
                <Button className="rounded-full h-10 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                  Orbit Market
                </Button>
              </Link>
            </div>
          </div>
          <div data-hero="scroll-indicator" className="w-full flex justify-center mt-20 hidden md:flex">
            <div className="inline-flex flex-col items-center">
              <p className="text-muted-foreground text-sm mb-2">Scroll Down</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
