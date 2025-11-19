import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPost from '@/components/blocks/case1/dynamic-post';
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const payload = await getPayload({ config: payloadConfig });

    const postData = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 1,
    });
    
    const postItem = postData.docs[0];

    if (!postItem) {
        return {
            title: '404 | Запись не найдена',
            description: `Запись блога со слагом ${slug} не существует.`,
        };
    }

    const defaultTitle = postItem.title || postItem.previewTitle || `Запись блога: ${slug}`;
    const defaultDescription = postItem.previewDescription || 'Читать подробнее в нашем блоге.';

    return {
        title: defaultTitle,
        description: defaultDescription,
        keywords: postItem.tags?.map(t => t.title).join(', ') || 'блог, новости, статьи',
        openGraph: {
            title: defaultTitle,
            description: defaultDescription,
        },
    };
}

export default async function PostPage({ params }) {
    const { slug } = await params;
  
    const payload = await getPayload({ config: payloadConfig });

    const postData = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 4,
        cache: 'no-store', 
    });
    
    const postItem = postData.docs[0];

    if (!postItem) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h1>404 | Запись блога не найдена</h1>
                <p>Запись блога со слагом **{slug}** не найдена.</p>
            </div>
        ); 
    }

    return <DynamicPost postData={postItem} />;
}