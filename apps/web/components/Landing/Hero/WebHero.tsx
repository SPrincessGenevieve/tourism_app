"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { IconStarFilled } from "@tabler/icons-react"
import HeaderLanding from "../HeaderLanding"
import { HeroPackage } from "@/lib/MockData"

export default function WebHero() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [yPx, setYPx] = useState(0)
  const [location, setLocation] = useState(1)
  const [screenHeight, setScreenHeight] = useState(0)
  const [clicked, setClicked] = useState<{ x: number; opacity: number }>({
    x: 0,
    opacity: 1,
  })
  const itemsRef = useRef<HTMLDivElement[]>([])
  const [index, setIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [ready, setReady] = useState(false)
  const [displayedBg, setDisplayedBg] = useState(HeroPackage[0]?.bg)
  const [pendingBg, setPendingBg] = useState<string | null>(null)

  useEffect(() => {
    const newBg = HeroPackage[index]?.bg
    if (!newBg || newBg === displayedBg) return

    const img = new window.Image()
    img.src = newBg

    const load = async () => {
      try {
        await img.decode() // ✅ prevents gray flash
      } catch {
        await new Promise<void>((res) => {
          img.onload = () => res()
        })
      }

      setPendingBg(newBg)
    }

    load()
  }, [index])

  // Measure container and first item width after render
  useLayoutEffect(() => {
    if (containerRef.current && itemsRef.current[0]) {
      const container = containerRef.current
      const firstItem = itemsRef.current[0]

      setContainerWidth(container.offsetWidth)
      const gap = 16 // Tailwind gap-4 = 16px
      setItemWidth(firstItem.offsetWidth + gap)

      setReady(true)
    }
  }, [])

  // x offset to center the current item
  const xOffset =
    ready && containerWidth && itemWidth
      ? containerWidth / 2 - itemWidth / 2 - index * itemWidth
      : 0

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      setScreenHeight(containerRef.current.offsetHeight)
    }
  }, [])

  const moveCircle = (position: "top" | "center" | "bottom") => {
    if (!containerRef.current) return
    const height = containerRef.current.offsetHeight
    let newY = 0
    switch (position) {
      case "top":
        newY = 0
        break
      case "center":
        newY = height / 1.95
        break
      case "bottom":
        newY = height - 20 // subtract circle height to align with bottom
        break
    }
    setYPx(newY)
  }

  return (
    <div
      className={`relative flex h-screen w-full flex-col bg-cover bg-no-repeat`}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${displayedBg})` }}
      />

      {/* NEXT IMAGE (only when ready) */}
      <AnimatePresence>
        {pendingBg && (
          <motion.div
            key={pendingBg}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pendingBg})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setDisplayedBg(pendingBg)
              setPendingBg(null)
            }}
          />
        )}
      </AnimatePresence>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-linear-200 from-black/30 to-transparent"></div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-linear-30 from-black/70 from-35% to-transparent to-70%"></div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-linear-180 from-black/70 from-2% to-transparent to-20%"></div>
      <div className="flex h-[6%] min-h-14 items-center">
        <HeaderLanding />
      </div>

      <div className="relative flex h-[94%] w-full items-end gap-10 pb-20">
        <div
          ref={containerRef}
          className="relative flex h-120 w-20 justify-center"
        >
          <div className="absolute h-full w-1 rounded-full bg-gray-400"></div>
          <motion.div
            animate={{ y: yPx }}
            transition={{ type: "spring", stiffness: 50 }}
            className="absolute -top-1.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/50"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <p className="font-semibold">{location}</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: 0 }}
            className="absolute -top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-xl"
          ></motion.div>

          <motion.div
            animate={{ y: screenHeight / 2 }}
            className="absolute z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-xl"
          ></motion.div>

          <motion.div
            animate={{ y: screenHeight - 20 }}
            className="absolute -top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-xl"
          ></motion.div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bottom-15 left-25 z-40 flex h-full max-h-120 w-full max-w-150 flex-col justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.p className="text-9xl font-semibold text-white uppercase">
              {HeroPackage[index]?.provinceCity}
            </motion.p>

            <motion.p className="text-white">
              {HeroPackage[index]?.packageOverview}
            </motion.p>

            <Button className="w-30">
              Explore <ArrowRight />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        ref={containerRef}
        className="absolute right-0 bottom-40 h-120 w-150 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="relative h-full w-full">
          <motion.div
            className="flex h-full gap-4"
            animate={{ x: xOffset }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {HeroPackage.map((data, i) => (
              <motion.div
                key={i}
                ref={(el) => {
                  itemsRef.current[i] = el!
                }}
                className="relative flex h-full max-w-80 shrink-0 cursor-pointer flex-col gap-2 rounded-2xl"
                onClick={() => {
                  setIndex(i)
                  moveCircle(
                    i < 1 ? "top" : i > 0 && i < 2 ? "center" : "bottom"
                  )
                  setLocation(i + 1)
                }}
                animate={{ scale: i === index ? 1 : 0.7 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="">
                  <p className="font-semibold text-white">{data.name}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(data.star)].map((_, i) => (
                    <IconStarFilled
                      key={i}
                      size={16}
                      className="text-white"
                    ></IconStarFilled>
                  ))}
                </div>
                <Image
                  src={data.thumbnail}
                  alt="thumbnail"
                  className="h-[85%] w-full rounded-2xl object-cover shadow-[0_0_30px_1px_black]"
                  width={400}
                  height={400}
                ></Image>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
