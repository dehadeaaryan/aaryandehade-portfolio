/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/new/',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  async rewrites() {
    return [
        {
          source: '/new',
          destination: '/blog',
        },
        {
            source: '/blog',
            destination: '/new',
        },
      ]
    var obj = {
        source: '/:path*',
        has: [
              {
                type: 'host',
                value: 'blog.*',
              },
        ],
        destination: `/blog`,
      }
    return [obj]
  },
}

module.exports = nextConfig
