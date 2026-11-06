"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/providers/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ArrowUp, Mail, Github, Linkedin, Check, Copy } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { dictionary, language } = useLanguage()
  const { footerData, navLinks } = dictionary
  const { scrollToSection } = useSmoothScroll()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ya.hamadouche@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const copyrightText = footerData.copyright.replace("{year}", currentYear.toString())

  return (
    <footer className="relative bg-obsidian border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Ambient Glow Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vw] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none z-0" />

      {/* Massive Brand Watermark Backdrop ("YACINE") */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-1vw] sm:bottom-[-2vw] md:bottom-[-3vw] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden leading-none"
      >
        <span
          className="font-inter font-black text-[25vw] sm:text-[21vw] md:text-[22vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/25 via-white/8 to-transparent uppercase block"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)"
          }}
        >
          YACINE
        </span>
      </div>

      {/* Main Content Layer */}
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10 relative z-10">
        {/* Navigation & Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info & Direct Email */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-xl font-inter font-semibold text-paper tracking-tight inline-block hover:text-felt-gray transition-colors"
            >
              Yacine._
            </Link>
            <p className="text-sm text-felt-gray leading-relaxed max-w-sm">
              {footerData.title}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="mailto:ya.hamadouche@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-paper hover:text-felt-gray transition-colors"
              >
                <Mail className="w-4 h-4 text-felt-gray" />
                <span>ya.hamadouche@gmail.com</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-full border border-white/15 text-white/60 hover:text-paper hover:border-white/30 bg-white/[0.02] transition-colors"
                title={language === "fr" ? "Copier l'email" : "Copy email"}
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {isHomePage ? (
                navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-felt-gray hover:text-paper transition-colors duration-300 py-1"
                  >
                    {link.name}
                  </a>
                ))
              ) : (
                <Link
                  href="/"
                  className="text-felt-gray hover:text-paper transition-colors duration-300 py-1 col-span-2"
                >
                  {language === "fr" ? "Retour au Portfolio" : "Back to Portfolio"}
                </Link>
              )}
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/yacine20005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-felt-gray hover:text-paper transition-colors duration-300 py-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yacine-hamadouche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-felt-gray hover:text-paper transition-colors duration-300 py-1"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{copyrightText}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-paper transition-colors">
              {language === "fr" ? "Mentions légales" : "Legal notice"}
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-paper transition-colors">
              {language === "fr" ? "Confidentialité" : "Privacy policy"}
            </Link>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center gap-2 text-white/50 hover:text-paper transition-colors py-2 px-3 rounded-full border border-white/5 hover:border-white/20 bg-white/[0.01]"
            >
              <span>{language === "fr" ? "Retour en haut" : "Back to top"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
