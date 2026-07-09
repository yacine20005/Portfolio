"use client"

import { useLanguage } from "@/components/providers/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full p-0.5 font-mono text-[9px] font-semibold tracking-wider select-none shrink-0">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
          language === "fr"
            ? "bg-white/10 text-paper"
            : "text-white/40 hover:text-white/80"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-white/10 text-paper"
            : "text-white/40 hover:text-white/80"
        }`}
      >
        EN
      </button>
    </div>
  )
}
