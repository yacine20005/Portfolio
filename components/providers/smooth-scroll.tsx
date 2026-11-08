"use client"

import React, { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

function scrollElementIntoView(targetElement: HTMLElement, lenis: Lenis | null, immediate = false) {
  const headerHeight = document.querySelector("header")?.offsetHeight || 0
  if (lenis) {
    lenis.scrollTo(targetElement, {
      offset: -headerHeight - 16,
      immediate,
    })
  } else {
    const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 16
    window.scrollTo({
      top: offsetPosition,
      behavior: immediate ? "auto" : "smooth",
    })
  }
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let rafId: number | null = null
    let scrollTriggerInstance: { update: () => void } | null = null
    let cancelled = false

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (cancelled) return
      ScrollTrigger.config({ ignoreMobileResize: true })
      scrollTriggerInstance = ScrollTrigger
    })

    lenis.on("scroll", () => {
      scrollTriggerInstance?.update()
    })

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("lenis-stopped")) {
        lenis.stop()
      } else {
        lenis.start()
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    if (document.documentElement.classList.contains("lenis-stopped")) {
      lenis.stop()
    }

    return () => {
      cancelled = true
      observer.disconnect()
      lenis.destroy()
      lenisRef.current = null
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return
      const targetElement = document.getElementById(href.slice(1))
      if (!targetElement) return

      e.preventDefault()
      scrollElementIntoView(targetElement, lenisRef.current, false)
      window.history.replaceState(null, "", window.location.pathname)
    }

    const scrollToHashTarget = () => {
      const hash = window.location.hash
      if (!hash) return

      const targetId = hash.slice(1)
      let attempts = 0

      const performScroll = () => {
        const targetElement = document.getElementById(targetId)
        if (!targetElement) return false
        scrollElementIntoView(targetElement, lenisRef.current, false)
        window.history.replaceState(null, "", window.location.pathname)
        return true
      }

      if (!performScroll()) {
        const interval = setInterval(() => {
          attempts++
          if (performScroll() || attempts > 30) {
            clearInterval(interval)
          }
        }, 50)
      } else {
        setTimeout(performScroll, 300)
      }
    }

    const timeoutId = setTimeout(scrollToHashTarget, 100)
    document.addEventListener("click", handleAnchorClick)
    window.addEventListener("hashchange", scrollToHashTarget)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("click", handleAnchorClick)
      window.removeEventListener("hashchange", scrollToHashTarget)
    }
  }, [pathname])

  return <>{children}</>
}
