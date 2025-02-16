"use client"

import { motion } from "framer-motion"
import { Users, Workflow, BarChart } from "lucide-react"

const features = [
  {
    title: "AI-Powered Lead Generation",
    description: "Discover high-quality leads tailored to your target audience",
    icon: Users,
    content:
      "Our AI algorithms analyze vast datasets to identify potential leads that match your ideal customer profile. Say goodbye to cold calling and hello to warm, qualified prospects.",
  },
  {
    title: "Automated Outreach Campaigns",
    description: "Create and manage personalized outreach sequences at scale",
    icon: Workflow,
    content:
      "Design multi-touch campaigns that automatically adapt based on prospect interactions. From initial contact to follow-ups, LeadPilot ensures your messages are timely and relevant.",
  },
  {
    title: "Advanced Analytics",
    description: "Track and optimize your outreach performance with detailed insights",
    icon: BarChart,
    content:
      "Gain deep insights into your campaign performance with our comprehensive analytics dashboard. Measure open rates, response rates, and conversion metrics to continuously refine your approach.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#BDD9BF,rgba(0,0,0,0)_70%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Powerful Lead Generation Tools
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to find, engage, and convert your ideal customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#BDD9BF] to-transparent opacity-20 rounded-lg blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-lg p-6">
                <feature.icon className="h-8 w-8 text-[#BDD9BF] mb-5" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 mb-4">{feature.description}</p>
                <p className="text-sm text-[#BDD9BF]">{feature.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
