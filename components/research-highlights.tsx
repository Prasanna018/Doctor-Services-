"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const researchItems = [
  {
    title: "Advances in Preventive Medicine",
    journal: "Journal of Preventive Medicine",
    year: "2023",
    description: "A comprehensive study on new approaches to preventive care and early disease detection.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Chronic Disease Management in Primary Care",
    journal: "Primary Care Research",
    year: "2022",
    description: "Research on effective strategies for managing chronic conditions in a primary care setting.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Patient-Centered Care Models",
    journal: "Healthcare Innovation Journal",
    year: "2021",
    description: "Exploring innovative approaches to patient-centered care delivery and outcomes.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=400&auto=format&fit=crop",
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

export default function ResearchHighlights() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
            <p className="text-muted-foreground text-lg">
              Dr. Johnson actively contributes to medical research, with publications in respected medical journals. Her
              research focuses on improving patient care and outcomes.
            </p>
          </div>
          <Link href="/research">
            <Button variant="outline" className="group">
              View All Research
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {researchItems.map((item, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">{item.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{item.year}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="group">
                    Read Publication
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

