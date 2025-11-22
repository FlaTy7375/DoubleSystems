import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import WebSolutions from '@/components/blocks/web-solutions/websolutions';
import AboutUs from '@/components/blocks/about-us/about-us';
import WeCreated from '@/components/blocks/we-created/we-created';
import Portfolio from '@/components/blocks/portfolio/portfolio';
import MobileApp from '@/components/blocks/mobile-app/mobile-app';
import Cases from '@/components/blocks/cases/cases';
import Technology from '@/components/blocks/technology/technology';
import "../../../styles.css";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const payload = await getPayload({ config: payloadConfig });

  const home = await payload.findGlobal({
    slug: 'home',
    depth: 1,
  });

  const seo = home.seo || {};
  const defaultTitle = 'Double Systems - Создание веб-платформ и мобильных приложений';
  const defaultDescription = 'Разработка инновационных решений для бизнеса: от UX/UI дизайна до сложной интеграции.';

  return {
    title: seo.title || home.title || defaultTitle,
    description: seo.description || defaultDescription,
    keywords: seo.keywords || 'разработка, веб-платформы, мобильные приложения, дизайн, IT-консалтинг',
    openGraph: {
      title: seo.title || home.title || defaultTitle,
      description: seo.description || defaultDescription,
    },
  };
}

export default async function Main() {
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
      <WebSolutions cases={featuredCases} />
      <AboutUs content={home.aboutCompanySection || ''} person={{}} />
      <WeCreated items={home.weCreateItems || []} />
      <Portfolio items={home.portfolioItems || []} themes={home.portfolioThemes || []} />
      <MobileApp items={home.mobileAppItems || []} />
      <Cases autoCases={autoCases} description={home.portfolioDescription || ''} globalSettings={home} />
      <Technology technologies={home.technologies || []} />
    </>
  );
}