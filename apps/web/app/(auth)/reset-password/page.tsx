"use client"
import AuthHeader from "@/components/AuthComponents/AuthHeader"
import BackBtn from "@/components/AuthComponents/BackBtn"
import { Button } from "@workspace/ui/components/button"
import Input from "@workspace/ui/components/input"
import { Spinner } from "@workspace/ui/components/spinner"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function ResetPassPage() {
  const [loading, setLoading] = useState<"back" | "reset" | null>(null)
  const router = useRouter()

  const handleBack = () => {
    setLoading("back")
    router.back()
  }

  const handleReset = () => {
    setLoading("reset")
    router.push("/sign-in")
  }

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <BackBtn onClick={handleBack} loading={loading}></BackBtn>
      <AuthHeader
        title={"Reset Password"}
        desc={"Enter your new password"}
      ></AuthHeader>
      <div className="flex flex-col gap-4">
        <Input className="w-full" label="New Password" type="password"></Input>
        <Input
          className="w-full"
          label="Confirm Password Password"
          type="password"
        ></Input>
        <Button className="relative" onClick={handleReset}>
          {loading === "reset" && (
            <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
              <Spinner></Spinner>
            </div>
          )}
          Reset Password
        </Button>
      </div>
    </div>
  )
}
