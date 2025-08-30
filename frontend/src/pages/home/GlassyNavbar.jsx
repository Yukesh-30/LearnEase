import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// CHANGED: Added icons for the mobile menu
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Main Component
const GlassyNavbar = ({ isDark }) => {
  // CHANGED: Added state for the mobile menu toggle
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div
        className="relative mx-auto flex max-w-screen-xl items-center justify-between rounded-full border border-white/10 
                   px-6 py-2 shadow-lg backdrop-blur-xl ring-1"
      >
        
        <h1 className={`text-lg font-bold ${
            isDark ? "text-white" : "text-black"
          }`}>
          LearnEase
        </h1>

        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SlideTabs isDark={isDark} />
        </div>

        {/* Buttons on the right (hidden on small screens) */}
        <div className="hidden items-center gap-2 lg:flex">
          <button className={`rounded-full px-4 py-2 text-sm font-semibold font-para cursor-pointer ${isDark ? "text-white" : "text-black"}`}>
            Login
          </button>
          <button className={`rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold font-para text-white transition-colors hover:bg-orange-700`}>
            Get Started
          </button>
        </div>

        {/* CHANGED: Added a hamburger menu button for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? (
              <XMarkIcon className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* CHANGED: Added the mobile menu panel */}
      {mobileOpen && <MobileMenu />}
    </nav>
  );
};

// Sliding Tabs Component (No changes needed here)
const SlideTabs = ({ isDark }) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative hidden w-fit rounded-full p-1 lg:flex"
    >
      <Tab setPosition={setPosition} isDark={isDark}>Features</Tab>
      <Tab setPosition={setPosition} isDark={isDark}>Docs</Tab>
      <Tab setPosition={setPosition} isDark={isDark}>Blog</Tab>
      <Tab setPosition={setPosition} isDark={isDark}>Community</Tab>
      <Cursor position={position} isDark={isDark} />
    </ul>
  );
};

// Tab Component (No changes needed here)
const Tab = ({ children, setPosition,isDark }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-sm ${isDark ? "text-white" : "text-black"}`}
    >
      {children}
    </li>
  );
};

// Cursor Component (No changes needed here)
const Cursor = ({ position, isDark }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className={`absolute z-0 h-10 rounded-full ${isDark ? "bg-orange-600 text-white" : "bg-orange-600 text-white"}`}
    />
  );
};

// NEW: A simple mobile menu component
const MobileMenu = () => {
    return (
        <div className="mx-auto mt-2 max-w-screen-xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-black/20 lg:hidden">
            <ul className="flex flex-col gap-2 text-center">
                <li><a href="#" className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10">Features</a></li>
                <li><a href="#" className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10">Docs</a></li>
                <li><a href="#" className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10">Blog</a></li>
                <li><a href="#" className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10">Community</a></li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
                <button className="flex-1 rounded-full border border-neutral-700/50 px-4 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">Login</button>
                <button className="flex-1 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white">Get Started</button>
            </div>
        </div>
    )
}

export default GlassyNavbar;