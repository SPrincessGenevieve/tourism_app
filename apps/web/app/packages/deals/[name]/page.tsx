"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { LimitedDeal, Packages } from "@/lib/MockData"
import HeaderPackages from "@/components/Packages/HeaderPackages"
import PackageDetailHeader from "@/components/Landing/Package/PackageDetailHeader"
import { PackageT, PackageDealT } from "@/lib/types"
import IterinarySection from "@/components/Packages/IterinarySection"

export default function PackageDealDetails() {
  const pathName = usePathname()
  const type = pathName.split("/")[2]
  const name = pathName.split("/")[3]?.replaceAll("%20", " ")
  const [width, setWidth] = React.useState<number>(0)

  React.useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const data = (
    type === "tour"
      ? Packages.find((item) => item.name === name)
      : LimitedDeal.find((item) => item.name === name)
  ) as PackageT | PackageDealT | undefined

  return (
    <div className="min-h-screen w-full">
      <PackageDetailHeader item={data}></PackageDetailHeader>
      <IterinarySection
        type={type!}
        width={width}
        item={data}
      ></IterinarySection>
    </div>
  )
}
