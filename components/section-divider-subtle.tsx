"use client"

import { motion } from "framer-motion"

export default function SectionDividerSubtle() {
  return (
    <div className="py-8 flex justify-center">
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "40%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
      />
    </div>
  )
}

