/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove distDir as it conflicts with output: 'export'
  // When using output: 'export', Next.js will automatically create the "out" directory
  trailingSlash: true, // Add trailing slashes to URLs for better static hosting compatibility
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
}

export default nextConfig

