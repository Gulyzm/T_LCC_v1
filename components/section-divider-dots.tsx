"use client"

import { motion } from "framer-motion"

export default function SectionDividerDots() {
  return (
    <div className="py-10 flex justify-center items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.15, ease: "backOut" }}
          viewport={{ once: true }}
          className="w-2 h-2 rounded-full bg-amber-500"
        />
      ))}
    </div>
  )
}

