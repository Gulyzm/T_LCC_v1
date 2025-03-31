"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fonction pour vérifier si l'écran est de taille mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Vérification initiale
    checkMobile()

    // Ajouter un écouteur d'événement pour les changements de taille d'écran
    window.addEventListener("resize", checkMobile)

    // Nettoyage
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

