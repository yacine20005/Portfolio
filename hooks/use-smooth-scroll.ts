"use client"

import type React from "react"
import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const isAnchorLink = href.startsWith("#")
      if (isAnchorLink) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
          
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", window.location.pathname)
          }
        }
      }
    },
    [],
  )

  return { scrollToSection }
}
