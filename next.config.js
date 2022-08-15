/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['news.itmo.ru'],
  },
}

module.exports = nextConfig
