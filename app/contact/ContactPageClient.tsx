"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
      submitted: true,
      loading: false,
    })
  }

  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Dr. Sarah Johnson</h1>
          <p className="text-lg text-muted-foreground">
            Have questions or ready to schedule an appointment? Get in touch with Dr. Johnson's office using the contact
            information below or by filling out the form.
          </p>
        </div>
      </section>

      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
                  alt="Medical office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                </div>
              </div>
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {formState.submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-primary/10 p-6 rounded-lg text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been received. We'll get back to you as soon as possible.
                      </p>
                      <Button className="mt-6" onClick={() => setFormState({ ...formState, submitted: false })}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={formState.loading}>
                        {formState.loading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@drjohnson.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@drjohnson.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-muted-foreground">
                      123 Medical Plaza Dr.
                      <br />
                      Suite 456
                      <br />
                      San Francisco, CA 94123
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 5pm
                      <br />
                      Saturday: 10am - 2pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Appointments</p>
                    <p className="text-muted-foreground mb-2">Schedule an appointment online or by phone</p>
                    <Button size="sm" className="group">
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
                  </div>
                </motion.div>
              </div>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Emergency Contact</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For medical emergencies, please call 911 or visit your nearest emergency room.
                </p>
                <p className="text-muted-foreground text-sm">
                  For urgent but non-emergency matters during off-hours, please call our after-hours service at (123)
                  456-7899.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container-custom mt-16">
        <Card className="border-none shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-[16/9] w-full bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2000&auto=format&fit=crop"
                  alt="Office location map"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-medium">Dr. Sarah Johnson's Medical Office</p>
                    <p className="text-sm text-muted-foreground">123 Medical Plaza Dr, San Francisco, CA 94123</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

