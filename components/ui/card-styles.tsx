import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "feature" | "pricing" | "testimonial" | "team"
  hover?: boolean
}

export function StyledCard({ children, className, variant = "default", hover = true }: CardProps) {
  return (
    <div
      className={cn(
        // Base styles for all cards
        "rounded-xl overflow-hidden border transition-all duration-300",

        // Variant-specific styles
        variant === "default" && "bg-gradient-to-br from-secondary/50 to-secondary/30 border-border/40",
        variant === "feature" && "bg-gradient-to-br from-secondary/50 to-secondary/30 border-border/40 p-6",
        variant === "pricing" && "border-border/40 shadow-md",
        variant === "testimonial" && "bg-gradient-to-br from-secondary/50 to-secondary/30 border-border/40 p-6",
        variant === "team" && "bg-gradient-to-br from-secondary/60 to-secondary/30 border-border/40 shadow-md",

        // Hover effects if enabled
        hover && "hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50",
        hover && variant !== "pricing" && "hover:-translate-y-1",
        hover && variant === "pricing" && "hover:-translate-y-2",

        // Additional custom classes
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-xl font-semibold mb-3", className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative w-full aspect-video overflow-hidden", className)}>
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-4 border-t border-border/20", className)}>{children}</div>
}

