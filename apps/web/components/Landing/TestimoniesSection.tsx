"use client"
import Image from "next/image"
import React, { useRef } from "react"
import SectionTitle from "./SectionTitle"
import SmartGradientCard from "../SmartGradientCard"
import { IconStarFilled } from "@tabler/icons-react"
import { motion } from "motion/react"
import SubscribeSection from "./SubscribeSection"

const rating = [
  {
    name: "Elena Rodriguez",
    package: "Waterfalls & Nature Escape: Lanao del Norte",
    rating: 5,
    comment:
      "Absolutely stunning waterfalls! Tinago Falls was the highlight of the trip.",
    image:
      "https://www.aiease.ai/wp-content/uploads/2024/08/ai-generated-professional-headshot-of-a-famle-in-pink-suit-from-AI-Ease.webp",
  },
  {
    name: "Marcus Chen",
    package: "Iligan City Adventure: The City of Majestic Waterfalls",
    rating: 4,
    comment:
      "Maria Cristina Falls is a powerhouse! The viewing deck offers a great perspective of its scale.",
    image:
      "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
  },
  {
    name: "Sarah Jenkins",
    package: "Coastal Lanao del Norte Explorer",
    rating: 5,
    comment:
      "A hidden gem. The blend of culture and the serene coastline made for a very relaxing getaway.",
    image:
      "https://photoavatarmaker.com/wp-content/plugins/photo-avatar-maker-tools/_resources/female.jpg",
  },
]

export default function TestimoniesSection() {
  const hasAnimated = useRef(false)

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col justify-center py-20`}
    >
      <div
        className="absolute h-screen w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 15%, transparent 85%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 40%, transparent 85%, transparent)",
        }}
      >
        <SmartGradientCard></SmartGradientCard>
      </div>
      <div className="z-30 flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <SectionTitle
          title={"Testimonials"}
          desc={"Tourist Review"}
        ></SectionTitle>
        <motion.div className="flex w-full flex-wrap justify-center gap-8">
          {rating.map((item, i) => (
            <motion.div
              initial={
                hasAnimated.current
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                bounce: 0.4,
                delay: i / 4,
              }}
              viewport={{ once: true }}
              key={i}
              className="flex min-h-40 w-full max-w-90 flex-col gap-4 rounded-2xl bg-cyan-100/30 p-8 shadow-[0_2px_30px_0] shadow-cyan-600/20 backdrop-blur-xl"
            >
              <div className="flex w-full items-center gap-2">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={400}
                  className="h-12 w-12 rounded-full object-cover"
                ></Image>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, ii) => (
                      <motion.div
                        key={ii}
                        initial={
                          hasAnimated
                            ? { scale: 0.8, opacity: 0 }
                            : { scale: 1, opacity: 1 }
                        }
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                        }}
                        transition={{
                          stiffness: 80,
                          bounce: 95,
                          type: "spring",
                          delay: ii / 5,
                        }}
                        viewport={{ once: true }}
                      >
                        <IconStarFilled
                          size={16}
                          className="text-yellow-400"
                        ></IconStarFilled>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-black">{item.package}</p>

              <div className="flex flex-col gap-4">
                <p className="text-sm">{item.comment}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={hasAnimated ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          bounce: 90,
        }}
        className={`absolute bottom-50 z-10 w-full overflow-hidden max-[670px]:relative max-[670px]:bottom-0`}
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 15%, black 60%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 40%, black 85%, transparent)",
        }}
      >
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776144000/boat_ylb4ql.png"
          }
          alt=""
          className="h-auto w-full rotate-180 object-cover object-center max-[670px]:scale-[300%]"
          width={900}
          height={900}
        ></Image>
      </motion.div>
      <SubscribeSection></SubscribeSection>
    </div>
  )
}
