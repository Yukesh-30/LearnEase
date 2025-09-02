"use client"

import { useEffect, useRef, useState } from "react"
import TrueFocus from "../../components/Truefocus"
import GlassyNavbar from "./GlassyNavbar"
import Theme from "../../components/Theme"
import Background from "../../components/Background"
import Features from "./Features"

function Home() {
  const [isDark, setIsDark] = useState(false)
  const cursorRef = useRef(null)

  // Load theme
  useEffect(() => {
    const stored = localStorage.getItem("hero-theme")
    if (stored) setIsDark(stored === "dark")
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true)
    }
  }, [])

  // Persist theme
  useEffect(() => {
    localStorage.setItem("hero-theme", isDark ? "dark" : "light")
  }, [isDark])

  // Smooth-follow custom cursor
  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let raf = 0
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { ...target }
    let scale = 1

    const move = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      const interactive = e.target.closest("a, button, [role='button'], input, textarea, select")
      scale = interactive ? 1.35 : 1
    }
    const down = () => (scale = 1.15)
    const up = () => (scale = 1.35)

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12
      pos.y += (target.y - pos.y) * 0.12
      el.style.transform = `translate3d(${pos.x - 14}px, ${pos.y - 14}px, 0) scale(${scale})`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", move, { passive: true })
    window.addEventListener("mousedown", down, { passive: true })
    window.addEventListener("mouseup", up, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`relative min-h-screen overflow-hidden no-custom-cursor ${isDark ? "bg-black" : "bg-white"}`}>
      <GlassyNavbar isDark={isDark}/>
      <div className={`absolute inset-0 -z-20 ${isDark ? "theme-dark" : "theme-light"}`}>
        <div className="animated-base absolute inset-0" />
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />
      </div>
      <Background isDark={isDark} />
      <main className="relative mx-auto mt-10 flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        
        {/* <h1
          className={`mt-8 max-w-4xl text-pretty text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Learn. Collaborate. Grow.
        </h1> */}

        
        <TrueFocus
            sentence="Learn Collaborate Grow"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={1}
            isDark={isDark}
        />
        <p
          className={`mx-auto mt-6 max-w-3xl text-lg font-para font-extralight leading-relaxed sm:text-xl ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          An AI‑powered platform where students and teachers work together on a shared canvas, track progress, and
          master fundamentals through gamified challenges.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,107,0,0.35)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get Started
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button
            href="#demo"
            className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${
              isDark
                ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                : "border border-black/10 bg-white text-gray-900 hover:bg-gray-50"
            }`}
          >
            Try Demo
          </button>
        </div>
        <div
          className={`mx-auto mt-14 mb-8 w-full max-w-3xl rounded-2xl border p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur ${
            isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-white/70"
          }`}
        >
          {/* <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className={`${isDark ? "text-white" : "text-gray-900"} text-base font-semibold`}>
                Ask AI to summarize today’s session
              </p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mt-1 text-sm`}>
                Get a quick recap and actionable next steps.
              </p>
            </div>
            <a
              href="#summarize"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,107,0,0.35)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Try Now
            </a>
          </div> */}
          
        </div>
        
      </main>
      <Theme isDark={isDark} setIsDark={setIsDark} />

      {/* Custom orange cursor */}
      <div ref={cursorRef} className="soft-cursor" />

      {/* Scoped styles for background + cursor */}
      <style>{`
        /* Base gradient (subtle) */
        .theme-light .animated-base {
          background: linear-gradient(180deg, #fff5ed 0%, #ffe9d7 50%, #ffd7bd 100%);
        }
        .theme-dark .animated-base {
          background: linear-gradient(180deg, #0b0b0b 0%, #100902 60%, #0b0602 100%);
        }

        /* Orange glow orbs with motion */
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(60px);
          opacity: 0.55;
          will-change: transform;
          pointer-events: none;
          mix-blend-mode: normal;
        }
        .theme-light .orb {
          background: radial-gradient(circle at 30% 30%, rgba(255,168,97,0.9), rgba(255,107,0,0.75) 45%, rgba(255,107,0,0) 70%);
        }
        .theme-dark .orb {
          background: radial-gradient(circle at 30% 30%, rgba(255,140,64,0.55), rgba(255,107,0,0.45) 45%, rgba(255,107,0,0) 70%);
        }
        .orb-1 { width: 50vw; height: 50vw; top: -10vh; left: -10vw; animation: float1 18s ease-in-out infinite alternate; }
        .orb-2 { width: 45vw; height: 45vw; bottom: -15vh; right: -10vw; animation: float2 22s ease-in-out infinite alternate; }
        .orb-3 { width: 35vw; height: 35vw; top: 30vh; left: 25vw; animation: float3 26s ease-in-out infinite alternate; }

        @keyframes float1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(6vw, 4vh, 0) scale(1.08); }
        }
        @keyframes float2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(-5vw, -3vh, 0) scale(1.05); }
        }
        @keyframes float3 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(3vw, -5vh, 0) scale(1.07); }
        }

        /* Custom cursor */
        .soft-cursor {
          position: fixed;
          left: 0;
          top: 0;
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: #ff6b00;
          box-shadow:
            0 8px 28px rgba(255, 107, 0, 0.45),
            0 0 0 10px rgba(255, 107, 0, 0.08);
          filter: blur(0.2px);
          pointer-events: none;
          z-index: 50;
          transition: transform .2s ease;
        }

        /* Hide custom cursor on touch devices and restore default pointer */
        @media (pointer: coarse) {
          .no-custom-cursor { cursor: auto; }
          .soft-cursor { display: none; }
        }

        /* Use Tailwind's cursor-none by default on desktop to reveal our custom cursor */
        .no-custom-cursor { cursor: none; }
      `}</style>
      <Features isDark={isDark}/>                                  
    </div>
  )
}

export default Home