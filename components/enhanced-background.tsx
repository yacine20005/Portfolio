"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  growing: boolean
}

export function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  // Check if we're in a dark environment by looking at the document
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if document has dark class on html element
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark")
      setIsDarkMode(isDark)
    }

    // Initial check
    checkTheme()

    // Set up a mutation observer to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100) // Adaptive count based on screen size

    const primaryColor = isDarkMode ? "196, 80%, 60%" : "196, 80%, 60%"
    const secondaryColor = isDarkMode ? "270, 80%, 60%" : "270, 80%, 60%"

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color:
          i % 2 === 0
            ? `hsla(${primaryColor}, ${Math.random() * 0.3 + 0.2})`
            : `hsla(${secondaryColor}, ${Math.random() * 0.3 + 0.2})`,
        alpha: Math.random() * 0.5 + 0.2,
        growing: Math.random() > 0.5,
      })
    }

    return particles
  }

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })

        // Reinitialize particles when resizing
        particlesRef.current = initParticles(width, height)

        // Update canvas dimensions
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Initial setup
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isDarkMode])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize particles if not already done
    if (particlesRef.current.length === 0) {
      particlesRef.current = initParticles(dimensions.width, dimensions.height)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > dimensions.height) particle.speedY *= -1

        // Pulse size effect
        if (particle.growing) {
          particle.size += 0.02
          if (particle.size > 4) particle.growing = false
        } else {
          particle.size -= 0.02
          if (particle.size < 1) particle.growing = true
        }

        // Mouse interaction - particles move away from cursor
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.speedX -= (dx / distance) * force * 0.05
          particle.speedY -= (dy / distance) * force * 0.05

          // Limit max speed
          const maxSpeed = 2
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
          }
        }

        // Gradually return to normal speed
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles that are close to each other
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(125, 125, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, mousePosition])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle at center, rgba(20, 20, 40, 0.8) 0%, rgba(10, 10, 20, 1) 100%)"
            : "radial-gradient(circle at center, rgba(240, 240, 255, 0.8) 0%, rgba(220, 220, 240, 1) 100%)",
        }}
      />
    </div>
  )
}

