import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Stethoscope, Microscope, Activity, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Medical Services | Dr. Sarah Johnson",
  description:
    "Comprehensive medical services offered by Dr. Sarah Johnson, including preventive care, chronic disease management, and specialized treatments.",
}

const services = [
  {
    id: "preventive",
    title: "Preventive Care",
    description: "Comprehensive health screenings and preventive measures to maintain your wellbeing.",
    icon: Heart,
    details: [
      "Annual physical examinations",
      "Health risk assessments",
      "Immunizations and vaccinations",
      "Cancer screenings",
      "Cardiovascular disease prevention",
      "Lifestyle and nutrition counseling",
    ],
  },
  {
    id: "chronic",
    title: "Chronic Disease Management",
    description: "Personalized treatment plans for diabetes, hypertension, and other chronic conditions.",
    icon: Activity,
    details: [
      "Diabetes management",
      "Hypertension treatment",
      "Cholesterol management",
      "Thyroid disorders",
      "Asthma and COPD care",
      "Arthritis treatment",
    ],
  },
  {
    id: "diagnostic",
    title: "Diagnostic Services",
    description: "Advanced diagnostic testing to identify and address health concerns early.",
    icon: Microscope,
    details: [
      "Laboratory testing",
      "Electrocardiograms (EKG/ECG)",
      "Pulmonary function tests",
      "Allergy testing",
      "Imaging referrals",
      "Comprehensive health assessments",
    ],
  },
  {
    id: "neurological",
    title: "Neurological Care",
    description: "Specialized treatment for neurological disorders and conditions.",
    icon: Brain,
    details: [
      "Headache and migraine management",
      "Memory disorder evaluation",
      "Neuropathy treatment",
      "Sleep disorder assessment",
      "Neurological exam",
      "Coordination with specialists",
    ],
  },
  {
    id: "consultations",
    title: "General Consultations",
    description: "Professional medical advice and consultations for all health concerns.",
    icon: Stethoscope,
    details: [
      "Initial health assessments",
      "Second opinion consultations",
      "Pre-surgical evaluations",
      "Travel medicine consultations",
      "Telehealth appointments",
      "Urgent care services",
    ],
  },
  {
    id: "family",
    title: "Family Medicine",
    description: "Comprehensive healthcare services for patients of all ages.",
    icon: Users,
    details: [
      "Pediatric care",
      "Adolescent medicine",
      "Women's health services",
      "Men's health services",
      "Geriatric care",
      "Family health planning",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Medical Services</h1>
          <p className="text-lg text-muted-foreground">
            Dr. Johnson offers a wide range of medical services to address your health needs with personalized care and
            attention. Each service is delivered with the highest standards of medical excellence.
          </p>
        </div>
      </section>

      <section className="container-custom">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button>Schedule Consultation</Button>
                  </Link>
                </div>
                <div className="bg-muted rounded-xl p-8">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardHeader>
                      <CardTitle>Why Choose This Service</CardTitle>
                      <CardDescription>Benefits of Dr. Johnson's approach</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Personalized Care</h4>
                          <p className="text-sm text-muted-foreground">
                            Tailored treatment plans based on your unique health profile
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Evidence-Based Approach</h4>
                          <p className="text-sm text-muted-foreground">
                            Treatment protocols based on the latest medical research
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Comprehensive Care</h4>
                          <p className="text-sm text-muted-foreground">
                            Addressing all aspects of your health and wellbeing
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Ongoing Support</h4>
                          <p className="text-sm text-muted-foreground">
                            Continuous monitoring and adjustment of your care plan
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {index < services.length - 1 && <div className="border-b border-border my-16"></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Expert Medical Care?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule an appointment with Dr. Johnson today and take the first step towards better health and wellbeing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Book Appointment</Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn More About Dr. Johnson
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

