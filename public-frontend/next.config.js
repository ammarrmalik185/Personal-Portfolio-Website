require("dotenv")
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "./build/" + process.env.NODE_ENV + "/v" + process.env.VERSION,
  images: {
    loader: 'akamai',
    path: '/images'
  },
  async rewrites() {
    return [
      {
        source: 'https://ammarrmalik185.github.io/',
        destination: 'https://ammarrmalik185.github.io/Personal-Portfolio-Website/',
      },
    ]
  },
}

module.exports = nextConfig
