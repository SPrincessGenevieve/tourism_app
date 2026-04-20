import React from "react"
import PackageGallery from "./PackageGallery"
import { PackageDealT, PackageT } from "@/lib/types"
import { AnimatePresence } from "motion/react"
import { motion, scale } from "motion/react"

type TravelterinaryProps = {
  item?: PackageT | PackageDealT
  activeImage: string | null
  setActiveImage: (value: string | null) => void
  onImageClick?: (img: string) => void
}

export default function Travelterinary({
  item,
  onImageClick,
  activeImage,
  setActiveImage,
}: TravelterinaryProps) {
  return (
    <div className="flex h-auto w-full flex-col gap-4 p-8">
      <p className="text-2xl font-semibold">Travel Itinenary</p>
      <div className="flex flex-col gap-4">
        {item?.itinerary.map((item2, i) => {
          const itineraryGallery = item2?.images
          return (
            <div key={i} className="mt-8 flex flex-col gap-8">
              <div className="flex items-start gap-2">
                <p className="w-22 rounded-sm bg-cyan-400 px-2 text-center text-xl font-semibold text-white">
                  Day {i + 1}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {item2.activities.map((activities, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-purple-100">
                      <p className="font-semibold text-white">{i + 1}</p>
                    </div>
                    <p className="text-xl font-semibold">{activities}</p>
                  </div>
                ))}
              </div>
              <PackageGallery
                images={itineraryGallery ?? []}
                onImageClick={onImageClick}
              ></PackageGallery>
              <div>
                <p
                  className="leading-7 whitespace-pre-line text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: item2.description || "",
                  }}
                />
              </div>
            </div>
          )
        })}
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
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
