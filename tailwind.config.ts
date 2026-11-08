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
        "felt-gray": "#6d6d6d",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.19" }],
        "body-sm": ["16px", { lineHeight: "1.15" }],
        body: ["18px", { lineHeight: "1.21" }],
      },
      borderRadius: {
        none: "0px",
        pill: "75px",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
