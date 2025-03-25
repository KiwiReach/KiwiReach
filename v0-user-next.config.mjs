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
    
    // Add a rule to handle large files
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
      maxSize: 1000000, // 1MB max chunk size
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](@react|react|react-dom|next)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
        shared: {
          name: 'shared',
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    };
    
    return config;
  }
}

export default nextConfig

