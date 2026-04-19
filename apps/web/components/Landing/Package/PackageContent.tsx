"use client"

import React, { useState } from "react"
import { Slider } from "@workspace/ui/components/slider"
import { FilterIcon } from "lucide-react"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Packages } from "@/lib/MockData"
import { Button } from "@workspace/ui/components/button"
import PackageCard from "@/components/Packages/PackageCard"
import PackageWeb from "./PackageWeb"
import PackageMob from "./PackageMob"
const duration = ["2D2N", "4D3N", "5D4N"]

export default function PackageContent({ width }: { width: number }) {
  const locations = [
    ...new Set(
      Packages.filter((item) => item.provinceCity).map(
        (item) => item.provinceCity
      )
    ),
  ]

  return (
    <div
      className={`flex w-full items-start gap-8 ${width > 1260 ? "p-8" : "p-2"} `}
    >
      {width > 1260 ? (
        <PackageWeb
          duration={duration}
          locations={locations}
          width={width}
        ></PackageWeb>
      ) : (
        <PackageMob
          duration={duration}
          locations={locations}
          width={width}
        ></PackageMob>
      )}
    </div>
  )
}
