"use client"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface ProjectPreloaderProps {
  icon: React.ReactNode
  accentColor: string
  title: string
  onComplete: () => void
  onReveal?: () => void
}

export function ProjectPreloader({ icon, accentColor, title, onComplete, onReveal }: ProjectPreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const iconWrapperRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [mounted, setMounted] = useState(false)
  const onCompleteRef = useRef(onComplete)
  const onRevealRef = useRef(onReveal)

  // Keep refs up to date with latest prop callbacks
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    onRevealRef.current = onReveal
  }, [onReveal])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Disable page scrolling while animating
    document.documentElement.classList.add("lenis-stopped")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("lenis-stopped")
          onCompleteRef.current()
        }
      })

      // Initial state
      gsap.set(backdropRef.current, { yPercent: 100 }) // Start off-screen (bottom)
      gsap.set(iconWrapperRef.current, { scale: 0.8, opacity: 0 })
      gsap.set(titleRef.current, { y: 20, opacity: 0, filter: "blur(6px)" })

      // 1. Shutter slides up from bottom to cover the screen
      tl.to(backdropRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power3.out"
      })

      // 2. Icon and Title animate in together
      tl.to([iconWrapperRef.current, titleRef.current], {
        scale: 1,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.2)"
      })

      // 3. Pulse glow effect on both
      tl.to([iconWrapperRef.current, titleRef.current], {
        scale: 1.05,
        duration: 0.35,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })

      // 4. Outro: shrink and fade out elements quickly
      tl.to([iconWrapperRef.current, titleRef.current], {
        scale: 0.9,
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          if (onRevealRef.current) {
            onRevealRef.current()
          }
        }
      })

      // 5. Curtain slides up (to yPercent: -100) to reveal the project page
      tl.to(backdropRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut"
      }, "-=0.15")

    }, containerRef)

    return () => {
      ctx.revert()
      document.documentElement.classList.remove("lenis-stopped")
    }
  }, [mounted, accentColor])

  if (!mounted) return null

  // Subtle gradient using the accent color transitioning to transparent, layered on top of solid black
  const backdropStyle = {
    backgroundColor: '#000000',
    backgroundImage: `radial-gradient(circle at center, ${accentColor.replace("rgb", "rgba").replace(")", ", 0.15)")} 0%, rgba(0, 0, 0, 0) 85%)`,
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-[100dvh] z-[9999] flex items-center justify-center select-none overflow-hidden pointer-events-none"
    >
      {/* Background curtain */}
      <div
        ref={backdropRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={backdropStyle}
      />

      {/* Centered Content: Icon + Title */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-5 pointer-events-none">
        {/* Themed Icon */}
        <div
          ref={iconWrapperRef}
          className="flex items-center justify-center w-20 h-20 rounded-full border bg-white/5 backdrop-blur-md transition-shadow will-change-transform"
          style={{
            boxShadow: `0 0 15px ${accentColor.replace("rgb", "rgba").replace(")", ", 0.25)")}`,
            borderColor: `${accentColor.replace("rgb", "rgba").replace(")", ", 0.2)")}`,
          }}
        >
          <div style={{ color: accentColor }} className="[&>svg]:w-8 [&>svg]:h-8">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2
          ref={titleRef}
          className="font-inter font-light text-2xl md:text-3xl tracking-tight text-paper mt-2"
          style={{
            textShadow: `0 0 15px ${accentColor.replace("rgb", "rgba").replace(")", ", 0.2)")}`,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}
