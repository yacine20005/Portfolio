"use client"

import React, { useEffect, useRef } from "react"
import { projectsData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text="Projects"
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
        />

        <div className="mt-10 md:mt-14 space-y-10">
          {projectsData.projects.map((project, i) => (
            <div
              key={i}
              className="project-item-block border-l-[1px] border-white/10 pl-5 md:pl-8 opacity-0"
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

              <div className="flex flex-wrap gap-4 mt-4">
                {project.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm font-inter font-normal text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
                  >
                    {link.name} →
                  </a>
                ))}
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
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
