"use client"

import React, { useEffect, useRef } from "react"
import { aboutData } from "@/lib/data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true })
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !pinContainerRef.current || !contentRef.current) return

    // Select all words inside the paragraphs
    const words = contentRef.current.querySelectorAll(".about-word")
    if (!words || words.length === 0) return

    // Setup GSAP context to handle cleanup properly
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Desktop layout (md screen and up): pin section and scrub animation
      mm.add("(min-width: 768px)", () => {
        // Initial setup for desktop
        gsap.set(words, { opacity: 0.15 })
        gsap.set(buttonRef.current, { opacity: 0, y: 20 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%", // Scroll distance for animation duration
            pin: pinContainerRef.current,
            scrub: 1, // Smooth scrub
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Reveal words one-by-one
        tl.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
        })

        // Reveal CV download button at the end
        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1" // Slight anticipation before the end of word reveal
        )
      })

      // Mobile layout (under 768px): natural scroll and scroll-driven highlight
      mm.add("(max-width: 767px)", () => {
        // Initial setup for mobile
        gsap.set(words, { opacity: 0.15 })
        gsap.set(buttonRef.current, { opacity: 0, y: 15 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
        })

        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1"
        )
      })
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full overflow-hidden"
    >
      <div
        ref={pinContainerRef}
        className="w-full min-h-lvh md:h-screen flex items-center justify-center py-[92px] md:py-0"
      >
        <div
          ref={contentRef}
          className="container mx-auto max-w-[850px] px-5 md:px-10 flex flex-col items-center justify-center text-center"
        >
          {/* Section Title */}
          <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper mb-10 md:mb-14">
            About
          </h2>

          {/* Centered paragraphs split into words */}
          <div className="space-y-6 md:space-y-8 max-w-[750px]">
            {aboutData.paragraphs.map((paragraph, pIndex) => {
              const words = paragraph.split(" ")
              return (
                <p
                  key={pIndex}
                  className="text-base md:text-[22px] leading-[1.6] md:leading-[1.6] text-paper text-center"
                >
                  {words.map((word, wIndex) => (
                    <span
                      key={wIndex}
                      className="about-word opacity-15 mr-[0.22em] inline-block"
                    >
                      {word}
                    </span>
                  ))}
                </p>
              )
            })}
          </div>

          {/* CV Download Button */}
          <div
            ref={buttonRef}
            className="mt-10 md:mt-14 opacity-0 transform translate-y-5"
          >
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
