"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const pathname = usePathname()

  // Mouse coords
  const mouseRef = useRef({ x: 0, y: 0 })
  // Current coordinates of dot and ring
  const dotCoords = useRef({ x: 0, y: 0 })
  const ringCoords = useRef({ x: 0, y: 0 })
  // Active hovered magnetic element
  const magneticElRef = useRef<HTMLElement | null>(null)
  // Any hovered interactive element (magnetic or not)
  const hoveredElRef = useRef<HTMLElement | null>(null)

  const defaultRingStyle = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderColor: "var(--color-accent, rgba(255, 255, 255, 0.3))",
    backgroundColor: "transparent",
  }

  const [ringStyle, setRingStyle] = useState(defaultRingStyle)

  // Reset magnetic state on route change so the ring doesn't stick at (0,0)
  useEffect(() => {
    if (magneticElRef.current) {
      gsap.set(magneticElRef.current, { x: 0, y: 0 })
    }
    magneticElRef.current = null
    setIsHovered(false)
    setRingStyle({ ...defaultRingStyle })
  }, [pathname])

  // Synchronize the HTML cursor class with visibility state
  useEffect(() => {
    if (typeof window === "undefined") return
    if (isVisible) {
      document.documentElement.classList.add("no-cursor")
    } else {
      document.documentElement.classList.remove("no-cursor")
    }
    return () => {
      document.documentElement.classList.remove("no-cursor")
    }
  }, [isVisible])

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return
    }

    const handlePointerMove = (e: PointerEvent) => {
      // Hide custom cursor on touchscreen interactions and fall back to native cursor
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        setIsVisible(false)
        return
      }

      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      
      if (!isVisible) {
        setIsVisible(true)
      }

      // If we are hovering a magnetic element, apply the magnetic pull
      if (magneticElRef.current) {
        const el = magneticElRef.current
        const rect = el.getBoundingClientRect()
        // Center of the element
        const elCenterX = rect.left + rect.width / 2
        const elCenterY = rect.top + rect.height / 2
        // Distance from cursor to center
        const deltaX = e.clientX - elCenterX
        const deltaY = e.clientY - elCenterY

        // Pull the element towards the mouse (limited strength)
        gsap.to(el, {
          x: deltaX * 0.35,
          y: deltaY * 0.35,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeaveWindow = () => {
      setIsVisible(false)
    }

    // On scroll: check if the cursor is still over the hovered element
    const handleScroll = () => {
      const el = hoveredElRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const { x, y } = mouseRef.current
      const inside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      if (!inside) {
        // Reset magnetic element if any
        if (magneticElRef.current) {
          gsap.to(magneticElRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          })
          magneticElRef.current = null
        }
        hoveredElRef.current = null
        setIsHovered(false)
        setRingStyle({
          width: 40,
          height: 40,
          borderRadius: "50%",
          borderColor: "var(--color-accent, rgba(255, 255, 255, 0.3))",
          backgroundColor: "transparent",
        })
      }
    }

    // Event delegation for hover states and magnetic pull
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a, button, .ghost-pill, [data-magnetic], [data-cursor-hover]"
      )

      if (target) {
        hoveredElRef.current = target
        setIsHovered(true)
        
        // Check if magnetic
        const isMagnetic = target.classList.contains("ghost-pill") || 
                           target.tagName === "BUTTON" || 
                           target.hasAttribute("data-magnetic")
        
        if (isMagnetic) {
          magneticElRef.current = target
          const rect = target.getBoundingClientRect()
          
          // Style ring to match button geometry
          const isPill = window.getComputedStyle(target).borderRadius !== "0px"
          
          setRingStyle({
            width: rect.width + 16,
            height: rect.height + 12,
            borderRadius: isPill ? "999px" : "0px",
            borderColor: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          })
        } else {
          // Standard hover: just expand ring slightly
          setRingStyle({
            width: 60,
            height: 60,
            borderRadius: "50%",
            borderColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "transparent",
          })
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a, button, .ghost-pill, [data-magnetic], [data-cursor-hover]"
      )

      if (target) {
        hoveredElRef.current = null
        setIsHovered(false)
        
        if (magneticElRef.current === target) {
          // Reset pulled element position
          gsap.to(target, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          })
          magneticElRef.current = null
        }

        // Reset ring styles
        setRingStyle({
          width: 40,
          height: 40,
          borderRadius: "50%",
          borderColor: "var(--color-accent, rgba(255, 255, 255, 0.3))",
          backgroundColor: "transparent",
        })
      }
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("pointerleave", handleMouseLeaveWindow)
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true })
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    // Animation Loop
    let rafId: number
    const updateCoordinates = () => {
      // Lerp for Dot (very fast)
      dotCoords.current.x += (mouseRef.current.x - dotCoords.current.x) * 0.3
      dotCoords.current.y += (mouseRef.current.y - dotCoords.current.y) * 0.3

      if (dotRef.current) {
        dotRef.current.style.left = `${dotCoords.current.x}px`
        dotRef.current.style.top = `${dotCoords.current.y}px`
      }

      // Lerp for Ring
      if (magneticElRef.current) {
        // Safety: if the element was removed from the DOM (e.g. page nav), release it
        if (!magneticElRef.current.isConnected) {
          magneticElRef.current = null
        } else {
          // Snap to center of magnetic element
          const rect = magneticElRef.current.getBoundingClientRect()
          const targetX = rect.left + rect.width / 2
          const targetY = rect.top + rect.height / 2
          
          ringCoords.current.x += (targetX - ringCoords.current.x) * 0.2
          ringCoords.current.y += (targetY - ringCoords.current.y) * 0.2
        }
      }
      
      if (!magneticElRef.current) {
        // Follow mouse coordinates with standard lag
        ringCoords.current.x += (mouseRef.current.x - ringCoords.current.x) * 0.12
        ringCoords.current.y += (mouseRef.current.y - ringCoords.current.y) * 0.12
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`
        ringRef.current.style.top = `${ringCoords.current.y}px`
      }

      rafId = requestAnimationFrame(updateCoordinates)
    }

    rafId = requestAnimationFrame(updateCoordinates)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("pointerleave", handleMouseLeaveWindow)
      window.removeEventListener("scroll", handleScroll, { capture: true })
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      cancelAnimationFrame(rafId)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper mix-blend-difference transition-transform duration-200"
        style={{
          width: isClicking ? "4px" : "6px",
          height: isClicking ? "4px" : "6px",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border transition-[width,height,border-radius,border-color,background-color] duration-300 ease-out"
        style={{
          width: `${ringStyle.width}px`,
          height: `${ringStyle.height}px`,
          borderRadius: ringStyle.borderRadius,
          borderColor: ringStyle.borderColor,
          backgroundColor: ringStyle.backgroundColor,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      />
    </>
  )
}
