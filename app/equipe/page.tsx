import type { Metadata } from "next"
import TeamSection from "@/components/team/team-section"

export const metadata: Metadata = {
  title: "Notre Équipe | Le Crypto Club",
  description: "Découvrez l'équipe d'experts du Crypto Club qui vous accompagne dans votre parcours crypto",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background/80 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Notre Équipe d'Experts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe passionnée de professionnels dédiés à votre réussite dans l'univers des cryptomonnaies
          </p>
        </div>

        <TeamSection />
      </div>
    </main>
  )
}

