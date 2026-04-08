"use client"

import "@workspace/ui/styles/globals.css"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-full bg-white">
      <div className="w-1/2">
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
      <div className="flex w-1/2 min-w-93.75 items-center justify-center">
        <div
          className={`${pathname === "/sign-up" ? "h-full" : "h-[80%]"} w-[80%] overflow-y-auto p-4 max-[667px]:h-full max-[667px]:w-full`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
