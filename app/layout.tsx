import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// Tambahkan import untuk LanguageProvider
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Aliyyulman Jihan | Software Engineer & Game Developer",
  description:
    "Portfolio profesional Aliyyulman Jihan, seorang Software Engineer dan Game Developer dengan pengalaman dalam web development, Unity, backend, dan AI projects.",
  keywords: [
    "Aliyyulman Jihan",
    "Software Engineer",
    "Game Developer",
    "Web Developer",
    "Portfolio",
    "Indonesia",
    "Next.js",
    "Unity",
  ],
  authors: [{ name: "Aliyyulman Jihan" }],
  openGraph: {
    title: "Aliyyulman Jihan | Software Engineer & Game Developer",
    description:
      "Explore portfolio, projects, and achievements of Aliyyulman Jihan — Software Engineer & Game Developer from Indonesia.",
    url: "https://aliyyulworks.vercel.app/",
    siteName: "Aliyyulworks Portfolio",
    images: [
      {
        url: "/assets/profilme-it.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliyyulman Jihan | Software Engineer & Game Developer",
    description:
      "Explore projects and works of Aliyyulman Jihan — Software Engineer & Game Developer.",
    images: ["/assets/profilme-it.png"],
  },
  icons: {
    icon: "/assets/profilme-it.png",
  },
  verification: {
    google: "2xF0Hyv-l072tA-UwL9rky_6vzc55wLY7_SbJNl7LPo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* Tambahkan LanguageProvider di sini */}
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
