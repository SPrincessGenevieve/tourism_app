import { Footprints } from "lucide-react"
import React from "react"

type LogoT = {
  dark?: boolean
}

export default function Logo({ dark = true }: LogoT) {
  return (
    <div
      className={`z-40 flex items-center gap-2 ${dark ? "text-black" : "text-white"}`}
    >
      <Footprints></Footprints>{" "}
      <p
        className={`text-[1rem] font-bold ${dark ? "text-black" : "text-white"}`}
      >
        PH TRAVEL
      </p>
    </div>
  )
}
