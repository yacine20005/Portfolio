"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create geometric objects
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
    ]

    // Materials with different colors
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x3a86ff, roughness: 0.5, metalness: 0.8 }),
      new THREE.MeshStandardMaterial({ color: 0xff9e00, roughness: 0.3, metalness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x8338ec, roughness: 0.4, metalness: 0.7 }),
    ]

    // Create meshes
    const meshes: THREE.Mesh[] = []

    for (let i = 0; i < 3; i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i])

      // Position meshes in different areas
      mesh.position.x = (i - 1) * 3
      mesh.position.y = (i % 2) * 1.5 - 0.75
      mesh.position.z = -2 - i

      scene.add(mesh)
      meshes.push(mesh)
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Add point light (glowing effect)
    const pointLight = new THREE.PointLight(0xff9e00, 1, 10)
    pointLight.position.set(1, 1, 1)
    scene.add(pointLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.003 * (index + 1)
        mesh.rotation.y += 0.005 * (index + 1)
      })

      // Move point light in a circular pattern
      const time = Date.now() * 0.001
      pointLight.position.x = Math.sin(time) * 3
      pointLight.position.y = Math.cos(time) * 2
      pointLight.position.z = Math.sin(time * 0.5) * 2

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10" />
}

