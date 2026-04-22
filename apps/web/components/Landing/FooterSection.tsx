import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react"
import Logo from "@workspace/ui/components/logo"
import Image from "next/image"
import Link from "next/link"
import React, { useRef } from "react"
import { motion } from "motion/react"

const pages = [
  {
    label: "Login",
    href: "/sign-in",
  },
  {
    label: "Register",
    href: "/sign-up",
  },
  {
    label: "Tour Packages",
    href: "",
  },
  {
    label: "Agency Login",
    href: "",
  },
]

const destination = [
  {
    label: "Bohol",
    href: "",
  },
  {
    label: "Boracay",
    href: "",
  },
  {
    label: "Cebu",
    href: "",
  },
  {
    label: "Palawan",
    href: "",
  },
]

export default function FooterSection() {
  const hasAnimated = useRef(false)

  return (
    <motion.div className="relative mt-20 flex h-auto min-h-80 w-full flex-col justify-center overflow-hidden">
      <motion.div className="flex w-full flex-wrap items-start justify-between gap-10 p-4 px-4">
        <motion.div
          initial={
            hasAnimated.current
              ? { opacity: 1, scale: 1 }
              : { scale: 0.8, opacity: 0 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, bounce: 100 }}
          viewport={{ once: true }}
          className="flex h-full flex-col gap-4"
        >
          <div className="flex flex-col gap-4">
            <Logo></Logo>
            <p className="max-w-80">
              Your trusted partner for unforgettable travel experiences across
              the Philippines and beyond.
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <IconBrandFacebook></IconBrandFacebook>
                <p className="font-semibold">Facebook</p>
              </div>
              <div className="flex items-center gap-2">
                <IconBrandInstagram></IconBrandInstagram>
                <p className="font-semibold">Instagram</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={
            hasAnimated.current
              ? { opacity: 1, scale: 1 }
              : { scale: 0.8, opacity: 0 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            bounce: 100,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <p className="font-bold">Quick Links</p>
          <div className="mt-4 flex flex-col gap-2">
            {pages.map((item, i) => (
              <Link
                href={item.href}
                className="transition duration-100 ease-in-out hover:text-primary-purple-100"
                key={i}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={
            hasAnimated.current
              ? { opacity: 1, scale: 1 }
              : { scale: 0.8, opacity: 0 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            bounce: 100,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <p className="font-bold">Popular Destination</p>
          <div className="mt-4 flex flex-col gap-2">
            {destination.map((item, i) => (
              <Link
                href={item.href}
                className="transition duration-100 ease-in-out hover:text-primary-purple-100"
                key={i}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={
            hasAnimated.current
              ? { opacity: 1, scale: 1 }
              : { scale: 0.8, opacity: 0 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            bounce: 100,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <p className="font-bold">Contact Information</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 transition duration-100 ease-in-out hover:text-primary-purple-100">
              <IconPhone></IconPhone>
              <p>0911-123-234-1234</p>
            </div>
            <div className="flex items-center gap-2 transition duration-100 ease-in-out hover:text-primary-purple-100">
              <IconMail></IconMail>
              <p>example@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={
          hasAnimated.current ? { opacity: 1, y: 0 } : { y: 100, opacity: 0 }
        }
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-70"
      >
        <Image
          className="h-full w-full object-cover object-top"
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1776154354/WI_giwcp6.png"
          }
          alt=""
          width={1280}
          height={720}
        ></Image>
      </motion.div>
    </motion.div>
  )
}
