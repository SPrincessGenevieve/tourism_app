"use client"

import React, { useRef } from "react"
import SectionTitle from "./SectionTitle"
import { motion } from "motion/react"

const destination = [
  {
    label: "Albay",
    video:
      "https://res.cloudinary.com/dqgkvrmve/video/upload/v1776007654/albay_vid_kxzdwi.mp4",
    poster:
      "https://i.pinimg.com/originals/5e/9d/39/5e9d39d0c5ed74a1c90bdc61537cf5f9.jpg",
  },
  {
    label: "Bohol",
    video:
      "https://res.cloudinary.com/dqgkvrmve/video/upload/v1776007666/bohol_vid_dng5au.mp4",
    poster:
      "https://pinaywise.com/wp-content/uploads/2024/07/facts-about-bohol-1104x621.jpg",
  },
  {
    label: "Camiguin",
    video:
      "https://res.cloudinary.com/dqgkvrmve/video/upload/v1776007659/camiguin_vid_hjjmzp.mp4",
    poster:
      "https://i2.wp.com/www.projectlupad.com/wp-content/uploads/2018/07/Captivating-White-Island-in-Camiguin-Copyright-to-Project-LUPAD-4.jpg?fit=3360%2C1880&ssl=1",
  },
  {
    label: "Palawan",
    video:
      "https://res.cloudinary.com/dqgkvrmve/video/upload/v1776007655/palawan_vid_j3mp56.mp4",
    poster:
      "https://media.cntraveler.com/photos/5668630dc3c9e01555a4d421/master/pass/palawan-philippines-coron-cr-alamy.jpg",
  },
]

export default function DestinationSection() {
  const hasAnimated = useRef(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el
  }

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    video.playbackRate = 1
    video.play()
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-20 h-full max-h-150 w-full max-w-150 opacity-70"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeDasharray="5 8"
          />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <svg
          className="absolute right-80 bottom-0 h-full max-h-100 w-full max-w-100 opacity-70"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeDasharray="5 8"
          />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-0 right-20 h-full max-h-100 w-full max-w-100 opacity-70"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeDasharray="5 8"
          />
        </svg>
      </div>

      {/* Foreground */}
      <div className="relative z-20 flex w-full flex-col items-center justify-center gap-9">
        <SectionTitle
          title={"Popular Destinations"}
          desc={"Explore the most loved travel spots"}
        />

        <div className="flex w-full flex-wrap items-center justify-evenly gap-8">
          {destination.map((item, i) => (
            <motion.div
              initial={
                hasAnimated
                  ? { scale: 0.5, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              viewport={{ once: true }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 90, bounce: 20 }}
              onViewportEnter={() => {
                hasAnimated.current = true
              }}
              key={i}
              className="flex w-full max-w-60 cursor-pointer flex-col items-center justify-center gap-4 rounded-full"
            >
              <div
                className="relative flex h-120 w-full max-w-60 flex-col gap-2 overflow-hidden rounded-full border-4 border-dashed border-cyan-300/50"
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <video
                  ref={setVideoRef(i)}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute h-full w-full object-cover"
                  src={item.video}
                  poster={item.poster}
                />
              </div>
              <p className="text-xl font-semibold text-black">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
