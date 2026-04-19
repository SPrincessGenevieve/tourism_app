"use client"

import PackageCard from "@/components/Packages/PackageCard"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import React, { useState } from "react"
import { FilterIcon } from "lucide-react"
import { LimitedDeal, Packages } from "@/lib/MockData"
import { IconBolt, IconBook } from "@tabler/icons-react"
import PackageDealCard from "@/components/Packages/PackageDealCard"

type PackageWT = {
  duration: string[]
  locations: string[]
  width: number
}

export default function PackageWeb({ duration, locations, width }: PackageWT) {
  const [range, setRange] = useState([2000, 50000])
  const [activeTab, setActiveTab] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)
  const [visibleCountDeal, setVisibleCountDeal] = useState(6)

  const handleLoadMore = () => {
    if (activeTab === "all") {
      setVisibleCount((prev) => prev + 6)
    } else {
      setVisibleCountDeal((prev) => prev + 6)
    }
  }

  return (
    <>
      <div className="flex h-auto min-h-40 w-100 flex-col gap-4 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-center gap-2">
          <FilterIcon size={20}></FilterIcon>
          <p className="font-semibold">Filters</p>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <Button
            onClick={() => setActiveTab("all")}
            className="w-1/2"
            variant={activeTab === "all" ? "default" : "outline"}
          >
            <IconBook></IconBook>
            All Tours
          </Button>
          <Button
            onClick={() => setActiveTab("limit")}
            className="w-1/2"
            variant={activeTab === "limit" ? "default" : "outline"}
          >
            <IconBolt></IconBolt>
            Limited Deals
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="py-2 text-sm font-semibold">Price Range</p>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>₱{range[0]?.toLocaleString()}</span>
              <span>₱{range[1]?.toLocaleString()}</span>
            </div>
            <Slider
              value={range}
              onValueChange={setRange}
              max={50000}
              step={500}
              className="mx-auto w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="py-2 text-sm font-semibold">Duration</p>
            {duration.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Checkbox value={_} id={_} name={_}></Checkbox>
                <Label htmlFor={_} className="text-sm font-normal">
                  {_}
                </Label>
              </div>
            ))}
            <div className="flex items-end gap-2">
              <p className="text-sm">Others</p>
              <input
                placeholder="e.g. 3D2N, 21D20N"
                className="border-b-2 px-2 text-sm outline-0 transition duration-200 ease-in-out focus-visible:border-primary-purple-100"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="py-2 text-sm font-semibold">Destinations</p>
            {locations.map((_, i) => (
              <div className="flex items-center gap-2">
                <Checkbox value={_} id={_} name={_}></Checkbox>
                <Label htmlFor={_} className="text-sm font-normal">
                  {_}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button className="w-full">Filter</Button>
        </div>
      </div>
      <div className="min-h-40 w-full rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex w-full flex-wrap gap-8">
          {activeTab === "all"
            ? Packages.slice(0, visibleCount).map((item, i) => (
                <PackageCard
                  cardWidth={"w-93"}
                  data={item}
                  key={i}
                  width={width}
                ></PackageCard>
              ))
            : LimitedDeal.slice(0, visibleCount).map((item, i) => (
                <PackageDealCard
                  cardWidth={"w-93"}
                  data={item}
                  key={i}
                  width={width}
                ></PackageDealCard>
              ))}
        </div>
        {activeTab === "all"
          ? visibleCount < Packages.length && (
              <div className="mt-8 flex w-full items-center justify-center">
                <Button
                  className="w-50"
                  variant={"outline"}
                  onClick={handleLoadMore}
                >
                  Load more
                </Button>
              </div>
            )
          : visibleCountDeal < LimitedDeal.length && (
              <div className="mt-8 flex w-full items-center justify-center">
                <Button
                  className="w-50"
                  variant={"outline"}
                  onClick={handleLoadMore}
                >
                  Load more
                </Button>
              </div>
            )}
      </div>
    </>
  )
}
