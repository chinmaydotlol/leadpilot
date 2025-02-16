"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
  }

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled && "bg-black/20 backdrop-blur-md border-b border-white/[0.1]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              className="text-xl sm:text-2xl font-bold text-[#BDD9BF] whitespace-nowrap"
              onClick={() => scrollTo("home")}
            >
              LeadPilot
            </button>
          </div>

          {/* desktop navigation */}
          <nav className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => scrollTo("subscribe")}
              className="px-4 py-2 text-sm text-zinc-300 hover:text-[#BDD9BF] transition-colors rounded-md hover:bg-white/5"
            >
              Join Beta
            </button>
          </nav>

          {/* mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-[#BDD9BF] hover:bg-white/5 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg rounded-b-lg border-t border-white/[0.1]">
              <button
                onClick={() => scrollTo("subscribe")}
                className="block w-full px-3 py-2 text-base text-zinc-300 hover:text-[#BDD9BF] hover:bg-white/5 transition-colors rounded-md text-left"
              >
                Join Beta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
