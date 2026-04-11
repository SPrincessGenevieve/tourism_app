"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { useUserContext } from "@/app/context/UseContext"
import { Button } from "@workspace/ui/components/button"
import { IconX } from "@tabler/icons-react"
import { pages } from "@/lib/pages"

export default function SidebarContent() {
  const { sidebar, setUserDetails } = useUserContext()
  const [open, setOpen] = React.useState<{
    opacity: number
    y: string | number
  }>({ opacity: 0, y: `100%` })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 500)
  }, [])

  React.useEffect(() => {
    setOpen({
      opacity: sidebar.opacity,
      y: sidebar.y,
    })
  }, [sidebar])

  const handleClose = () => {
    setUserDetails({
      sidebar: {
        opacity: 0,
        y: `-100%`,
      },
    })
  }

  return (
    <motion.div
      animate={{ y: open.y, opacity: open.opacity }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`z-50 h-screen w-full bg-black/30 backdrop-blur-sm ${visible ? "fixed" : "hidden"}`}
    >
      <div className="flex w-full justify-end p-4">
        <Button className="h-10 w-10 rounded-full" onClick={handleClose}>
          <IconX></IconX>
        </Button>
      </div>
      <div className="mt-20 flex w-full flex-col items-center justify-center gap-4">
        {pages.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer border-b-2 border-transparent px-4 transition duration-200 ease-in-out hover:border-primary-purple-100"
          >
            <p className="text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
