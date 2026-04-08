"use client"

import Logo from "@workspace/ui/components/logo"
import React, { useState } from "react"
import Input from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<
    "login" | "google" | "signup" | "forgot" | null
  >(null)

  const handleSignUp = () => {
    setLoading("signup")
    router.push("/signup")
  }

  const handleLogin = () => {
    setLoading("login")
  }

  const handleGoogleLogin = () => {
    setLoading("google")
  }

  const handleForgotPassword = () => {
    setLoading("forgot")
    router.push("/forgot-password")
  }

  return (
    <div className="flex h-full w-full flex-col gap-8 bg-white">
      <div>
        <Logo></Logo>
        <p className="text-[4.5vh] font-bold">Welcome Back</p>
        <p className="text-2xl max-[667px]:text-[16px]">
          Continue your adventure with us
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input label="Email Address" placeholder="juan@example.com"></Input>
        <Input label="Password" placeholder="* * * * * * * *"></Input>
        <div className="flex justify-end">
          <Button
            onClick={handleForgotPassword}
            variant={"ghost"}
            className="relative text-blue-500"
          >
            {loading === "forgot" && (
              <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
                <Spinner className=""></Spinner>
              </div>
            )}
            Forgot Password?
          </Button>
        </div>
        <Button className="relative" onClick={handleLogin}>
          {loading === "login" && (
            <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
              <Spinner></Spinner>
            </div>
          )}
          Login
        </Button>
        <div className="flex w-full items-center gap-2">
          <div className="h-0 w-full rounded-full border border-primary-gray-200/20"></div>
          <p className="min-w-40 text-center">or continue with</p>
          <div className="h-0 w-full rounded-full border border-primary-gray-200/20"></div>
        </div>
        <Button
          onClick={handleGoogleLogin}
          className="relative"
          variant={"outline"}
        >
          {loading === "google" && (
            <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
              <Spinner></Spinner>
            </div>
          )}
          <Image
            src={
              "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775570902/google-icon_gviwjr.png"
            }
            alt="google"
            width={30}
            height={30}
          ></Image>
          <p>Continue with Google</p>
        </Button>
        <Button onClick={handleSignUp} variant={"ghost"} className="relative">
          {loading === "signup" && (
            <div className="absolute flex h-full w-full items-center justify-center bg-white/70">
              <Spinner className=""></Spinner>
            </div>
          )}
          <p>Don't have an account?</p>
          <p className="font-semibold text-blue-500">Create Account</p>
        </Button>
      </div>
    </div>
  )
}
