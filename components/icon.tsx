import dynamic from "next/dynamic"
import type { LightbulbIcon as LucideProps } from "lucide-react"

// Dynamic import function for icons
const importIcon = (iconName: string) =>
  dynamic<LucideProps>(() => import(`lucide-react/dist/esm/icons/${iconName}`).then((mod) => mod.default))

// Usage: <Icon name="check" />
export const Icon = ({ name, ...props }: { name: string } & LucideProps) => {
  const LucideIcon = importIcon(name)
  return <LucideIcon {...props} />
}

