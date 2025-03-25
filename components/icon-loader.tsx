"use client"

import type React from "react"

// Create a client component for dynamic icon loading
import { useState, useEffect } from "react"
import type { LightbulbIcon as LucideProps } from "lucide-react"

// This is a client component that can safely use dynamic imports with ssr: false
export function IconLoader({ name, ...props }: { name: string } & LucideProps) {
  const [Icon, setIcon] = useState<React.ComponentType<LucideProps> | null>(null)

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // Dynamic import in a client component is fine
        const imported = await import(`lucide-react/dist/esm/icons/${name}`)
        setIcon(() => imported.default)
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error)
      }
    }

    loadIcon()
  }, [name])

  if (!Icon) {
    return <span className="w-4 h-4" />
  }

  return <Icon {...props} />
}

