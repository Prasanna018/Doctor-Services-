"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Patient for 5 years",
    content:
      "Dr. Johnson has been my primary care physician for over 5 years. Her attention to detail and genuine care for my health has been exceptional. She takes the time to listen and explain everything clearly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Patient for 3 years",
    content:
      "I've never felt more comfortable with a doctor. Dr. Johnson's approach is both professional and compassionate. She helped me manage my chronic condition with a personalized treatment plan that has significantly improved my quality of life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Patient for 7 years",
    content:
      "Dr. Johnson is simply the best. She diagnosed an issue that multiple other doctors had missed. Her expertise and thoroughness saved me from years of unnecessary suffering. I cannot recommend her highly enough.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Robert Garcia",
    role: "Patient for 2 years",
    content:
      "Finding Dr. Johnson was a blessing. She takes a holistic approach to healthcare and considers all aspects of my wellbeing. Her preventive care recommendations have kept me healthier than I've been in years.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        next()
      }, 5000)
    }
    return () => {
      resetTimeout()
    }
  }, [current, autoplay])

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What My Patients Say</h2>
          <p className="text-muted-foreground text-lg">
            Read testimonials from patients who have experienced Dr. Johnson's exceptional care and medical expertise.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-full min-h-[300px] bg-primary/5">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 md:hidden">
                        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg">
                          <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                          <p className="text-muted-foreground">{testimonials[current].role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <Quote className="h-12 w-12 text-primary/20 mb-6" />
                      <p className="text-lg md:text-xl mb-8 italic">"{testimonials[current].content}"</p>
                      <div className="hidden md:block">
                        <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                        <p className="text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

