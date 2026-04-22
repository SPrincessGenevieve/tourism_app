"use client"
import { motion } from "motion/react"
import React from "react"
import HeaderLanding from "./Landing/HeaderLanding"
import Logo from "@workspace/ui/components/logo"
import MobileSidebar from "./Landing/MobileSidebar"

type Sidebar = {
  containerWidth: number
  index: number
}

export default function Sidebar({ containerWidth, index }: Sidebar) {
  return (
    <div className="absolute z-40 flex h-12 w-full items-center justify-between">
      {containerWidth > 875 ? (
        <HeaderLanding></HeaderLanding>
      ) : (
        <motion.div
          className="flex h-full w-full items-center justify-between p-4"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo dark={false}></Logo>
          <MobileSidebar></MobileSidebar>
        </motion.div>
      )}
    </div>
  )
}
