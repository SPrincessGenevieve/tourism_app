import React from "react"
import SmartGradientCard from "../SmartGradientCard"
import Input from "@workspace/ui/components/input"

export default function () {
  return (
    <div className="min-h-screen w-full">
      <div
        className="absolute h-screen w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <SmartGradientCard hoverable={false}></SmartGradientCard>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="w-full max-w-200 rounded-3xl">
          <div className="flex">
            <Input></Input>
            <Input></Input>
          </div>
        </div>
      </div>
    </div>
  )
}
