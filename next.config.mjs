import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {  
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  
  experimental: {
    reactCompiler: false,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/file/**',
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/api/media/file/:path*',
        destination: '/api/media/file/:path*', 
      },
    ];
  },
};

export default withPayload(nextConfig);