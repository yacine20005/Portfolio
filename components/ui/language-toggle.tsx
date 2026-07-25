"use client"

import { useLanguage } from "@/components/providers/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex items-center bg-white/[0.04] border border-white/10 rounded-full p-1 font-mono text-[10px] font-semibold tracking-wider select-none shrink-0">
      <button
        onClick={() => setLanguage("fr")}
        aria-label="Passer en français"
        className={`px-3 py-1.5 min-h-[36px] min-w-[36px] inline-flex items-center justify-center rounded-full transition-all duration-300 ${
          language === "fr"
            ? "bg-white/15 text-paper shadow-sm"
            : "text-white/40 hover:text-white/80"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`px-3 py-1.5 min-h-[36px] min-w-[36px] inline-flex items-center justify-center rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-white/15 text-paper shadow-sm"
            : "text-white/40 hover:text-white/80"
        }`}
      >
        EN
      </button>
    </div>
  )
}
