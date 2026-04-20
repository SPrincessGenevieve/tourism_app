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
import React from "react"

type BookPackageCardProps = {
  item?: PackageT | PackageDealT
  date: Date | undefined
  setTravelDate: (date: Date | undefined) => void

  guest: number
  setGuest: (value: number) => void

  total: number

  isSaved: boolean
  setIsSaved: (value: boolean) => void
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
}: BookPackageCardProps) {
  return (
    <div className="relative h-full min-w-130 p-8">
      <div className="fixed top-20 right-10 z-40 flex min-w-120 flex-col gap-4 rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30">
        <div className="flex items-end">
          <p className="text-2xl font-semibold text-blue-400">
            ₱ {item?.price.toLocaleString()}
          </p>
          <p className="text-sm text-primary-gray-200/70">/person</p>
        </div>
        <div className="mt-4 flex flex-col gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-10 w-full">
              <Input
                label="Select Travel Date"
                containerClassName="w-full"
                value={
                  date
                    ? date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Select date"
                }
              ></Input>
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
            onChange={(e) => setGuest(Number(e.target.value))}
            label="Number of Travelers"
            min={1}
          ></Input>
        </div>
        <div className="w-full border-t border-primary-gray-200/30 py-4">
          <div className="flex w-full justify-between">
            <p>
              ₱ {item?.price.toLocaleString()} x {guest}{" "}
              {guest > 1 ? "people" : "person"}
            </p>
            <p className="text-right">₱ {total.toLocaleString()}</p>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-left text-xl font-semibold text-blue-400">
              ₱ {total.toLocaleString()}
            </p>
          </div>
          <div className="mt-4 flex w-full flex-col gap-2">
            <Button>
              <IconBook></IconBook> Book Now
            </Button>
            <Button
              onClick={() => setIsSaved(!isSaved)}
              variant={isSaved ? "default" : "outline"}
              className={`${isSaved ? "bg-orange-400" : ""}`}
            >
              {isSaved ? (
                <IconHeartFilled className={`text-white`}></IconHeartFilled>
              ) : (
                <IconHeart></IconHeart>
              )}
              {isSaved ? "Saved" : "Save"} to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
