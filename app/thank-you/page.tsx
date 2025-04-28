import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 md:py-24 lg:py-32 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Thank You!</h1>
      <p className="text-xl mb-8">We've received your message and will get back to you as soon as possible.</p>
      <Link href="/">
        <Button size="lg">Return to Homepage</Button>
      </Link>
    </div>
  )
}
