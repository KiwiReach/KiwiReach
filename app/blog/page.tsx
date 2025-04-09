// Simplify the blog page to reduce bundle size
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Placeholder } from "@/components/placeholder"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  // Simplified blog data
  const blogPosts = [
    {
      title: "5 Tips to Improve Your Instagram Engagement",
      excerpt: "Learn how to boost your engagement rates and build a more active community on Instagram.",
      category: "Instagram",
      date: "March 15, 2025",
      slug: "instagram-engagement-tips",
    },
    {
      title: "How to Create a Social Media Content Calendar",
      excerpt: "A step-by-step guide to planning and organizing your social media content for maximum impact.",
      category: "Strategy",
      date: "March 8, 2025",
      slug: "content-calendar-guide",
    },
    {
      title: "The Power of User-Generated Content",
      excerpt: "Discover how to leverage your customers' content to build trust and authenticity for your brand.",
      category: "Content",
      date: "March 1, 2025",
      slug: "user-generated-content",
    },
  ]

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

      {/* Blog Posts - Simplified */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <Placeholder width="100%" height={200} />
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{post.category}</div>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
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
