import Hero from "@/components/hero"
import Features from "@/components/features"
// Importez l'un des nouveaux dividers selon votre préférence
import SectionDividerSubtle from "@/components/section-divider-subtle"
import Testimonials from "@/components/testimonials"
import PricingSection from "@/components/pricing-section"
import SectionDivider from "@/components/section-divider"
import Faq from "@/components/faq"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      {/* Option 1: Supprimer complètement le divider */}
      {/* Pas de divider ici */}

      {/* Option 2: Utiliser le divider subtil */}
      <SectionDividerSubtle />

      {/* Option 3: Utiliser le divider avec points */}
      {/* <SectionDividerDots /> */}

      {/* Option 4: Utiliser le divider avec icône crypto */}
      {/* <SectionDividerCrypto /> */}

      <Testimonials />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <Faq />
    </>
  )
}

