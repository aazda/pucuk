/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      config.externals.push('pino-pretty', 'encoding');
      return config;
    },
  };

  module.exports = {
    distDir: 'build',
  }
  
  module.exports = nextConfig;