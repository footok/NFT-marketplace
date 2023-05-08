/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gallyn.infura-ipfs.io'],
  },
};
module.exports = nextConfig;
