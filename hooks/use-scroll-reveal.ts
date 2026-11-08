"use client"

import { useEffect, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollReveal(
  sectionRef: RefObject<HTMLElement | null>,
  selector: string,
  dependency: unknown,
  options: { y?: number; stagger?: number; start?: string } = {}
) {
  const { y = 35, stagger = 0.15, start = "top 80%" } = options

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return
    const targets = selector
      ? sectionRef.current.querySelectorAll(selector)
      : sectionRef.current

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const anim = gsap.fromTo(
      targets,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: selector ? stagger : 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start,
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [sectionRef, selector, dependency, y, stagger, start])
}
