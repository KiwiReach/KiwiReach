import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The following case studies represent sample results we aim to achieve. All metrics and improvements
                mentioned are hypothetical examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: Local Cafe */}
      <section id="cafe" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Food & Beverage</div>
                <h2 className="text-3xl font-bold tracking-tighter">Local Cafe Increases Foot Traffic by 45%</h2>
                <p className="text-muted-foreground">
                  Sunrise Cafe was struggling to attract new customers despite their excellent food and atmosphere. They
                  approached us to help increase their visibility and bring in more foot traffic.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Sunrise Cafe had minimal social media presence and was not effectively showcasing their unique
                    offerings to potential customers in the area.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Approach</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Created a consistent Instagram posting schedule featuring high-quality food photography</li>
                    <li>Developed a local hashtag strategy to increase visibility in the community</li>
                    <li>
                      Implemented a user-generated content campaign encouraging customers to share their experiences
                    </li>
                    <li>Ran targeted Instagram and Facebook ads to reach potential customers within a 5-mile radius</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Results</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>45% increase in foot traffic within 3 months</li>
                    <li>300% growth in Instagram followers</li>
                    <li>28% increase in average weekend sales</li>
                    <li>Significant boost in user-generated content, creating authentic social proof</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sunrise Cafe Case Study"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: E-commerce */}
      <section id="ecommerce" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Urban Threads Case Study"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">E-commerce</div>
                <h2 className="text-3xl font-bold tracking-tighter">E-commerce Store Doubles Online Sales</h2>
                <p className="text-muted-foreground">
                  Urban Threads, an online clothing retailer, wanted to increase their online sales and build a stronger
                  brand presence on social media.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Urban Threads had a decent social following but was struggling to convert followers into customers.
                    Their engagement rates were low, and their social strategy lacked cohesion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Approach</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Developed a cohesive visual identity across Instagram, Pinterest, and TikTok</li>
                    <li>Created shoppable posts to streamline the path to purchase</li>
                    <li>Implemented an influencer marketing strategy with micro-influencers in the fashion niche</li>
                    <li>Designed and managed targeted social media ad campaigns focused on conversion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Results</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>105% increase in online sales over 6 months</li>
                    <li>68% increase in website traffic from social media</li>
                    <li>4.2x return on ad spend (ROAS) from social media campaigns</li>
                    <li>35% growth in email list subscribers through social media lead generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: Service Business */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Service Business</div>
                <h2 className="text-3xl font-bold tracking-tighter">Fitness Studio Grows Membership by 75%</h2>
                <p className="text-muted-foreground">
                  Elevate Fitness, a boutique fitness studio, needed to attract new members and increase class
                  attendance in a competitive market.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Elevate Fitness was struggling to stand out in a crowded fitness market and needed to showcase their
                    unique approach and community atmosphere.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Approach</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Created engaging content highlighting client transformations and success stories</li>
                    <li>
                      Developed a content strategy focusing on fitness tips, workout snippets, and motivational content
                    </li>
                    <li>Implemented a referral campaign promoted through social media</li>
                    <li>Ran targeted Facebook and Instagram ads for free trial class offers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Results</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>75% increase in membership over 4 months</li>
                    <li>85% increase in class attendance</li>
                    <li>42% of new members attributed to social media marketing</li>
                    <li>Significant improvement in community engagement and retention rates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Elevate Fitness Case Study"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sample Testimonials</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These are fictional examples of the kind of results and feedback we aim to achieve. All metrics,
                improvements, and testimonials below are for demonstration purposes only.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="italic text-muted-foreground">
                  "Working with Kiwi Reach has been a game-changer for our cafe. Their strategic approach to social
                  media has brought in so many new customers, and their content truly captures the essence of our brand.
                  We couldn't be happier with the results!"
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sarah Johnson"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Owner, Sunrise Cafe</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="italic text-muted-foreground">
                  "The team at Kiwi Reach understands our brand and has helped us connect with our target audience in
                  ways we never thought possible. Our online sales have more than doubled, and our social media presence
                  has never been stronger."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Michael Chen"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Founder, Urban Threads</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Be Our Next Success Story?</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help your business achieve similar results through strategic social media
                marketing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Schedule a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

