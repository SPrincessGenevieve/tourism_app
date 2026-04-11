import { Button } from "@workspace/ui/components/button"
import Input from "@workspace/ui/components/input"
import Image from "next/image"
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { IconCalendar, IconMapPin, IconUsers } from "@tabler/icons-react"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@workspace/ui/components/dropdown-menu"
import WebSearch from "./Search/WebSearch"
import { useUserContext } from "@/app/context/UseContext"
import MobSearch from "./Search/MobSearch"

const fields = [
  {
    label: "Destination",
    icon: IconMapPin,
    type: "text",
  },
  {
    label: "",
    icon: IconCalendar,
    type: "date",
  },
  {
    label: "",
    icon: IconUsers,
    type: "number",
  },
]

export default function SearchSection() {
  const [travelDate, setTravelDate] = React.useState<Date | undefined>(
    new Date()
  )
  const { width } = useUserContext()

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {width > 1225 ? <WebSearch></WebSearch> : <MobSearch></MobSearch>}
    </div>
  )
}
