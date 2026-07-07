"use client"

import { useRef } from "react"
import { ShaderAnimation } from "@/components/ui/shader-lines"

export function HeroSection({ startAnimation = true }: { startAnimation?: boolean }) {
  const heroRef = useRef<HTMLHeadingElement>(null)


  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
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
          <span className="inline-block will-change-transform">
            YACINE
          </span>
        </h1>
      </div>
    </section>
  )
}
