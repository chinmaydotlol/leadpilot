"use client"

import { Youtube,  Mail } from "lucide-react"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} LeadPilot. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="mailto:contact@leadpilot.dev"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link 
            href="https://discord.gg/mgK7dZj4uS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#5865F2] transition-colors"
            aria-label="Discord"
          >
            <DiscordLogoIcon className="h-5 w-5" />
          </Link>
          <Link 
            href="https://youtube.com/@leadpilot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#FF0000] transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 