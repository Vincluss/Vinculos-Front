/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@react-icons/ci": {
      transform: "@react-icons/dist/{{member}}",
    },
  },
};

module.exports = nextConfig;
