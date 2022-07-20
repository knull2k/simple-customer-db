/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.wikia.nocookie.net",
      "dummyimage.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
