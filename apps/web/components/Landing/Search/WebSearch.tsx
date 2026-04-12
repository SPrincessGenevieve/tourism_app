"use client"
import { motion } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import React, { useRef } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@workspace/ui/components/dropdown-menu"
import { SearchFields } from "@/lib/lib"

export default function WebSearch() {
  const hasAnimated = useRef(false)

  const [travelDate, setTravelDate] = React.useState<Date | undefined>(
    new Date()
  )

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <motion.div
        initial={hasAnimated.current ? { scale: 1 } : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          hasAnimated.current = true
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          bounce: 100,
        }}
        className="absolute right-20 z-0 w-full max-w-150"
      >
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775888538/sea_k0dgsf.png"
          }
          alt="sea"
          width={500}
          height={500}
          className="h-auto w-full"
        ></Image>
      </motion.div>
      <div className="z-20 flex h-full w-[90%] items-center justify-between p-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-4">
            <motion.p
              initial={
                hasAnimated
                  ? {
                      x: -20,
                      opacity: 0,
                    }
                  : {
                      x: 0,
                      opacity: 1,
                    }
              }
              viewport={{ once: true }}
              onViewportEnter={() => {
                hasAnimated.current = true
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex max-w-120 flex-wrap gap-2 text-left text-5xl font-semibold"
            >
              Visit The Most{" "}
              <span className="text-cyan-300">Beautiful Places</span> In The
              Philippines
            </motion.p>
            <motion.p
              initial={
                hasAnimated ? { x: -40, opacity: 0 } : { x: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              onViewportEnter={() => {
                hasAnimated.current = true
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Book affordable tour packages with trusted travel providers
            </motion.p>
          </div>
          <motion.div
            initial={
              hasAnimated ? { x: -60, opacity: 0 } : { x: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            onViewportEnter={() => {
              hasAnimated.current = true
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="-full max-w-240 rounded-2xl bg-white/70 p-4 shadow-[0px_0px_10px_4px_rgba(1,89,153,0.2)]"
          >
            <div className="flex w-full gap-4">
              {SearchFields.map((item, i) => (
                <InputGroup className="" key={i}>
                  {i === 1 ? (
                    <DropdownMenu key={i}>
                      <DropdownMenuTrigger className="flex h-10 w-[85%]">
                        <p className="flex h-full w-full items-center pl-4 text-left text-sm">
                          {travelDate
                            ? travelDate.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Select date"}
                        </p>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <Calendar
                          mode="single"
                          selected={travelDate}
                          onSelect={setTravelDate}
                          className="rounded-lg border"
                          captionLayout="dropdown"
                        />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <InputGroupInput
                      type={item.type}
                      placeholder={item.label}
                      className="w-full max-w-50 text-sm"
                    ></InputGroupInput>
                  )}
                  <InputGroupAddon>
                    <item.icon></item.icon>
                  </InputGroupAddon>
                </InputGroup>
              ))}

              <Button className="w-50">Search</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
