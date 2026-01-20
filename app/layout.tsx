import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Unifyed - Turn Every View Into Revenue",
  description: "The commerce OS that lets creators sell products during live streams, replays, and from their bio link — with one-click checkout and real attribution.",
  keywords: ["live commerce", "creator economy", "social selling", "link in bio", "live shopping", "replay monetization"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
