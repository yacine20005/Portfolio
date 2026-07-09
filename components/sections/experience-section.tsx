"use client"

import React, { useEffect, useRef } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { dictionary } = useLanguage()
  const { experienceData } = dictionary

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".experience-item-block", { opacity: 1, y: 0 })
      return
    }

    const items = sectionRef.current.querySelectorAll(".experience-item-block")
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
  }, [experienceData]) // Re-run if experienceData changes

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={experienceData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
        />

        <div className="mt-10 md:mt-14 space-y-8 max-w-[700px]">
          {experienceData.experiences.map((exp, i) => (
            <div
              key={i}
              className="experience-item-block relative pl-5 md:pl-8 border-l-[1px] border-white/10 opacity-0"
            >
              <div className="text-caption text-felt-gray mb-2 leading-[1.36]">
                {exp.date}
              </div>
              <h3 className="text-lg md:text-xl font-inter font-normal text-paper tracking-tight">
                {exp.title}
              </h3>
              <p className="text-body-sm text-felt-gray mt-1 font-semibold">
                {exp.role}
              </p>
              <p className="text-base leading-[1.6] text-felt-gray mt-3 font-light">
                {exp.description}
              </p>
              {exp.link && (
                <a
                  href={exp.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[13px] font-inter font-normal text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease mt-2 underline decoration-white/20 hover:decoration-white/60"
                >
                  {exp.link.text} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
