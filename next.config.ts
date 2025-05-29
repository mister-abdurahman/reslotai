import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
    // unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "https://images.unsplash.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
