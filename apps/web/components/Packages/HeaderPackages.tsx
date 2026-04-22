"use client"

import { Button } from "@workspace/ui/components/button"
import Input from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function HeaderPackages() {
  return (
    <div className="relative flex h-80 w-full bg-cyan-400">
      <div className="absolute z-20 flex h-full w-full flex-col justify-center gap-4 p-8">
        <div>
          <p className="text-3xl font-semibold text-white">
            Explore Tour Packages
          </p>
          <p className="text-xl font-normal text-white">
            Discover Philippines' most beautiful destinations
          </p>
        </div>
        <div className="flex max-w-140">
          <div className="flex w-full gap-2 rounded-xl bg-white/70 p-2">
            <Input
              containerClassName="w-full"
              className="h-10 w-full bg-transparent"
              placeholder="search destinations, tour, experiences..."
            ></Input>
            <Button className="h-10 w-30">
              <SearchIcon></SearchIcon> Search
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute h-full w-full bg-linear-0 from-black/10 to-transparent"></div>
      <div className="absolute h-full w-full bg-linear-180 from-black/90 to-transparent"></div>
      <Image
        src={
          "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776427657/009f8e42ad3295252eb0dc77b90af4ce_sfcshv.jpg"
        }
        alt=""
        width={1920}
        height={1281}
        className="h-full w-full object-cover object-center"
      ></Image>
    </div>
  )
}
