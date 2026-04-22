"use client"

import { useUserContext } from "@/app/context/UseContext"
import DateField from "@/components/DateField"
import ReviewForm from "@/components/Landing/Review/ReviewForm"
import ReviewHeader from "@/components/Landing/Review/ReviewHeader"
import CardSummary from "@/components/Packages/CardSummary"
import { LimitedDeal, Packages } from "@/lib/MockData"
import {
  IconCalendar,
  IconPlus,
  IconTrash,
  IconUser,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import Input from "@workspace/ui/components/input"
import { usePathname, useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"

export type TravelerT = {
  fullName: string
  email: string
  contact: string
  birthDate?: Date
}

export default function ReviewCheckout() {
  const { typePackage } = useUserContext()
  const router = useRouter()
  const pathName = usePathname()
  const name = pathName.split("/")[3]?.replaceAll("%20", " ")

  const data = (typePackage === "tour" ? Packages : LimitedDeal).find(
    (item) => item.name === name
  )

  if (!data) {
    return <div>Package not found</div>
  }
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ✅ Booker state
  const [booker, setBooker] = useState({
    fullName: "",
    email: "",
    contact: "",
    emergencyContact: "",
    emergencyContactNo: "",
    birthDate: undefined as Date | undefined,
  })

  // ✅ Travelers array
  const [travelers, setTravelers] = useState<TravelerT[]>([])

  // ✅ Add traveler
  const addTraveler = () => {
    setTravelers([
      ...travelers,
      {
        fullName: "",
        email: "",
        contact: "",
        birthDate: undefined,
      },
    ])
  }

  // ✅ Remove specific traveler
  const removeTraveler = (index: number) => {
    setTravelers(travelers.filter((_, i) => i !== index))
  }

  const updateTraveler = (
    index: number,
    field: keyof TravelerT,
    value: any
  ) => {
    const updated = [...travelers]

    if (!updated[index]) return

    updated[index] = {
      ...updated[index],
      [field]: value,
    }

    setTravelers(updated)
  }

  const packageTotal = data.price * (travelers.length + 1)
  const service_fee = 200
  const discounts = 3000
  const total = packageTotal + service_fee - discounts

  const handleBooking = () => {
    router.push(`/packages/review/${name}/${data.id}`)
  }
  return (
    <div className="min-h-screen w-full bg-white">
      <ReviewHeader label="Traveler Information"></ReviewHeader>

      <div
        className={`flex ${width > 975 ? "" : "flex-col"} h-full w-full items-start justify-center gap-8 ${width > 500 ? "p-8" : "p-4"}`}
      >
        <div
          className={`flex h-[75%] ${width > 975 ? "max-w-200" : "max-w-auto"} justify-center`}
        >
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-[0_0_10px_2px] shadow-black/20">
              {/* BOOKER */}
              <div className="rounded-2xl border border-blue-700 bg-blue-100 p-4">
                <p className="text-blue-800">
                  <strong>Quick Tip: </strong>To lock in your preferred dates
                  and current rates, keep an eye on your inbox! We'll send your
                  booking details and next steps right after you hit submit so
                  you can get one step closer to your adventure.
                </p>
              </div>
              <div>
                <p className="border-b text-xl">Booker's Information</p>

                <div
                  className={`mt-4 grid ${
                    width > 725 ? "grid-cols-2" : "grid-cols-1"
                  } gap-4`}
                >
                  <Input
                    label="Full Name *"
                    value={booker.fullName}
                    onChange={(e) =>
                      setBooker({ ...booker, fullName: e.target.value })
                    }
                  />

                  <Input
                    label="Email *"
                    value={booker.email}
                    onChange={(e) =>
                      setBooker({ ...booker, email: e.target.value })
                    }
                  />

                  <DateField
                    label="Birth Date *"
                    setDate={(d?: Date) =>
                      setBooker({ ...booker, birthDate: d })
                    }
                    formattedDate={
                      booker.birthDate
                        ? booker.birthDate.toLocaleDateString()
                        : "Select date"
                    }
                  />

                  <Input
                    label="Contact No. *"
                    value={booker.contact}
                    onChange={(e) =>
                      setBooker({ ...booker, contact: e.target.value })
                    }
                  />

                  <Input
                    label="Emergency Contact *"
                    value={booker.emergencyContact}
                    onChange={(e) =>
                      setBooker({
                        ...booker,
                        emergencyContact: e.target.value,
                      })
                    }
                  />

                  <Input
                    label="Emergency Contact No. *"
                    value={booker.emergencyContactNo}
                    onChange={(e) =>
                      setBooker({
                        ...booker,
                        emergencyContactNo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* TRAVELERS */}
              {travelers.length > 0 && (
                <div>
                  <p className="border-b text-xl">Traveler's Information</p>

                  {travelers.map((traveler, i) => (
                    <div key={i} className="py-4">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Traveler {i + 1}</p>
                        <IconTrash
                          onClick={() => removeTraveler(i)}
                          className="cursor-pointer text-red-500"
                        />
                      </div>

                      <div
                        className={`mt-4 grid ${
                          width > 725 ? "grid-cols-2" : "grid-cols-1"
                        } gap-4 ${travelers.length > 1 ? "border-b pb-4" : ""}`}
                      >
                        <Input
                          label="Full Name *"
                          value={traveler.fullName}
                          onChange={(e) =>
                            updateTraveler(i, "fullName", e.target.value)
                          }
                        />

                        <Input
                          label="Email *"
                          value={traveler.email}
                          onChange={(e) =>
                            updateTraveler(i, "email", e.target.value)
                          }
                        />

                        <Input
                          label="Contact No. *"
                          value={traveler.contact}
                          onChange={(e) =>
                            updateTraveler(i, "contact", e.target.value)
                          }
                        />

                        <DateField
                          label="Birth Date *"
                          setDate={(d?: Date) =>
                            updateTraveler(i, "birthDate", d)
                          }
                          formattedDate={
                            traveler.birthDate
                              ? traveler.birthDate.toLocaleDateString()
                              : "Select date"
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ADD BUTTON */}
              <Button
                onClick={addTraveler}
                className="w-full"
                variant="outline"
              >
                <IconPlus /> Add Traveler
              </Button>
            </div>
          </div>
        </div>

        {width > 975 ? (
          <>
            <div
              className={`h-30 ${width > 975 ? "min-w-100" : "min-w-auto"}`}
            ></div>
            <div
              className={`fixed ${width > 1390 ? "right-[12%]" : "right-[2%]"} min-w-100`}
            >
              <div className="absolute flex w-100 flex-col gap-4 rounded-2xl bg-white p-8 shadow-[0_0_10px_2px] shadow-black/20">
                <ReviewForm
                  handleBooking={handleBooking}
                  data={data}
                  total={total}
                  packageTotal={packageTotal}
                  travelers={travelers}
                ></ReviewForm>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-8 shadow-[0_0_10px_2px] shadow-black/20">
            <ReviewForm
              handleBooking={handleBooking}
              data={data}
              total={total}
              packageTotal={packageTotal}
              travelers={travelers}
            ></ReviewForm>
          </div>
        )}
      </div>
    </div>
  )
}
