import React from "react"
import SmartGradientCard from "../SmartGradientCard"
import Input from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import SectionTitle from "./SectionTitle"

export default function () {
  return (
    <div className="relative flex min-h-[70vh] w-full">
      <div className="z-30 flex h-full w-full flex-col items-center justify-center p-4">
        <SectionTitle
          title={"Stay Updated"}
          desc={"Subscribe to get the latest tour deals and travel tips"}
        ></SectionTitle>
        <div className="flex w-full max-w-200 flex-col gap-4 rounded-3xl bg-cyan-100/30 bg-linear-0 p-8 shadow-2xl shadow-cyan-600/70 backdrop-blur-sm">
          <div className="flex gap-4 max-[670px]:flex-col">
            <Input
              className="w-full bg-white"
              containerClassName="w-full"
              label="First Name"
            ></Input>
            <Input
              className="w-full bg-white"
              placeholder=""
              label="Last Name"
              containerClassName="w-full"
            ></Input>
          </div>
          <Input label="Email" className="bg-white w-full"></Input>
          <div className="flex gap-4 max-[670px]:flex-col">
            <Input
              className="w-full bg-white"
              containerClassName="w-full"
              label="Phone Number (Optional)"
            ></Input>
            <Input
              className="w-full bg-white"
              placeholder=""
              label="Nationality (Optional)"
              containerClassName="w-full"
            ></Input>
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>

      <div
        className="absolute top-0 h-full w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      ></div>
    </div>
  )
}
