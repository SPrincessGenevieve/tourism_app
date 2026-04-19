"use client"

import {
  IconBolt,
  IconBox,
  IconFilter,
  IconFilterFilled,
  IconPackage,
  IconUmbrella,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import React, { useEffect, useState } from "react"
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
import { Skeleton } from "@workspace/ui/components/skeleton"

type PackageMT = {
  width: number
}

export default function PackageMob({ width }: PackageMT) {
  const [locationFilter, setLocationFilter] = useState<string[]>([])
  const [durationFilter, setDurationFilter] = useState<string[]>([])
  const [range, setRange] = useState([2000, 50000])
  const [minPrice, setMinPrice] = useState(2000)
  const [maxPrice, setMaxPrice] = useState(50000)
  const [activeTab, setActiveTab] = useState("all")
  const data = activeTab === "all" ? Packages : LimitedDeal

  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const [appliedFilters, setAppliedFilters] = useState({
    range: [2000, 150000] as [number, number],
    durations: [] as string[],
    locations: [] as string[],
  })

  const isFiltered =
    appliedFilters.durations.length > 0 ||
    appliedFilters.locations.length > 0 ||
    appliedFilters.range[0] !== 2000 ||
    appliedFilters.range[1] !== 50000

  const isChanged =
    minPrice !== appliedFilters.range[0] ||
    maxPrice !== appliedFilters.range[1] ||
    selectedDurations.length !== appliedFilters.durations.length ||
    selectedLocations.length !== appliedFilters.locations.length ||
    !selectedDurations.every((d) => appliedFilters.durations.includes(d)) ||
    !selectedLocations.every((l) => appliedFilters.locations.includes(l))

  const handleResetFilters = () => {
    const defaultRange: [number, number] = [2000, 50000]

    setRange(defaultRange)
    setSelectedDurations([])
    setSelectedLocations([])

    setAppliedFilters({
      range: defaultRange,
      durations: [],
      locations: [],
    })

    setVisibleCount(6)
    setVisibleCountDeal(6)
  }

  const locations = [
    ...new Set(
      data.filter((item) => item.provinceCity).map((item) => item.provinceCity)
    ),
  ]

  const duration = [
    ...new Set(
      data.filter((item) => item.duration).map((item) => item.duration)
    ),
  ]

  const [visibleCount, setVisibleCount] = useState(6)
  const [visibleCountDeal, setVisibleCountDeal] = useState(6)
  const [loadData, setLoadData] = useState(false)

  const handleLoadMore = () => {
    if (activeTab === "all") {
      setVisibleCount((prev) => prev + 6)
    } else {
      setVisibleCountDeal((prev) => prev + 6)
    }
  }

  const handleDurationChange = (value: string) => {
    setSelectedDurations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handleLocationChange = (value: string) => {
    setSelectedLocations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const applyFilters = <
    T extends {
      price: number
      duration: string
      provinceCity: string
    },
  >(
    list: T[]
  ) => {
    return list.filter((item) => {
      const matchPrice =
        item.price >= appliedFilters.range[0] &&
        item.price <= appliedFilters.range[1]

      const matchDuration =
        appliedFilters.durations.length === 0 ||
        appliedFilters.durations.includes(item.duration)

      const matchLocation =
        appliedFilters.locations.length === 0 ||
        appliedFilters.locations.includes(item.provinceCity)

      return matchPrice && matchDuration && matchLocation
    })
  }

  const handleApplyFilters = () => {
    setAppliedFilters({
      range: [minPrice, maxPrice],
      durations: selectedDurations,
      locations: selectedLocations,
    })

    setVisibleCount(6)
    setVisibleCountDeal(6)
  }

  const filteredPackages = applyFilters(Packages)
  const filteredDeals = applyFilters(LimitedDeal)

  useEffect(() => {
    const t = setTimeout(() => setLoadData(true), 500)
    return () => clearTimeout(t)
  }, [])

  const handleFilterLoc = (item: string) => {
    setLocationFilter((prev: any) =>
      prev.includes(item)
        ? prev.filter((i: any) => i !== item)
        : [...prev, item]
    )
  }

  const isEmpty =
    activeTab === "all"
      ? filteredPackages.length === 0
      : filteredDeals.length === 0

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
                  <Input
                    placeholder="Min"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                  ></Input>

                  <p>-</p>

                  <Input
                    placeholder="Max"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Duration</p>
              <div className="flex flex-col gap-2 rounded-xl border-2 border-primary-gray-100 p-4">
                {duration.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedDurations.includes(item)}
                      onCheckedChange={() => handleDurationChange(item)}
                      value={item}
                      id={item}
                      name={item}
                    ></Checkbox>
                    <Label htmlFor={item} className="text-sm font-normal">
                      {item}
                    </Label>
                  </div>
                ))}

                {/* <div className="flex items-end gap-2">
                  <p className="text-sm">Others</p>
                  <input
                    placeholder="e.g. 3D2N, 21D20N"
                    className="flex w-full border-b-2 px-2 text-sm outline-0 transition duration-200 ease-in-out focus-visible:border-primary-purple-100"
                  ></input>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Destinations</p>
              <div className="flex w-full flex-wrap items-center gap-2 overflow-x-auto">
                {locations.map((item, i) => (
                  <div key={i}>
                    <Button
                      onClick={() => handleLocationChange(item)}
                      variant={
                        selectedLocations.includes(item) ? "default" : "outline"
                      }
                      className="h-8 rounded-full py-0 text-[12px]"
                    >
                      {item}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="w-full"
              onClick={
                isFiltered
                  ? isChanged
                    ? handleApplyFilters // update
                    : handleResetFilters // reset
                  : handleApplyFilters // first apply
              }
            >
              {!isFiltered
                ? "Apply Filter"
                : isChanged
                  ? "Update Filter"
                  : "Reset Filter"}
            </Button>
          </DrawerContent>
        </Drawer>
      </div>
      <div>
        <div className="flex w-full flex-wrap justify-center gap-8">
          {loadData
            ? activeTab === "all"
              ? filteredPackages
                  .slice(0, visibleCount)
                  .map((item, i) => (
                    <PackageCard
                      cardWidth={"w-93"}
                      data={item}
                      key={i}
                      width={width}
                    ></PackageCard>
                  ))
              : filteredDeals
                  .slice(0, visibleCount)
                  .map((item, i) => (
                    <PackageDealCard
                      cardWidth={"w-93"}
                      data={item}
                      key={i}
                      width={width}
                    ></PackageDealCard>
                  ))
            : [...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-145 w-93 rounded-xl bg-primary-gray-100"
                ></Skeleton>
              ))}

          {isEmpty && (
            <div className="flex h-full min-h-135 w-full flex-col items-center justify-center gap-4 rounded-2xl border bg-white p-6 text-center shadow-2xl shadow-primary-purple-100/30">
              <IconPackage size={40} strokeWidth={1} />

              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">
                  No {activeTab === "all" ? "tours" : "deals"} found
                </p>

                <p className="text-xs text-gray-500">
                  Try adjusting your price range, duration, or destination
                  filters.
                </p>
              </div>

              <Button
                variant="outline"
                onClick={handleResetFilters}
                className="mt-2"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {activeTab === "all"
            ? visibleCount < filteredPackages.length && (
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
            : visibleCountDeal < filteredDeals.length && (
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
      </div>
    </div>
  )
}
