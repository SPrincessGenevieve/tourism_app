"use client"

import React from "react"
import { motion } from "motion/react"

type ImageGalleryProps = {
  images: string[]
  onImageClick?: (img: string) => void
}

export default function PackageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <div className="flex h-[520px] w-full gap-2 overflow-hidden rounded-2xl">
      {images.length > 2 ? (
        <>
          <div className="h-full w-[65%] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${images[0]})` }}
              onClick={() => onImageClick?.(images[0]!)}
            />
          </div>

          <div className="flex h-full w-[35%] flex-col gap-2 overflow-hidden">
            {images.slice(1, 3).map((img, i) => (
              <div key={i} className="h-full w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full cursor-pointer bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => onImageClick?.(img)}
                />
              </div>
            ))}
          </div>
        </>
      ) : images.length === 2 ? (
        <>
          <div className="h-full w-1/2 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${images[0]})` }}
              onClick={() => onImageClick?.(images[0]!)}
            />
          </div>
          <div className="h-full w-1/2 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${images[1]})` }}
              onClick={() => onImageClick?.(images[1]!)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${images[0]})` }}
              onClick={() => onImageClick?.(images[0]!)}
            />
          </div>
        </>
      )}
    </div>
  )
}
