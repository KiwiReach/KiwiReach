import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Placeholder } from "@/components/placeholder"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Our Services</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Comprehensive social media solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="management" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Social Media Management</h2>
              <p className="text-muted-foreground">
                We handle your social media presence across all platforms, so you can focus on running your business.
              </p>
              <ul className="space-y-2">
                <li>✓ Platform setup and optimization</li>
                <li>✓ Content calendar development</li>
                <li>✓ Regular posting and scheduling</li>
                <li>✓ Community engagement and moderation</li>
                <li>✓ Monthly performance reports</li>
              </ul>
              <div>
                <Link href="/contact">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Placeholder width={600} height={400} text="Social Media Management" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section id="content" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Placeholder width={600} height={400} text="Content Creation" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold">Content Creation</h2>
              <p className="text-muted-foreground">
                Engaging, on-brand content that resonates with your audience and drives engagement.
              </p>
              <ul className="space-y-2">
                <li>✓ Professional photography and videography</li>
                <li>✓ Graphic design for social media posts</li>
                <li>✓ Copywriting and caption development</li>
                <li>✓ User-generated content curation</li>
                <li>✓ Content strategy development</li>
              </ul>
              <div>
                <Link href="/contact">
                  <Button>Get Started</Button>
                </Link>
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
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

