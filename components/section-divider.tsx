import { Layers } from "lucide-react"

export default function SectionDivider() {
  return (
    <div className="relative h-24 flex items-center justify-center my-8">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[30%] h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-shimmer"></div>
        <div className="absolute top-0 right-0 w-[30%] h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-shimmer"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border/40 rounded-full flex items-center justify-center animate-pulse-slow">
        <Layers size={20} className="text-amber-500" />
      </div>
    </div>
  )
}

