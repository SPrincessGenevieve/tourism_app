"use client"

import React, { useState, useEffect } from "react"
import HeaderLanding from "../HeaderLanding"
import { AnimatePresence } from "motion/react"
import { motion } from "motion/react"
import Image from "next/image"
import { PackageDealT, PackageT } from "@/lib/types"
import Sidebar from "@/components/Sidebar"
import { useUserContext } from "@/app/context/UseContext"
import {
  IconClock,
  IconMapPin,
  IconStarFilled,
  IconUser,
} from "@tabler/icons-react"

export default function PackageDetailHeader({
  item,
}: {
  item: PackageT | PackageDealT | undefined
}) {
  const [width, setWidth] = React.useState<number>(0)

  const [index, setIndex] = React.useState(0)
  const [currentBg, setCurrentBg] = useState(item?.highlights[0])
  const [nextBg, setNextBg] = useState<string | null>(null)

  React.useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleChange = (img: string) => {
    if (img === currentBg) return
    setNextBg(img)
  }

  return (
    <div className="relative z-40 h-screen w-full">
      <Sidebar containerWidth={width} index={index}></Sidebar>
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

      <div className="absolute top-0 z-10 h-full w-full bg-linear-0 from-black/70 from-25% to-transparent to-50% max-[670px]:from-50% max-[670px]:to-70%"></div>
      <div className="absolute top-0 z-10 h-full w-full bg-linear-180 from-black/70 from-10% to-transparent to-50%"></div>
      <div className="absolute bottom-0 z-15 flex h-auto w-full flex-col bg-linear-to-t from-black/80 via-black/40 via-50% to-transparent p-8">
        <div className="mb-[2%] flex w-full max-w-150 flex-col gap-4">
          <div className="flex items-center gap-2">
            <IconMapPin className="text-red-500"></IconMapPin>
            <p className="text-white">{item?.location}</p>
          </div>
          <p className="text-4xl font-semibold text-cyan-300 max-[670px]:text-3xl">
            {item?.name}
          </p>
          <p className="text-white">{item?.packageOverview}</p>
          <div className="flex divide-x divide-white">
            <div className="flex items-center gap-2 px-2">
              <IconUser className="text-white"></IconUser>
              <p className="text-white">{item?.maxCapacity}</p>
            </div>
            <div className="flex items-center gap-2 px-2">
              <IconClock className="text-white"></IconClock>
              <p className="text-white">{item?.duration}</p>
            </div>
            <div className="flex items-center gap-2 px-2">
              <IconStarFilled className="text-yellow-300"></IconStarFilled>
              <p className="text-white">5 ( 1 review )</p>
            </div>
          </div>
        </div>
        <div className="flex w-auto items-center justify-center gap-2 rounded-full p-2">
          {item?.highlights.map((item2, i) => (
            <motion.div
              animate={{
                width: i === index ? 40 : 15,
                backgroundColor:
                  i === index ? "white" : "rgba(255,255,255,0.5)",
              }}
              key={i}
              onClick={() => {
                handleChange(item2)
                setIndex(i)
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className={`h-4 rounded-full shadow-2xl shadow-primary-purple-100 transition-all duration-100 ease-in-out ${currentBg === item2 ? "bg-white" : "bg-white/70"}`}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
