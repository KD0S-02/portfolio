import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight';
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
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
  
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    options: {
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig);