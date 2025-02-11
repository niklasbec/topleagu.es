import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["media.api-sports.io"]
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
