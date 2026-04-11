import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { IconMenu, IconStarFilled } from "@tabler/icons-react"
import HeaderLanding from "../HeaderLanding"
import { HeroPackage } from "@/lib/MockData"
import Logo from "@workspace/ui/components/logo"

export default function MobHero() {
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
  const [displayedBg, setDisplayedBg] = useState(HeroPackage[index]?.bg)
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

  const [xOffset, setXOffset] = useState(0)
  const moveToCenter = (i: number) => {
    const container = containerRef.current
    const item = itemsRef.current[i]

    if (!container || !item) return

    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    const itemCenter = itemRect.left + itemRect.width / 2
    const containerCenter = containerRect.left + containerRect.width / 2

    const delta = containerCenter - itemCenter

    setXOffset((prev) => prev + delta)
  }

  // 🔥 center first item on load
  useEffect(() => {
    moveToCenter(0)
  }, [])

  return (
    <div className="relative flex h-screen w-full flex-col bg-cover bg-no-repeat">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${displayedBg})` }}
      />
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
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black)] backdrop-blur-3xl"></div>
      <div className="z-20 h-[50%] w-full text-8xl">
        <div className="flex h-12 w-full items-center justify-between p-2">
          <Logo dark={false}></Logo>
          <IconMenu className="text-white"></IconMenu>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4 p-4"
          >
            <motion.p className="text-[14vw] font-semibold text-white uppercase">
              {HeroPackage[index]?.provinceCity}
            </motion.p>
            <motion.p className="text-[2vw] text-white max-[590px]:text-sm">
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
        className="absolute bottom-10 flex h-100 w-full overflow-hidden max-[765px]:h-80"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="relative h-full w-full">
          <motion.div
            className="flex h-full gap-4 px-10"
            animate={{ x: xOffset }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {HeroPackage.map((data, i) => (
              <motion.div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el
                }}
                className="rounded-2xlp-2 relative flex h-full w-60 shrink-0 cursor-pointer flex-col gap-2 max-[765px]:w-50"
                onClick={() => {
                  setIndex(i)
                  moveToCenter(i)
                }}
                animate={{ scale: i === index ? 1 : 0.75 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <p className="text-sm font-semibold text-white">{data.name}</p>

                <div className="flex gap-1">
                  {[...Array(data.star)].map((_, idx) => (
                    <IconStarFilled
                      key={idx}
                      size={16}
                      className="text-white"
                    />
                  ))}
                </div>

                <Image
                  src={data.thumbnail}
                  alt="thumbnail"
                  className="h-[85%] w-full rounded-2xl object-cover shadow-[0_0_30px_1px_black]"
                  width={400}
                  height={400}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
