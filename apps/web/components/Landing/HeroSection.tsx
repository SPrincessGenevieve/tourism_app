"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import WebHero from "./Hero/WebHero"
import MobHero from "./Hero/MobHero"
import { useUserContext } from "@/app/context/UseContext"

export default function HeroSection() {
  const { width } = useUserContext()

  return <div>{width > 1289 ? <WebHero></WebHero> : <MobHero></MobHero>}</div>
}
