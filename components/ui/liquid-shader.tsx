"use client"

import React, { useEffect, useRef } from "react"

export function LiquidShader() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let simulation: any = null

    // Dynamically import to prevent SSR issues in Next.js
    import("webgl-fluid-enhanced").then(({ default: WebGLFluidEnhanced }) => {
      if (!containerRef.current) return

      simulation = new WebGLFluidEnhanced(container)
      
      simulation.setConfig({
        simResolution: 128,
        dyeResolution: 1024,
        densityDissipation: 0.97,
        velocityDissipation: 0.98,
        pressure: 0.8,
        pressureIterations: 20,
        curl: 30,
        splatRadius: 0.25,
        splatForce: 6000,
        shading: true,
        colorful: false,
        colorPalette: ["#a0e0ab", "#ffac2e", "#a52d25"], // emerald green, amber, deep oxblood
        transparent: true,
        bloom: true,
        bloomIntensity: 0.8,
        bloomThreshold: 0.6,
        bloomSoftKnee: 0.7,
        sunrays: true,
        sunraysWeight: 1.0,
      })

      simulation.start()
      
      // Spawn some initial fluid splats
      simulation.multipleSplats(6)
    })

    return () => {
      if (simulation) {
        try {
          simulation.stop()
        } catch (err) {
          console.warn("Failed to stop WebGL simulation:", err)
        }
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-60">
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  )
}
