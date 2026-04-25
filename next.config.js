// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     // Tidak perlu remotePatterns lagi kalau semua gambar lokal
//     // Tapi kalau masih mau pakai campuran (lokal + eksternal), 
//     // biarkan saja seperti semula
//     output: 'export',
//     basePath: '/portfolio-abdul',
//     assetPrefix: '/portfolio-abdul/',
//     trailingSlash: true,
//   },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // WAJIB untuk GitHub Pages
  basePath: '/portfolio-abdul',
  assetPrefix: '/portfolio-abdul/',
  trailingSlash: true,

  images: {
    unoptimized: true, // penting untuk next/image di static export
  },
}

module.exports = nextConfig
