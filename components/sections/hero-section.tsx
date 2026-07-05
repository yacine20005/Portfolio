"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { ShaderAnimation } from "@/components/ui/shader-lines"

export function HeroSection({ startAnimation = true }: { startAnimation?: boolean }) {
  const heroRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!startAnimation) return

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    const ctx = gsap.context(() => {
      if (!heroRef.current) return
      const letters = heroRef.current.querySelectorAll("[data-hero-letter]")
      
      // Set letters directly in final position (y: 0) to match preloader perfectly
      gsap.set(heroRef.current, { autoAlpha: 0 })
      gsap.set(letters, { autoAlpha: 1, y: 0 })
      
      // Rapid, seamless fade-in of the text container to handle the handoff
      gsap.to(heroRef.current, {
        autoAlpha: 1,
        duration: 0.15,
        ease: "none",
      })
    }, heroRef)
    return () => ctx.revert()
  }, [startAnimation])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Iridescent backdrop */}
      <div className="absolute inset-0 opacity-60">
        <ShaderAnimation />
      </div>
      <div className="absolute inset-0 bg-obsidian/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <h1
          ref={heroRef}
          className={`font-inter font-normal text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.125rem] leading-[0.85] tracking-tight text-paper select-none ${
            !startAnimation ? "opacity-0" : ""
          }`}
        >
          {["Y", "A", "C", "I", "N", "E"].map((letter, i) => (
            <span
              key={i}
              data-hero-letter
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
