import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Les 5 erreurs à éviter pour les débutants en crypto",
    excerpt: "Découvrez les pièges les plus courants qui attendent les nouveaux investisseurs et comment les éviter.",
    image: "/placeholder.svg?height=200&width=400",
    date: "15 mars 2023",
    readTime: "5 min",
    category: "Débutant",
  },
  {
    id: 2,
    title: "Analyse technique : comprendre les figures chartistes",
    excerpt: "Apprenez à identifier et interpréter les principales figures chartistes pour améliorer vos analyses.",
    image: "/placeholder.svg?height=200&width=400",
    date: "28 février 2023",
    readTime: "8 min",
    category: "Analyse Technique",
  },
  {
    id: 3,
    title: "DeFi : les protocoles à surveiller en 2023",
    excerpt: "Notre sélection des projets DeFi les plus prometteurs qui pourraient exploser cette année.",
    image: "/placeholder.svg?height=200&width=400",
    date: "10 février 2023",
    readTime: "6 min",
    category: "DeFi",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Derniers Articles
          </h2>
          <Link href="/blog" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
            <span>Voir tous les articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
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

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 transition-colors"
        >
          <span>Lire l'article</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}

