"use client"

import type { ReactNode } from "react"
import { useMobile } from "@/hooks/use-mobile"

// Composant qui affiche du contenu différent selon la taille d'écran
export function Responsive({
  mobile,
  desktop,
}: {
  mobile: ReactNode
  desktop: ReactNode
}) {
  const isMobile = useMobile()

  return <>{isMobile ? mobile : desktop}</>
}

// Composant qui masque le contenu sur mobile
export function HideOnMobile({
  children,
  breakpoint = 768,
}: {
  children: ReactNode
  breakpoint?: number
}) {
  const isMobile = useMobile(breakpoint)

  if (isMobile) return null
  return <>{children}</>
}

// Composant qui masque le contenu sur desktop
export function HideOnDesktop({
  children,
  breakpoint = 768,
}: {
  children: ReactNode
  breakpoint?: number
}) {
  const isMobile = useMobile(breakpoint)

  if (!isMobile) return null
  return <>{children}</>
}

// Composant qui ajuste la taille du texte selon l'écran
export function ResponsiveText({
  children,
  className,
  mobileSize = "text-sm",
  desktopSize = "text-base",
}: {
  children: ReactNode
  className?: string
  mobileSize?: string
  desktopSize?: string
}) {
  const isMobile = useMobile()

  return <span className={`${isMobile ? mobileSize : desktopSize} ${className || ""}`}>{children}</span>
}

