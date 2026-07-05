"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { featuredProjectsData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function FeaturedProjectsCarousel() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".featured-project-item", { opacity: 1, y: 0 })
      return
    }

    const items = sectionRef.current.querySelectorAll(".featured-project-item")
    const anim = gsap.fromTo(
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

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill()
      anim.kill()
    }
  }, [])

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text="Featured"
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
        />

        <div className="mt-10 md:mt-14 space-y-6">
          {featuredProjectsData.projects.map((project, i) => (
            <Link
              key={i}
              href={project.link}
              data-magnetic
              className="featured-project-item group block border-l-[1px] border-white/10 hover:border-white/30 pl-5 md:pl-8 py-6 md:py-8 transition-all duration-[0.8s] ease-signature opacity-0"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 pointer-events-none">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="flex-shrink-0 text-paper/70">
                      {project.icon}
                    </span>
                    <h3 className="text-xl md:text-2xl font-inter font-normal text-paper group-hover:text-paper/80 transition-colors duration-[0.4s] ease tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-base text-felt-gray leading-[1.5] mt-1">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 md:mt-0 shrink-0">
                  {project.tags.slice(0, 3).map((tag, ti) => (
                    <span
                      key={ti}
                      className="inline-block px-3 py-1 text-caption font-inter font-normal text-felt-gray border border-white/10 rounded-pill group-hover:border-white/20 transition-colors duration-[0.4s] ease"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}