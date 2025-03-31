"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: 1,
    name: "@bricealoth3344",
    image: "/assets/commentaires/Commentaire1.png",
    content:
      "Pour avoir failli craquer sur des formations et accompagnement à 6000 ou 7000 euro. Et j'ai rejoint la communauté de Yann plusieurs point effectivement l'expérience est finalement bien plus important que le reste, la gestion des émotions encore plus.",
  },
  {
    id: 2,
    name: "@DesoilMathieu",
    image: "/assets/commentaires/Commentaire2.png",
    content:
      "Un mois que je suis inscrit et je m'estime chanceux d'avoir choisi ce groupe. Yann et son équipe prennent le tps de te donner un accompagnement personnalisé. La communauté est également active et par conséquent c'est adapté aux novices. Je recommande évidemment !",
  },
  {
    id: 3,
    name: "@antoniodasilva3933",
    image: "/assets/commentaires/Commentaire3.png",
    content: "Je valide l'équipe de Yann est géniale, toujours à l'écoute bienveillante et pleine de connaissance ❤️",
  },
  {
    id: 4,
    name: "@wahibas.3145",
    image: "/assets/commentaires/commentaire7.png",
    content:
      "wouaw, je suis trop contente d'être tombée sur vous. votre passion pour ce monde très complexe est contagieuse. Trop hâte de voir toutes les vidéos 😊 Un grand merci pour cette formation gratuite. Vous êtes les meilleurs!!!",
  },
  {
    id: 5,
    name: "@fabriceCUEILLE",
    image: "/assets/commentaires/Commentaire5.png",
    content:
      "Super TEAM oui !!! j'avais essayé un groupe crypto à 40 euros/mois mais franchement, au delà du prix que je pouvais me permettre, j'ai surtout trouvé avec Yann un groupe avec qui je matche à 150% ... c'est le plus important. Un accompagnement de ouf au quotidien pour apprendre et investir de la façon la plus adaptée. Foncez les gars !!!!",
  },
  {
    id: 6,
    name: "@JossuaGoetz",
    image: "/assets/commentaires/Commentaire6.png",
    content: "Meilleur groupe au monde, rentabilisé en 2h je dirais !!",
  },
  {
    id: 7,
    name: "@basiltire1246",
    image: "/assets/commentaires/Commentaire4.png",
    content:
      "Plus qu'un simple groupe crypto, c'est une grande famille qui se pousse vers le haut. Que de la bienveillance, chacun apporte ça petite pierre à l'édifice pour que nous grandissions ensemble. Yann, Krys et Yas font un boulot monstrueux en demandant quelques pacotilles en retour. Ils ont réussi à construire une communauté exceptionnelle et je leur en remercie 1000x pour ça 😊 Merci ! 🙏",
  },
]

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const isMobile = useMobile()

  // Sur mobile, on affiche moins de témoignages par défaut
  const [displayCount, setDisplayCount] = useState(isMobile ? 3 : testimonials.length)

  const visibleTestimonials = testimonials.slice(0, displayCount)

  const loadMore = () => {
    setDisplayCount(testimonials.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          L'avis de nos membres
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Découvrez les retours d'expérience de notre communauté
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              image={testimonial.image}
              content={testimonial.content}
              onImageClick={() => setSelectedImage(testimonial.image)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Bouton "Voir plus" sur mobile si tous les témoignages ne sont pas affichés */}
        {isMobile && displayCount < testimonials.length && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-transparent border border-amber-500 rounded-xl font-medium text-amber-500 hover:bg-amber-500/10"
            >
              Voir plus de témoignages
            </button>
          </div>
        )}
      </div>

      {/* Image Modal - Optimisé pour mobile */}
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
          <div className="relative w-full max-w-[95vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Témoignage"
              width={1200}
              height={900}
              className="object-contain max-h-[90vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              quality={isMobile ? 90 : 100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  image: string
  content: string
  onImageClick: () => void
  isMobile: boolean
}

function TestimonialCard({ name, image, content, onImageClick, isMobile }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50">
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
          <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {isMobile ? "Agrandir" : "Cliquez pour agrandir"}
          </span>
        </div>
      </div>
      <h3 className="text-amber-500 font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-3 md:line-clamp-4">{content}</p>
    </div>
  )
}

