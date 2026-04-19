"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/animate-ui/components/radix/dialog"
import { Label } from "@workspace/ui/components/label"
import AuthHeader from "@/components/AuthComponents/AuthHeader"
import Input from "@workspace/ui/components/input"
import { Checkbox } from "@workspace/ui/components/checkbox"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import BackBtn from "@/components/AuthComponents/BackBtn"
import { useRouter } from "next/navigation"
import { Spinner } from "@workspace/ui/components/spinner"
import TermsConditions from "@/components/AuthComponents/TermsConditions"
import PrivacyContent from "@/components/AuthComponents/PrivacyContent"

export default function page() {
  const router = useRouter()
  const [loading, setLoading] = useState<"back" | "login" | "register" | null>(
    null
  )

  const handleBack = () => {
    setLoading("back")
    router.back()
  }

  const handleLogin = () => {
    setLoading("login")
    router.push("/sign-in")
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <BackBtn loading={loading} onClick={handleBack}></BackBtn>
      <AuthHeader
        title="Create Account"
        desc="Start your journey with us today"
      ></AuthHeader>
      <div className="flex flex-col gap-4">
        <Input
          className="w-full"
          label="Full Name"
          placeholder="Juan Dela Cruz"
        ></Input>
        <Input
          className="w-full"
          containerClassName="w-full"
          label="Email Address"
          placeholder="example@gmail.com"
        ></Input>
        <Input
          className="w-full"
          containerClassName="w-full"
          label="Phone Number (Optional)"
          placeholder="+63 123 456 7890"
        ></Input>
        <Input
          className="w-full"
          label="Nationality (Optional)"
          placeholder="e.g. Filipino"
        ></Input>
        <Input
          className="w-full"
          containerClassName="w-full"
          label="Password"
          type="password"
          placeholder="Create a strong password"
        ></Input>
        <Input
          className="w-full"
          containerClassName="w-full"
          label="Confirm Password"
          placeholder="Re-enter the password"
          type="password"
        ></Input>
        <div>
          <Label className="flex items-start">
            <Checkbox></Checkbox>
            <div className="flex flex-wrap gap-2">
              I agree to the
              <Dialog>
                <DialogTrigger className="font-semibold text-blue-500">
                  Terms and Conditions
                </DialogTrigger>
                <DialogContent className="">
                  <DialogHeader>
                    <DialogTitle>Terms and Conditions</DialogTitle>
                  </DialogHeader>
                  <TermsConditions></TermsConditions>
                </DialogContent>
              </Dialog>
              and
              <Dialog>
                <DialogTrigger className="font-semibold text-blue-500">
                  Privacy Policy
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <PrivacyContent></PrivacyContent>
                </DialogContent>
              </Dialog>
            </div>
          </Label>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="relative w-full">
            {loading === "register" && (
              <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
                <Spinner></Spinner>
              </div>
            )}
            Create Account
          </Button>
          <Button
            onClick={handleLogin}
            className="relative flex w-full flex-wrap"
            variant={"ghost"}
          >
            {loading === "login" && (
              <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
                <Spinner></Spinner>
              </div>
            )}
            Already have an account?{" "}
            <span className="font-semibold text-blue-500">Login</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
