import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // The auto-generated .next/types/validator.ts can fail on some environments
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
};

export default nextConfig;
