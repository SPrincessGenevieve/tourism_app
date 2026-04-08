import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"
import { ArrowLeft } from "lucide-react"
import React from "react"

type BackT = {
  onClick?: () => void
  loading?: string | null
}

export default function BackBtn({ loading, onClick }: BackT) {
  return (
    <div className="flex">
      <Button onClick={onClick} className="relative" variant={"ghost"}>
        {loading === "back" && (
          <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
            <Spinner></Spinner>
          </div>
        )}
        <ArrowLeft></ArrowLeft>
        Back
      </Button>
    </div>
  )
}
