import type React from "react"
import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

// Types pour les boutons et liens
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "button" | "subtle" | "icon"
}

// Bouton avec micro-interactions
export function InteractiveButton({ children, className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "relative inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg",
        "after:absolute after:inset-0 after:rounded-lg after:transition-all after:duration-200",
        "after:opacity-0 hover:after:opacity-100 active:scale-[0.98]",

        // Size variants
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",

        // Style variants
        variant === "primary" && "bg-gradient-to-r from-amber-500 to-yellow-500 text-white after:bg-black/10",
        variant === "secondary" && "bg-secondary text-white after:bg-black/10",
        variant === "outline" && "border border-amber-500 text-amber-500 after:bg-amber-500/10",
        variant === "ghost" && "text-amber-500 hover:bg-amber-500/10",

        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

// Lien avec micro-interactions
export function InteractiveLink({ children, className, variant = "default", ...props }: LinkProps) {
  return (
    <a
      className={cn(
        // Base styles
        "relative inline-flex items-center transition-all duration-200",

        // Style variants
        variant === "default" &&
          "text-amber-500 hover:text-amber-400 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full",
        variant === "button" && "px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 active:scale-[0.98]",
        variant === "subtle" && "text-muted-foreground hover:text-amber-500",
        variant === "icon" && "p-2 rounded-full hover:bg-amber-500/10",

        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

// Carte avec effet de survol amélioré
export function InteractiveCard({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100 before:bg-gradient-to-t before:from-amber-500/20 before:to-transparent",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

