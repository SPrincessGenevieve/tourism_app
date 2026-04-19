"use client"
import { IconMenu } from "@tabler/icons-react"
import React from "react"
import { motion } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import { useUserContext } from "@/app/context/UseContext"

export default function MobileSidebar() {
  const { setUserDetails, sidebar } = useUserContext()

  const handleOpen = () => {
    setUserDetails({
      sidebar: { opacity: 1, y: 0 },
    })
  }

  return (
    <div className="">
      <IconMenu onClick={handleOpen} className="z-100 text-white"></IconMenu>
    </div>
  )
}
