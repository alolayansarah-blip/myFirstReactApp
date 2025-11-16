/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export for Heroku server deployment
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
