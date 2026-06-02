import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edquate.com",
        port: "",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;
