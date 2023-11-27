/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@react-icons/ci": {
      transform: "@react-icons/dist/{{member}}",
    },
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[]",
  },
};

module.exports = nextConfig;
