/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/manoharglm.github.io',
  assetPrefix: '/manoharglm.github.io',
};

export default nextConfig;
