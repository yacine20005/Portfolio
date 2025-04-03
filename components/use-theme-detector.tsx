"use client"

import { useEffect, useState } from "react"

export function useThemeDetector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkTheme(darkThemeMediaQuery.matches)

    const listener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches)
    }

    darkThemeMediaQuery.addEventListener("change", listener)

    return () => {
      darkThemeMediaQuery.removeEventListener("change", listener)
    }
  }, [])

  return isDarkTheme
}

