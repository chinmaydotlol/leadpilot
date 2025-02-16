"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled && "bg-black/20 backdrop-blur-md border-b border-white/[0.1]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-x-4">
          <button className="text-2xl font-bold text-[#BDD9BF]"
                  onClick={() => scrollTo("home")}>
            LeadPilot
          </button>
          <nav className="hidden md:flex">
            <button
              onClick={() => scrollTo("subscribe")}
              className="text-sm text-zinc-300 hover:text-[#BDD9BF] transition-colors"
            >
              Join Beta
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
