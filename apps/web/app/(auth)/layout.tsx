"use client"

import "@workspace/ui/styles/globals.css"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
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

  return (
    <div className="flex h-screen w-full bg-white">
      <div className={`${width > 620 ? "w-1/2" : "hidden"} `}>
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775567468/mt_mayon_lwulu5.jpg"
          }
          alt="Mt. Mayon"
          width={500}
          height={400}
          className="pointer-events-none h-full w-full object-cover"
        ></Image>
      </div>
      <div
        className={`flex ${width > 620 ? "w-1/2" : "w-full p-8"} min-w-93.75 items-center justify-center`}
      >
        <div
          className={`${pathname === "/sign-up" ? "h-full" : "h-[80%]"} w-[80%] overflow-y-auto p-4 max-[667px]:h-full max-[667px]:w-full`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
