import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "XiMedia - Boost Every Platform",
  description: "Boost growth across the platforms your audience already uses.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon_io (1)/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io (1)/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io (1)/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon_io (1)/apple-touch-icon.png",
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io (1)/site.webmanifest',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
