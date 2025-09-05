import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(false)

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      // Optional: detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    
    // Optional: Apply to document for CSS
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return [isDark, setIsDark]
}