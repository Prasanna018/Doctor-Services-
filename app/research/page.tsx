import type { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Sarah Johnson",
  description: "Explore Dr. Sarah Johnson's research contributions and publications in the field of medicine.",
}

const researchItems = [
  {
    title: "Advances in Preventive Medicine: A Comprehensive Review",
    journal: "Journal of Preventive Medicine",
    year: "2023",
    description:
      "A comprehensive study on new approaches to preventive care and early disease detection, focusing on innovative screening methods and patient education strategies.",
    tags: ["Preventive Medicine", "Screening", "Patient Education"],
  },
  {
    title: "Chronic Disease Management in Primary Care Settings",
    journal: "Primary Care Research",
    year: "2022",
    description:
      "Research on effective strategies for managing chronic conditions in a primary care setting, with emphasis on integrated care models and patient self-management support.",
    tags: ["Chronic Disease", "Primary Care", "Integrated Care"],
  },
  {
    title: "Patient-Centered Care Models: Outcomes and Implementation",
    journal: "Healthcare Innovation Journal",
    year: "2021",
    description:
      "Exploring innovative approaches to patient-centered care delivery and outcomes, including analysis of various implementation strategies across different healthcare settings.",
    tags: ["Patient-Centered Care", "Healthcare Delivery", "Outcomes"],
  },
  {
    title: "The Role of Telemedicine in Modern Healthcare Delivery",
    journal: "Digital Health Quarterly",
    year: "2020",
    description:
      "An examination of telemedicine's expanding role in healthcare delivery, with focus on accessibility, quality of care, and patient satisfaction metrics.",
    tags: ["Telemedicine", "Digital Health", "Healthcare Access"],
  },
  {
    title: "Neurological Manifestations of Common Systemic Diseases",
    journal: "Neurology Today",
    year: "2019",
    description:
      "A comprehensive review of neurological symptoms and conditions associated with common systemic diseases, with guidance for diagnosis and management.",
    tags: ["Neurology", "Systemic Disease", "Diagnosis"],
  },
  {
    title: "Preventive Strategies for Cardiovascular Disease in High-Risk Populations",
    journal: "Cardiovascular Prevention",
    year: "2018",
    description:
      "Research on targeted preventive interventions for cardiovascular disease in populations with multiple risk factors, including lifestyle modifications and pharmacological approaches.",
    tags: ["Cardiovascular", "Prevention", "High-Risk Populations"],
  },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h1>
          <p className="text-lg text-muted-foreground">
            Dr. Johnson actively contributes to medical research, with publications in respected medical journals. Her
            research focuses on improving patient care and outcomes through evidence-based approaches.
          </p>
        </div>
      </section>

      <section className="container-custom mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchItems.map((item, index) => (
            <Card key={index} className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{item.journal}</span>
                  <span className="mx-2">•</span>
                  <span>{item.year}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group">
                  Read Publication
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Focus Areas</h2>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Preventive Medicine</h3>
                <p className="text-muted-foreground mb-4">
                  Dr. Johnson's research in preventive medicine focuses on developing and evaluating strategies to
                  prevent disease, promote health, and improve early detection of conditions before they become serious.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Screening Protocols</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Risk Assessment</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Health Promotion</span>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Chronic Disease Management</h3>
                <p className="text-muted-foreground mb-4">
                  This research area explores innovative approaches to managing chronic conditions, with a focus on
                  patient engagement, integrated care models, and optimizing treatment outcomes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Self-Management</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Care Coordination</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Treatment Adherence</span>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Healthcare Delivery Innovation</h3>
                <p className="text-muted-foreground mb-4">
                  Dr. Johnson studies new models of healthcare delivery, including telemedicine, patient-centered
                  medical homes, and other approaches that aim to improve access, quality, and efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Telemedicine</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Care Models</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Quality Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Research Presentations</h3>
                    <p className="text-sm text-muted-foreground">
                      Access slides and materials from Dr. Johnson's conference presentations and lectures.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full group">
                  View Presentations
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Publication Archive</h3>
                    <p className="text-sm text-muted-foreground">
                      Download a complete list of Dr. Johnson's publications with citation information.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full group">
                  Download CV
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Research Collaboration</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Dr. Johnson welcomes opportunities for research collaboration with other medical professionals and
            institutions.
          </p>
          <Button size="lg" variant="secondary">
            Contact for Research Inquiries
          </Button>
        </div>
      </section>
    </main>
  )
}

