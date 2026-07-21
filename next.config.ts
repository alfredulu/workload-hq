import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimized images barely change; cache aggressively at the CDN.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;
