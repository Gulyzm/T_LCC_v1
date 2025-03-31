"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import { FlipCard } from "./flip-card"

const teamMembers = [
  {
    id: 1,
    name: "Y. Pellenard",
    role: "Fondateur du Crypto Club",
    image: "/assets/team/joseph-gonzalez.jpg",
    description: "Expert en analyse technique et fondamentale avec plus de 7 ans d'expérience dans les marchés crypto.",
    isFounder: true,
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:contact@lecryptoclub.com",
    },
  },
  {
    id: 2,
    name: "Gulyzm",
    role: "Fondateur & Directeur Technique",
    image: "/assets/team/jonas-kakaroto.jpg",
    description: "Spécialiste en développement blockchain et en architecture de solutions crypto innovantes.",
    isFounder: true,
    socials: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Krys 3",
    role: "Trader",
    image: "/assets/team/christian-buehner.jpg",
    description: "Trader expérimenté spécialisé dans les stratégies de swing trading et d'analyse des tendances.",
    socials: {
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Wyatt",
    role: "Trader",
    image: "/assets/team/charlie-green.jpg",
    description: "Expert en trading algorithmique et en développement de stratégies automatisées.",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "PapaDegen",
    role: "Expert en DeFi",
    image: "/assets/team/jeffrey-keenan.jpg",
    description: "Pionnier de la finance décentralisée avec une connaissance approfondie des protocoles DeFi.",
    socials: {
      twitter: "https://twitter.com",
    },
  },
  {
    id: 6,
    name: "Ben",
    role: "Trader Pro",
    image: "/assets/team/mitchell-luo.jpg",
    description: "Trader professionnel spécialisé dans l'analyse des marchés émergents et des nouvelles opportunités.",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
]

export default function TeamSection() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({})
  const [isClient, setIsClient] = useState(false)
  const isMobile = useMobile()

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleImageLoad = (id: number) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }))
  }

  const founders = teamMembers.filter((member) => member.isFounder)
  const members = teamMembers.filter((member) => !member.isFounder)

  if (!isClient) {
    // Rendu côté serveur ou pendant l'hydratation
    return (
      <div className="space-y-20">
        {/* Version statique pour le SSR */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Fondateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">{/* Contenu statique */}</div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Notre Équipe d'Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{/* Contenu statique */}</div>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-20">
      {/* Founders Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Fondateurs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="bg-gradient-to-br from-secondary/80 to-secondary/40 border border-amber-500/30 rounded-xl overflow-hidden shadow-md"
            >
              <div className={`flex flex-col ${isMobile ? "" : "md:flex-row"}`}>
                <div className={`relative w-full ${isMobile ? "h-60" : "md:w-1/2 md:h-auto"} overflow-hidden`}>
                  {/* Placeholder pendant le chargement */}
                  {!imagesLoaded[founder.id] && (
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
                    </div>
                  )}
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    sizes={`(max-width: 768px) 100vw, ${isMobile ? "100vw" : "400px"}`}
                    className={`object-cover ${imagesLoaded[founder.id] ? "opacity-100" : "opacity-0"}`}
                    priority={founder.id <= 2}
                    onLoad={() => handleImageLoad(founder.id)}
                    quality={isMobile ? 80 : 90}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent ${isMobile ? "" : "md:bg-gradient-to-r"}`}
                  />
                </div>

                <div className={`relative p-6 ${isMobile ? "" : "md:w-1/2"}`}>
                  <h3 className="text-2xl font-bold text-amber-400">{founder.name}</h3>
                  <p className="text-amber-300 font-medium mb-3">{founder.role}</p>
                  <p className="text-sm text-white/90">{founder.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Notre Équipe d'Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="h-[450px]">
              <FlipCard
                member={member}
                onImageLoad={handleImageLoad}
                isImageLoaded={!!imagesLoaded[member.id]}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

