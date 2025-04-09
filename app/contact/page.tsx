"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
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
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-muted-foreground mb-4">
                      We've received your message and will get back to you soon.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="max-w-[700px] mx-auto mb-6">
            Let's work together to create a social media strategy that drives real results for your business.
          </p>
          <Button size="lg" variant="secondary">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
