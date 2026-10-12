/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/sitemaps.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/sitemaps,xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/sitemap,xml',
        destination: '/sitemap.xml',
      },
    ]
  },
}

export default nextConfig
