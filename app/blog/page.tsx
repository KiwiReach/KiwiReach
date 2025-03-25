// Add this comment to make it a Server Component
// (Next.js App Router components are Server Components by default)

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Server Component doesn't need useState or event handlers
export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Insights, tips, and strategies to help you succeed with social media marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="5 Tips to Improve Your Instagram Engagement"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Instagram</div>
                  <h2 className="text-xl font-bold">5 Tips to Improve Your Instagram Engagement</h2>
                  <p className="text-muted-foreground">
                    Learn how to boost your engagement rates and build a more active community on Instagram.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">March 15, 2025</p>
                  <Link href="/blog/instagram-engagement-tips" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="How to Create a Social Media Content Calendar"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Strategy</div>
                  <h2 className="text-xl font-bold">How to Create a Social Media Content Calendar</h2>
                  <p className="text-muted-foreground">
                    A step-by-step guide to planning and organizing your social media content for maximum impact.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">March 8, 2025</p>
                  <Link href="/blog/content-calendar-guide" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="The Power of User-Generated Content"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Content</div>
                  <h2 className="text-xl font-bold">The Power of User-Generated Content</h2>
                  <p className="text-muted-foreground">
                    Discover how to leverage your customers' content to build trust and authenticity for your brand.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">March 1, 2025</p>
                  <Link href="/blog/user-generated-content" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Social Media Advertising: A Beginner's Guide"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Advertising</div>
                  <h2 className="text-xl font-bold">Social Media Advertising: A Beginner's Guide</h2>
                  <p className="text-muted-foreground">
                    Everything you need to know to get started with paid social media advertising for your business.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">February 22, 2025</p>
                  <Link href="/blog/social-media-advertising-guide" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="How to Measure Social Media ROI"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Analytics</div>
                  <h2 className="text-xl font-bold">How to Measure Social Media ROI</h2>
                  <p className="text-muted-foreground">
                    Learn how to track and measure the return on investment of your social media marketing efforts.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">February 15, 2025</p>
                  <Link href="/blog/measuring-social-media-roi" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="The Future of Social Media Marketing"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Trends</div>
                  <h2 className="text-xl font-bold">The Future of Social Media Marketing</h2>
                  <p className="text-muted-foreground">
                    Explore emerging trends and technologies that will shape the future of social media marketing.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">February 8, 2025</p>
                  <Link href="/blog/future-of-social-media" className="inline-flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest social media marketing tips, trends, and insights delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Blog Post */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Article</h2>
              <p className="text-muted-foreground">Our most popular post this month</p>
            </div>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="5 Tips to Improve Your Instagram Engagement"
                width={800}
                height={400}
                className="w-full object-cover"
              />
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Instagram</div>
                  <h2 className="text-2xl font-bold">5 Tips to Improve Your Instagram Engagement</h2>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>By Jane Smith</span>
                    <span>•</span>
                    <span>March 15, 2025</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Instagram continues to be one of the most powerful platforms for businesses to connect with their
                    audience. However, with algorithm changes and increasing competition, many brands are finding it
                    harder to maintain high engagement rates.
                  </p>
                  <p>
                    In this article, we'll share five proven strategies to boost your Instagram engagement and build a
                    more active community around your brand.
                  </p>
                  <h3 className="text-xl font-bold text-foreground">1. Create More Authentic, Less Polished Content</h3>
                  <p>
                    While high-quality visuals are important, today's Instagram users crave authenticity.
                    Behind-the-scenes content, employee spotlights, and day-in-the-life posts often outperform overly
                    polished promotional content.
                  </p>
                  <p>
                    Try incorporating more casual, authentic content into your content mix and track how it performs
                    compared to your more produced posts.
                  </p>
                  <h3 className="text-xl font-bold text-foreground">2. Leverage Instagram Stories Features</h3>
                  <p>
                    Instagram Stories offer numerous interactive features that can boost engagement, including polls,
                    questions, quizzes, and sliders. These features not only increase engagement but also provide
                    valuable insights about your audience.
                  </p>
                  <p>
                    Make it a habit to include at least one interactive element in your Stories each week to encourage
                    active participation from your followers.
                  </p>
                </div>
                <Link href="/blog/instagram-engagement-tips" className="inline-flex items-center text-primary">
                  Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need Help With Your Social Media Strategy?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts is ready to help you develop a social media strategy that drives real results for
                your business.
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

