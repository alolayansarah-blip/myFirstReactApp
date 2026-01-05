/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export for Heroku server deployment
  images: {
    unoptimized: false, // Enable image optimization for better performance
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Add headers to help with cache invalidation
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
