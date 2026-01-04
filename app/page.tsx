"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsCarousel />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}