import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Placeholder } from "@/components/placeholder"

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Our Portfolio</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            The following case studies represent sample results we aim to achieve. All metrics and improvements
            mentioned are hypothetical examples.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section id="cafe" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Food & Beverage</div>
              <h2 className="text-3xl font-bold">Local Cafe Increases Foot Traffic by 45%</h2>
              <p className="text-muted-foreground">
                Sunrise Cafe was struggling to attract new customers despite their excellent food and atmosphere. They
                approached us to help increase their visibility and bring in more foot traffic.
              </p>
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
              <Placeholder width={600} height={600} text="Sunrise Cafe Case Study" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="max-w-[700px] mx-auto mb-6">
            Let's discuss how we can help your business achieve similar results through strategic social media
            marketing.
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

