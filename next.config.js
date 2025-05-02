/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  experimental: {
    // Disable server components for now to avoid context issues
    serverComponents: false,
  },
}

module.exports = nextConfig