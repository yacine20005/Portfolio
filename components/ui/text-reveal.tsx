"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  delay?: number
  type?: "chars" | "words"
}

export function TextReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  type = "words",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return
    
    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const element = containerRef.current
    const words = text.split(" ")
    
    // Clear content to build the animation elements
    element.innerHTML = ""
    
    words.forEach((word) => {
      const wordSpan = document.createElement("span")
      wordSpan.style.display = "inline-block"
      wordSpan.style.overflow = "hidden"
      wordSpan.style.verticalAlign = "bottom"
      wordSpan.className = "mr-[0.25em] pb-[0.05em]"

      if (type === "chars") {
        const letters = word.split("")
        letters.forEach((char) => {
          const charSpan = document.createElement("span")
          charSpan.textContent = char
          charSpan.style.display = "inline-block"
          charSpan.className = "reveal-item transform translate-y-full opacity-0"
          wordSpan.appendChild(charSpan)
        })
      } else {
        const innerSpan = document.createElement("span")
        innerSpan.textContent = word
        innerSpan.style.display = "inline-block"
        innerSpan.className = "reveal-item transform translate-y-full opacity-0"
        wordSpan.appendChild(innerSpan)
      }
      
      element.appendChild(wordSpan)
    })

    const targets = element.querySelectorAll(".reveal-item")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })

    tl.to(targets, {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: type === "chars" ? 0.02 : 0.04,
      ease: "power3.out",
      delay: delay,
    })

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [text, delay, type])

  return (
    <Component ref={containerRef} className={className}>
      {text}
    </Component>
  )
}
