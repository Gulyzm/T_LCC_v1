import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/40 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logocc.jpg" alt="Le Crypto Club" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Le Crypto Club
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre porte d'entrée vers la liberté financière dans l'univers des cryptomonnaies.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Youtube size={18} />} label="YouTube" />
              <SocialLink href="#" icon={<Discord size={18} />} label="Discord" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Liens Rapides</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Accueil" />
              <FooterLink href="/equipe" label="Notre Équipe" />
              <FooterLink href="/outils" label="Nos Outils" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez nos analyses et conseils crypto directement dans votre boîte mail.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-background/30 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 px-3 py-1 bg-amber-500 text-white rounded-md text-sm"
                >
                  S'abonner
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Le Crypto Club. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-amber-500 transition-colors">
              Mentions Légales
            </Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors"
    >
      {icon}
    </Link>
  )
}

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
        {label}
      </Link>
    </li>
  )
}

