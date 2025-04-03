"use client"

import { useEffect, useRef } from "react"

interface SectionBackgroundProps {
  className?: string
}

export function SectionBackground({ className = "" }: SectionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Check if dark mode
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Create grid pattern
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 30
      const dotSize = 1

      ctx.fillStyle = isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    drawGrid()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
    </div>
  )
}

