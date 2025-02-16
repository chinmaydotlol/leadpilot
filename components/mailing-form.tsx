"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, AlertCircle } from "lucide-react"
import type React from "react"

const roles = ["Freelancer", "Business/Startup Founder", "Content Creator", "Sales Professional", "Marketer", "Other"]

export function MailingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    otherRole: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", role: "", otherRole: "" })

      // Reset form fields
      const form = e.target as HTMLFormElement
      form.reset()

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to subscribe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="subscribe" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#BDD9BF,rgba(0,0,0,0)_70%)] opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Join Our Beta
          </h2>
          <p className="text-center text-zinc-400 mb-8">Be one of the first people to try our Beta version</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#BDD9BF] focus:border-transparent"
                placeholder="John Doe"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#BDD9BF] focus:border-transparent"
                placeholder="john@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-zinc-300 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BDD9BF] focus:border-transparent"
              >
                <option value="">Select your role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            {formData.role === "Other" && (
              <div>
                <label htmlFor="otherRole" className="block text-sm font-medium text-zinc-300 mb-1">
                  Specify Your Role
                </label>
                <input
                  type="text"
                  id="otherRole"
                  name="otherRole"
                  required
                  value={formData.otherRole}
                  className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#BDD9BF] focus:border-transparent"
                  placeholder="Enter your role"
                  onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                />
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black no-underline group cursor-pointer relative shadow-2xl shadow-[#BDD9BF]/10 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(189,217,191,0.6)_0%,rgba(189,217,191,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex justify-center items-center z-10 rounded-full bg-black py-2 px-4 ring-1 ring-white/10 ">
                <span>{isLoading ? "Subscribing..." : "Subscribe to Beta"}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#BDD9BF]/0 via-[#BDD9BF]/90 to-[#BDD9BF]/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </form>
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-[#BDD9BF]/10 rounded-md flex items-center justify-center text-[#BDD9BF]"
              >
                <Check className="mr-2 h-5 w-5" />
                <span>Thank you for subscribing to our beta!</span>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-red-500/10 rounded-md flex items-center justify-center text-red-500"
              >
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
