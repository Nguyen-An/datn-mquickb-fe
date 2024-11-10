import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  reactStrictMode: true,
  images: {
    domains: ['mquickb.s3.amazonaws.com'],
  },
};

export default nextConfig;
