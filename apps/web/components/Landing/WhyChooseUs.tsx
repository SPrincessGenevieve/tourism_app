"use client"

import React, { useState, useEffect } from "react"
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

const data = [
  {
    image:
      "https://i.pinimg.com/originals/bc/fb/42/bcfb4286e1823854af224167b71e5497.jpg",
    title: "Trusted Tour Guides",
    desc: "Experienced and friendly local guides for every adventure",
  },
  {
    image:
      "https://gttp.images.tshiftcdn.com/351673/x/0/immerse-yourself-in-the-stunning-underwater-world-with-our-palawan-island-diving-package-in-el-nido-town-a-divers-paradise-filled-with-vibrant-marine-life.jpg?crop=1.91:1&width=1200&fit=crop",
    title: "Affordable Packages",
    desc: "Best value tours without compromising quality",
  },
  {
    image:
      "https://pix10.agoda.net/hotelImages/529494/-1/ce5f8985c7ee8a9f0ae7506ecd8712fc.jpg",
    title: "Verified Accomodations",
    desc: "Stay at carefully selected, quality-assured hotels",
  },
  {
    image:
      "https://wallpapers.com/images/hd/1920x1080-hd-summer-beach-in-philippines-odea28sxh9hb3ykm.jpg",
    title: "Easy Booking",
    desc: "Simple, secure, and fast online reservation system",
  },
]

export default function WhyChooseUs() {
  const [content, setContent] = useState("Trusted Tour Guides")
  const item = data.find((item) => item.title === content)
  const [displayedBg, setDisplayedBg] = useState(item?.image)
  const [pendingBg, setPendingBg] = useState<string | null>(null)

  useEffect(() => {
    const newBg = item?.image
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
  }, [content])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <SectionTitle
        title={"Why Choose Us"}
        desc={"Our trusted partner for Philippine Adventures"}
      ></SectionTitle>
      <div className="bg-transaparent relative min-h-150 w-[90%] rounded-4xl">
        <div className="absolute z-5 h-full w-full overflow-hidden rounded-3xl bg-transparent">
          <div className="absolute z-30 h-full w-full bg-linear-0 from-black/70 to-transparent">
            <AnimatePresence mode="wait">
              <div key={content} className="absolute bottom-20 left-10 p-4">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-3xl font-medium text-cyan-300"
                >
                  {item?.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-wrap text-white"
                >
                  {item?.desc}
                </motion.p>
              </div>
            </AnimatePresence>
          </div>

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

          <Image
            className="h-full w-full object-cover"
            alt=""
            width={4032}
            height={3024}
            src={
              "https://i.pinimg.com/originals/bc/fb/42/bcfb4286e1823854af224167b71e5497.jpg"
            }
          ></Image>
        </div>

        <div className="absolute -right-4 bottom-0 z-20 h-14 w-60 rounded-t-2xl bg-white">
          <div className="absolute -bottom-[0.8px] -left-[53.9px]">
            <svg
              width="54"
              height="38"
              viewBox="0 0 54 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54 37.5L3.94195 37.5C2.56188 37.5041 1.24259 37.5 -1.63918e-06 37.5L3.94195 37.5C23.1087 37.4436 54 35.8208 54 0L54 37.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute -top-[37px] right-[15.7px]">
            <svg
              width="54"
              height="38"
              viewBox="0 0 54 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54 37.5L3.94195 37.5C2.56188 37.5041 1.24259 37.5 -1.63918e-06 37.5L3.94195 37.5C23.1087 37.4436 54 35.8208 54 0L54 37.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex h-full items-center justify-evenly px-2">
            {data.map((item, i) => (
              <motion.div
                animate={content === item.title ? { width: 80 } : { width: 40 }}
                transition={{ duration: 0.3 }}
                onClick={() => setContent(item.title)}
                key={i}
                className={`flex h-10 cursor-pointer ${content === item.title ? "bg-primary-purple-100" : "bg-muted-foreground/20"} items-center justify-center rounded-full transition duration-700 ease-in-out`}
              >
                <p
                  className={`text-center ${content === item.title ? "text-white" : "text-muted-foreground"}`}
                >
                  {i + 1}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
