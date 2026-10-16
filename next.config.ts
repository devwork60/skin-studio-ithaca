import type { NextConfig } from "next";

const oneYear = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap", "lucide-react"],
  },
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/services/ipl-treatments",
        destination: "/services/photo-facial",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: oneYear }] },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: oneYear }] },
    ];
  },
};

export default nextConfig;
