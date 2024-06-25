const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  // Enable SWC minification only in production build
  swcMinify: PHASE_PRODUCTION_BUILD ? true : false,
};

module.exports = nextConfig;
