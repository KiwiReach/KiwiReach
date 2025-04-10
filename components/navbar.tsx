"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-600" style={{ letterSpacing: "-0.05em" }}>
          KiwiReach
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
