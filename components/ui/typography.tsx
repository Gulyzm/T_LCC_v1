import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6",
        "bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl font-bold leading-tight mb-4",
        "bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn("text-xl font-semibold mb-3", className)}>{children}</h3>
}

export function H4({ children, className }: TypographyProps) {
  return <h4 className={cn("text-lg font-medium mb-2", className)}>{children}</h4>
}

export function Paragraph({ children, className }: TypographyProps) {
  return <p className={cn("text-base leading-relaxed mb-4 text-muted-foreground", className)}>{children}</p>
}

export function Lead({ children, className }: TypographyProps) {
  return <p className={cn("text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground", className)}>{children}</p>
}

export function Small({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

export function Gradient({ children, className }: TypographyProps) {
  return (
    <span className={cn("bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent", className)}>
      {children}
    </span>
  )
}

