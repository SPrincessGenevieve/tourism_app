"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import WebHero from "./Hero/WebHero"
import MobHero from "./Hero/MobHero"

export default function HeroSection() {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div>{width > 1289 ? <WebHero></WebHero> : <MobHero></MobHero>}</div>
}
