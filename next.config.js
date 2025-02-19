/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Since Next.js Image Optimization doesn't work with static export
  },
  basePath: "/manoharglm.github.io",
  assetPrefix: "/manoharglm.github.io/",
};

export default nextConfig;
