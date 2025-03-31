import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Search, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Le Crypto Club",
  description: "Découvrez nos articles, analyses et conseils sur les cryptomonnaies et le trading",
}

const blogPosts = [
  {
    id: 1,
    title: "Les 5 erreurs à éviter pour les débutants en crypto",
    excerpt:
      "Découvrez les pièges les plus courants qui attendent les nouveaux investisseurs et comment les éviter pour sécuriser vos investissements et maximiser vos chances de succès dans l'univers crypto.",
    image: "/placeholder.svg?height=200&width=400",
    date: "15 mars 2023",
    readTime: "5 min",
    category: "Débutant",
    tags: ["Bitcoin", "Sécurité", "Investissement"],
  },
  {
    id: 2,
    title: "Analyse technique : comprendre les figures chartistes",
    excerpt:
      "Apprenez à identifier et interpréter les principales figures chartistes pour améliorer vos analyses et prendre de meilleures décisions de trading basées sur des patterns éprouvés.",
    image: "/placeholder.svg?height=200&width=400",
    date: "28 février 2023",
    readTime: "8 min",
    category: "Analyse Technique",
    tags: ["Trading", "Charts", "Stratégie"],
  },
  {
    id: 3,
    title: "DeFi : les protocoles à surveiller en 2023",
    excerpt:
      "Notre sélection des projets DeFi les plus prometteurs qui pourraient exploser cette année, avec une analyse approfondie de leurs technologies, équipes et potentiel de croissance.",
    image: "/placeholder.svg?height=200&width=400",
    date: "10 février 2023",
    readTime: "6 min",
    category: "DeFi",
    tags: ["DeFi", "Yield Farming", "Staking"],
  },
  {
    id: 4,
    title: "NFTs : au-delà de l'art numérique",
    excerpt:
      "Explorez les applications innovantes des NFTs au-delà du marché de l'art, notamment dans les jeux, l'immobilier virtuel, l'identité numérique et bien plus encore.",
    image: "/placeholder.svg?height=200&width=400",
    date: "5 février 2023",
    readTime: "7 min",
    category: "NFTs",
    tags: ["NFT", "Metaverse", "Web3"],
  },
  {
    id: 5,
    title: "Comment sécuriser vos cryptomonnaies efficacement",
    excerpt:
      "Guide complet sur les meilleures pratiques de sécurité pour protéger vos actifs numériques contre les pirates, les arnaques et les erreurs humaines.",
    image: "/placeholder.svg?height=200&width=400",
    date: "20 janvier 2023",
    readTime: "9 min",
    category: "Sécurité",
    tags: ["Hardware Wallet", "Sécurité", "2FA"],
  },
  {
    id: 6,
    title: "L'impact de la régulation sur le marché crypto",
    excerpt:
      "Analyse des dernières évolutions réglementaires mondiales et leur influence sur l'écosystème crypto, les investisseurs et l'adoption institutionnelle.",
    image: "/placeholder.svg?height=200&width=400",
    date: "12 janvier 2023",
    readTime: "10 min",
    category: "Régulation",
    tags: ["Régulation", "Institutions", "Adoption"],
  },
]

const categories = [
  "Tous",
  "Débutant",
  "Analyse Technique",
  "DeFi",
  "NFTs",
  "Sécurité",
  "Régulation",
  "Bitcoin",
  "Ethereum",
]

const popularTags = [
  "Bitcoin",
  "Ethereum",
  "DeFi",
  "NFT",
  "Trading",
  "Sécurité",
  "Staking",
  "Analyse",
  "Débutant",
  "Web3",
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background/80 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Blog Crypto
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analyses, conseils et actualités sur les cryptomonnaies et le trading
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-border/40 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    index === 0
                      ? "bg-amber-500 text-white"
                      : "bg-secondary/50 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-16">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500 transition-colors">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500 transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500 transition-colors">
            3
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500 transition-colors">
            &gt;
          </button>
        </div>

        {/* Popular Tags */}
        <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag size={18} className="text-amber-500" />
            <h3 className="font-semibold">Tags populaires</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 text-sm bg-amber-500/10 text-amber-500 rounded-full hover:bg-amber-500/20 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

interface BlogCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    readTime: string
    category: string
    tags: string[]
  }
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50">
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-amber-500 text-xs text-white px-2 py-1 rounded">{post.category}</div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.id}`} className="block group">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors">{post.title}</h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="text-xs px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded-full hover:bg-amber-500/20 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 transition-colors"
        >
          <span>Lire l'article</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  )
}

