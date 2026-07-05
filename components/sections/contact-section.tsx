"use client"

import React, { useEffect, useRef } from "react"
import { contactData } from "@/lib/data"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(containerRef.current, { opacity: 1, y: 0 })
      return
    }

    const anim = gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
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
      id="contact"
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text="Contact"
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper"
        />

        <TextReveal
          text={contactData.subtitle}
          type="words"
          delay={0.1}
          className="text-base md:text-lg leading-[1.6] text-felt-gray mt-6 max-w-[600px]"
          as="p"
        />

        <div
          ref={containerRef}
          className="mt-8 flex flex-wrap gap-4 opacity-0"
        >
          {contactData.contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-pill"
            >
              {contact.buttonText}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
