export type sidebarT = {
  y: string | number
  opacity: number
}

export type ReviewT = {
  rating: number
  comment: string
  media: string[]
}

export type IterinaryT = {
  day: number
  activities: string[]
}

export type PackageT = {
  id: number
  name: string
  packageOverview: string
  location: string
  provinceCity: string
  maxCapacity: number
  price: number
  duration: string
  image: string
  highlights: string[]
  itinerary: IterinaryT[]
  inclusion: string[]
  exclusion: string[]
  reviews: ReviewT[]
}

export type PackageDealT = {
  id: number
  name: string
  packageOverview: string
  location: string
  provinceCity: string
  maxCapacity: number
  price: number
  duration: string
  image: string
  highlights: string[]
  itinerary: IterinaryT[]
  inclusion: string[]
  exclusion: string[]
  limitedDeal: {
    isActive: boolean
    discountType: string
    discountValue: number
    expiresAt: string
    remainingSlots: number
    badge: string
  }
}
