"use client"

import { motion } from "framer-motion"
import { Bitcoin } from "lucide-react"

export default function SectionDividerCrypto() {
  return (
    <div className="py-8 flex justify-center items-center">
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "30%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        viewport={{ once: true }}
        className="mx-4 p-2 rounded-full bg-secondary/80 border border-amber-500/20"
      >
        <Bitcoin size={16} className="text-amber-500" />
      </motion.div>
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "30%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-amber-500/30 via-transparent to-transparent"
      />
    </div>
  )
}

