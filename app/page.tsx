import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import dynamic from "next/dynamic"

// Instead of:
// import ContactPage from './contact/page'

// Use:
const ContactPage = dynamic(() => import("./contact/page"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // If you don't need server-side rendering
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
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
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Social Media Marketing"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Kiwi Reach?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're not just another marketing agency. Here's what sets us apart:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailored Strategies</h3>
                <p className="text-muted-foreground">
                  We create custom social media plans that align with your business goals and target audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Approach</h3>
                <p className="text-muted-foreground">
                  We use analytics to measure performance and continuously optimize your campaigns for better results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  We're committed to your success with regular updates, reports, and responsive communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                <Link href="/services#management" className="inline-flex items-center text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
                <Link href="/services#content" className="inline-flex items-center text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Paid Advertising</h3>
                <p className="text-muted-foreground">
                  Strategic ad campaigns that target your ideal customers, maximize your budget, and drive measurable
                  results.
                </p>
                <Link href="/services#advertising" className="inline-flex items-center text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                <p className="text-muted-foreground">
                  Comprehensive insights into your social media performance with clear, actionable recommendations.
                </p>
                <Link href="/services#analytics" className="inline-flex items-center text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
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

      {/* Case Studies Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sample Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These fictional case studies demonstrate the type of results we aim to achieve. All metrics and
                improvements shown are for illustration purposes only.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Case Study: Local Cafe"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Local Cafe Increases Foot Traffic by 45%</h3>
                <p className="text-muted-foreground">
                  Through targeted Instagram campaigns and engaging content, we helped a local cafe attract new
                  customers and boost sales.
                </p>
                <Link href="/portfolio#cafe" className="inline-flex items-center text-primary">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Case Study: E-commerce Store"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">E-commerce Store Doubles Online Sales</h3>
                <p className="text-muted-foreground">
                  Our comprehensive social media strategy helped an online retailer increase their conversion rate and
                  expand their customer base.
                </p>
                <Link href="/portfolio#ecommerce" className="inline-flex items-center text-primary">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/portfolio">
              <Button size="lg">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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

