"use client"

import React, { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { ProjectPreloader } from "@/components/ui/project-preloader"

interface ProjectPageShellProps {
  themeClass: string
  icon: React.ReactNode
  accentColor: string
  title: string
  children: React.ReactNode
}

export function ProjectPageShell({
  themeClass,
  icon,
  accentColor,
  title,
  children,
}: ProjectPageShellProps) {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  return (
    <div className={`min-h-screen bg-obsidian text-paper overflow-hidden ${themeClass}`}>
      {loading && (
        <ProjectPreloader
          icon={icon}
          accentColor={accentColor}
          title={title}
          onReveal={() => setContentVisible(true)}
          onComplete={() => setLoading(false)}
        />
      )}

      <div className={`transition-all duration-300 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
