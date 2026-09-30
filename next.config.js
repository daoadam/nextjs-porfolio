/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Fixes Image Optimization issue
    },
  };
  
  module.exports = nextConfig;