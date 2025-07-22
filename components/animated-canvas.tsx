"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  baseSize: number
  speedX: number
  speedY: number
  color: string
  hue: number
  saturation: number
  lightness: number
  alpha: number
}

export function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMouseActive, setIsMouseActive] = useState(false)

  useEffect(() => {
    // Check if document has dark class on html element
    const checkTheme = () => {
      const isDark =
        document.documentElement.classList.contains("dark") || !document.documentElement.classList.contains("light")
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
    const particleCount = Math.min(Math.floor((width * height) / 10000), 150)

    // Color palette based on theme
    const primaryHue = isDarkMode ? 196 : 196 // Cyan
    const secondaryHue = isDarkMode ? 270 : 270 // Purple
    const tertiaryHue = isDarkMode ? 220 : 220 // Blue

    const hues = [primaryHue, secondaryHue, tertiaryHue]

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5
      const hue = hues[Math.floor(Math.random() * hues.length)]
      const saturation = 80
      const lightness = isDarkMode ? 60 : 50

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        baseSize: size,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        hue,
        saturation,
        lightness,
        color: `hsla(${hue}, ${saturation}%, ${lightness}%, ${isDarkMode ? 0.3 : 0.2})`,
        alpha: isDarkMode ? 0.3 : 0.2,
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
      setIsMouseActive(true)

      // Reset mouse active state after 2 seconds of no movement
      setTimeout(() => setIsMouseActive(false), 2000)
    }

    const handleMouseLeave = () => {
      setIsMouseActive(false)
    }

    // Initial setup
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
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

    let hueRotation = 0
    const hueRotationSpeed = 0.1

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Slowly rotate hues for subtle color changes
      hueRotation += hueRotationSpeed
      if (hueRotation >= 360) hueRotation = 0

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX *= -1
          // Add a little randomness when bouncing
          particle.speedX += (Math.random() - 0.5) * 0.01
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY *= -1
          // Add a little randomness when bouncing
          particle.speedY += (Math.random() - 0.5) * 0.01
        }

        // Mouse interaction - particles move away from cursor
        if (isMouseActive) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.speedX -= (dx / distance) * force * 0.1
            particle.speedY -= (dy / distance) * force * 0.1

            // Increase size when affected by mouse
            particle.size = particle.baseSize * (1 + force)

            // Limit max speed
            const maxSpeed = 3
            const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
            if (currentSpeed > maxSpeed) {
              particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
              particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
            }
          } else {
            // Return to base size
            if (particle.size > particle.baseSize) {
              particle.size = Math.max(particle.baseSize, particle.size * 0.95)
            }
          }
        } else {
          // Return to base size when mouse is inactive
          if (particle.size > particle.baseSize) {
            particle.size = Math.max(particle.baseSize, particle.size * 0.95)
          }
        }

        // Gradually return to normal speed
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Apply subtle hue rotation for dynamic color effect
        const adjustedHue = (particle.hue + hueRotation) % 360
        particle.color = `hsla(${adjustedHue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.alpha})`

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
          const maxLineDistance = 100

          if (distance < maxLineDistance) {
            // Calculate opacity based on distance
            const opacity = isDarkMode
              ? 0.15 * (1 - distance / maxLineDistance)
              : 0.1 * (1 - distance / maxLineDistance)

            // Average the colors of the two particles
            const avgHue = (adjustedHue + ((otherParticle.hue + hueRotation) % 360)) / 2

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `hsla(${avgHue}, 70%, 60%, ${opacity})`
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
  }, [dimensions, mousePosition, isMouseActive])

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

