// app/services/[slug]/page.jsx

import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPage from '@/components/blocks/dynamic-page/dynamic-page';
import { notFound } from 'next/navigation';
import "../../../../../styles.css";

// Настройки для динамического рендеринга
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

// --- ГЕНЕРАЦИЯ МЕТАДАННЫХ (SEO) ---
export async function generateMetadata({ params }) {
    // 1. Формируем полный слаг: 'services/' + params.slug
    const fullSlug = await `services/${params.slug}`; 
    
    const payload = await getPayload({ config: payloadConfig });

    // 2. Ищем в коллекции 'pages' по полному слагу
    const pageData = await payload.find({
        collection: 'pages', // <-- Используем 'pages'
        where: { slug: { equals: fullSlug } }, // <-- Ищем полный слаг
        limit: 1,
        depth: 1,
    });
    
    const pageItem = pageData.docs[0];

    if (!pageItem) {
        return {
            title: '404 | Страница не найдена',
            description: `Страница со слагом ${fullSlug} не существует.`,
        };
    }

    const seo = pageItem.seo || {};
    const defaultTitle = pageItem.title || fullSlug;
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

// --- ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ ---
export default async function ServicePage({ params }) {
    // 1. Формируем полный слаг: 'services/' + params.slug
    const fullSlug = await `services/${params.slug}`; 
  
    const payload = await getPayload({ config: payloadConfig });

    // 2. Ищем в коллекции 'pages' по полному слагу
    const pageData = await payload.find({
        collection: 'pages', // <-- Используем 'pages'
        where: { slug: { equals: fullSlug } }, // <-- Ищем полный слаг
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