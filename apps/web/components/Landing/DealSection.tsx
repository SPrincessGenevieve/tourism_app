"use client"
import { AnimatePresence, motion } from "motion/react"
import React, { useRef, useState } from "react"
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { IconStarFilled, IconUser } from "@tabler/icons-react"

const data = [
  {
    name: "Oslob Whale Shark Adventure",
    provinceCity: "Cebu",
    maxCapacity: 8,
    price: 4500,
    previousPrice: 5200, // Added
    duration: "1D",
    image:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776068341/Whale_Shark_ra2hjb.png",
    stars: 4.8,
  },
  {
    name: "El Nido Tropical Escape",
    provinceCity: "Palawan",
    maxCapacity: 6,
    price: 12500,
    previousPrice: 15000, // Added
    duration: "4D3N",
    image:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776068342/El_Nido_sj0esy.png",
    stars: 5.0,
  },
  {
    name: "Bohol Chocolate Wonders",
    provinceCity: "Bohol",
    maxCapacity: 12,
    price: 6200,
    previousPrice: 7500, // Added
    duration: "2D1N",
    image:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776068343/Chocolate_Hills_siyooa.png",
    stars: 4.7,
  },
]

export default function DealSection() {
  const hasAnimated = useRef(false)

  return (
    <div className="z-30 flex h-auto w-full flex-col items-center justify-center">
      <div className="flex">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0px rgba(168,85,247,0.4)",
              "0 0 20px rgba(168,85,247,0.8)",
              "0 0 0px rgba(168,85,247,0.4)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 items-center justify-center rounded-sm bg-purple-500 p-4"
        >
          <p className="text-white">Limited Time Offer</p>
        </motion.div>
      </div>
      <SectionTitle
        title={"Special Deals"}
        desc={"Don't miss out on these amazing discounts!"}
      ></SectionTitle>

      <div className="flex w-full flex-wrap items-center justify-evenly gap-8 p-4">
        {data.map((item, i) => (
          <AnimatePresence key={i}>
            <motion.div
              initial={
                hasAnimated
                  ? { scale: 0.8, opacity: 0 }
                  : { opacity: 1, scale: 1 }
              }
              viewport={{ once: true }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 90, bounce: 20 }}
              className={`relative flex min-h-130 w-full max-w-100 min-w-80 flex-col items-center justify-start overflow-hidden rounded-3xl bg-linear-0 py-20 ${i === 2 ? "from-yellow-900 via-yellow-100" : i === 1 ? "from-green-200 via-blue-100" : "from-blue-900 via-cyan-100"} to-white p-8`}
            >
              <Image
                src={item.image}
                alt=""
                width={400}
                height={400}
                className="absolute bottom-0 left-0 h-auto w-auto object-fill"
              ></Image>
              <div className="z-30 flex w-full flex-col items-center justify-center gap-10">
                <div className="">
                  <p className="text-center text-3xl font-semibold text-primary-purple-100">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <IconStarFilled
                      className="text-yellow-400"
                      size={12}
                    ></IconStarFilled>{" "}
                    <p className="text-[12px] font-bold">4.8</p>{" "}
                    <p className="text-[12px] text-primary-gray-200">
                      (343 reviews)
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <IconUser size={12}></IconUser>{" "}
                    <p className="text-[12px] text-primary-gray-200">
                      Max {item.maxCapacity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-primary-gray-200 line-through">
                    ₱{item.previousPrice.toLocaleString()}
                  </p>
                  <div className="flex items-end">
                    <p className="text-4xl font-bold text-blue-500">
                      ₱{item.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-primary-gray-200">/person</p>
                  </div>
                </div>
                <p className="absolute bottom-10 text-2xl font-semibold text-white">
                  {item.provinceCity}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  )
}
