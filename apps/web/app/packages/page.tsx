"use client"

import HeaderLanding from "@/components/Landing/HeaderLanding"
import HeaderPackages from "@/components/Packages/HeaderPackages"
import React from "react"
import { useUserContext } from "../context/UseContext"
import { motion } from "motion/react"
import Logo from "@workspace/ui/components/logo"
import MobileSidebar from "@/components/Landing/MobileSidebar"
import Sidebar from "@/components/Sidebar"
import PackageContent from "@/components/Landing/Package/PackageContent"
import FooterSection from "@/components/Landing/FooterSection"

export default function Packages() {
  const [width, setWidth] = React.useState<number>(0)
  const [index, setIndex] = React.useState(0)

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

  return (
    <div className="relative min-h-screen w-full">
      <Sidebar containerWidth={width} index={index}></Sidebar>
      <HeaderPackages></HeaderPackages>
      <PackageContent width={width}></PackageContent>
      <FooterSection></FooterSection>
    </div>
  )
}
