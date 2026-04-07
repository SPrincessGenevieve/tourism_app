"use client"

import { Eye, EyeClosed } from "lucide-react"
import React, { useState } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  containerClassName?: string
}

export default function Input({
  label,
  error,
  type = "text",
  className = "",
  containerClassName = "",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password"

  return (
    <div className={containerClassName}>
      {/* Label */}
      {label && (
        <label className="font-regular mb-1 block text-sm text-primary-gray-200">
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`h-12 w-full rounded-lg border-2 border-transparent bg-primary-gray-100 p-2 px-4 pr-10 transition duration-300 ease-in-out outline-none placeholder:text-gray-400 focus:border-primary-purple-100 ${className}`}
          {...props}
        />

        {/* 👁️ Toggle Password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-500"
          >
            {showPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
