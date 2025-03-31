import ToolsGrid from "@/components/tools-grid"

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background/80 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Nos Solutions Crypto
          </h1>
          <p className="text-lg text-muted-foreground">Des outils exclusifs pour optimiser votre expérience crypto</p>
        </div>
        <ToolsGrid />
      </div>
    </main>
  )
}

