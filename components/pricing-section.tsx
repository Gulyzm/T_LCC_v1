"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const plans = [
  {
    name: "Débutant",
    price: "49",
    description: "Idéal pour débuter dans l'univers des cryptomonnaies",
    features: [
      "Accès au Discord privé",
      "Guides pour débutants",
      "Lexique crypto complet",
      "Alertes marché hebdomadaires",
      "1 session de coaching par mois",
    ],
    limitations: ["Analyses techniques limitées", "Pas d'accès aux webinaires VIP", "Support par email uniquement"],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Premium",
    price: "99",
    description: "Notre formule la plus populaire pour progresser rapidement",
    features: [
      "Tout ce qui est inclus dans Débutant",
      "Analyses techniques détaillées",
      "Webinaires bi-mensuels",
      "Accès à l'application mobile",
      "2 sessions de coaching par mois",
      "Support prioritaire 7j/7",
    ],
    limitations: [],
    cta: "Rejoindre maintenant",
    popular: true,
  },
  {
    name: "Expert",
    price: "199",
    description: "Pour les traders sérieux visant l'excellence",
    features: [
      "Tout ce qui est inclus dans Premium",
      "Stratégies de trading avancées",
      "Analyses on-chain exclusives",
      "Accès aux ICOs privées",
      "4 sessions de coaching par mois",
      "Groupe VIP restreint",
      "Support dédié 24/7",
    ],
    limitations: [],
    cta: "Devenir expert",
    popular: false,
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const isMobile = useMobile()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Nos Formules d'Accompagnement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos objectifs et à votre niveau d'expérience
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-muted-foreground"}`}>Mensuel</span>
            <button
              className="relative mx-4 h-6 w-12 rounded-full bg-secondary"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-pressed={isAnnual}
              aria-label="Basculer entre abonnement mensuel et annuel"
            >
              <span
                className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-amber-500 transition-transform ${
                  isAnnual ? "translate-x-6" : ""
                }`}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-sm ${isAnnual ? "text-white" : "text-muted-foreground"}`}>Annuel</span>
              <span className="ml-2 text-xs py-0.5 px-1.5 bg-amber-500 text-white rounded-md">-20%</span>
            </div>
          </div>
        </div>

        {/* Affichage des cartes en fonction de l'appareil */}
        {isMobile ? (
          // Version mobile : carrousel horizontal
          <div className="overflow-x-auto pb-6 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {plans.map((plan, index) => (
                <div key={plan.name} className="w-[280px] flex-shrink-0">
                  <PricingCard plan={plan} isAnnual={isAnnual} index={index} isMobile={true} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Version desktop : grille
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} index={index} isMobile={false} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Besoin d'une solution personnalisée ?{" "}
            <Link href="/contact" className="text-amber-500 hover:underline">
              Contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  plan: {
    name: string
    price: string
    description: string
    features: string[]
    limitations: string[]
    cta: string
    popular: boolean
  }
  isAnnual: boolean
  index: number
  isMobile: boolean
}

function PricingCard({ plan, isAnnual, index, isMobile }: PricingCardProps) {
  const annualPrice = Math.round(Number(plan.price) * 12 * 0.8)

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${
        plan.popular ? "border-2 border-amber-500 shadow-lg shadow-amber-500/20" : "border border-border/40"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAIRE
        </div>
      )}

      <div className="p-6 bg-gradient-to-br from-secondary/80 to-secondary/40">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold">{isAnnual ? annualPrice : plan.price}€</span>
            <span className="text-muted-foreground ml-1">/{isAnnual ? "an" : "mois"}</span>
          </div>
          {isAnnual && (
            <p className="text-xs text-amber-500 mt-1">
              Économisez {Math.round(Number(plan.price) * 12 * 0.2)}€ par an
            </p>
          )}
        </div>

        <Link
          href="https://lecryptoclub.systeme.io/paiemant-cryptoclub"
          className={`block w-full py-2 rounded-lg text-center font-medium transition-all ${
            plan.popular
              ? "bg-amber-500 text-white hover:bg-amber-600"
              : "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
          }`}
        >
          {plan.cta}
        </Link>
      </div>

      <div className="p-6 bg-background/30">
        <p className="font-medium mb-4">Ce qui est inclus :</p>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check size={16} className="text-amber-500 mt-0.5 mr-2 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.limitations.length > 0 && (
          <>
            <p className="font-medium mb-4 text-muted-foreground text-sm">Limitations :</p>
            <ul className="space-y-3">
              {plan.limitations.map((limitation, i) => (
                <li key={i} className="flex items-start text-muted-foreground">
                  <HelpCircle size={16} className="mt-0.5 mr-2 shrink-0 opacity-70" />
                  <span className="text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

