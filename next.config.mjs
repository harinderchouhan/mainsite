/** @type {import('next').NextConfig} */
const nextConfig = {
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
