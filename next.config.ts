import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/our-story",
        permanent: true,
      },
      {
        source: "/founding-story",
        destination: "/our-story",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/our-story#our-team",
        permanent: true,
      },
      {
        source: "/awards-and-recognition",
        destination: "/impact-and-recognition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
