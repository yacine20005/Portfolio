"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { TiltCard } from "@/components/ui/tilt-card"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function FeaturedProjectsCarousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const { dictionary, language } = useLanguage()
  const { featuredProjectsData } = dictionary

  useScrollReveal(sectionRef, ".featured-project-item", featuredProjectsData)

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={featuredProjectsData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
        />

        <div className="mt-10 md:mt-14 space-y-6">
          {featuredProjectsData.projects.map((project, i) => (
            <TiltCard
              key={i}
              className="featured-project-item opacity-0 p-0 border border-white/5 cursor-pointer group/card"
              glowColor={project.theme.accentColor || "rgba(255, 255, 255, 0.08)"}
              style={{
                background: `linear-gradient(135deg, ${project.theme.gradientFrom} 0%, ${project.theme.gradientVia} 50%, ${project.theme.gradientTo} 100%)`,
                borderColor: project.theme.border
              }}
            >
              <Link
                href={project.link}
                className="block w-full h-full px-6 py-6 md:px-8 md:py-8 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pointer-events-none">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="flex-shrink-0 transition-transform duration-500 group-hover/card:scale-110"
                        style={{ color: project.theme.textColor }}
                      >
                        {project.icon}
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-inter font-normal transition-colors duration-[0.4s] ease tracking-tight"
                        style={{ color: project.theme.textColor }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-base text-felt-gray leading-[1.5] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-2 md:mt-0 shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, ti) => (
                        <span
                          key={ti}
                          className="inline-block px-3 py-1 text-caption font-inter font-normal border rounded-pill transition-colors duration-[0.4s] ease"
                          style={{
                            backgroundColor: project.theme.tagBackground,
                            color: project.theme.tagColor,
                            borderColor: project.theme.tagBorder
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-inter font-medium transition-all duration-300 bg-white/10 text-paper border border-white/20 group-hover/card:bg-white group-hover/card:text-obsidian group-hover/card:border-white shadow-sm shrink-0">
                      <span>{language === "fr" ? "Découvrir" : "Explore"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
