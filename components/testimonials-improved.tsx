"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { StyledCard } from "@/components/ui/card-styles"
import { Section, SectionHeader } from "@/components/ui/section"

const testimonials = [
  {
    id: 1,
    name: "@bricealoth3344",
    image: "/assets/commentaires/Commentaire1.png",
    content:
      "Pour avoir failli craquer sur des formations et accompagnement à 6000 ou 7000 euro. Et j'ai rejoint la communauté de Yann plusieurs point effectivement l'expérience est finalement bien plus important que le reste, la gestion des émotions encore plus.",
  },
  // ... autres témoignages
]

export default function TestimonialsImproved() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Section size="lg">
      <SectionHeader
        title="L'avis de nos membres"
        description="Découvrez les retours d'expérience de notre communauté"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            image={testimonial.image}
            content={testimonial.content}
            onImageClick={() => setSelectedImage(testimonial.image)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Témoignage"
              width={1200}
              height={900}
              className="object-contain max-h-[90vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </Section>
  )
}

interface TestimonialCardProps {
  name: string
  image: string
  content: string
  onImageClick: () => void
}

function TestimonialCard({ name, image, content, onImageClick }: TestimonialCardProps) {
  return (
    <StyledCard variant="testimonial">
      <div
        className="cursor-pointer mb-4 overflow-hidden rounded-lg border border-border/40 relative group"
        onClick={onImageClick}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={`Témoignage de ${name}`}
          width={400}
          height={300}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">Cliquez pour agrandir</span>
        </div>
      </div>
      <h3 className="text-amber-500 font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-4">{content}</p>
    </StyledCard>
  )
}

