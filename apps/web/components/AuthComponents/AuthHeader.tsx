import Logo from "@workspace/ui/components/logo"
import React from "react"

type AuthT = {
  title: string
  desc: string
}

export default function AuthHeader({ desc, title }: AuthT) {
  return (
    <div>
      <Logo></Logo>
      <p className="text-[4.5vh] font-bold">{title}</p>
      <p className="text-2xl max-[667px]:text-[16px]">{desc}</p>
    </div>
  )
}
