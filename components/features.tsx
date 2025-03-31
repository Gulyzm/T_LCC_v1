export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Pourquoi nous choisir
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="Expertise personnalisée"
            description="Un accompagnement sur mesure adapté à votre niveau et vos objectifs d'investissement en cryptomonnaies."
          />
          <FeatureCard
            icon="💡"
            title="Formation continue"
            description="Accès à des ressources éducatives exclusives et mises à jour régulières sur les dernières tendances du marché."
          />
          <FeatureCard
            icon="🔒"
            title="Sécurité maximale"
            description="Apprenez les meilleures pratiques pour sécuriser vos investissements et protéger vos actifs numériques."
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

