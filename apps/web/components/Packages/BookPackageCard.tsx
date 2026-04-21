"use client"

import { PackageDealT, PackageT } from "@/lib/types"
import {
  IconBook,
  IconChevronDown,
  IconChevronUp,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import Input from "@workspace/ui/components/input"
import React from "react"
import { motion } from "motion/react"
import CardSummary from "./CardSummary"

type BookPackageCardProps = {
  item?: PackageT | PackageDealT
  date: Date | undefined
  setTravelDate: (date: Date | undefined) => void
  guest: number
  setGuest: (value: number) => void
  total: number
  isSaved: boolean
  setIsSaved: (value: boolean) => void
  width: number
}

export default function BookPackageCard({
  item,
  date,
  setTravelDate,
  guest,
  setGuest,
  total,
  isSaved,
  setIsSaved,
  width,
}: BookPackageCardProps) {
  const [heightCard, setHeightCard] = React.useState<string | number>("")
  const [collapse, setCollapses] = React.useState(false)

  const handleHeight = () => {
    setCollapses(!collapse)
  }

  React.useEffect(() => {
    if (collapse) {
      setHeightCard(0)
    } else {
      setHeightCard("auto")
    }
  })

  return (
    <div
      className={`relative h-full ${width > 1235 ? "min-w-100 p-8" : "w-0 min-w-0"} `}
    >
      <motion.div
        animate={collapse ? { height: 180 } : { height: "auto" }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className={`fixed ${width > 1235 ? "top-20" : "bottom-20"} right-10 z-40 flex min-w-100 flex-col gap-4 overflow-hidden rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30`}
      >
        <CardSummary
          item={item}
          date={date}
          setTravelDate={setTravelDate}
          guest={guest}
          setGuest={setGuest}
          total={total}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
          collapse={collapse}
          heightCard={heightCard}
        />
        {width < 1235 && (
          <div
            onClick={handleHeight}
            className="absolute bottom-2 left-0 z-20 flex w-full flex-col items-center justify-center"
          >
            <p className="text-sm text-gray-300">
              {collapse ? "View more" : "View less"}
            </p>
            {collapse ? (
              <IconChevronDown
                className="text-gray-300"
                size={15}
              ></IconChevronDown>
            ) : (
              <IconChevronUp
                className="text-gray-300"
                size={15}
              ></IconChevronUp>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
