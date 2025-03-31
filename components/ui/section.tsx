import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  size?: "sm" | "md" | "lg" | "xl"
  withContainer?: boolean
}

export function Section({ children, className, id, size = "md", withContainer = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // Base styles
        "relative w-full",

        // Size variants
        size === "sm" && "py-8 md:py-12",
        size === "md" && "py-12 md:py-16",
        size === "lg" && "py-16 md:py-24",
        size === "xl" && "py-20 md:py-32",

        className,
      )}
    >
      {withContainer ? <div className="container mx-auto px-4">{children}</div> : children}
    </section>
  )
}

export function SectionHeader({
  title,
  description,
  centered = true,
  className,
}: {
  title: string
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg text-muted-foreground", centered && "max-w-2xl mx-auto")}>{description}</p>
      )}
    </div>
  )
}

export function SectionDivider({ variant = "subtle" }: { variant?: "subtle" | "dots" | "none" }) {
  if (variant === "none") return null

  return (
    <div className="py-8 flex justify-center">
      {variant === "subtle" && (
        <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      )}

      {variant === "dots" && (
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-amber-500/50" />
          ))}
        </div>
      )}
    </div>
  )
}

