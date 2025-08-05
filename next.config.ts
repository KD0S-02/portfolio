import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  assetPrefix: isGitHubPages ? '/portfolio' : '',
  basePath: isGitHubPages ? '/portfolio' : '',
  
  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
  
  compiler: {
    removeConsole: isProd,
  },
  
  env: {
    SITE_URL: isGitHubPages 
      ? 'https://KD0S-02.github.io/portfolio' 
      : 'http://localhost:3000',
  },
};

export default nextConfig;