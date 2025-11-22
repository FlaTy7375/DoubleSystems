import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPage from '@/components/blocks/dynamic-page/dynamic-page';
import { notFound } from 'next/navigation';
import "../../../../styles.css";

export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const payload = await getPayload({ config: payloadConfig });

    const pageData = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 1,
    });
    
    const pageItem = pageData.docs[0];

    if (!pageItem) {
        return {
            title: '404 | Страница не найдена',
            description: `Страница со слагом ${slug} не существует.`,
        };
    }

    const seo = pageItem.seo || {};
    const defaultTitle = pageItem.title || slug;
    const defaultDescription = 'Динамическая страница нашего сайта.';

    return {
        title: seo.title || defaultTitle,
        description: seo.description || defaultDescription,
        keywords: seo.keywords || 'страница, информация, цены, контакты',
        openGraph: {
            title: seo.title || defaultTitle,
            description: seo.description || defaultDescription,
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
  
    const payload = await getPayload({ config: payloadConfig });

    const pageData = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 4,
        cache: 'no-store', 
    });
    
    const pageItem = pageData.docs[0];

    if (!pageItem) {
        return notFound();
    }

    return <DynamicPage pageData={pageItem} />;
}