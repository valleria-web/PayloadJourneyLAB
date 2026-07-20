/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/lab#sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
