"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqItems = [
  {
    id: 1,
    icon: "🔒",
    question: "Comment sécuriser mes cryptomonnaies ?",
    answer:
      "Nous vous enseignons les meilleures pratiques de sécurité : utilisation de portefeuilles hardware, authentification à deux facteurs, et stratégies de stockage sécurisé.",
  },
  {
    id: 2,
    icon: "📈",
    question: "Puis-je commencer sans expérience ?",
    answer:
      "Absolument ! Notre formation commence par les bases et progresse à votre rythme. Nous accompagnons aussi bien les débutants que les traders expérimentés.",
  },
  {
    id: 3,
    icon: "💰",
    question: "Quel capital minimum pour débuter ?",
    answer:
      "Nous recommandons de commencer avec un capital que vous êtes prêt à risquer. L'important est d'abord d'apprendre et de comprendre le marché avant d'investir.",
  },
  {
    id: 4,
    icon: "👨‍🏫",
    question: "Comment se déroule le coaching ?",
    answer:
      "Le coaching comprend des sessions personnalisées, un accès à notre Discord privé, des analyses de marché régulières et un suivi continu de votre progression.",
  },
  {
    id: 5,
    icon: "💬",
    question: "Comment accéder au Discord privé ?",
    answer:
      "L'accès au Discord privé est automatiquement fourni après votre inscription. Vous recevrez un lien d'invitation exclusif et un accès immédiat à notre communauté de traders.",
  },
  {
    id: 6,
    icon: "📱",
    question: "Existe-t-il une application mobile ?",
    answer:
      "Oui, notre application mobile est disponible sur iOS et Android. Elle vous permet d'accéder à vos analyses, suivre vos investissements et recevoir des alertes en temps réel.",
  },
  {
    id: 7,
    icon: "📊",
    question: "Quels outils sont inclus dans l'abonnement ?",
    answer:
      "Votre abonnement inclut l'accès à tous nos outils exclusifs : analyse de portefeuille, calculateur de profit, guides complets, lexiques crypto et trading, et bien plus encore.",
  },
  {
    id: 8,
    icon: "🎯",
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "Les résultats varient selon votre engagement et votre apprentissage. Nous fournissons tous les outils et le support nécessaires, mais la pratique et la patience sont essentielles pour réussir.",
  },
]

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Questions fréquentes
        </h2>
        <p className="text-center text-muted-foreground mb-12">Tout ce que vous devez savoir sur Le Crypto Club</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              icon={item.icon}
              question={item.question}
              answer={item.answer}
              isActive={activeId === item.id}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  icon: string
  question: string
  answer: string
  isActive: boolean
  onClick: () => void
}

function FaqItem({ icon, question, answer, isActive, onClick }: FaqItemProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-xl overflow-hidden transition-all duration-300",
        isActive && "bg-amber-500/5 border-amber-500/30",
      )}
    >
      <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={onClick}>
        <span className="text-2xl">{icon}</span>
        <h3 className="flex-1 font-medium">{question}</h3>
        <ChevronDown
          size={18}
          className={cn("text-amber-500 transition-transform duration-300", isActive && "rotate-180")}
        />
      </div>
      <div className={cn("max-h-0 overflow-hidden transition-all duration-300", isActive && "max-h-40 p-4 pt-0")}>
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

