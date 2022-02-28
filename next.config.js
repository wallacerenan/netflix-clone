/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://image.tmdb.org', 'image.tmdb.org', 'api.themoviedb.org'],
  },
}

module.exports = nextConfig
