import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Dr. Sarah Johnson | Medical Professional",
  description: "Get in touch with Dr. Sarah Johnson for appointments, inquiries, or medical consultations.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

