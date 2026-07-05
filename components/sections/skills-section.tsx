"use client"

import React, { useEffect, useRef } from "react"
import { skillsData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text="Skills"
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
        />

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {skillsData.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category-card opacity-0"
            >
              <h3 className="text-body-sm font-inter font-semibold text-paper mb-3 tracking-tight">
                {category.name}
              </h3>
              <p className="text-base md:text-[16px] leading-[1.6] text-felt-gray">
                {category.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
