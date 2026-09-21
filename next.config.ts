import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hanuitsolutions.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.hanuitsolutions.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
