/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'www.downloadclipart.net',
      's3-alpha-sig.figma.com',
      'www.asus.com',
      'www.cyberpowersystem.co.uk',
    ],
  },
};

module.exports = nextConfig;
