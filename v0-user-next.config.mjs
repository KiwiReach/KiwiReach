const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove the complex webpack configuration that's causing issues
  // Let Next.js handle the file splitting naturally
  distDir: 'out', // Explicitly set the output directory
  trailingSlash: true, // Add trailing slashes to URLs for better static hosting compatibility
  // Keep these optimizations
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
}

export default nextConfig

