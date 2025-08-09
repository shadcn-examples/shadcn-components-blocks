import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bundui-images.netlify.app"
      },
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
