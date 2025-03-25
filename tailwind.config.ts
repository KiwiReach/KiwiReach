import type { Config } from "tailwindcss"

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  // Remove unused theme extensions
  theme: {
    extend: {
      colors: {
        // Keep only colors you actually use
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          DEFAULT: "hsl(221, 83%, 53%)",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  // Only include plugins you need
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

