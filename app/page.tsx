"use client"

import { useState } from "react"
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

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
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
