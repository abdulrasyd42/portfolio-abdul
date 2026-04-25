/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-abdul',
  assetPrefix: '/portfolio-abdul/',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
