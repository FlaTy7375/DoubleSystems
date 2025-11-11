import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import React from "react";
import "../../../styles.css";
import News from "@/components/blocks/news/news";

export const dynamic = 'force-dynamic'; // Добавим для гарантированной свежести данных

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
        // Установите лимит постов, который вам нужен (например, 100 для всей страницы)
        limit: 100, 
        // depth: 1 нужен, чтобы загрузить связанные медиафайлы (previewImage)
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