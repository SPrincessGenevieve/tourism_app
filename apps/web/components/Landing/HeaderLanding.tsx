"use client"

import React from "react"
import Logo from "@workspace/ui/components/logo"
import { Button } from "@workspace/ui/components/button"
import { motion } from "motion/react"
import { pages } from "@/lib/pages"
import { usePathname, useRouter } from "next/navigation"

export default function HeaderLanding() {
  const router = useRouter()
  const path = usePathname()
  const pathFilter = path.replace("", "home")
  const page = pathFilter.split("/")[1]

  const handleNav = (href: string) => {
    router.push(href)
  }

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute flex h-12 w-full justify-between p-4"
    >
      <Logo dark={false}></Logo>
      <div className="z-40 flex items-center">
        {pages.map((item, i) => {
          const tab = item.label.toLocaleLowerCase()
          return (
            <Button
              onClick={() => handleNav(item.link)}
              key={i}
              className={`w-30 rounded-none border-x-0 border-t-0 border-b-4 border-transparent font-bold uppercase transition duration-300 ease-in-out hover:border-primary-purple-100 hover:shadow-[0_15px_20px_1px_#0000005a] ${
                page === "" && tab === "home"
                  ? "bg-primary-purple-100"
                  : page === tab
                    ? "bg-primary-purple-100"
                    : "bg-transparent"
              } `}
            >
              {item.label}
            </Button>
          )
        })}
      </div>
    </motion.div>
  )
}
