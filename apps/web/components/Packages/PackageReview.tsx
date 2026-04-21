"use client"

import { PackageDealT, PackageT } from "@/lib/types"
import { IconLaurelWreath, IconStarFilled, IconUser } from "@tabler/icons-react"
import React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import Image from "next/image"
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

export default function PackageReview({
  item,
  width,
}: {
  width: number
  item: PackageT | PackageDealT
}) {
  const [activeImage, setActiveImage] = React.useState<string | null>(null)

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div
        className={`flex ${width > 760 ? "" : "flex-col"} w-full items-center justify-between gap-8 rounded-2xl border-2 border-gray-100 p-4`}
      >
        <div
          className={`flex items-center gap-4 ${width > 495 ? "" : "flex-col"}`}
        >
          <div className="flex items-center gap-2">
            <IconLaurelWreath size={35} strokeWidth={1}></IconLaurelWreath>
            <p className="text-xl font-semibold">Tourist Favorite</p>
          </div>
          <p
            className={`text-xl font-semibold ${width > 495 ? "" : "text-center"}`}
          >
            Highly rated and trusted by travelers
          </p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center border-r pr-4">
            <p className="text-xl font-semibold">4.91</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled size={15} key={i}></IconStarFilled>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">69</p>
            <p className="text-sm">Reviews</p>
          </div>
        </div>
      </div>
      <div className="w-full columns-1 gap-4 [column-gap:1rem] rounded-2xl border-2 border-gray-100 p-4 sm:columns-2 lg:columns-3">
        {item.reviews?.map((review, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid rounded-2xl border bg-primary-purple-100/5 p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.media[0]}></AvatarImage>
                  <AvatarFallback>
                    <IconUser></IconUser>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">Johnny Doe</p>
                  <p className="text-[12px] font-light">2 weeks ago</p>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <IconStarFilled size={15} key={i}></IconStarFilled>
                ))}
              </div>
            </div>
            <div className="my-4 flex flex-col gap-4">
              <p>{review.comment}</p>
              <div className="flex gap-2">
                {review.media.map((rev2, i) => (
                  <div key={i}>
                    <Image
                      src={rev2}
                      alt={rev2}
                      width={400}
                      height={400}
                      onClick={() => setActiveImage(rev2)} // ✅ ADD THIS
                      className="h-40 w-40 cursor-pointer rounded-2xl object-cover transition hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90%] max-w-[90%] rounded-2xl"
              onClick={(e) => e.stopPropagation()} // prevent close when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
