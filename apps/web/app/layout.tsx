import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { UserProvider } from "./context/UseContext"
import SidebarContent from "@/components/Landing/SidebarContent"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <UserProvider>
            <Analytics></Analytics>
            <SpeedInsights></SpeedInsights>
            <SidebarContent></SidebarContent>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
