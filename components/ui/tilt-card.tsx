"use client"

import React, { useRef, useEffect } from "react"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  maxRotation?: number
  glowColor?: string
}

export function TiltCard({
  children,
  className = "",
  maxRotation = 6, // Subtle tilt is more elegant and professional
  glowColor = "rgba(255, 255, 255, 0.08)",
  style,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Normalize values between -1 and 1
      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = (y / rect.height) * 2 - 1

      // Calculate rotations
      const rotateX = -normalizedY * maxRotation
      const rotateY = normalizedX * maxRotation

      // Update card transform style using smooth 3D perspective
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
      
      // Update glow position and opacity
      glow.style.opacity = "1"
      glow.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0px)`
    }

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      glow.style.opacity = "0"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [maxRotation])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden border border-white/[0.06] bg-white/[0.02] rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out will-change-transform group/card ${className}`}
      style={{ transformStyle: "preserve-3d", ...style }}
      {...props}
    >
      {/* Radial Gradient Glow overlay */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 80%)`,
          left: 0,
          top: 0,
        }}
      />
      
      {/* Content wrapper with preserve-3d to push children forward */}
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </div>
    </div>
  )
}
