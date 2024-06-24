/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxi-api.ioready.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
