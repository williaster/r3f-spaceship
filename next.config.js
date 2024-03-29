/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/r3f-spaceship' : '',
};

module.exports = nextConfig;
