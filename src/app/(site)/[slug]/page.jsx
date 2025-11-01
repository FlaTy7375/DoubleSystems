import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPage from '@/components/blocks/dynamic-page/dynamic-page';
import { notFound } from 'next/navigation';
import "../../../styles.css";

// Предопределенные слаги для страниц
const STATIC_PAGES = ['about-us', 'prices', 'portfolio', 'services', 'what-we-do'];

export async function generateStaticParams() {
  const payload = await getPayload({ config: payloadConfig });
  
  // Получаем страницы из базы данных
  const pages = await payload.find({ 
    collection: 'pages', 
    limit: 100 
  });

  // Создаем параметры для страниц из базы
  const params = pages.docs.map(page => ({
    slug: page.slug,
  }));

  // Добавляем статические страницы, если их нет в базе
  STATIC_PAGES.forEach(staticSlug => {
    if (!pages.docs.some(page => page.slug === staticSlug)) {
      params.push({ slug: staticSlug });
    }
  });

  return params;
}

export default async function Page({ params }) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug; 
  
  const payload = await getPayload({ config: payloadConfig });

  // Ищем страницу в базе данных
  const pageData = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  
  const pageItem = pageData.docs[0];

  // Если страница не найдена в базе, показываем 404
  if (!pageItem) {
    return notFound();
  }

  return <DynamicPage pageData={pageItem} />;
}