"use client"

import { PackageDealT, PackageT } from "@/lib/types"
import { IconBook, IconHeart, IconHeartFilled } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import Input from "@workspace/ui/components/input"
import React, { useState, useEffect } from "react"
import { motion, scale } from "motion/react"
import { AnimatePresence } from "motion/react"
import PackageGallery from "./PackageGallery"
import BookPackageCard from "./BookPackageCard"
import Travelterinary from "./Travelterinary"
import PackageInclusion from "./PackageInclusion"
import PackageExclusion from "./PackageExclusion"
import PackageReview from "./PackageReview"

export default function IterinarySection({
  item,
}: {
  item: PackageT | PackageDealT | undefined
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [travelDate, setTravelDate] = React.useState<Date | undefined>(
    new Date()
  )
  const [guest, setGuest] = useState(1)
  const total = item?.price! * guest

  return (
    <div className="flex h-screen w-full gap-2 bg-white">
      <div className="bg-blue h-full w-full">
        <div className="h-screen w-full p-8">
          <div className="border-t-2 border-primary-gray-200/10">
            <Travelterinary
              item={item}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
              onImageClick={setActiveImage}
            />
          </div>
          <div className="border-t-2 border-primary-gray-200/10 p-8">
            <PackageInclusion item={item!}></PackageInclusion>
          </div>
          <div className="border-t-2 border-primary-gray-200/10 p-8">
            <PackageExclusion item={item!}></PackageExclusion>
          </div>
          <div className="border-t-2 border-primary-gray-200/10 p-8">
            <PackageReview item={item!}></PackageReview>
          </div>
        </div>
      </div>
      <BookPackageCard
        date={travelDate}
        setTravelDate={setTravelDate}
        guest={guest}
        setGuest={setGuest}
        total={total}
        isSaved={isSaved}
        setIsSaved={setIsSaved}
        item={item}
      ></BookPackageCard>
    </div>
  )
}
