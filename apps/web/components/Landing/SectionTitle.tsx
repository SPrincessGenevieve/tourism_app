"use client"
import { motion } from "motion/react"
import React from "react"

type SectionT = {
  title: string
  desc: string
}

export default function SectionTitle({ title, desc }: SectionT) {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-center">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center text-4xl font-semibold text-cyan-300"
      >
        {title}
      </motion.p>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center"
      >
        {desc}
      </motion.p>
    </div>
  )
}
