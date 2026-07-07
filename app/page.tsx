"use client"

import { useState, useEffect } from "react"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel"
import { Preloader } from "@/components/ui/preloader"
import { hasPreloaderRun, setPreloaderHasRun } from "@/lib/preloader-state"

export default function Home() {
  const [loading, setLoading] = useState(() => !hasPreloaderRun())

  useEffect(() => {
    if (loading && typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
      }
      window.scrollTo(0, 0)
      
      const scrollInterval = setInterval(() => {
        window.scrollTo(0, 0)
      }, 10)
      const scrollTimeout = setTimeout(() => {
        clearInterval(scrollInterval)
      }, 200)

      return () => {
        clearInterval(scrollInterval)
        clearTimeout(scrollTimeout)
      }
    }
  }, [loading])

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden">
      {loading && (
        <Preloader
          onComplete={() => {
            setLoading(false)
            setPreloaderHasRun(true)
          }}
        />
      )}
      <Header />
      <main>
        <HeroSection startAnimation={!loading} />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsCarousel />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
