/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images-na.ssl-images-amazon.com", "galaxy-of-heroes.s3.amazonaws.com", "lh3.googleusercontent.com"],
      },
      typescript: {
        ignoreBuildErrors: true,
      }
}

module.exports = nextConfig
