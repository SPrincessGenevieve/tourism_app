import { IconCalendar, IconUser } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import React from "react"
import { PackageT, PackageDealT } from "@/lib/types"
import { TravelerT } from "@/app/packages/review-package/[id]/page"

type ReviewFormT = {
  handleBooking: () => void
  data: PackageT | PackageDealT
  total: number
  packageTotal: number
  travelers: TravelerT[]
}

export default function ReviewForm({
  handleBooking,
  data,
  total,
  packageTotal,
  travelers,
}: ReviewFormT) {
  return (
    <div>
      <div
        className="h-40 w-full rounded-2xl bg-cover"
        style={{
          backgroundImage: `url(${"https://www.travel-palawan.com/wp-content/uploads/2018/02/ENTALULA-ISLAND-EL-NIDO.jpeg"})`,
        }}
      ></div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{data.name}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <IconCalendar size={18} strokeWidth={1}></IconCalendar>
            <p className="text-sm">April 20, 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <IconUser size={18} strokeWidth={1}></IconUser>
            <p className="text-sm">{travelers.length + 1}</p>
          </div>
        </div>
        <div className="border-t pt-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm">Package Price x ({travelers.length + 1})</p>
            <p className="text-sm">₱ {packageTotal.toLocaleString()}</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-sm">Service Fee</p>
            <p className="text-sm">₱ 200</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-sm">Discount</p>
            <p className="text-sm">- 3,000</p>
          </div>
          <div className="mt-2 flex w-full items-center justify-between border-t py-2">
            <p className="text-sm font-semibold">Total</p>
            <p className="text-xl font-semibold text-blue-400">
              ₱ {total.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={handleBooking} className="w-full">
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
