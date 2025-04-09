/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
}

export default nextConfig
