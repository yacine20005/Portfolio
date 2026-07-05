"use client"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cornersRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const onCompleteRef = useRef(onComplete)

  // Keep ref up to date with latest prop callback
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const words = [
    "HELLO",
    "DESIGN",
    "CODE",
    "DEVELOP",
    "STUDENT",
    "FASTAPI",
    "EXPO",
    "NEXT.JS",
    "YACINE",
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Add lenis-stopped to html element to disable scrolling while loading
    document.documentElement.classList.add("lenis-stopped")
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("lenis-stopped")
          onCompleteRef.current()
        }
      })

      // Set initial styles
      gsap.set(backdropRef.current, { yPercent: 0 })
      gsap.set(gridRef.current, { yPercent: 0 })
      gsap.set(cornersRef.current, { yPercent: 0 })
      gsap.set(progressRef.current, { yPercent: 0 })
      
      // Animate word sequence
      words.forEach((word, idx) => {
        const isLast = idx === words.length - 1
        
        // Add a step in timeline to change the word content
        tl.add(() => {
          if (wordRef.current) {
            wordRef.current.textContent = word
          }
        })

        // Animate the word in (arriving from bottom)
        tl.fromTo(
          wordRef.current,
          { y: 60, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.25,
            ease: "power3.out",
          }
        )

        if (isLast) {
          // Special effects for the final word
          tl.to(wordRef.current, {
            textShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
            duration: 0.6,
            ease: "power2.out",
          })
          // Hold the final name longer
          tl.to({}, { duration: 0.6 })
        } else {
          // Hold the intermediate words briefly
          tl.to({}, { duration: 0.15 })
          // Animate the intermediate words out (disappearing to top)
          tl.to(wordRef.current, {
            y: -60,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.2,
            ease: "power3.in",
          })
        }
      })

      // Slide up transition for only the background panel and overlays
      tl.to([backdropRef.current, gridRef.current, cornersRef.current, progressRef.current], {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      })

      // Fade out the text glow during the slide up to match Hero text
      tl.to(wordRef.current, {
        textShadow: "0 0 0px rgba(255, 255, 255, 0)",
        duration: 0.8,
        ease: "power3.out"
      }, "-=1.2")

    }, containerRef)

    return () => {
      ctx.revert()
      document.documentElement.classList.remove("lenis-stopped")
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden pointer-events-none"
    >
      {/* Black backdrop curtain */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-[#0A0A0B] w-full h-full pointer-events-auto"
      />

      {/* Dynamic line background for a cinematic tech vibe */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
      </div>

      {/* Sleek aesthetic detail: fine corner markers */}
      <div ref={cornersRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20" />
      </div>

      {/* Center text - matches Hero font and alignment exactly */}
      <div className="relative z-10 text-center px-5 pointer-events-none">
        <h1 className="font-inter font-normal text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.125rem] leading-[0.85] tracking-tight text-paper select-none">
          <span
            ref={wordRef}
            className="inline-block will-change-transform"
          >
            {/* Will be populated dynamically by GSAP */}
          </span>
        </h1>
      </div>

      {/* Tiny progress hint */}
      <div 
        ref={progressRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
        <span className="text-[10px] font-inter tracking-[0.2em] text-white/40 uppercase">
          Initializing
        </span>
      </div>
    </div>
  )
}
