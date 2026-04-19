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

export default function PackageContent({ width }: { width: number }) {
  return (
    <div className="flex w-full items-start gap-8 p-2 xl:p-8">
      <div className="hidden w-full xl:block">
        <PackageWeb width={width} />
      </div>

      <div className="block w-full xl:hidden">
        <PackageMob width={width} />
      </div>
    </div>
  )
}
