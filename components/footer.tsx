export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kiwi Reach</h3>
            <p className="text-muted-foreground">
              We help businesses grow through effective social media marketing strategies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground">
              Email: <a href="mailto:kiwireachnz@gmail.com">kiwireachnz@gmail.com</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <a href="tel:+64224637880">+64 22 463 7880</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kiwi Reach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

