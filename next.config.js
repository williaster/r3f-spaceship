// const transpileModules = require('next-transpile-modules');

// const withTM = transpileModules([
//   '@react-three/drei',
//   '@react-three/fiber',
//   '@react-three/postprocessing',
//   'postprocessing',
//   'three',
// ]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
