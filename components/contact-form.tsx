"use client"

import type React from "react"

import { useState } from "react"
import { Mail, User, FileText, MessageSquare } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const isMobile = useMobile()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    alert("Message envoyé avec succès !")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/40 rounded-2xl p-4 md:p-8 mb-8">
        <div
          className={`grid grid-cols-1 ${isMobile ? "gap-4 pb-4" : "md:grid-cols-3 gap-6 mb-8 pb-8"} border-b border-border/40`}
        >
          <ContactMethod
            icon={<Mail className="text-amber-500" size={isMobile ? 20 : 24} />}
            title="Email"
            detail="info@lecryptoclub.com"
          />
          <ContactMethod
            icon={<MessageSquare className="text-amber-500" size={isMobile ? 20 : 24} />}
            title="Discord"
            detail="Rejoignez +150 passionnés"
          />
          <ContactMethod
            icon={<User className="text-amber-500" size={isMobile ? 20 : 24} />}
            title="Support"
            detail="Réponse en 48h maximum"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={`grid grid-cols-1 ${isMobile ? "gap-4" : "md:grid-cols-2 gap-6"}`}>
            <div className="space-y-4 md:space-y-6">
              <FormField
                icon={<User size={18} />}
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <FormField
                icon={<Mail size={18} />}
                type="email"
                id="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="relative flex items-center bg-background/5 border border-border/40 rounded-xl transition-colors focus-within:border-amber-500 focus-within:shadow-sm focus-within:shadow-amber-500/20">
                <span className="pl-4 text-amber-500 opacity-80">
                  <FileText size={18} />
                </span>
                <select
                  id="subject"
                  name="subject"
                  className="w-full p-4 pl-2 bg-transparent border-0 outline-none text-foreground [&>option]:bg-background [&>option]:text-foreground"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Type de demande
                  </option>
                  <option value="coaching">Coaching personnalisé</option>
                  <option value="question">Question générale</option>
                  <option value="support">Support technique</option>
                </select>
              </div>
            </div>

            <div className="relative flex items-start bg-background/5 border border-border/40 rounded-xl transition-colors focus-within:border-amber-500 focus-within:shadow-sm focus-within:shadow-amber-500/20 h-full">
              <span className="absolute top-4 left-4 text-amber-500 opacity-80">
                <MessageSquare size={18} />
              </span>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                className="w-full h-full p-4 pl-12 bg-transparent border-0 outline-none text-foreground resize-none"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isMobile ? 4 : 6}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 md:py-4 flex items-center justify-center gap-2 bg-transparent border border-amber-500 text-amber-500 rounded-xl font-semibold transition-all hover:bg-amber-500/10 active:scale-[0.98]"
          >
            <span>Envoyer le message</span>
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  )
}

interface ContactMethodProps {
  icon: React.ReactNode
  title: string
  detail: string
}

function ContactMethod({ icon, title, detail }: ContactMethodProps) {
  const isMobile = useMobile()

  return (
    <div className={`flex items-center ${isMobile ? "gap-3" : "gap-4"}`}>
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-amber-500 font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-base">{detail}</p>
      </div>
    </div>
  )
}

interface FormFieldProps {
  icon: React.ReactNode
  type: string
  id: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function FormField({ icon, type, id, name, placeholder, value, onChange, required }: FormFieldProps) {
  return (
    <div className="relative flex items-center bg-background/5 border border-border/40 rounded-xl transition-colors focus-within:border-amber-500 focus-within:shadow-sm focus-within:shadow-amber-500/20">
      <span className="pl-4 text-amber-500 opacity-80">{icon}</span>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-4 pl-2 bg-transparent border-0 outline-none text-foreground"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

