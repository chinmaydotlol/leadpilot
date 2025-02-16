"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const scrollToSubscribe = () => {
    const subscribeSection = document.getElementById("subscribe")
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, #BDD9BF 0%, transparent 70%)",
              "radial-gradient(circle at 60% 40%, #BDD9BF 0%, transparent 70%)",
              "radial-gradient(circle at 40% 60%, #BDD9BF 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, #BDD9BF 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 10, // Changed from 15
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            opacity: 0.4,
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, #1a2e1c 0%, transparent 70%)",
              "radial-gradient(circle at 40% 60%, #1a2e1c 0%, transparent 70%)",
              "radial-gradient(circle at 60% 40%, #1a2e1c 0%, transparent 70%)",
              "radial-gradient(circle at 30% 70%, #1a2e1c 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 15, // Changed from 20
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            opacity: 0.3,
          }}
        />
      </div>

      {/* Noise Texture */}
      {/*<div className="absolute inset-0 bg-black/40" />*/}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mx-auto max-w-4xl">
            <span className="text-[#BDD9BF]">Create, Explore, Expand, Conquer.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
            LeadPilot empowers companies, freelancers, founders, and creators with AI-driven lead generation and outreach
            tools to scale your business effortlessly.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={scrollToSubscribe}
              className="bg-black no-underline group cursor-pointer relative shadow-2xl shadow-[#BDD9BF]/10 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(189,217,191,0.6)_0%,rgba(189,217,191,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black py-3 px-6 ring-1 ring-white/10 ">
                <span>Join Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#BDD9BF]/0 via-[#BDD9BF]/90 to-[#BDD9BF]/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
            <Link
              href="https://discord.gg/VYSW8UecG7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full relative bg-[#BDD9BF] text-black text-sm font-semibold hover:shadow-2xl hover:shadow-[#BDD9BF]/20 transition duration-200"
            >
              <span className="relative z-20">Join Our Discord</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          {/* Terminal UI Component */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-zinc-400">$ leadpilot generate-leads --industry="tech startups"</div>
              <div className="text-[#BDD9BF]">✓ 500 potential leads identified</div>
              <div className="text-zinc-400">$ leadpilot personalize-outreach --leads="tech-startups.json"</div>
              <div className="text-[#BDD9BF]">✓ Personalized messages created for 500 leads</div>
              <div className="text-zinc-400">$ leadpilot start-campaign --name="Q2 Outreach"</div>
              <div className="text-[#BDD9BF]">✓ Campaign "Q2 Outreach" launched successfully</div>
              <div className="flex items-center">
                <span className="text-zinc-400">$ </span>
                <span className="ml-1 animate-pulse">|</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
