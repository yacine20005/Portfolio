import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingElements } from "@/components/floating-elements"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yacine | Computer Science Student & Developer",
  description:
    "Portfolio website of Yacine, a Computer Science student at Gustave Eiffel University who turns coffee into code.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <FloatingElements />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
