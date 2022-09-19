require("dotenv")
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "./build/" + process.env.NODE_ENV + "/v" + process.env.VERSION,
  images: {
    loader: 'akamai',
    path: '/images'
  },
   basePath: '/Personal-Portfolio-Website',
}

module.exports = nextConfig
