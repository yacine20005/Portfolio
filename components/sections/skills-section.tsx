"use client"

import React, { useEffect, useRef } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TiltCard } from "@/components/ui/tilt-card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { dictionary } = useLanguage()
  const { skillsData } = dictionary

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".skill-category-card", { opacity: 1, y: 0 })
      return
    }

    const cards = sectionRef.current.querySelectorAll(".skill-category-card")
    const anim = gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
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
  }, [skillsData]) // Re-run if skillsData content changes

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={skillsData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
        />

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, catIndex) => (
            <TiltCard
              key={catIndex}
              className="skill-category-card opacity-0 h-full"
              glowColor="rgba(255, 255, 255, 0.05)"
            >
              <h3 className="text-body-sm font-inter font-semibold text-paper mb-4 tracking-tight">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="inline-block px-3 py-1 text-[13px] font-inter font-normal text-felt-gray border border-white/5 bg-white/[0.01] rounded-full group-hover/card:text-paper group-hover/card:border-white/15 group-hover/card:bg-white/[0.04] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
