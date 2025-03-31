import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background/80 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-lg text-muted-foreground">Notre équipe d'experts crypto est à votre écoute</p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}

