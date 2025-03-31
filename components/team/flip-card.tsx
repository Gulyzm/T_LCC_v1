"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, Calendar, User, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface FlipCardProps {
  member: {
    id: number
    name: string
    role: string
    image: string
    description: string
    isFounder?: boolean
  }
  onImageLoad: (id: number) => void
  isImageLoaded: boolean
  isMobile: boolean
}

export function FlipCard({ member, onImageLoad, isImageLoaded, isMobile }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez envoyer les données à votre backend
    alert(`Demande d'appel avec ${member.name} envoyée!`)
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    })
    setIsFlipped(false)
  }

  return (
    <div className={cn("flip-card w-full h-full cursor-pointer perspective-1000", isFlipped && "is-flipped")}>
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
        {/* Front of card */}
        <div className="flip-card-front absolute w-full h-full backface-hidden" onClick={handleFlip}>
          <div className="bg-gradient-to-br from-secondary/60 to-secondary/30 border border-border/40 rounded-lg overflow-hidden shadow-md h-full">
            <div className="relative h-48 overflow-hidden">
              {/* Placeholder pendant le chargement */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
                </div>
              )}
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover ${isImageLoaded ? "opacity-100" : "opacity-0"} transition-transform duration-300`}
                loading="lazy"
                onLoad={() => onImageLoad(member.id)}
                quality={isMobile ? 75 : 85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-amber-500 text-sm">{member.role}</p>
              </div>
            </div>

            <div className="p-4 border-t border-border/20 flex flex-col h-[calc(100%-12rem)]">
              <p className="text-sm text-white/80 mb-4 flex-grow overflow-y-auto">{member.description}</p>
              <div className="mt-auto pt-2">
                <button
                  className="w-full px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full hover:bg-amber-500/20 transition-colors text-sm flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFlip()
                  }}
                >
                  <Phone size={16} />
                  <span>Planifier un appel</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-secondary/80 to-secondary/50 border border-amber-500/30 rounded-lg overflow-hidden shadow-md h-full p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-amber-500">Contacter {member.name}</h3>
              <button onClick={handleFlip} className="p-1 rounded-full hover:bg-secondary/80" aria-label="Fermer">
                <X size={18} className="text-white/80" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/70" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-background/20 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/70" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-background/20 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/70" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-background/20 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/70" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-background/20 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message (optionnel)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-background/20 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500 text-sm resize-none"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="mt-5 py-2 flex items-center justify-center gap-2 bg-amber-500 text-white rounded-lg font-medium transition-all hover:bg-amber-600 active:scale-[0.98]"
              >
                <Send size={16} />
                <span>Envoyer la demande</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

