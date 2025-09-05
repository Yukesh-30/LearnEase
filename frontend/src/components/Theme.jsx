import React from 'react'
import useTheme from '../hooks/useTheme'

function Theme({ isDark, setIsDark }) {
 
  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setIsDark((v) => !v)}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
        isDark
          ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
          : "border-black/10 bg-white text-gray-900 hover:bg-gray-50"
      }`}
    >
      {isDark ? (
        // Sun
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12H4m16 0h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5" />
        </svg>
      ) : (
        // Moon
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default Theme