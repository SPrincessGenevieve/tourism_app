"use client"
import ReviewHeader from "@/components/Landing/Review/ReviewHeader"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"

export default function PaymentMethod() {
  const router = useRouter()
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="h-[25%] w-full">
        <ReviewHeader label="Payment Method"></ReviewHeader>
      </div>
      <div className="flex h-[75%] w-full justify-center p-4">
        <div className="flex h-full w-full max-w-200 flex-col items-center justify-center gap-2">
          <Image
            src={
              "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776824414/underconstruction_rtrrsy.png"
            }
            alt=""
            width={400}
            height={400}
            className={`object-contain ${width > 500 ? "h-[15vw]" : "h-[40vw]"}`}
          ></Image>
          <div>
            <p
              className={`text-center ${width > 500 ? "text-3xl" : "text-xl"} font-bold`}
            >
              WEBSITE UNDER CONSTRUCTION
            </p>
            <p
              className={`text-center text-gray-700 uppercase ${width > 500 ? "text-xl" : "text-sm"}`}
            >
              We are currently working on this page
            </p>
          </div>
          <Button onClick={() => router.push("/packages")}>
            Explore Packages
          </Button>
        </div>
      </div>
    </div>
  )
}
