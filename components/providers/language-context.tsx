"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations, TranslationDictionary } from "@/lib/translations"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dictionary: TranslationDictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Language
    if (saved === "fr" || saved === "en") {
      setLanguageState(saved)
      return
    }
    // Detect device/browser language for first-time visitors
    const browserLang = navigator.language?.slice(0, 2).toLowerCase()
    if (browserLang === "en") {
      setLanguageState("en")
    } else {
      setLanguageState("fr") // Default to French for all other languages
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("portfolio-lang", lang)
  }

  const dictionary = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
