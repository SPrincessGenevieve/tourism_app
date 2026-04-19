"use client"

import PackageCard from "@/components/Packages/PackageCard"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import React, { useEffect, useState } from "react"
import { FilterIcon } from "lucide-react"
import { LimitedDeal, Packages } from "@/lib/MockData"
import { IconBolt, IconBook, IconPackage } from "@tabler/icons-react"
import PackageDealCard from "@/components/Packages/PackageDealCard"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { useRouter } from "next/navigation"

type PackageWT = {
  width: number
}

export default function PackageWeb({ width }: PackageWT) {
  const router = useRouter()
  const [range, setRange] = useState([2000, 50000])
  const [activeTab, setActiveTab] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)
  const [visibleCountDeal, setVisibleCountDeal] = useState(6)
  const [loadData, setLoadData] = useState(false)
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null)

  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const [appliedFilters, setAppliedFilters] = useState({
    range: [2000, 50000] as [number, number],
    durations: [] as string[],
    locations: [] as string[],
  })

  const isFiltered =
    appliedFilters.durations.length > 0 ||
    appliedFilters.locations.length > 0 ||
    appliedFilters.range[0] !== 2000 ||
    appliedFilters.range[1] !== 50000

  const isChanged =
    range[0] !== appliedFilters.range[0] ||
    range[1] !== appliedFilters.range[1] ||
    selectedDurations.length !== appliedFilters.durations.length ||
    selectedLocations.length !== appliedFilters.locations.length ||
    !selectedDurations.every((d) => appliedFilters.durations.includes(d)) ||
    !selectedLocations.every((l) => appliedFilters.locations.includes(l))

  const handleResetFilters = () => {
    const defaultRange: [number, number] = [2000, 150000]

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
      Packages.filter((item) => item.provinceCity).map(
        (item) => item.provinceCity
      )
    ),
  ]

  const duration = [
    ...new Set(
      Packages.filter((item) => item.duration).map((item) => item.duration)
    ),
  ]

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
      range: range as [number, number],
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

  const isEmpty =
    activeTab === "all"
      ? filteredPackages.length === 0
      : filteredDeals.length === 0

  const handleViewDetails = (name: string, index: number, tab: string) => {
    setLoadingIndex(index)
    router.push(`/packages/${tab === "tour" ? "tour" : "deals"}/${name}`)
  }

  return (
    <div className="flex items-start gap-8">
      <div className="flex h-auto min-h-40 w-100 flex-col gap-4 rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30">
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
                <Checkbox
                  checked={selectedDurations.includes(_)}
                  onCheckedChange={() => handleDurationChange(_)}
                  value={_}
                  id={_}
                  name={_}
                ></Checkbox>
                <Label htmlFor={_} className="text-sm font-normal">
                  {_}
                </Label>
              </div>
            ))}
            {/* <div className="flex items-end gap-2">
              <p className="text-sm">Others</p>
              <input
                placeholder="e.g. 3D2N, 21D20N"
                className="border-b-2 px-2 text-sm outline-0 transition duration-200 ease-in-out focus-visible:border-primary-purple-100"
              ></input>
            </div> */}
          </div>
          <div className="flex flex-col gap-2">
            <p className="py-2 text-sm font-semibold">Destinations</p>
            {locations.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedLocations.includes(_)}
                  onCheckedChange={() => handleLocationChange(_)}
                  value={_}
                  id={_}
                  name={_}
                ></Checkbox>
                <Label htmlFor={_} className="text-sm font-normal">
                  {_}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div>
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
        </div>
      </div>

      <div className="min-h-40 w-full rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30">
        <div className="flex min-h-170 w-full flex-wrap gap-8">
          {isEmpty && (
            <div className="flex h-full min-h-170 w-full flex-col items-center justify-center gap-4 bg-white p-4">
              <IconPackage size={40} strokeWidth={1} />

              <div className="flex flex-col gap-1">
                <p className="text-center text-sm font-medium">
                  No {activeTab === "all" ? "tours" : "deals"} found
                </p>

                <p className="text-center text-xs text-gray-500">
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
          {loadData
            ? activeTab === "all"
              ? filteredPackages
                  .slice(0, visibleCount)
                  .map((item, i) => (
                    <PackageCard
                      onClick={() => handleViewDetails(item.name, i, "tour")}
                      cardWidth={"w-93"}
                      data={item}
                      key={i}
                      width={width}
                      loading={i === loadingIndex ? true : false}
                    ></PackageCard>
                  ))
              : filteredDeals
                  .slice(0, visibleCount)
                  .map((item, i) => (
                    <PackageDealCard
                      onClick={() => handleViewDetails(item.name, i, "deal")}
                      loading={i === loadingIndex ? true : false}
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
        </div>
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
  )
}
