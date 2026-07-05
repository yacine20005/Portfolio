import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
      },
      screens: {
        "2xl": "1078px",
      },
    },
    extend: {
      colors: {
        obsidian: "#000000",
        paper: "#ffffff",
        inkstone: "#181818",
        "felt-gray": "#6d6d6d",
        "slate-pill": "#636363",
        "ash-mist": "#9a9a9a",
        pewter: "#808080",
        "iridescent-fade": "#a02d25",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        raleway: ["Raleway", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.19" }],
        "body-sm": ["16px", { lineHeight: "1.15" }],
        body: ["18px", { lineHeight: "1.21" }],
        subheading: ["39px", { lineHeight: "1.19" }],
        "subheading-lg": ["45px", { lineHeight: "1.15" }],
        "heading-sm": ["54px", { lineHeight: "1.39" }],
        heading: ["78px", { lineHeight: "1.1" }],
        "heading-lg": ["94px", { lineHeight: "0.76" }],
        display: ["130px", { lineHeight: "0.85", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        none: "0px",
        pill: "75px",
      },
      borderWidth: {
        hairline: "1px",
      },
      keyframes: {
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rotate-slow": "rotate-slow 12s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

