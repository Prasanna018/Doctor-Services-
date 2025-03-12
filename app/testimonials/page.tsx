import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Sarah Johnson",
  description:
    "Read what patients have to say about their experience with Dr. Sarah Johnson's medical care and services.",
}

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Patient for 5 years",
    content:
      "Dr. Johnson has been my primary care physician for over 5 years. Her attention to detail and genuine care for my health has been exceptional. She takes the time to listen and explain everything clearly. I've never felt rushed during appointments, and she always makes me feel like my health concerns are valid and important.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Patient for 3 years",
    content:
      "I've never felt more comfortable with a doctor. Dr. Johnson's approach is both professional and compassionate. She helped me manage my chronic condition with a personalized treatment plan that has significantly improved my quality of life. Her knowledge is impressive, but it's her empathy that truly sets her apart from other physicians I've seen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Patient for 7 years",
    content:
      "Dr. Johnson is simply the best. She diagnosed an issue that multiple other doctors had missed. Her expertise and thoroughness saved me from years of unnecessary suffering. I cannot recommend her highly enough. She doesn't just treat symptoms; she investigates the root causes and develops comprehensive treatment plans.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Robert Garcia",
    role: "Patient for 2 years",
    content:
      "Finding Dr. Johnson was a blessing. She takes a holistic approach to healthcare and considers all aspects of my wellbeing. Her preventive care recommendations have kept me healthier than I've been in years. The office staff is also incredibly helpful and responsive, making the entire experience positive.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Jennifer Lee",
    role: "Patient for 4 years",
    content:
      "As someone with a complex medical history, I've struggled to find a doctor who could coordinate my care effectively. Dr. Johnson not only manages my conditions expertly but also communicates seamlessly with my specialists. She's thorough, knowledgeable, and genuinely cares about her patients' wellbeing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "David Thompson",
    role: "Patient for 1 year",
    content:
      "Even though I've only been seeing Dr. Johnson for a year, she's already made a significant impact on my health. She identified issues that had been overlooked and developed a comprehensive plan that addressed my concerns. Her approach is patient-centered and thorough. I'm grateful to have found such an exceptional physician.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Testimonials</h1>
          <p className="text-lg text-muted-foreground">
            Read what patients have to say about their experience with Dr. Johnson's care. These testimonials reflect
            our commitment to providing exceptional medical services with compassion and expertise.
          </p>
        </div>
      </section>

      <section className="container-custom mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="italic mb-4">"{testimonial.content.substring(0, 150)}..."</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We value your feedback. If you've been a patient of Dr. Johnson and would like to share your experience,
              we'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                Submit Your Testimonial
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-24 w-24 rounded-full overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
                  alt="Dr. Sarah Johnson"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">A Message from Dr. Johnson</h2>
                <p className="text-muted-foreground mb-4">
                  "I'm deeply grateful for the trust my patients place in me. Your testimonials not only warm my heart
                  but also remind me of the privilege it is to be part of your healthcare journey. My commitment to
                  providing exceptional care is unwavering, and I look forward to continuing to serve you and your
                  families."
                </p>
                <p className="font-medium">— Dr. Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of satisfied patients and experience the exceptional care that Dr. Johnson provides.
          Schedule your appointment today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="group">
              Book Appointment
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

