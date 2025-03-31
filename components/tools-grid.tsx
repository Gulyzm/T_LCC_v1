"use client"

import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"
import { Icon } from "@/components/ui/icon"

const tools = [
  {
    id: 1,
    icon: "Calculator",
    title: "Calculateur de profit",
    description: "Estimez vos gains potentiels",
    features: ["ROI", "Prévisions"],
    link: "https://www.bitget.com/fr/price/l/profit-calculator",
  },
  {
    id: 2,
    icon: "BookOpen",
    title: "Guide Bitget",
    description: "Maîtrisez la plateforme Bitget",
    features: ["Débutant", "Tutoriel"],
    link: "https://lecryptoclub.com/tutobitget.html",
  },
  {
    id: 3,
    icon: "AlertTriangle",
    title: "Erreurs de trading",
    description: "Évitez les pièges courants",
    features: ["Conseils", "Prévention"],
    link: "https://lecryptoclub.com/erreurs-communes.html",
  },
  {
    id: 4,
    icon: "📖",
    title: "Lexique crypto",
    description: "Comprendre les termes crypto",
    features: ["Définitions", "Terminologie"],
    link: "https://lecryptoclub.systeme.io/lexiquecrypto-et-guidegratuit",
  },
  {
    id: 5,
    icon: "🔮",
    title: "Cryptobubbles",
    description: "Visualisez les mouvements du marché",
    features: ["Temps réel", "Market cap"],
    link: "https://cryptobubbles.net/",
  },
  {
    id: 6,
    icon: "💎",
    title: "5 cryptos incontournables",
    description: "Les cryptomonnaies essentielles",
    features: ["Top 5", "Analyse"],
    link: "https://lecryptoclub.com/5cryptos.html",
  },
  {
    id: 7,
    icon: "📊",
    title: "Guide take profit",
    description: "Optimisez vos prises de bénéfices",
    features: ["Stratégie", "Profit"],
    link: "https://lecryptoclub.com/Takeprofit/profit.html",
  },
  {
    id: 8,
    icon: "📚",
    title: "Guide de trading pro",
    description: "Stratégies avancées de trading",
    features: ["Avancé", "Pro"],
    link: "#",
  },
  {
    id: 9,
    icon: "📖",
    title: "Lexique trading",
    description: "Maîtrisez le vocabulaire du trading",
    features: ["Définitions", "Trading"],
    link: "#",
  },
  {
    id: 10,
    icon: "🎯",
    title: "Suis-je prêt pour le trading?",
    description: "Évaluez votre préparation",
    features: ["Auto-évaluation", "Check-list"],
    link: "#",
  },
  {
    id: 11,
    icon: "📱",
    title: "App mobile",
    description: "Tradez où que vous soyez",
    features: ["iOS", "Android"],
    link: "#",
  },
  {
    id: 12,
    icon: "🔍",
    title: "Analyse de marché",
    description: "Comprendre les tendances actuelles",
    features: ["Analyse", "Tendances"],
    link: "#",
  },
]

export default function ToolsGrid() {
  const isMobile = useMobile()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
          features={tool.features}
          link={tool.link}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}

interface ToolCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  link: string
  isMobile: boolean
}

function ToolCard({ icon, title, description, features, link, isMobile }: ToolCardProps) {
  return (
    <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50">
      <div className="mb-4">
        <Icon name={icon as any} size={isMobile ? 28 : 32} className="text-amber-500" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-amber-500 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground mb-4">{description}</p>

      <div className="flex gap-2 mb-6">
        {features.map((feature, index) => (
          <span key={index} className="bg-amber-500/10 text-amber-500 text-xs px-2 md:px-3 py-1 rounded-full">
            {feature}
          </span>
        ))}
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener"
        className="mt-auto px-4 md:px-5 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500/10 transition-colors"
      >
        Explorer
      </Link>
    </div>
  )
}

