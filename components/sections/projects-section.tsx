"use client"

import React, { useRef } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { Github, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const { dictionary, language } = useLanguage()
  const { projectsData } = dictionary

  useScrollReveal(sectionRef, ".project-item-block", projectsData)
  useScrollReveal(buttonRef, "", projectsData, { y: 20, start: "top 92%" })

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={projectsData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
        />

        <div className="mt-10 md:mt-14 space-y-10">
          {projectsData.projects.map((project, i) => (
            <div
              key={i}
              className="project-item-block relative border-l-[1px] border-white/10 pl-5 md:pl-8 py-2 opacity-0"
            >
              <h3 className="text-lg md:text-xl font-inter font-normal text-paper tracking-tight">
                {project.title}
              </h3>
              <p className="text-base leading-[1.6] text-felt-gray mt-2 max-w-[600px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="inline-block px-3 py-1 text-caption font-inter font-normal text-felt-gray border border-white/10 rounded-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-5">
                {project.links.map((link, li) => {
                  const isGithubLink = link.href.includes("github.com")
                  return (
                    <a
                      key={li}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-pill ghost-pill-sm hover:border-paper inline-flex items-center gap-2"
                    >
                      {isGithubLink ? <Github className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                      {link.name}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="mt-12 opacity-0">
          <a
            href={projectsData.viewAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-pill"
          >
            {language === "fr" ? "Voir tous les projets" : "View All Projects"}
          </a>
        </div>
      </div>
    </section>
  )
}
