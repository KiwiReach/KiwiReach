export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kiwi Reach</h3>
            <p className="text-muted-foreground">
              We help businesses grow through effective social media marketing strategies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:kiwireachnz@gmail.com" className="hover:text-primary transition-colors">
                  kiwireachnz@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Phone:{" "}
                <a href="tel:+64224637880" className="hover:text-primary transition-colors">
                  +64 22 463 7880
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kiwi.reach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>@kiwi.reach</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kiwi Reach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

