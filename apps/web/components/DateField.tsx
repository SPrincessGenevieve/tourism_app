import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import Input from "@workspace/ui/components/input"
import React from "react"

type DateFieldProps = {
  date?: Date
  setDate: (date: Date | undefined) => void
  formattedDate?: string
  label?: string
}

export default function DateField({
  date,
  setDate,
  formattedDate,
  label = "Label",
}: DateFieldProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-full">
          <Input
            label={label}
            containerClassName="w-full"
            value={formattedDate || ""}
            readOnly
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
          captionLayout="dropdown"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
