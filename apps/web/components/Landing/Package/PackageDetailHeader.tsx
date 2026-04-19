"use client"

import React, { useState, useEffect } from "react"
import HeaderLanding from "../HeaderLanding"
import { AnimatePresence } from "motion/react"
import { motion } from "motion/react"
import Image from "next/image"
import { PackageDealT, PackageT } from "@/lib/types"

export default function PackageDetailHeader({
  item,
}: {
  item: PackageT | PackageDealT | undefined
}) {
  const [currentBg, setCurrentBg] = useState(item?.highlights[0])
  const [nextBg, setNextBg] = useState<string | null>(null)

  const handleChange = (img: string) => {
    if (img === currentBg) return
    setNextBg(img)
  }

  return (
    <div className="relative h-screen w-full">
      <HeaderLanding></HeaderLanding>
      <div className="absolute inset-0 overflow-hidden">
        {/* CURRENT IMAGE */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentBg})` }}
        />

        {/* NEXT IMAGE */}
        <AnimatePresence>
          {nextBg && (
            <motion.div
              key={nextBg}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${nextBg})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onAnimationComplete={() => {
                setCurrentBg(nextBg)
                setNextBg(null)
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="absolute z-20 flex h-full w-full items-end justify-center p-4">
        <div className="flex items-center justify-center gap-2">
          {item?.highlights.map((item2, i) => (
            <div
              key={i}
              onClick={() => handleChange(item2)}
              className={`h-4 rounded-full shadow-2xl shadow-primary-purple-100 transition-all duration-200 ease-in-out ${currentBg === item2 ? "w-8 bg-white" : "w-4 bg-white/70"}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 z-10 h-full w-full bg-linear-0 from-black/70 from-10% to-transparent to-50%"></div>
      <div className="absolute top-0 z-10 h-full w-full bg-linear-180 from-black/70 from-10% to-transparent to-50%"></div>
    </div>
  )
}
