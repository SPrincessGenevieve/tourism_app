"use client"

import { PackageDealT, PackageT } from "@/lib/types"
import { IconHotelService } from "@tabler/icons-react"
import React from "react"

type TravelterinaryProps = {
  item: PackageT | PackageDealT
}

export default function PackageExclusion({ item }: TravelterinaryProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-semibold">Exclusion</p>
      <div className="flex flex-col gap-2">
        {item?.exclusion?.map((item2, i) => (
          <div key={i} className="flex items-center gap-2">
            <IconHotelService strokeWidth={1}></IconHotelService>
            <p className="text-gray-700">{item2}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
