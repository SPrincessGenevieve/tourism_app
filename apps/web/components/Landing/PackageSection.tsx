"use client"

import React, { useRef } from "react"
import SectionTitle from "./SectionTitle"
import { Packages } from "@/lib/MockData"
import { useUserContext } from "@/app/context/UseContext"
import {
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconStarFilled,
  IconUser,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { motion } from "motion/react"

export default function PackageSection() {
  const hasAnimated = useRef(false)
  const { width } = useUserContext()
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 p-8">
      <SectionTitle
        title={"Featured Tour Packages"}
        desc={"Handpicked destinations for your perfect gateway"}
      ></SectionTitle>
      <motion.div
        initial={
          hasAnimated.current
            ? { scale: 1, opacity: 1 }
            : { scale: 0.8, opacity: 0 }
        }
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          hasAnimated.current = true
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          bounce: 40,
        }}
        className="flex w-full max-w-[90%] flex-wrap justify-center gap-8"
      >
        {Packages.slice(0, 6).map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col overflow-hidden bg-[pink] pb-12 ${width > 455 ? "w-100" : "w-full"} min-h-50 rounded-xl border bg-white shadow-xl shadow-primary-blue-400/30`}
          >
            <div className="relative flex h-60 w-full items-start justify-between overflow-hidden p-2">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="absolute top-0 left-0 h-full w-full"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="eager"
                ></Image>
              </motion.div>
              <div className="z-10 flex rounded-full bg-orange-500">
                <p className="p-1 px-2 text-[12px] font-semibold text-white">
                  Featured
                </p>
              </div>
              <div className="z-10 flex rounded-full bg-orange-500">
                <p className="p-1 px-2 text-[12px] font-semibold text-white">
                  Only 5 slots left!
                </p>
              </div>
              <div className="absolute bottom-2 left-2 rounded-full bg-white/50">
                <p className="p-1 px-2 text-[10px] font-semibold text-white">
                  {item.provinceCity}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-2 p-4">
              <div className="flex w-full flex-col justify-between">
                <div className="">
                  <p className="font-bold">{item.name}</p>
                  <div>
                    <div className="flex items-center gap-2">
                      <IconMapPin size={16}></IconMapPin>
                      <p className="text-sm">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconClock size={16}></IconClock>
                      <p className="text-sm">{item.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconUser size={16}></IconUser>
                      <p className="text-sm">Max {item.maxCapacity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconStarFilled
                        className="text-yellow-500"
                        size={16}
                      ></IconStarFilled>
                      <div className="flex gap-1">
                        <p className="text-sm font-semibold">4.8</p>
                        <p className="text-sm text-primary-gray-200">
                          (342 reviews)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full flex-wrap items-center gap-2 py-4">
                      {item.inclusion.map((item2, ii) => (
                        <div
                          key={ii}
                          className="cursor-pointer rounded-full border-2 border-transparent bg-blue-400/30 p-1 px-2 text-sm text-blue-400 transition duration-600 ease-in-out hover:border-blue-400"
                        >
                          <p className="text-[10px] font-medium">{item2}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 flex w-full justify-between border-t border-r-primary-gray-100 p-4 pt-2">
                <div className="">
                  <p className="text-[10px] text-primary-gray-200">
                    Start from
                  </p>
                  <div className="flex items-end">
                    <p className="text-xl font-semibold text-blue-500">
                      ₱{item.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-primary-gray-200">/person</p>
                  </div>
                </div>
                <div className="h-full">
                  <Button className="h-10">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div>
        <Button variant={"outline"}>
          View all packages <IconArrowRight></IconArrowRight>
        </Button>
      </div>
    </div>
  )
}
