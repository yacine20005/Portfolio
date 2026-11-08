"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

const DEFAULT_RING_STYLE = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  borderColor: "var(--color-accent, rgba(255, 255, 255, 0.3))",
  backgroundColor: "transparent",
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isVisibleRef = useRef(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const pathname = usePathname()

  const mouseRef = useRef({ x: 0, y: 0 })
  const dotCoords = useRef({ x: 0, y: 0 })
  const ringCoords = useRef({ x: 0, y: 0 })
  const magneticElRef = useRef<HTMLElement | null>(null)
  const hoveredElRef = useRef<HTMLElement | null>(null)
  const [ringStyle, setRingStyle] = useState(DEFAULT_RING_STYLE)

  useEffect(() => {
    if (magneticElRef.current) {
      gsap.set(magneticElRef.current, { x: 0, y: 0 })
    }
    magneticElRef.current = null
    setIsHovered(false)
    setRingStyle(DEFAULT_RING_STYLE)
  }, [pathname])

  useEffect(() => {
    if (typeof window === "undefined") return
    document.documentElement.classList.toggle("no-cursor", isVisible)
    return () => {
      document.documentElement.classList.remove("no-cursor")
    }
  }, [isVisible])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let rafId: number | null = null

    const updateCoordinates = () => {
      if (!isVisibleRef.current) {
        rafId = null
        return
      }

      dotCoords.current.x += (mouseRef.current.x - dotCoords.current.x) * 0.3
      dotCoords.current.y += (mouseRef.current.y - dotCoords.current.y) * 0.3

      if (dotRef.current) {
        dotRef.current.style.left = `${dotCoords.current.x}px`
        dotRef.current.style.top = `${dotCoords.current.y}px`
      }

      if (magneticElRef.current) {
        if (!magneticElRef.current.isConnected) {
          magneticElRef.current = null
        } else {
          const rect = magneticElRef.current.getBoundingClientRect()
          const targetX = rect.left + rect.width / 2
          const targetY = rect.top + rect.height / 2
          ringCoords.current.x += (targetX - ringCoords.current.x) * 0.2
          ringCoords.current.y += (targetY - ringCoords.current.y) * 0.2
        }
      }

      if (!magneticElRef.current) {
        ringCoords.current.x += (mouseRef.current.x - ringCoords.current.x) * 0.12
        ringCoords.current.y += (mouseRef.current.y - ringCoords.current.y) * 0.12
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`
        ringRef.current.style.top = `${ringCoords.current.y}px`
      }

      const settled =
        !magneticElRef.current &&
        Math.hypot(mouseRef.current.x - ringCoords.current.x, mouseRef.current.y - ringCoords.current.y) < 0.1 &&
        Math.hypot(mouseRef.current.x - dotCoords.current.x, mouseRef.current.y - dotCoords.current.y) < 0.1

      rafId = settled ? null : requestAnimationFrame(updateCoordinates)
    }

    const startLoop = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateCoordinates)
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        if (isVisibleRef.current) {
          isVisibleRef.current = false
          setIsVisible(false)
        }
        return
      }

      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      startLoop()

      if (magneticElRef.current) {
        const el = magneticElRef.current
        const rect = el.getBoundingClientRect()
        const deltaX = e.clientX - (rect.left + rect.width / 2)
        const deltaY = e.clientY - (rect.top + rect.height / 2)

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
      isVisibleRef.current = false
      setIsVisible(false)
    }

    const handleScroll = () => {
      const el = hoveredElRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const { x, y } = mouseRef.current
      const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      if (!inside) {
        if (magneticElRef.current) {
          gsap.to(magneticElRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" })
          magneticElRef.current = null
        }
        hoveredElRef.current = null
        setIsHovered(false)
        setRingStyle(DEFAULT_RING_STYLE)
        startLoop()
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a, button, .ghost-pill, [data-magnetic], [data-cursor-hover]"
      )
      if (!target || target.contains(e.relatedTarget as Node)) return

      hoveredElRef.current = target
      setIsHovered(true)

      const isMagnetic =
        target.classList.contains("ghost-pill") ||
        target.tagName === "BUTTON" ||
        target.hasAttribute("data-magnetic")

      if (isMagnetic) {
        magneticElRef.current = target
        const rect = target.getBoundingClientRect()
        const isPill = window.getComputedStyle(target).borderRadius !== "0px"

        setRingStyle({
          width: rect.width + 16,
          height: rect.height + 12,
          borderRadius: isPill ? "999px" : "0px",
          borderColor: "rgba(255, 255, 255, 0.8)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        })
      } else {
        setRingStyle({
          width: 60,
          height: 60,
          borderRadius: "50%",
          borderColor: "rgba(255, 255, 255, 0.6)",
          backgroundColor: "transparent",
        })
      }
      startLoop()
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a, button, .ghost-pill, [data-magnetic], [data-cursor-hover]"
      )
      if (!target || target.contains(e.relatedTarget as Node)) return

      hoveredElRef.current = null
      setIsHovered(false)

      if (magneticElRef.current === target) {
        gsap.to(target, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" })
        magneticElRef.current = null
      }

      setRingStyle(DEFAULT_RING_STYLE)
      startLoop()
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("pointerleave", handleMouseLeaveWindow)
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true })
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("pointerleave", handleMouseLeaveWindow)
      window.removeEventListener("scroll", handleScroll, { capture: true })
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper mix-blend-difference transition-transform duration-200"
        style={{
          width: isClicking ? "4px" : "6px",
          height: isClicking ? "4px" : "6px",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
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
