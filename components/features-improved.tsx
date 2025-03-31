import { StyledCard, CardTitle, CardContent } from "@/components/ui/card-styles"
import { Icon } from "@/components/ui/icon"
import { Section, SectionHeader } from "@/components/ui/section"

export default function FeaturesImproved() {
  return (
    <Section size="lg">
      <SectionHeader
        title="Pourquoi nous choisir"
        description="Des solutions adaptées à tous les niveaux pour réussir dans l'univers crypto"
      />

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon="Target"
          title="Expertise personnalisée"
          description="Un accompagnement sur mesure adapté à votre niveau et vos objectifs d'investissement en cryptomonnaies."
        />
        <FeatureCard
          icon="Lightbulb"
          title="Formation continue"
          description="Accès à des ressources éducatives exclusives et mises à jour régulières sur les dernières tendances du marché."
        />
        <FeatureCard
          icon="Lock"
          title="Sécurité maximale"
          description="Apprenez les meilleures pratiques pour sécuriser vos investissements et protéger vos actifs numériques."
        />
      </div>
    </Section>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <StyledCard variant="feature">
      <CardContent>
        <div className="mb-4">
          <Icon name={icon as any} size={32} className="text-amber-500" />
        </div>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </StyledCard>
  )
}

