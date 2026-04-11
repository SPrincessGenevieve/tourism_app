"use client"

import { sidebarT } from "@/lib/types"
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react"

type UserContextType = {
  token: string
  sidebar: sidebarT

  setUserDetails: (
    details:
      | Partial<UserContextType>
      | ((prev: UserContextType) => Partial<UserContextType>)
  ) => void
}

const defaultUserContext: UserContextType = {
  token: "",
  sidebar: {
    opacity: 0,
    y: `-100%`,
  },
  setUserDetails: () => {},
}

const UserContext = createContext<UserContextType>(defaultUserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetailsState] =
    useState<UserContextType>(defaultUserContext)

  useEffect(() => {
    const savedUserData = JSON.parse(
      localStorage.getItem("userDetails") || "{}"
    )
    setUserDetailsState((prev) => ({ ...prev, ...savedUserData }))
  }, [])

  const setUserDetails = (
    details:
      | Partial<UserContextType>
      | ((prev: UserContextType) => Partial<UserContextType>)
  ) => {
    const updatedUserDetails =
      typeof details === "function"
        ? { ...userDetails, ...details(userDetails) }
        : { ...userDetails, ...details }

    if (JSON.stringify(updatedUserDetails) !== JSON.stringify(userDetails)) {
      setUserDetailsState(updatedUserDetails as UserContextType)
      localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails))
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
