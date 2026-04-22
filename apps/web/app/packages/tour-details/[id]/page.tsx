"use client"

import React from "react"
import { LimitedDeal, Packages } from "@/lib/MockData"
import PackageDetailHeader from "@/components/Landing/Package/PackageDetailHeader"
import { PackageT, PackageDealT } from "@/lib/types"
import IterinarySection from "@/components/Packages/IterinarySection"
import { useUserContext } from "@/app/context/UseContext"
import { useParams } from "next/navigation"

export default function PackageTourDetails() {
  const { typePackage } = useUserContext()
  const params = useParams()
  const id = Number(params.id)
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
      ? Packages.find((item) => item.id === id)
      : LimitedDeal.find((item) => item.id === id)
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
