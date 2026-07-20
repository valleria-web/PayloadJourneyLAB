/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        has: [{ type: "host", value: "payloadjourneylab.com" }],
        destination: "https://www.payloadjourneylab.com/lab#sobre",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "payloadjourneylab.com" }],
        destination: "https://www.payloadjourneylab.com/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/lab#sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
