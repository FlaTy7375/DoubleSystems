import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import React from "react";
import "../../../../styles.css";
import News from "@/components/blocks/news/news";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    const payload = await getPayload({ config: payloadConfig });

    // Загружаем глобальную настройку 'blog'
    const blogGlobal = await payload.findGlobal({ 
        slug: 'blog',
        depth: 1,
    });

    const seo = blogGlobal.seo || {};
    const defaultTitle = blogGlobal.title || 'Блог | Новости и статьи о разработке | Double Systems';
    const defaultDescription = 'Читайте свежие новости, статьи и инсайды о веб-разработке, мобильных приложениях и технологиях от команды Double Systems.';

    return {
        title: seo.title || defaultTitle,
        description: seo.description || defaultDescription,
        keywords: seo.keywords || 'блог, новости, статьи, разработка, технологии',
        openGraph: {
            title: seo.title || defaultTitle,
            description: seo.description || defaultDescription,
        },
    };
}
// -----------------------------------------------------


export default async function Blog() {

    const payload = await getPayload({ config: payloadConfig });

    // --- 1. Загрузка глобальных настроек блога ---
    const blogGlobal = await payload.findGlobal({ 
        slug: 'blog',
        depth: 0,
        cache: 'no-store',
    });
    
    // --- 2. Загрузка коллекции постов ---
    const postsData = await payload.find({
        collection: 'posts',
        limit: 100, 
        depth: 1, 
        cache: 'no-store', 
    });
    
    const posts = postsData.docs || [];

    return (
        <>
            <News 
                posts={posts} 
                globalSettings={blogGlobal} 
            />
        </>
    );
}