import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Kiwi Reach</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're passionate about helping businesses harness the power of social media to reach their goals.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Kiwi Reach Team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Journey"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Kiwi Reach was founded with a simple mission: to help businesses navigate the complex world of social
                  media marketing and achieve tangible results.
                </p>
                <p className="text-muted-foreground">
                  After years of working with businesses of all sizes, we noticed a gap in the market. Many companies
                  were struggling to effectively leverage social media platforms to grow their business. That's when we
                  decided to create an agency that focuses on strategic, results-driven social media marketing.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped numerous businesses increase their online presence, engage with
                  their audience, and drive meaningful growth through social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Kiwi Reach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in open communication and honest reporting. You'll always know exactly what we're doing and
                the results we're achieving.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                Social media is constantly evolving, and so are we. We stay ahead of trends and algorithm changes to
                keep your strategy fresh and effective.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Results-Focused</h3>
              <p className="text-muted-foreground">
                We're not just about likes and followers. We're committed to driving real business outcomes through
                strategic social media marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate professionals behind Kiwi Reach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
              <p className="text-muted-foreground">
                With over 10 years of experience in digital marketing, Jane leads our team with vision and expertise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Mike Johnson</h3>
                <p className="text-muted-foreground">Creative Director</p>
              </div>
              <p className="text-muted-foreground">
                Mike brings creativity and innovation to every project, ensuring your content stands out in crowded
                feeds.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Sarah Williams</h3>
                <p className="text-muted-foreground">Strategy Manager</p>
              </div>
              <p className="text-muted-foreground">
                Sarah develops data-driven strategies that align with your business goals and deliver measurable
                results.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our team can help you achieve your social media marketing goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

