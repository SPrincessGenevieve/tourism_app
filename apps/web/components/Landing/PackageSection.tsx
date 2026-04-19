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
import { useRouter } from "next/navigation"
import PackageCard from "../Packages/PackageCard"

export default function PackageSection() {
  const hasAnimated = useRef(false)
  const { width } = useUserContext()
  const router = useRouter()

  const handlePackages = () => {
    router.push("/packages")
  }

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
          <PackageCard data={item} key={i} width={width}></PackageCard>
        ))}
      </motion.div>
      <div>
        <Button onClick={handlePackages} variant={"outline"}>
          View all packages <IconArrowRight></IconArrowRight>
        </Button>
      </div>
    </div>
  )
}
