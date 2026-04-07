import "@workspace/ui/styles/globals.css"
import Image from "next/image"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full bg-white">
      <div className="w-1/2">
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775567468/mt_mayon_lwulu5.jpg"
          }
          alt="Mt. Mayon"
          width={500}
          height={400}
          className="pointer-events-none h-full w-full object-cover"
        ></Image>
      </div>
      <div className="flex w-1/2 min-w-93.75 items-center justify-center p-4">
        <div className="w-[80%] max-[667px]:w-full">{children}</div>
      </div>
    </div>
  )
}
