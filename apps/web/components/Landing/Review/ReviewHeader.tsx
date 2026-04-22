import React from "react"

export default function ReviewHeader({ label }: { label: string }) {
  return (
    <div
      className="relative h-60 w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://roadlesstravelled.me/wp-content/uploads/2015/04/el-nido-sunset-fisherman.jpg?w=474)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <p className="text-3xl font-semibold text-white">{label}</p>
      </div>
    </div>
  )
}
