import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CryptoBackground from "@/components/crypto-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Le Crypto Club - Coaching en Cryptomonnaies",
  description: "Votre porte d'entrée vers la liberté financière avec Le Crypto Club",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        {/* Background is positioned first in the DOM to ensure it's behind everything */}
        <CryptoBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {" "}
          {/* Wrapper to ensure content is above background */}
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'