/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tidak perlu remotePatterns lagi kalau semua gambar lokal
    // Tapi kalau masih mau pakai campuran (lokal + eksternal), 
    // biarkan saja seperti semula
  },
}

module.exports = nextConfig
