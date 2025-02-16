import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MailingForm } from "@/components/mailing-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Features />
      <MailingForm />
    </main>
  )
}
