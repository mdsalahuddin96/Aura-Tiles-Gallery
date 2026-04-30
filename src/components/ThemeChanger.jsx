"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1 text-2xl cursor-pointer text-white rounded"
    >
      {theme === 'dark' ? '☀️ ' : '🌙 '}
    </button>
  )
}