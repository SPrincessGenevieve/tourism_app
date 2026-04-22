"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { LimitedDeal, Packages } from "@/lib/MockData"
import HeaderPackages from "@/components/Packages/HeaderPackages"
import PackageDetailHeader from "@/components/Landing/Package/PackageDetailHeader"
import { PackageT, PackageDealT } from "@/lib/types"
import IterinarySection from "@/components/Packages/IterinarySection"
import { useUserContext } from "@/app/context/UseContext"

export default function PackageTourDetails() {
  const { typePackage } = useUserContext()
  const pathName = usePathname()
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
    typePackage === "tour"
      ? Packages.find((item) => item.name === name)
      : LimitedDeal.find((item) => item.name === name)
  ) as PackageT | PackageDealT | undefined

  console.log("DATA: ", data)

  return (
    <div className="min-h-screen w-full">
      <PackageDetailHeader item={data}></PackageDetailHeader>
      <IterinarySection
        type={typePackage}
        width={width}
        item={data}
      ></IterinarySection>
    </div>
  )
}
