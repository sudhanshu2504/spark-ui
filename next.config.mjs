/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize caching
  experimental: {
    // Enable optimistic client cache
    staleTimes: {
      dynamic: 30, // Cache dynamic pages for 30 seconds on client
      static: 180, // Cache static pages for 3 minutes on client
    },
  },

  // Add cache headers for static assets
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
