"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { useLanguage } from "@/components/providers/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { dictionary } = useLanguage()
  const { footerData } = dictionary

  const copyrightText = footerData.copyright.replace("{year}", currentYear.toString())

  return (
    <footer className="border-t border-hairline border-white/10 py-12 relative z-10 bg-obsidian">
      <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Name */}
          <div>
            <Link
              href="/"
              className="text-base font-inter font-normal text-paper hover:text-felt-gray transition-colors duration-[0.4s] ease"
            >
              {footerData.name}
            </Link>
            <p className="text-caption text-felt-gray mt-1 leading-[1.36]">
              {footerData.title}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:ya.hamadouche@gmail.com"
              className="text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
              aria-label="Email"
            >
              <MdMail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/yacine20005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yacine-hamadouche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-felt-gray hover:text-paper transition-colors duration-[0.4s] ease"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6">
          <p className="text-caption text-felt-gray text-center md:text-left leading-[1.36]">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
