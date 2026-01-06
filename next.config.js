/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
}

module.exports = nextConfig