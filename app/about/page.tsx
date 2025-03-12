import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Dr. Sarah Johnson | Medical Professional",
  description: "Learn about Dr. Sarah Johnson's credentials, experience, and approach to patient care.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="container-custom mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Sarah Johnson</h1>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in internal medicine, Dr. Sarah Johnson has established herself as a
              leading medical professional dedicated to providing exceptional patient care.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Dr. Johnson completed her medical degree at Harvard Medical School, followed by a residency at Johns
              Hopkins Hospital. She is board-certified in Internal Medicine and holds additional certifications in
              Preventive Medicine and Chronic Disease Management.
            </p>
            <p className="text-lg text-muted-foreground">
              Her approach to medicine combines evidence-based practices with a compassionate, patient-centered
              philosophy. Dr. Johnson believes in treating the whole person, not just the symptoms, and works closely
              with each patient to develop personalized care plans.
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
              alt="Dr. Sarah Johnson"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/30 to-background py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">Doctor of Medicine</div>
                    <div className="text-muted-foreground">Harvard Medical School</div>
                    <div className="text-sm text-muted-foreground">2003 - 2007</div>
                  </li>
                  <li>
                    <div className="font-medium">Residency in Internal Medicine</div>
                    <div className="text-muted-foreground">Johns Hopkins Hospital</div>
                    <div className="text-sm text-muted-foreground">2007 - 2010</div>
                  </li>
                  <li>
                    <div className="font-medium">Fellowship in Preventive Medicine</div>
                    <div className="text-muted-foreground">Mayo Clinic</div>
                    <div className="text-sm text-muted-foreground">2010 - 2011</div>
                  </li>
                  <li>
                    <div className="font-medium">Bachelor of Science in Biology</div>
                    <div className="text-muted-foreground">Stanford University</div>
                    <div className="text-sm text-muted-foreground">1999 - 2003</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Certifications & Memberships</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">Board Certification in Internal Medicine</div>
                    <div className="text-muted-foreground">American Board of Internal Medicine</div>
                  </li>
                  <li>
                    <div className="font-medium">Certification in Preventive Medicine</div>
                    <div className="text-muted-foreground">American College of Preventive Medicine</div>
                  </li>
                  <li>
                    <div className="font-medium">Member</div>
                    <div className="text-muted-foreground">American Medical Association</div>
                  </li>
                  <li>
                    <div className="font-medium">Fellow</div>
                    <div className="text-muted-foreground">American College of Physicians</div>
                  </li>
                  <li>
                    <div className="font-medium">Member</div>
                    <div className="text-muted-foreground">Society of General Internal Medicine</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-bold">Chief of Internal Medicine</h3>
            <div className="text-muted-foreground">San Francisco Medical Center</div>
            <div className="text-sm text-muted-foreground mb-4">2018 - Present</div>
            <p className="text-muted-foreground">
              Leading the internal medicine department, overseeing patient care, and implementing innovative treatment
              protocols.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-bold">Attending Physician</h3>
            <div className="text-muted-foreground">California General Hospital</div>
            <div className="text-sm text-muted-foreground mb-4">2013 - 2018</div>
            <p className="text-muted-foreground">
              Provided comprehensive care to patients, supervised medical residents, and contributed to hospital quality
              improvement initiatives.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-bold">Primary Care Physician</h3>
            <div className="text-muted-foreground">Bay Area Medical Group</div>
            <div className="text-sm text-muted-foreground mb-4">2011 - 2013</div>
            <p className="text-muted-foreground">
              Delivered personalized primary care services with a focus on preventive medicine and chronic disease
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2000&auto=format&fit=crop"
            alt="Medical background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-primary-foreground">My Approach to Patient Care</h2>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground">
            "I believe that exceptional medical care combines scientific expertise with compassion and understanding. My
            goal is to empower patients with knowledge about their health and work together to achieve optimal
            wellness."
          </p>
          <div className="mt-4 text-primary-foreground/80">— Dr. Sarah Johnson</div>
        </div>
      </section>
    </main>
  )
}

