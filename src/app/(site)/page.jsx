import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import WebSolutions from '@/components/blocks/web-solutions/websolutions';
import AboutUs from '@/components/blocks/about-us/about-us';
import WeCreated from '@/components/blocks/we-created/we-created';
import Portfolio from '@/components/blocks/portfolio/portfolio';
import MobileApp from '@/components/blocks/mobile-app/mobile-app';
import Cases from '@/components/blocks/cases/cases';
import Technology from '@/components/blocks/technology/technology';
import '../../styles.css';

export const dynamic = 'force-dynamic';

export default async function Main() {
  const payload = await getPayload({
    config: payloadConfig,
  });

  // --- 1. ЗАГРУЗКА HOME (для заголовков и флагов) ---
  const home = await payload.findGlobal({
    slug: 'home',
    // depth: 1 достаточно, так как мы не используем отношения highlightedCases
    depth: 1, 
    cache: 'no-store', 
  });
  
  const allPublishedCases = await payload.find({
    collection: 'cases',
    // Сортировка по дате публикации (по убыванию: новейшие первыми)
    sort: '-previewDate', 
    // depth: 2 для загрузки превью-изображений (previewImage -> media)
    depth: 2, 
    cache: 'no-store',
  });
  
  // --- 2. МАППИНГ АВТОМАТИЧЕСКИ ЗАГРУЖЕННЫХ КЕЙСОВ ---
  const autoCases = allPublishedCases.docs.map((caseItem) => {
    // caseItem — это уже сам объект кейса
    const title = caseItem.previewTitle || caseItem.title || 'Без названия';
    const image = caseItem.previewImage || null;
    const views = caseItem.previewViews || 85;
    const dateValue = caseItem.previewDate;
    
    const themesData = caseItem.previewThemes || [];
    const themes = themesData.map(t => t.theme) || []; 

    const formattedDate = dateValue ? new Date(dateValue).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }) : 'Не указано';

    return {
        slug: caseItem.slug || 'no-slug', 
        title: title,
        themes: themes,
        date: formattedDate,
        views: views,
        // Проверка, что image.url существует
        image: image && image.url ? { url: image.url, alt: title } : null,
    };
  });

  // --- 3. ЗАГРУЗКА FEATURED CASES (для WebSolutions) ---
  const featuredCaseIds = home.featuredCases?.map((item) => item.case?.id).filter(id => id) || [];
  const cases = await payload.find({
    collection: 'cases',
    where: { id: { in: featuredCaseIds } },
    depth: 1, 
    cache: 'no-store', 
  });

  return (
    <>
      <WebSolutions cases={cases.docs} />
      <AboutUs content={home.aboutCompanySection || ''} person={{}} />
      <WeCreated items={home.weCreateItems || []} />
      <Portfolio items={home.portfolioItems || []} themes={home.portfolioThemes || []} />
      <MobileApp items={home.mobileAppItems || []} />
      <Cases
        autoCases={autoCases} 
        description={home.portfolioDescription || ''} 
        globalSettings={home} 
      />
      <Technology technologies={home.technologies || []} />
    </>
  );
}