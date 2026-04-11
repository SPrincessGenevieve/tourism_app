"use client"
import React from "react"
import HeaderLanding from "@/components/Landing/HeaderLanding"
import HeroSection from "@/components/Landing/HeroSection"
import MobileSidebar from "@/components/Landing/MobileSidebar"
import SearchSection from "@/components/Landing/SearchSection"
import { Button } from "@workspace/ui/components/button"
import { motion } from "motion/react"
import { useUserContext } from "./context/UseContext"
import { IconX } from "@tabler/icons-react"
import SidebarContent from "@/components/Landing/SidebarContent"

export default function Page() {
  const { sidebar, setUserDetails } = useUserContext()

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-y-auto">
      <HeroSection></HeroSection>
      <SidebarContent></SidebarContent>
      {/* <SearchSection></SearchSection> */}
    </div>
  )
}
