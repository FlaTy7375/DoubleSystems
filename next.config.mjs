import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  transpilePackages: ['payload', '@payloadcms/ui', '@payloadcms/next'],
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
            {
                protocol: 'http', // или 'https', в зависимости от вашего сервера
                hostname: 'localhost', // 💡 Замените на домен вашего Payload API (например, 'api.doublesystems.com')
                port: '3000', // Укажите порт, если используете localhost
                pathname: '/media/**', // Payload хранит медиа в папке /media
            },
    ]
  },
};

export default withPayload(nextConfig);