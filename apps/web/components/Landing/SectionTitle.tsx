"use client"
import { motion } from "motion/react"
import React, { useRef } from "react"

type SectionT = {
  title: string
  desc: string
}

export default function SectionTitle({ title, desc }: SectionT) {
  const hasAnimated = useRef(false)

  return (
    <div className="my-8 flex w-full flex-col items-center justify-center">
      <motion.p
        initial={
          hasAnimated.current ? { y: 1, opacity: 1 } : { y: -20, opacity: 0 }
        }
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center text-4xl font-semibold text-cyan-300"
        onViewportEnter={() => {
          hasAnimated.current = true
        }}
      >
        {title}
      </motion.p>
      <motion.p
        initial={
          hasAnimated.current ? { y: 1, opacity: 1 } : { y: -20, opacity: 0 }
        }
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center"
        onViewportEnter={() => {
          hasAnimated.current = true
        }}
      >
        {desc}
      </motion.p>
    </div>
  )
}
