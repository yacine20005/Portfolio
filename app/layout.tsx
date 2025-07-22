import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingElements } from "@/components/floating-elements"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL('https://yacine-hamadouche.me'),
  title: {
    default: "Yacine Hamadouche | Étudiant en Informatique",
    template: "%s | Yacine Hamadouche - Portfolio"
  },
  description:
    "Portfolio de Yacine Hamadouche, étudiant en informatique à l'Université Gustave Eiffel et développeur passionné qui transforme le café en code.",
  keywords: [
    "Yacine Hamadouche",
    "développeur full-stack",
    "étudiant informatique",
    "développeur web",
    "React",
    "Next.js",
    "Python",
    "développement mobile",
    "Université Gustave Eiffel",
    "portfolio développeur",
    "alternance informatique",
    "développeur junior",
    "programmeur",
    "TypeScript",
    "JavaScript",
    "développement front-end",
    "développement back-end"
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: 'https://yacine-hamadouche.me',
    siteName: 'Yacine Hamadouche - Portfolio',
    title: 'Yacine Hamadouche | Étudiant en Informatique & Développeur',
    description: 'Portfolio de Yacine Hamadouche, étudiant en informatique à l\'Université Gustave Eiffel et développeur passionné qui transforme le café en code.',
    images: [
      {
        url: '/placeholder-user.jpg',
        width: 1200,
        height: 630,
        alt: 'Yacine Hamadouche - Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yacine Hamadouche | Étudiant en Informatique & Développeur',
    description: 'Portfolio de Yacine Hamadouche, étudiant en informatique et développeur passionné qui transforme le café en code.',
    images: ['/placeholder-user.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://yacine-hamadouche.me" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <FloatingElements />
          {children}
          <Analytics />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yacine Hamadouche",
              "url": "https://yacine-hamadouche.me",
              "jobTitle": "Étudiant en Informatique & Développeur",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "Université Gustave Eiffel"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Université Gustave Eiffel"
              },
              "knowsAbout": [
                "Web Development",
                "Mobile Development",
                "React",
                "Next.js",
                "Python",
                "TypeScript",
                "Full-Stack Development"
              ],
              "sameAs": [
                "https://github.com/yacine20005",
                "https://linkedin.com/in/yacine-hamadouche"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
