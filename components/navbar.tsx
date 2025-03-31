"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Home, Users, Wrench, Phone, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Détection du scroll pour ajouter un effet au navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full backdrop-blur-sm border-b z-50 transition-all duration-300",
        scrolled ? "bg-background/95 border-border/40 shadow-sm" : "bg-background/80 border-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logocc.jpg" alt="Le Crypto Club" width={40} height={40} className="rounded-lg" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/" icon={<Home size={18} />} label="Accueil" />
          <NavLink href="/equipe" icon={<Users size={18} />} label="Équipe" />
          <NavLink href="/outils" icon={<Wrench size={18} />} label="Nos outils" />
          <NavLink href="/contact" icon={<Phone size={18} />} label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Optimisé pour l'accessibilité et les interactions tactiles */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <NavLink href="/" icon={<Home size={24} />} label="Accueil" mobile onClick={() => setMobileMenuOpen(false)} />
        <NavLink
          href="/equipe"
          icon={<Users size={24} />}
          label="Équipe"
          mobile
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          href="/outils"
          icon={<Wrench size={24} />}
          label="Nos outils"
          mobile
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          href="/contact"
          icon={<Phone size={24} />}
          label="Contact"
          mobile
          onClick={() => setMobileMenuOpen(false)}
        />
      </div>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  mobile?: boolean
  onClick?: () => void
}

function NavLink({ href, icon, label, mobile, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 transition-all duration-300",
        mobile
          ? "text-xl py-4 px-8 hover:bg-accent/10 rounded-lg w-64 justify-center" // Plus grand pour faciliter le toucher
          : "text-sm py-1.5 px-3 hover:bg-accent/10 rounded-md",
      )}
      onClick={onClick}
    >
      <span className="text-accent">{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

