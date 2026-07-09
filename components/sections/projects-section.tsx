"use client"

import React, { useEffect, useRef } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaGithub, FaCloud, FaTerminal, FaShieldAlt } from "react-icons/fa"
import { MdMemory } from "react-icons/md"

const iconMap: Record<string, React.ComponentType<any>> = {
  FaCloud: FaCloud,
  FaTerminal: FaTerminal,
  MdMemory: MdMemory,
  FaShieldAlt: FaShieldAlt,
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const { dictionary, language } = useLanguage()
  const { projectsData } = dictionary

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".project-item-block", { opacity: 1, y: 0 })
      if (buttonRef.current) gsap.set(buttonRef.current, { opacity: 1, y: 0 })
      return
    }

    const items = sectionRef.current.querySelectorAll(".project-item-block")
    const animItems = gsap.fromTo(
      items,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    let animButton: gsap.core.Tween | null = null
    if (buttonRef.current) {
      animButton = gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      )
    }

    return () => {
      if (animItems.scrollTrigger) animItems.scrollTrigger.kill()
      animItems.kill()
      if (animButton) {
        if (animButton.scrollTrigger) animButton.scrollTrigger.kill()
        animButton.kill()
      }
    }
  }, [projectsData]) // Re-run if projectsData content changes

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
          {projectsData.projects.map((project, i) => {
            const IconComponent = project.icon ? iconMap[project.icon] : null
            return (
              <div
                key={i}
                className="project-item-block relative overflow-hidden border-l-[1px] border-white/10 pl-5 md:pl-8 pr-12 md:pr-32 py-2 opacity-0"
              >
                {IconComponent && (
                  <IconComponent
                    className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 text-[90px] md:text-[140px] text-white/[0.02] pointer-events-none select-none -z-10"
                    aria-hidden="true"
                  />
                )}
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
                        {isGithubLink && <FaGithub className="h-4 w-4" />}
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
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
