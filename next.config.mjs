/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['studio', 'ai-agent', 'workflow-builder', 'design-agent'],
  allowedDevOrigins: ['e2b.app', '*.e2b.app'],
};

export default nextConfig;
