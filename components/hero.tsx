"use client"

import Link from "next/link"
import Image from "next/image"
import { Bitcoin } from "lucide-react"
import BackgroundEffect from "./background-effect"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const isMobile = useMobile()

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <BackgroundEffect />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 text-center md:text-left pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Votre porte d'entrée vers la liberté financière
            </h1>
            <p className="text-lg text-muted-foreground">
              Explorez, Apprenez et Investissez dans le monde des crypto-actifs en toute confiance avec un
              accompagnement personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://lecryptoclub.systeme.io/paiemant-cryptoclub"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-amber-500/20 transition-all hover:-translate-y-1"
              >
                Rejoins Le Crypto Club
              </Link>
              <Link
                href="https://lecryptoclub.com/cryptogratuit/index.html"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 bg-transparent border border-amber-500 rounded-xl font-semibold text-amber-500 hover:bg-amber-500/10 transition-all hover:-translate-y-1"
              >
                Ebook gratuit
              </Link>
            </div>
          </div>

          <div className={`relative ${isMobile ? "h-[300px]" : "h-[400px]"}`}>
            <div
              className={`absolute ${isMobile ? "top-0" : "top-0"} left-1/2 -translate-x-1/2 ${isMobile ? "w-[250px] h-[250px]" : "w-[300px] h-[300px]"} animate-float`}
            >
              <div className="relative w-full h-full flex items-center justify-center flex-col">
                <Image
                  src="/logocc.jpg"
                  alt="Le Crypto Club Logo"
                  width={isMobile ? 200 : 250}
                  height={isMobile ? 200 : 250}
                  className="rounded-lg"
                />
                {/* Lignes décoratives en dessous du logo */}
                <div className="-mt-2 w-[200px]">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse-slow mb-2"></div>
                  <div className="h-[2px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse-slow mb-2"></div>
                  <div className="h-[2px] w-[60%] mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse-slow"></div>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div className="absolute top-[5%] left-[10%] p-3 bg-amber-500/10 rounded-full shadow-lg animate-float">
                <Bitcoin size={40} className="text-amber-500" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-amber-500">7</span>
              <span className="text-xs md:text-base text-muted-foreground">Clients satisfaits</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-amber-500">100%</span>
              <span className="text-xs md:text-base text-muted-foreground">Taux de satisfaction</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-amber-500">7/7</span>
              <span className="text-xs md:text-base text-muted-foreground">Support discord</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

