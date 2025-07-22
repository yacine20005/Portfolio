"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useSmoothScroll() {
  const router = useRouter()

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Check if the href is an anchor link
      const isAnchorLink = href.startsWith("#")

      // If it's the home link on the homepage
      if (href === "/" && window.location.pathname === "/") {
        e.preventDefault()

        // If there's a hash in the URL, remove it
        if (window.location.hash) {
          // Use history.replaceState to update the URL without reloading the page
          window.history.replaceState(null, "", "/")
        }

        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      // If it's an anchor link on the current page
      if (isAnchorLink) {
        e.preventDefault()

        // Get the target element
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Update the URL with the hash
          window.history.pushState(null, "", href)

          // Get header height to offset the scroll position
          const headerHeight = document.querySelector("header")?.offsetHeight || 0

          // Calculate the position to scroll to
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16

          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
      // If it's a link to another page with an anchor
      else if (href.includes("#")) {
        e.preventDefault()

        // Extract the path and hash
        const [pagePath, hash] = href.split("#")

        // Store the hash in sessionStorage to retrieve it after navigation
        sessionStorage.setItem("scrollTarget", hash)

        // Navigate to the page
        router.push(pagePath || "/")
      }
      // If it's the home link from another page
      else if (href === "/" && window.location.pathname !== "/") {
        e.preventDefault()

        // Set a flag to scroll to top after navigation
        sessionStorage.setItem("scrollToTop", "true")

        // Navigate to the homepage without any hash
        router.push("/")
      }
    },
    [router],
  )

  return { scrollToSection }
}