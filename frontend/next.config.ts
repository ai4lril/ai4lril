import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/voice-data-collection",
  assetPrefix: "/voice-data-collection/",
  trailingSlash: true,
};

export default nextConfig;
