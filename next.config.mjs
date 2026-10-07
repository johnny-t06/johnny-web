/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io", // Microlink Image Preview
      },
    ],
  },
};

export default nextConfig;
