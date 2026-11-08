"use client"

import React, { useRef } from "react"
import { useLanguage } from "@/components/providers/language-context"
import { TextReveal } from "@/components/ui/text-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function WebsitesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { dictionary, language } = useLanguage()
  const { websitesData } = dictionary

  useScrollReveal(sectionRef, ".website-item-block", websitesData, { y: 40, stagger: 0.2 })

  return (
    <section
      id="websites"
      ref={sectionRef}
      className="py-[46px] md:py-[92px]"
    >
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <TextReveal
          text={websitesData.title}
          type="chars"
          className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.95] tracking-tight text-paper capitalize"
        />

        <div className="mt-10 md:mt-16 space-y-16 md:space-y-24">
          {websitesData.projects.map((project, i) => (
            <div
              key={i}
              className={`website-item-block flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 overflow-hidden border border-white/10 bg-white/[0.02] aspect-[16/10] relative group/img">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-[0.8s] ease-signature group-hover/img:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-inter font-normal text-paper tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base leading-[1.6] text-felt-gray mt-3 max-w-[480px]">
                  {project.description}
                </p>

                {project.available !== false ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-pill mt-8 ghost-pill-sm hover:border-paper"
                  >
                    {language === "fr" ? "Visiter le site" : "Visit Website"}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="ghost-pill mt-8 ghost-pill-sm opacity-50 cursor-not-allowed hover:border-white/30"
                    title={language === "fr" ? "Site indisponible" : "Website unavailable"}
                  >
                    {language === "fr" ? "Site indisponible" : "Website unavailable"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
