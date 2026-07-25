import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/raleway/400.css"
import "@/app/globals.css"
import { MicrosoftClarity } from "@/components/microsoft-clarity"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { LanguageProvider } from "@/components/providers/language-context"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://yacine-hamadouche.me"),
  title: {
    default: "Yacine Hamadouche | Computer Science Student & Developer",
    template: "%s | Yacine Hamadouche - Portfolio",
  },
  description:
    "Portfolio of Yacine Hamadouche, a computer science student and passionate developer focused on full-stack web and mobile applications.",
  keywords: [
    "Yacine Hamadouche",
    "full-stack developer",
    "computer science student",
    "web developer",
    "React",
    "Next.js",
    "Python",
    "mobile development",
    "portfolio",
    "TypeScript",
    "JavaScript",
    "front-end development",
    "back-end development",
    "software engineering",
  ],
  authors: [{ name: "Yacine Hamadouche", url: "https://yacine-hamadouche.me" }],
  creator: "Yacine Hamadouche",
  publisher: "Yacine Hamadouche",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yacine-hamadouche.me",
    siteName: "Yacine Hamadouche - Portfolio",
    title: "Yacine Hamadouche | Computer Science Student & Developer",
    description:
      "Portfolio of Yacine Hamadouche, a computer science student and developer building full-stack web and mobile projects.",
    images: [
      {
        url: "/placeholder-user.jpg",
        width: 1200,
        height: 630,
        alt: "Yacine Hamadouche - Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacine Hamadouche | Computer Science Student & Developer",
    description: "Full-stack web & mobile development projects and experience.",
    images: ["/placeholder-user.jpg"],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (window.location.pathname !== "/") return;
                document.documentElement.classList.add("preloader-lock", "lenis-stopped");
                if ("scrollRestoration" in window.history) {
                  window.history.scrollRestoration = "manual";
                }
                window.scrollTo(0, 0);
              })();
            `,
          }}
        />
        <link rel="canonical" href="https://yacine-hamadouche.me" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
        <MicrosoftClarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Yacine Hamadouche Portfolio",
                  url: "https://yacine-hamadouche.me",
                  description:
                    "Portfolio of Yacine Hamadouche showcasing full-stack web and mobile projects.",
                  inLanguage: "en",
                },
                {
                  "@type": "Person",
                  name: "Yacine Hamadouche",
                  url: "https://yacine-hamadouche.me",
                  jobTitle: "Computer Science Student & Developer",
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Gustave Eiffel University",
                  },
                  knowsAbout: [
                    "Web Development",
                    "Mobile Development",
                    "React",
                    "Next.js",
                    "Python",
                    "TypeScript",
                    "Full-Stack Development",
                  ],
                  sameAs: [
                    "https://github.com/yacine20005",
                    "https://linkedin.com/in/yacine-hamadouche",
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
