const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add these optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Disable features you don't need
    serverActions: false,
    serverComponentsExternalPackages: [],
  },
  // Exclude large development-only packages
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace heavy libraries with empty modules in client production build
      Object.assign(config.resolve.alias, {
        'react-day-picker': false,
        'recharts': false,
        // Add other large libraries you don't actually use
      })
    }
    return config
  }
}

export default nextConfig

