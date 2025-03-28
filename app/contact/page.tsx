"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Contact Us</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're here to help with any questions you may have about our services.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:kiwireachnz@gmail.com">kiwireachnz@gmail.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+64224637880">+64 22 463 7880</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Instagram</h3>
                  <p className="text-muted-foreground">
                    <a href="https://instagram.com/kiwi.reach" target="_blank" rel="noopener noreferrer">
                      @kiwi.reach
                    </a>
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Book a Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Ready to discuss your social media needs? Schedule a free 30-minute consultation with our team.
                </p>
                <Button className="w-full">
                  <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does it take to see results from social media marketing?</h3>
              <p className="text-muted-foreground">
                While some results can be seen within the first month, significant improvements in engagement,
                followers, and conversions typically take 3-6 months of consistent effort and strategy implementation.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Which social media platforms should my business be on?</h3>
              <p className="text-muted-foreground">
                This depends on your target audience, industry, and goals. We'll help you identify the platforms where
                your audience is most active and where your content will have the greatest impact.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How often will you post on my social media accounts?</h3>
              <p className="text-muted-foreground">
                Posting frequency varies by platform and strategy, but our packages typically include 8-30 posts per
                month across your selected platforms, depending on your plan.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer one-time services or only monthly packages?</h3>
              <p className="text-muted-foreground">
                While we primarily offer monthly packages for ongoing social media management, we do provide one-time
                services such as social media audits, strategy development, and content creation packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's work together to create a social media strategy that drives real results for your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

