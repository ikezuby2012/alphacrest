/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
   reactStrictMode: true,
   experimental: {
      esmExternals: true,
      legacyBrowsers: false
   }
   // useFileSystemPublicRoutes: false,
};

module.exports = withVideos(nextConfig);
// module.exports = nextConfig;
