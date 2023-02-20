require("dotenv")
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "./build/" + process.env.NODE_ENV + "/v" + process.env.VERSION,
  images: {
    domains: ["cdn.pixabay.com"],
    loader: 'akamai',
    path: '/images'
  },
   basePath: '/Personal-Portfolio-Website',
}

module.exports = nextConfig
