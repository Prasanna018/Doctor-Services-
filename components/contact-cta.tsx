"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactCta() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
          alt="Medical background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/90 dark:bg-primary/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to prioritize your health?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
              Schedule an appointment today and take the first step towards better health with Dr. Sarah Johnson's
              expert care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="font-medium group">
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-primary-foreground"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <Link
                    href="tel:+1234567890"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    (123) 456-7890
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <Link
                    href="mailto:contact@drjohnson.com"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    contact@drjohnson.com
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-primary-foreground/80">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

