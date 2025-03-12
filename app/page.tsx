import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import ResearchHighlights from "@/components/research-highlights"
import ContactCta from "@/components/contact-cta"
import { ThemeIndicator } from "@/components/theme-indicator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <ResearchHighlights />
      <ContactCta />
      <ThemeIndicator />
    </main>
  )
}

