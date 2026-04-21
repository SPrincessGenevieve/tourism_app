"use client"

import React from "react"
import { motion } from "motion/react"
import { IconBook, IconHeart, IconHeartFilled } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import Input from "@workspace/ui/components/input"
import { PackageDealT, PackageT } from "@/lib/types"

type CardSummaryProps = {
  item?: PackageT | PackageDealT
  date: Date | undefined
  setTravelDate: (date: Date | undefined) => void
  guest: number
  setGuest: (value: number) => void
  total: number
  isSaved: boolean
  setIsSaved: (value: boolean) => void
  collapse?: boolean
  heightCard?: number | string
}

export default function CardSummary({
  item,
  date,
  setTravelDate,
  guest,
  setGuest,
  total,
  isSaved,
  setIsSaved,
  collapse,
  heightCard,
}: CardSummaryProps) {
  const formattedDate = date
    ? date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Select date"

  return (
    <motion.div className="flex flex-col gap-2">
      {/* PRICE */}
      <div className="flex items-end">
        <p className="text-2xl font-semibold text-blue-400">
          ₱ {item?.price.toLocaleString()}
        </p>
        <p className="text-sm text-primary-gray-200/70">/person</p>
      </div>

      {/* COLLAPSIBLE CONTENT */}
      <motion.div
        animate={{
          height: heightCard,
          opacity: collapse ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col gap-10 overflow-hidden"
      >
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-10 w-full">
            <Input
              label="Select Travel Date"
              containerClassName="w-full"
              value={formattedDate}
              readOnly
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setTravelDate}
              className="rounded-lg border"
              captionLayout="dropdown"
            />
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          type="number"
          value={guest}
          onChange={(e) => setGuest(Math.max(1, Number(e.target.value)))}
          label="Number of Travelers"
          min={1}
        />
      </motion.div>

      {/* FOOTER */}
      <div className="w-full border-t border-primary-gray-200/30 py-4">
        <div className="flex w-full justify-between">
          <p>
            ₱ {item?.price.toLocaleString()} x {guest}{" "}
            {guest > 1 ? "people" : "person"}
          </p>
          <p>₱ {total.toLocaleString()}</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl font-semibold text-blue-400">
            ₱ {total.toLocaleString()}
          </p>
        </div>

        {/* ACTIONS */}
        <motion.div
          animate={{
            height: heightCard,
            opacity: collapse ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-4 flex w-full flex-col gap-2 overflow-hidden"
        >
          <Button className="w-full">
            <IconBook /> Book Now
          </Button>

          <Button
            onClick={() => setIsSaved(!isSaved)}
            variant={isSaved ? "default" : "outline"}
            className={`w-full ${isSaved ? "bg-orange-400" : ""}`}
          >
            {isSaved ? (
              <IconHeartFilled className="text-white" />
            ) : (
              <IconHeart />
            )}
            {isSaved ? "Saved" : "Save"} to Wishlist
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
