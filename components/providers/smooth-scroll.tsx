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
    let rafId: number | null = null
    let scrollTriggerInstance: any = null
    let observer: MutationObserver | null = null
    let hashTimeoutId: ReturnType<typeof setTimeout> | null = null
    let cancelled = false

    // Load ScrollTrigger dynamically once on mount to avoid SSR issues
    Promise.all([
      import("lenis"),
      import("gsap/ScrollTrigger")
    ]).then(([{ default: LenisClass }, { ScrollTrigger }]) => {
      if (cancelled) return
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
      observer = new MutationObserver((mutations) => {
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
          hashTimeoutId = setTimeout(() => {
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
      cancelled = true
      observer?.disconnect()
      if (hashTimeoutId) clearTimeout(hashTimeoutId)
      if (lenis) {
        lenis.destroy()
      }
      lenisRef.current = null
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash || (typeof window !== "undefined" && window.location.href.includes("#") ? "#" + window.location.href.split("#")[1] : "")
      
      if (!hash) {
        // No hash present: allow natural browser scrollRestoration to work
        return
      }

      const targetId = hash.substring(1)
      let attempts = 0

      const performScroll = () => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement, {
              offset: -headerHeight - 16,
              immediate: false,
            })
          } else {
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }

          // Clean URL hash so stale hash is never saved in browser history
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", window.location.pathname)
          }
          return true
        }
        return false
      }

      // Try scrolling immediately, then retry periodically if DOM/components are mounting
      if (!performScroll()) {
        const interval = setInterval(() => {
          attempts++
          if (performScroll() || attempts > 30) {
            clearInterval(interval)
          }
        }, 50)
      } else {
        // Run a delayed check to ensure layout shifts (e.g. image loads) don't throw off final scroll
        setTimeout(performScroll, 300)
      }
    }

    // Delay slightly to let Next.js update window.location and DOM
    const timeoutId = setTimeout(scrollToHashTarget, 100)

    window.addEventListener("hashchange", scrollToHashTarget)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("hashchange", scrollToHashTarget)
    }
  }, [pathname])

  return <>{children}</>
}
