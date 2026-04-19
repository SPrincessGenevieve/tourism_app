"use client"

import { IconBolt, IconFilter, IconFilterFilled } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import React, { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Slider } from "@workspace/ui/components/slider"
import { LimitedDeal, Packages } from "@/lib/MockData"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import Input from "@workspace/ui/components/input"
import PackageCard from "@/components/Packages/PackageCard"
import { Book } from "lucide-react"
import PackageDealCard from "@/components/Packages/PackageDealCard"

type PackageMT = {
  duration: string[]
  locations: string[]
  width: number
}

export default function PackageMob({ duration, locations, width }: PackageMT) {
  const [locationFilter, setLocationFilter] = useState<string[]>([])
  const [durationFilter, setDurationFilter] = useState<string[]>([])
  const [range, setRange] = useState([2000, 50000])
  const [activeTab, setActiveTab] = useState("all")

  const handleFilterLoc = (item: string) => {
    setLocationFilter((prev: any) =>
      prev.includes(item)
        ? prev.filter((i: any) => i !== item)
        : [...prev, item]
    )
  }

  const durFilter = [
    ...new Set(
      Packages.filter((item) => item.duration).map((item) => item.duration)
    ),
  ]
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-between border-b-2 border-primary-gray-100 p-2 py-2">
        <div>
          <Button
            className={`h-10 ${activeTab === "all" ? "" : "text-primary-purple-100"}`}
            onClick={() => setActiveTab("all")}
            variant={activeTab === "all" ? "default" : "ghost"}
          >
            <Book></Book> All tours
          </Button>
          <Button
            className={`h-10 ${activeTab === "deal" ? "" : "text-primary-purple-100"}`}
            onClick={() => setActiveTab("deal")}
            variant={activeTab === "deal" ? "default" : "ghost"}
          >
            <IconBolt className=""></IconBolt>
            <p className="text-sm"> Limited Deals</p>
          </Button>
        </div>
        <Drawer direction="right">
          <DrawerTrigger>
            <div className="flex items-center gap-1">
              <IconFilter className="text-blue-500" size={20}></IconFilter>
              <p className="text-sm font-semibold text-blue-500">Filter</p>
            </div>
          </DrawerTrigger>
          <DrawerContent className="flex flex-col gap-4 rounded-none p-4 shadow-[0_0_20px_10px] shadow-primary-blue-400/30 data-[vaul-drawer-direction=right]:rounded-l-none">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Price Range</p>
              <div className="rounded-xl border-2 border-primary-gray-100 p-4">
                <div className="flex w-full items-center justify-center gap-2">
                  <Input placeholder="Min"></Input>
                  <p>-</p>
                  <Input placeholder="Max"></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Duration</p>
              <div className="flex flex-col gap-2 rounded-xl border-2 border-primary-gray-100 p-4">
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
                    className="flex w-full border-b-2 px-2 text-sm outline-0 transition duration-200 ease-in-out focus-visible:border-primary-purple-100"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Destinations</p>
              <div className="flex w-full flex-wrap items-center gap-2 overflow-x-auto">
                {locations.map((item, i) => (
                  <div key={i}>
                    <Button
                      onClick={() => handleFilterLoc(item)}
                      variant={
                        locationFilter.includes(item) ? "default" : "outline"
                      }
                      className="h-8 rounded-full py-0 text-[12px]"
                    >
                      {item}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Button>Filter</Button>
          </DrawerContent>
        </Drawer>
      </div>
      <div>
        <div className="flex w-full flex-wrap justify-center gap-8">
          {activeTab === "all"
            ? Packages.slice(0, 6).map((item, i) => (
                <PackageCard
                  cardWidth={"w-93"}
                  data={item}
                  key={i}
                  width={width}
                ></PackageCard>
              ))
            : LimitedDeal.slice(0, 6).map((item, i) => (
                <PackageDealCard
                  cardWidth={"w-93"}
                  data={item}
                  key={i}
                  width={width}
                ></PackageDealCard>
              ))}
        </div>
      </div>
    </div>
  )
}
