import HeaderLanding from "@/components/Landing/HeaderLanding"
import HeroSection from "@/components/Landing/HeroSection"
import SearchSection from "@/components/Landing/SearchSection"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-y-auto">
      <HeroSection></HeroSection>
      {/* <SearchSection></SearchSection> */}
    </div>
  )
}
