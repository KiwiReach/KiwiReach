import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Placeholder } from "@/components/placeholder"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Kiwi Reach</h1>
              <p className="text-muted-foreground md:text-xl">
                We're passionate about helping businesses harness the power of social media to reach their goals.
              </p>
            </div>
            <div className="flex justify-center">
              <Placeholder width={600} height={400} text="Kiwi Reach Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Placeholder width={600} height={400} text="Our Journey" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Kiwi Reach was founded with a simple mission: to help businesses navigate the complex world of social
                media marketing and achieve tangible results.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have helped numerous businesses increase their online presence, engage with their
                audience, and drive meaningful growth through social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Work With Us?</h2>
          <p className="max-w-[700px] mx-auto mb-6">
            Let's discuss how our team can help you achieve your social media marketing goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

