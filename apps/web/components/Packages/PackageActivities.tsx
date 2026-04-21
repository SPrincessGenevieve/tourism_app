"use client"

import { IterinaryT, PackageDealT, PackageT } from "@/lib/types"
import { IconHotelService } from "@tabler/icons-react"
import React from "react"

type TravelterinaryProps = {
  item: IterinaryT
}

export default function PackageActivities({ item }: TravelterinaryProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-semibold">Activities</p>
      <div className="flex flex-col gap-2">
        {item.activities.map((item2, i) => (
          <div key={i} className="flex items-center gap-2">
            <IconHotelService strokeWidth={1}></IconHotelService>
            <p className="text-gray-700">{item2}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
