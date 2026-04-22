"use client"

import React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import {
  IconClock,
  IconMapPin,
  IconStarFilled,
  IconUser,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { PackageT } from "@/lib/types"
import { Spinner } from "@workspace/ui/components/spinner"
import { useRouter } from "next/navigation"

type PackageCardT = {
  data: PackageT
  width: number
  cardWidth?: number | string
  onClick?: () => void
  loading?: boolean
}

export default function PackageCard({
  data,
  width,
  cardWidth = "w-100",
  onClick,
  loading = false,
}: PackageCardT) {
  const router = useRouter()

  const handleNav = (id: number) => {
    router.push(`packages/tour-details/${id}`)
  }

  return (
    <div
      className={`relative flex flex-col overflow-hidden pb-12 ${width > 455 ? cardWidth : "w-full"} min-h-50 rounded-xl border bg-white shadow-xl shadow-primary-blue-400/30`}
    >
      <div className="relative flex h-60 w-full items-start justify-between overflow-hidden p-2">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 20 }}
          className="absolute top-0 left-0 h-full w-full"
        >
          <Image
            src={data.image}
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
            {data.provinceCity}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-2 p-4">
        <div className="flex w-full flex-col justify-between">
          <div className="">
            <p className="font-bold">{data.name}</p>
            <div>
              <div className="flex items-center gap-2">
                <IconMapPin size={16} className=""></IconMapPin>
                <p className="text-sm">{data.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={16}></IconClock>
                <p className="text-sm">{data.duration}</p>
              </div>
              <div className="flex items-center gap-2">
                <IconUser size={16}></IconUser>
                <p className="text-sm">Max {data.maxCapacity}</p>
              </div>
              <div className="flex items-center gap-2">
                <IconStarFilled
                  className="text-yellow-500"
                  size={16}
                ></IconStarFilled>
                <div className="flex gap-1">
                  <p className="text-sm font-semibold">4.8</p>
                  <p className="text-sm text-primary-gray-200">(342 reviews)</p>
                </div>
              </div>
              <div className="flex h-full flex-wrap items-center gap-2 py-4">
                {data.inclusion.map((item2, ii) => (
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
            <p className="text-[10px] text-primary-gray-200">Start from</p>
            <div className="flex items-end">
              <p className="text-xl font-semibold text-blue-500">
                ₱{data.price.toLocaleString()}
              </p>
              <p className="text-[10px] text-primary-gray-200">/person</p>
            </div>
          </div>
          <div className="h-full">
            <Button onClick={() => handleNav(data.id)} className="h-10">
              {loading && <Spinner className="text-white"></Spinner>} View
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
