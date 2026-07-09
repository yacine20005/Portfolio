"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useLanguage } from "@/components/providers/language-context"
import { LanguageToggle } from "@/components/ui/language-toggle"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()
  const { dictionary, language } = useLanguage()
  const { navLinks } = dictionary
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false)
    if (isHomePage) {
      scrollToSection(e, href)
    }
  }

  const linkClass =
    "text-caption font-inter font-normal text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-[0.8s] ease-signature ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-5 md:px-10 max-w-[1078px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-inter font-normal text-paper hover:text-felt-gray transition-colors duration-[0.4s] ease tracking-tight"
          >
            Yacine._
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={linkClass}
                >
                  {link.name}
                </a>
              ))
            ) : (
              <Link href="/" className={linkClass}>
                {language === "fr" ? "← Retour" : "← Back"}
              </Link>
            )}
            <LanguageToggle />
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-felt-gray transition-all duration-[0.4s] ease-signature ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-felt-gray transition-all duration-[0.4s] ease-signature ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-felt-gray transition-all duration-[0.4s] ease-signature ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-obsidian/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-[0.6s] ease-signature md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {isHomePage ? (
          navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-inter font-light text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
              style={{
                transitionDelay: menuOpen ? `${i * 0.05}s` : "0s",
              }}
            >
              {link.name}
            </a>
          ))
        ) : (
          <Link
            href="/"
            className="text-2xl font-inter font-light text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
          >
            {language === "fr" ? "← Retour au Portfolio" : "← Back to Portfolio"}
          </Link>
        )}

        {/* Mobile contact link & toggle */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <a
            href="mailto:ya.hamadouche@gmail.com"
            className="ghost-pill"
          >
            {language === "fr" ? "Me contacter" : "Get in touch"}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}
