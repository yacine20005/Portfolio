"use client"

import React, { useEffect, useRef } from "react"
import Lenis from "lenis"
import { setPreloaderHasRun } from "@/lib/preloader-state"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Mark preloader as run because layout has mounted (indicating session has started)
    setPreloaderHasRun(true)

    if (typeof window === "undefined") return

    // Disable on reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Sync GSAP ScrollTrigger on scroll
    const handleScroll = () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.update()
      })
    }

    lenis.on("scroll", handleScroll)

    // Observe 'lenis-stopped' class on HTML to stop/start Lenis scroll handlers
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isStopped = document.documentElement.classList.contains("lenis-stopped")
          if (isStopped) {
            lenis.stop()
          } else {
            lenis.start()
          }
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Initial check on mount
    if (document.documentElement.classList.contains("lenis-stopped")) {
      lenis.stop()
    }

    return () => {
      observer.disconnect()
      lenis.off("scroll", handleScroll)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
