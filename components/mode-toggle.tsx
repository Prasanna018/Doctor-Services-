"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after hydration to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-14 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative h-9 w-14 rounded-full flex items-center transition-colors duration-300 ${
        isDark ? "bg-primary/20" : "bg-primary/10"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        className={`absolute left-1 right-1 h-7 flex items-center ${isDark ? "justify-end" : "justify-start"}`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`h-5 w-5 rounded-full flex items-center justify-center ${
            isDark ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
          }`}
        >
          {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}

