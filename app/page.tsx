"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Ajout de données structurées supplémentaires pour la page d'accueil
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Portfolio de Yacine Hamadouche",
      "url": "https://yacine-hamadouche.me",
      "description": "Portfolio professionnel de Yacine Hamadouche, étudiant en informatique et développeur",
      "author": {
        "@type": "Person",
        "name": "Yacine Hamadouche",
        "jobTitle": "Étudiant en Informatique & Développeur",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Université Gustave Eiffel"
        }
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Yacine Hamadouche",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Développeur",
          "occupationLocation": {
            "@type": "Place",
            "name": "France"
          }
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}