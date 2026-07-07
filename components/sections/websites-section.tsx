"use client"

import React, { useEffect, useRef } from "react"
import { websitesData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function WebsitesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".website-item-block", { opacity: 1, y: 0 })
      return
    }

    const items = sectionRef.current.querySelectorAll(".website-item-block")
    const anim = gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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
      id="websites"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text="Websites"
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
        />

        <div className="mt-10 md:mt-16 space-y-16 md:space-y-24">
          {websitesData.projects.map((project, i) => (
            <div
              key={i}
              className={`website-item-block flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container with Hover Zoom Effect */}
              <div className="w-full md:w-1/2 overflow-hidden border border-white/10 bg-white/[0.02] aspect-[16/10] relative group/img">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-[0.8s] ease-signature group-hover/img:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Text / Details Container */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-inter font-normal text-paper tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base leading-[1.6] text-felt-gray mt-3 max-w-[480px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="inline-block px-3 py-1 text-caption font-inter font-normal text-felt-gray border border-white/10 rounded-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-pill mt-8 ghost-pill-sm hover:border-paper"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
