"use client"

import React, { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Disable on reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let lenis: Lenis | null = null
    let rafId: number
    let scrollTriggerInstance: any = null

    // Load ScrollTrigger dynamically once on mount to avoid SSR issues
    Promise.all([
      import("lenis"),
      import("gsap/ScrollTrigger")
    ]).then(([{ default: LenisClass }, { ScrollTrigger }]) => {
      scrollTriggerInstance = ScrollTrigger

      // Configure ScrollTrigger to avoid jumping when mobile address bar hides/shows
      ScrollTrigger.config({ ignoreMobileResize: true })

      lenis = new LenisClass({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time)
        }
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)

      // Sync GSAP ScrollTrigger on scroll
      const handleScroll = () => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.update()
        }
      }

      lenis.on("scroll", handleScroll)

      // Observe 'lenis-stopped' class on HTML to stop/start Lenis scroll handlers
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            const isStopped = document.documentElement.classList.contains("lenis-stopped")
            if (isStopped && lenis) {
              lenis.stop()
            } else if (lenis) {
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
      if (document.documentElement.classList.contains("lenis-stopped") && lenis) {
        lenis.stop()
      }

      // Check if there is an initial hash on mount
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          setTimeout(() => {
            const headerHeight = document.querySelector("header")?.offsetHeight || 0
            lenis?.scrollTo(targetElement, {
              offset: -headerHeight - 16,
              immediate: true,
            })
          }, 150)
        }
      }
    })

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    // 1. Reset native scroll position synchronously to prevent capping at the bottom of the page
    window.scrollTo(0, 0)
    
    // 2. Reset Lenis scroll position synchronously if it exists
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }

    const hash = window.location.hash
    if (hash) {
      const targetId = hash.substring(1)
      
      let attempts = 0
      const checkAndScroll = () => {
        const targetElement = document.getElementById(targetId)
        if (targetElement && lenisRef.current) {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          requestAnimationFrame(() => {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(targetElement, {
                offset: -headerHeight - 16,
                immediate: true, // Scroll instantly on navigation back to avoid dynamic content shift glitches
              })
            }
          })
          return true
        }
        return false
      }

      // Try immediately
      if (!checkAndScroll()) {
        const interval = setInterval(() => {
          attempts++
          if (checkAndScroll() || attempts > 20) {
            clearInterval(interval)
          }
        }, 50)
        return () => clearInterval(interval)
      }
    }
  }, [pathname])

  return <>{children}</>
}
