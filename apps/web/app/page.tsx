"use client"
import React, { useEffect, useState } from "react"
import HeroSection from "@/components/Landing/HeroSection"
import SearchSection from "@/components/Landing/SearchSection"
import { useUserContext } from "./context/UseContext"
import SidebarContent from "@/components/Landing/SidebarContent"
import PackageSection from "@/components/Landing/PackageSection"
import DestinationSection from "@/components/Landing/DestinationSection"
import WhyChooseUs from "@/components/Landing/WhyChooseUs"
import DealSection from "@/components/Landing/DealSection"
import TestimoniesSection from "@/components/Landing/TestimoniesSection"
import SubscribeSection from "@/components/Landing/SubscribeSection"
import FooterSection from "@/components/Landing/FooterSection"

export default function Page() {
  const { sidebar, setUserDetails } = useUserContext()
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    setUserDetails({
      width: width,
    })
  }, [width])

  console.log("WIDTH: ", width)

  return (
    <div className="relative flex min-h-screen w-full flex-col gap-20 overflow-y-auto">
      <HeroSection></HeroSection>
      <SearchSection></SearchSection>
      <PackageSection></PackageSection>
      <DestinationSection></DestinationSection>
      <WhyChooseUs></WhyChooseUs>
      <DealSection></DealSection>
      <TestimoniesSection></TestimoniesSection>
      <FooterSection></FooterSection>
    </div>
  )
}
