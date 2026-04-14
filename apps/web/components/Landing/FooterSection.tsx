import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"
import Logo from "@workspace/ui/components/logo"
import Image from "next/image"
import React from "react"

export default function FooterSection() {
  return (
    <div className="relative mt-20 flex h-auto min-h-80 w-full flex-col justify-center overflow-hidden">
      <div className="flex h-full w-full min-w-80 flex-col gap-4 p-4 px-10">
        <div className="flex flex-col gap-4">
          <Logo></Logo>
          <p className="max-w-80">
            Your trusted partner for unforgettable travel experiences across the
            Philippines and beyond.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <IconBrandFacebook></IconBrandFacebook>
              <p className="font-semibold">Facebook</p>
            </div>
            <div className="flex items-center gap-2">
              <IconBrandInstagram></IconBrandInstagram>
              <p className="font-semibold">Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-70">
        <Image
          className="h-full w-full object-cover object-top"
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776154354/WI_giwcp6.png"
          }
          alt=""
          width={1280}
          height={720}
        ></Image>
      </div>
    </div>
  )
}
