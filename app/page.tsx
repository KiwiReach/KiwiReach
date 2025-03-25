import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Placeholder } from "@/components/placeholder"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  We Help Businesses Grow Through Social Media Marketing
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Boost your online presence, engage with your audience, and drive more sales with our tailored social
                  media strategies.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Placeholder width={500} height={500} text="Social Media Marketing" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive social media solutions to help your business thrive online.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Social Media Management</h3>
                <p className="text-muted-foreground">
                  We handle everything from content creation to community engagement, ensuring your social media
                  presence is active and effective.
                </p>
                <Link href="/services" className="inline-flex items-center text-primary">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Content Creation</h3>
                <p className="text-muted-foreground">
                  Eye-catching graphics, engaging videos, and compelling copy that resonates with your audience and
                  reflects your brand.
                </p>
                <Link href="/services" className="inline-flex items-center text-primary">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Grow Your Business?</h2>
              <p className="max-w-[700px] md:text-xl">
                Let's discuss how we can help you achieve your social media marketing goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

