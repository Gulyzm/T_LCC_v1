import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { ElementType } from "react"

// Types pour les icônes
type IconName = keyof typeof LucideIcons
type IconProps = {
  name: IconName
  size?: number
  className?: string
  color?: string
}

// Composant d'icône unifié
export function Icon({ name, size = 24, className, color }: IconProps) {
  const LucideIcon = LucideIcons[name] as ElementType

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`)
    return null
  }

  return <LucideIcon size={size} className={cn("", className)} color={color} />
}

// Composant d'icône avec fond
export function IconWithBackground({
  name,
  size = 24,
  className,
  bgClassName,
  color,
}: IconProps & { bgClassName?: string }) {
  return (
    <div className={cn("flex items-center justify-center rounded-full p-2 bg-amber-500/10", bgClassName)}>
      <Icon name={name} size={size} className={cn("text-amber-500", className)} color={color} />
    </div>
  )
}

// Composant pour remplacer les emojis par des icônes Lucide
export function CryptoIcon({ type, className }: { type: string; className?: string }) {
  // Mapping des emojis vers des icônes Lucide
  const iconMap: Record<string, IconName> = {
    "🎯": "Target",
    "💡": "Lightbulb",
    "🔒": "Lock",
    "📈": "TrendingUp",
    "💰": "Wallet",
    "👨‍🏫": "GraduationCap",
    "💬": "MessageCircle",
    "📱": "Smartphone",
    "📊": "BarChart",
    "🎯": "Target",
    "🔍": "Search",
    "⚠️": "AlertTriangle",
    "📚": "BookOpen",
    "📖": "Book",
    "🔮": "Globe",
    "💎": "Diamond",
  }

  const iconName = iconMap[type] || "HelpCircle"

  return <Icon name={iconName} className={cn("text-amber-500", className)} />
}

