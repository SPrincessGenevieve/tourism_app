"use client"

import PackageCard from "@/components/Packages/PackageCard"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import React, { useEffect, useState, useMemo } from "react"
import { FilterIcon } from "lucide-react"
import { LimitedDeal, Packages } from "@/lib/MockData"
import { IconBolt, IconBook, IconPackage } from "@tabler/icons-react"
import PackageDealCard from "@/components/Packages/PackageDealCard"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { useRouter } from "next/navigation"
import { useUserContext } from "@/app/context/UseContext"

type PackageWT = {
  width: number
}

const defaultFilters = {
  range: [2000, 50000] as [number, number],
  durations: [] as string[],
  locations: [] as string[],
}

function filterPackages<
  T extends { price: number; duration: string; provinceCity: string },
>(list: T[], filters: typeof defaultFilters) {
  return list.filter((item) => {
    if (item.price < filters.range[0] || item.price > filters.range[1])
      return false
    if (filters.durations.length && !filters.durations.includes(item.duration))
      return false
    if (
      filters.locations.length &&
      !filters.locations.includes(item.provinceCity)
    )
      return false
    return true
  })
}

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value]

export default function PackageWeb({ width }: PackageWT) {
  const router = useRouter()
  const { typePackage, setUserDetails } = useUserContext()

  const [activeTab, setActiveTab] = useState(typePackage)

  const [visibleCount, setVisibleCount] = useState(6)
  const [visibleCountDeal, setVisibleCountDeal] = useState(6)
  const [loadData, setLoadData] = useState(false)
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null)

  const [filters, setFilters] = useState(defaultFilters)
  const [draftFilters, setDraftFilters] = useState(defaultFilters)

  useEffect(() => {
    if (activeTab === "") {
      setActiveTab(typePackage)
    } else {
      setUserDetails({
        typePackage: activeTab,
      })
    }
  }, [activeTab, typePackage])

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

  const filteredPackages = useMemo(() => {
    return filterPackages(Packages, filters)
  }, [filters])

  const filteredDeals = useMemo(() => {
    return filterPackages(LimitedDeal, filters)
  }, [filters])

  const isDirty = JSON.stringify(filters) !== JSON.stringify(draftFilters)

  const handleLoadMore = () => {
    if (activeTab === "tour") {
      setVisibleCount((prev) => prev + 6)
    } else {
      setVisibleCountDeal((prev) => prev + 6)
    }
  }

  const handleApplyFilters = () => {
    setFilters(draftFilters)
    setVisibleCount(6)
    setVisibleCountDeal(6)
  }

  const handleResetFilters = () => {
    setDraftFilters(defaultFilters)
    setFilters(defaultFilters)
    setVisibleCount(6)
    setVisibleCountDeal(6)
  }

  const handleViewDetails = (id: number, index: number, tab: string) => {
    setLoadingIndex(index)
    router.push(`/packages/tour-details/${id}`)
    setUserDetails({
      typePackage: tab,
    })
  }

  useEffect(() => {
    const t = setTimeout(() => setLoadData(true), 500)
    return () => clearTimeout(t)
  }, [])

  const isEmpty =
    activeTab === "tour"
      ? filteredPackages.length === 0
      : filteredDeals.length === 0

  return (
    <div className="flex items-start gap-8">
      <div className="flex h-auto min-h-40 w-100 flex-col gap-4 rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30">
        <div className="flex items-center gap-2">
          <FilterIcon size={20}></FilterIcon>
          <p className="font-semibold">Filters</p>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <Button
            onClick={() => setActiveTab("tour")}
            className="w-1/2"
            variant={activeTab === "tour" ? "default" : "outline"}
          >
            <IconBook></IconBook>
            All Tours
          </Button>
          <Button
            onClick={() => setActiveTab("deals")}
            className="w-1/2"
            variant={activeTab === "deals" ? "default" : "outline"}
          >
            <IconBolt></IconBolt>
            Limited Deals
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="py-2 text-sm font-semibold">Price Range</p>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>₱{draftFilters.range[0]?.toLocaleString()}</span>
              <span>₱{draftFilters.range[1]?.toLocaleString()}</span>
            </div>
            <Slider
              value={draftFilters.range}
              onValueChange={(val) =>
                setDraftFilters((prev) => ({
                  ...prev,
                  range: val as [number, number],
                }))
              }
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
                  checked={draftFilters.durations.includes(_)}
                  onCheckedChange={() =>
                    setDraftFilters((prev) => ({
                      ...prev,
                      durations: toggleValue(prev.durations, _),
                    }))
                  }
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

          <div className="flex flex-col gap-2">
            <p className="py-2 text-sm font-semibold">Destinations</p>
            {locations.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Checkbox
                  checked={draftFilters.locations.includes(_)}
                  onCheckedChange={() =>
                    setDraftFilters((prev) => ({
                      ...prev,
                      locations: toggleValue(prev.locations, _),
                    }))
                  }
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
            onClick={isDirty ? handleApplyFilters : handleResetFilters}
          >
            {isDirty ? "Apply Filter" : "Reset Filter"}
          </Button>
        </div>
      </div>

      {/* ⛔ EVERYTHING BELOW UNCHANGED (UI preserved) */}

      <div className="min-h-40 w-full rounded-2xl bg-white p-8 shadow-2xl shadow-primary-purple-100/30">
        <div className="flex min-h-170 w-full flex-wrap justify-evenly gap-8">
          {isEmpty && (
            <div className="flex h-full min-h-170 w-full flex-col items-center justify-center gap-4 bg-white p-4">
              <IconPackage size={40} strokeWidth={1} />

              <div className="flex flex-col gap-1">
                <p className="text-center text-sm font-medium">
                  No {activeTab === "tour" ? "tours" : "deals"} found
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
            ? activeTab === "tour"
              ? filteredPackages
                  .slice(0, visibleCount)
                  .map((item, i) => (
                    <PackageCard
                      onClick={() => handleViewDetails(item.id, i, "tour")}
                      cardWidth={"w-93"}
                      data={item}
                      key={item.id}
                      width={width}
                      loading={i === loadingIndex ? true : false}
                    ></PackageCard>
                  ))
              : filteredDeals
                  .slice(0, visibleCountDeal)
                  .map((item, i) => (
                    <PackageDealCard
                      onClick={() => handleViewDetails(item.id, i, "deal")}
                      loading={i === loadingIndex ? true : false}
                      cardWidth={"w-93"}
                      data={item}
                      key={item.id}
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

        {activeTab === "tour"
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
