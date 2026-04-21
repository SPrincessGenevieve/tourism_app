"use client"

import { PackageDealT, PackageT } from "@/lib/types"
import React, { useState, useEffect } from "react"
import BookPackageCard from "./BookPackageCard"
import Travelterinary from "./Travelterinary"
import PackageInclusion from "./PackageInclusion"
import PackageExclusion from "./PackageExclusion"
import PackageReview from "./PackageReview"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Button } from "@workspace/ui/components/button"
import {
  IconBook,
  IconChevronRight,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import Input from "@workspace/ui/components/input"
import { Calendar } from "@workspace/ui/components/calendar"
import CardSummary from "./CardSummary"

export default function IterinarySection({
  item,
  width,
}: {
  width: number
  item: PackageT | PackageDealT | undefined
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [date, setDate] = useState<Date | undefined>()
  const [travelDate, setTravelDate] = React.useState<Date | undefined>(
    new Date()
  )
  const [guest, setGuest] = useState(1)
  const total = item?.price! * guest

  return (
    <div
      className={`flex ${width > 870 ? "" : "flex-col"} min-h-screen w-full gap-2 bg-white`}
    >
      <div className="w-full">
        <div
          className={`flex min-h-screen w-full flex-col justify-evenly ${width > 640 ? "p-8" : "p-2"}`}
        >
          <div className="flex justify-center border-t-2 border-primary-gray-200/10 py-8">
            <Travelterinary
              width={width}
              item={item}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
              onImageClick={setActiveImage}
            />
          </div>
          <div
            className={`flex items-center border-t-2 border-primary-gray-200/10 py-8 ${width > 640 ? "p-8" : "p-2"}`}
          >
            <PackageInclusion item={item!}></PackageInclusion>
          </div>
          <div
            className={`items-center border-t-2 border-primary-gray-200/10 py-8 ${width > 640 ? "p-8" : "p-2"}`}
          >
            <PackageExclusion item={item!}></PackageExclusion>
          </div>
          <div
            className={`items-center border-t-2 border-primary-gray-200/10 py-8 ${width > 640 ? "p-8" : "p-2"}`}
          >
            <PackageReview width={width} item={item!}></PackageReview>
          </div>
        </div>
      </div>
      {width > 870 ? (
        <BookPackageCard
          date={travelDate}
          setTravelDate={setTravelDate}
          guest={guest}
          setGuest={setGuest}
          total={total}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
          item={item}
          width={width}
        ></BookPackageCard>
      ) : (
        <div className="relative min-h-20 w-full p-8">
          <div className="fixed bottom-0 left-0 flex h-20 w-full items-center justify-between bg-white p-4 shadow-[0_0_12px_5px] shadow-black/30">
            <div>
              <div className="flex items-end">
                <p className="text-2xl font-semibold text-blue-400">
                  ₱ {item?.price.toLocaleString()}
                </p>
                <p className="text-sm">/person</p>
              </div>
              <div className="flex items-end">
                <p>
                  {guest} {guest > 1 ? "people" : "person"}
                </p>
              </div>
            </div>
            <div>
              <Drawer direction="bottom">
                <DrawerTrigger className="">
                  <div>
                    <Button>
                      <div className="flex items-center gap-2">
                        <p className="text-right font-semibold text-white">
                          Total: ₱ {item?.price.toLocaleString()}
                        </p>
                        <IconChevronRight></IconChevronRight>
                      </div>
                    </Button>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="p-8">
                  <div>
                    <CardSummary
                      item={item}
                      date={date}
                      setTravelDate={setTravelDate}
                      guest={guest}
                      setGuest={setGuest}
                      total={total}
                      isSaved={isSaved}
                      setIsSaved={setIsSaved}
                    ></CardSummary>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
