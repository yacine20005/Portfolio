"use client"

import React, { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaGithub, FaLinkedin, FaCheck, FaRegCopy } from "react-icons/fa"
import { MdMail } from "react-icons/md"

const iconMap: Record<string, React.ComponentType<any>> = {
  Email: MdMail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { dictionary, language } = useLanguage()
  const { contactData } = dictionary
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("mailto:")) {
      const email = href.replace("mailto:", "")
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

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
  }, [contactData]) // Re-run if contactData content changes

  useEffect(() => {
    if (typeof window === "undefined") return

    const loadXurWidget = () => {
      const target = document.getElementById("xur-inline-target")
      if (!target) return

      if (document.getElementById("xur-inline-card-mounted")) return

      const oldScript =
        document.getElementById("xur-widget-script") ||
        document.querySelector('script[src*="widget.js"]')
      if (oldScript) {
        oldScript.remove()
      }

      const script = document.createElement("script")
      script.id = "xur-widget-script"
      script.src = "https://xur-d449315b4f63.herokuapp.com/static/widget.js"
      script.setAttribute("data-api-key", "portfolio-key")
      script.setAttribute("data-forceddisplaytype", "inline")
      script.async = true

      document.body.appendChild(script)
    }

    loadXurWidget()
  }, [])

  return (
    <section
      id="contact"
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={contactData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
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
          className="mt-8 flex flex-wrap gap-4 opacity-0 items-center"
        >
          {contactData.contacts.map((contact, i) => {
            const IconComponent = iconMap[contact.name]
            const isEmail = contact.href.startsWith("mailto:")
            return (
              <a
                key={i}
                href={contact.href}
                target={isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={(e) => isEmail && handleCopyEmail(e, contact.href)}
                className="ghost-pill inline-flex items-center gap-2 group transition-all duration-300"
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <span>
                  {isEmail && copied
                    ? language === "fr"
                      ? "Copié dans le presse-papier !"
                      : "Copied to clipboard!"
                    : contact.buttonText}
                </span>
                {isEmail && (
                  <span className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    {copied ? <FaCheck className="h-3 w-3 text-emerald-400" /> : <FaRegCopy className="h-3 w-3" />}
                  </span>
                )}
              </a>
            )
          })}
        </div>

        {/* Chatbot Inline Container */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col items-center">
          <div className="text-center mb-6 max-w-[600px]">
            <h3 className="font-inter font-light text-2xl md:text-3xl text-paper">
              Discutez avec mon assistant IA
            </h3>
            <p className="text-sm text-felt-gray mt-2">
              Posez vos questions en temps réel sur mon parcours, mes compétences et mes projets.
            </p>
          </div>
          <div id="xur-inline-target" className="w-full flex justify-center" />
        </div>
      </div>
    </section>
  )
}
