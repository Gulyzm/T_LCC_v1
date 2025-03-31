import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 size={40} className="text-amber-500 animate-spin" />
        <p className="text-muted-foreground">Chargement des outils...</p>
      </div>
    </div>
  )
}

