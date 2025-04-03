"use client"

import React, { useEffect, useRef } from "react"

interface FloatingElementsProps {
  count?: number
  className?: string
}

export function FloatingElements({ count = 15, className = "" }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating elements
    const elements: HTMLDivElement[] = []
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Colors based on theme
    const colors = isDarkMode
      ? ["rgba(77, 171, 247, 0.1)", "rgba(149, 76, 233, 0.1)", "rgba(56, 189, 248, 0.1)"]
      : ["rgba(77, 171, 247, 0.05)", "rgba(149, 76, 233, 0.05)", "rgba(56, 189, 248, 0.05)"]

    // Shapes: circle, square, triangle
    const shapes = ["circle", "square", "triangle"]

    for (let i = 0; i < count; i++) {
      const element = document.createElement("div")

      // Random size between 20px and 80px
      const size = Math.floor(Math.random() * 60) + 20

      // Random position
      const left = Math.floor(Math.random() * 100)
      const top = Math.floor(Math.random() * 100)

      // Random shape
      const shapeIndex = Math.floor(Math.random() * shapes.length)
      const shape = shapes[shapeIndex]

      // Random color
      const colorIndex = Math.floor(Math.random() * colors.length)
      const color = colors[colorIndex]

      // Random animation duration between 20s and 40s
      const duration = Math.floor(Math.random() * 20) + 20

      // Random delay
      const delay = Math.floor(Math.random() * 10)

      // Set styles
      element.style.position = "absolute"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.left = `${left}%`
      element.style.top = `${top}%`
      element.style.backgroundColor = color
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
      element.style.opacity = "0.7"
      // element.style.zIndex = "-1" // Removed this line

      // Set shape
      if (shape === "circle") {
        element.style.borderRadius = "50%"
      } else if (shape === "square") {
        element.style.borderRadius = "4px"
      } else if (shape === "triangle") {
        element.style.width = "0"
        element.style.height = "0"
        element.style.backgroundColor = "transparent"
        element.style.borderLeft = `${size / 2}px solid transparent`
        element.style.borderRight = `${size / 2}px solid transparent`
        element.style.borderBottom = `${size}px solid ${color}`
      }

      // Add to container
      container.appendChild(element)
      elements.push(element)
    }

    // Clean up
    return () => {
      elements.forEach((element) => {
        if (container.contains(element)) {
          container.removeChild(element)
        }
      })
    }
  }, [count])

  return <div ref={containerRef} className={`absolute inset-0 overflow-hidden z-[-1] ${className}`}></div>
}
