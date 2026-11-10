import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/HOPE",
        destination: "https://forms.gle/fesP6njMgL3Js7nA9",
        permanent: false,
      },
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
        source: "/awards-and-recognition",
        destination: "/impact-and-recognition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
