"use client"

import { useUserContext } from "@/app/context/UseContext"
import { SearchFields } from "@/lib/lib"
import { IconMapPin } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import Image from "next/image"
import React, { useRef } from "react"
import { motion } from "motion/react"
import Input from "@workspace/ui/components/input"

export default function MobSearch() {
  const hasAnimated = useRef(false)
  const { width } = useUserContext()
  const [travelDate, setTravelDate] = React.useState<Date | undefined>(
    new Date()
  )

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-8">
      <div className="z-20 flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <motion.p
            initial={
              hasAnimated.current
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
            className={`flex flex-wrap items-center justify-center gap-2 text-center ${width > 620 ? "max-w-120 text-4xl" : "text-[9vw] leading-8"} font-semibold`}
          >
            Visit The Most{" "}
            <span className="text-cyan-300">Beautiful Places</span> In The
            Philippines
          </motion.p>
          <motion.p
            initial={
              hasAnimated.current
                ? {
                    x: -40,
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
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-center"
          >
            Book affordable tour packages with trusted travel providers
          </motion.p>
        </div>
      </div>
      <div className="relative flex w-full max-w-150 flex-col items-center justify-center gap-4">
        <motion.div
          initial={hasAnimated.current ? { scale: 0 } : { scale: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => {
            hasAnimated.current = true
          }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 90,
            bounce: 100,
          }}
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
        <motion.div
          initial={
            hasAnimated.current
              ? {
                  x: -60,
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
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className={`${width > 515 ? "absolute" : "flex"} flex w-full flex-wrap gap-4 rounded-2xl bg-white/70 p-4 shadow-[0px_0px_10px_4px_rgba(1,89,153,0.2)]`}
        >
          <div className="flex w-full flex-col gap-4">
            <InputGroup className="gap-2 p-2">
              <InputGroupInput
                type={SearchFields[0]?.type}
                placeholder={SearchFields[0]?.label}
                className="w-full text-sm"
              ></InputGroupInput>
              <InputGroupAddon>
                <IconMapPin></IconMapPin>
              </InputGroupAddon>
            </InputGroup>
            <div className={`flex gap-4 ${width > 560 ? "" : "flex-col"}`}>
              {SearchFields.map(
                (item, i) =>
                  i > 0 && (
                    <InputGroup className="gap-2 p-2" key={i}>
                      {i === 1 ? (
                        <DropdownMenu key={i}>
                          <DropdownMenuTrigger className="flex h-10 w-full min-w-40 items-center p-0">
                            <Input
                              className="h-8 w-full"
                              containerClassName="w-full"
                              value={
                                travelDate
                                  ? travelDate.toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })
                                  : "Select date"
                              }
                            ></Input>
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
                          className="w-full text-sm"
                        ></InputGroupInput>
                      )}
                      <InputGroupAddon>
                        <item.icon></item.icon>
                      </InputGroupAddon>
                    </InputGroup>
                  )
              )}
            </div>
          </div>
          <Button className="w-full">Search</Button>
        </motion.div>
      </div>
    </div>
  )
}
