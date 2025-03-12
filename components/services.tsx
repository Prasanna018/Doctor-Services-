"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Stethoscope, Microscope, Activity, Users } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Preventive Care",
    description: "Comprehensive health screenings and preventive measures to maintain your wellbeing.",
    icon: Heart,
  },
  {
    title: "Chronic Disease Management",
    description: "Personalized treatment plans for diabetes, hypertension, and other chronic conditions.",
    icon: Activity,
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostic testing to identify and address health concerns early.",
    icon: Microscope,
  },
  {
    title: "Neurological Care",
    description: "Specialized treatment for neurological disorders and conditions.",
    icon: Brain,
  },
  {
    title: "General Consultations",
    description: "Professional medical advice and consultations for all health concerns.",
    icon: Stethoscope,
  },
  {
    title: "Family Medicine",
    description: "Comprehensive healthcare services for patients of all ages.",
    icon: Users,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Medical Services</h2>
          <p className="text-muted-foreground text-lg">
            Dr. Johnson offers a wide range of medical services to address your health needs with personalized care and
            attention.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

