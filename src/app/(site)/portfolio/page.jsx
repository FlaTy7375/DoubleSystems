import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import Cases from "@/components/blocks/cases/cases";
import PortfolioLinks from "@/components/blocks/cases/portfolio-links"
import "../../../styles.css";

export const dynamic = 'force-dynamic';

// 💡 1. ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ МЕТАДАННЫХ
export async function generateMetadata() {
    const payload = await getPayload({ config: payloadConfig });

    // Пытаемся найти страницу 'portfolio' в коллекции 'pages'
    const pageData = await payload.find({
        collection: 'pages',
        where: { slug: { equals: 'portfolio' } },
        limit: 1,
        depth: 1, 
    });

    const page = pageData.docs[0];
    
    const defaultTitle = 'Портфолио | Все кейсы и проекты | Double Systems';
    const defaultDescription = 'Ознакомьтесь с нашими лучшими кейсами по разработке веб-платформ, мобильных приложений и цифровых решений.';
    
    if (page) {
        const seo = page.seo || {};

        return {
            // Используем SEO-title, или title страницы, или дефолтный title
            title: seo.title || page.title || defaultTitle,
            description: seo.description || defaultDescription,
            keywords: seo.keywords || 'портфолио, кейсы, веб-разработка, мобильные приложения',
        };
    }
    
    // Резервный вариант, если страница 'portfolio' не найдена в CMS
    return {
        title: defaultTitle,
        description: defaultDescription,
        keywords: 'портфолио, кейсы, веб-разработка, мобильные приложения',
    };
}
// ---------------------------------------------------------------------


export default async function Portfolio() {

  const payload = await getPayload({ config: payloadConfig });

  const home = await payload.findGlobal({
    slug: 'home',
    depth: 2,
  });

  const allCases = await payload.find({
    collection: 'cases',
    sort: '-previewDate',
    depth: 4,
    overrideAccess: false,
  });

  const autoCases = allCases.docs.map((c) => {
    const title = c.previewTitle || c.title || 'Без названия';
    const image = c.previewImage;

    return {
      slug: c.slug,
      title,
      themes: (c.previewThemes || []).map(t => t.theme || ''),
      date: c.previewDate ? new Date(c.previewDate).toLocaleDateString('ru-RU') : '—',
      views: c.previewViews || 85,
      image: image?.url ? { url: image.url, alt: title } : null,
    };
  });

  // КЕЙСЫ ДЛЯ WebSolutions — РАБОЧАЯ ВЕРСИЯ БЕЗ ТИПОВ
  let featuredCases = [];

  if (home.featuredCases && home.featuredCases.length > 0) {
    featuredCases = await Promise.all(
      home.featuredCases.map(async (item) => {
        if (!item.case?.id) return null;

        try {
          const fullCase = await payload.findByID({
            collection: 'cases',
            id: item.case.id,
            depth: 4,
            overrideAccess: false,
          });
          return fullCase;
        } catch (err) {
          console.error('Ошибка загрузки кейса:', item.case.id, err);
          return null;
        }
      })
    );

    featuredCases = featuredCases.filter(Boolean);
  }

    return (
        <>
            <PortfolioLinks></PortfolioLinks>
            <Cases autoCases={autoCases} description={home.portfolioDescription || ''} globalSettings={home} style={{ marginTop: 60 }}/>
        </>
    );
}