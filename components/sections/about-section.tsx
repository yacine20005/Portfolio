"use client"

import React, { useEffect, useRef } from "react"
import { aboutData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !buttonRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(buttonRef.current, { opacity: 1, y: 0 })
      return
    }

    const anim = gsap.fromTo(
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

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill()
      anim.kill()
    }
  }, [])

  return (
    <section
      id="about"
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <div className="max-w-[700px]">
          <TextReveal
            text="About"
            type="chars"
            className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
          />

          <div className="mt-10 md:mt-14 space-y-5">
            {aboutData.paragraphs.map((paragraph, i) => (
              <TextReveal
                key={i}
                text={paragraph}
                type="words"
                delay={i * 0.1}
                className="text-base md:text-[18px] leading-[1.6] text-felt-gray"
                as="p"
              />
            ))}
          </div>

          {/* CV Download */}
          <div ref={buttonRef} className="mt-10 opacity-0">
            <a
              href="https://rxresu.me/yacine20005/project-a"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-pill"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
