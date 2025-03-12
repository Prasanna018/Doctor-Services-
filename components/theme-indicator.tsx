"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeIndicator() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
      {resolvedTheme === "dark" ? (
        <Moon className="h-5 w-5 text-yellow-400" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </div>
  )
}

