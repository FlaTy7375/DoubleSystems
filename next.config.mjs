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
  
  // 1. ИСПРАВЛЕННАЯ СЕКЦИЯ IMAGES
  images: {
    // Устаревшее свойство удалено!
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            // Путь к медиафайлам должен соответствовать тому, что выдает Payload
            pathname: '/api/media/file/**',
        },
    ]
  },

  // 2. ДОБАВЛЕННЫЕ REWRITES ДЛЯ ОБРАБОТКИ МЕДИАФАЙЛОВ PAYLOAD
  // Next.js должен знать, что эти пути принадлежат Payload, а не ему.
  async rewrites() {
    return [
      {
        // Перехватываем все, что начинается с /api/media/file/
        source: '/api/media/file/:path*',
        // Перенаправляем запрос обратно на внутренний сервер, где его обработает Payload
        destination: '/api/media/file/:path*', 
      },
      // Рекомендуется также добавить общее правило для API Payload,
      // если у вас есть другие API-маршруты, кроме медиа
      // {
      //   source: '/api/:path*',
      //   destination: '/api/:path*',
      // },
    ];
  },
};

export default withPayload(nextConfig);