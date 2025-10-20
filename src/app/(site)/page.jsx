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

export default async function Main() {
  const payload = await getPayload({
    config: payloadConfig,
  });

  const home = await payload.findGlobal({
    slug: 'home',
  });

  const featuredCaseIds = home.featuredCases.map((item) => item.case.id);

  const cases = await payload.find({
    collection: 'cases',
    where: {
      id: {
        in: featuredCaseIds,
      },
    },
  });

  const services = await payload.find({
    collection: 'services',
    limit: 4,
  });

  const highlightedCases = home.highlightedCases?.map((caseItem) => ({
    title: caseItem.title || 'Без названия',
    description: caseItem.description || '',
    themes: caseItem.themes?.map((theme) => theme.theme) || [],
    date: caseItem.date ? new Date(caseItem.date).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }) : 'Не указано',
    views: caseItem.views || 85,
    image: caseItem.image ? { url: caseItem.image.url, alt: caseItem.title || 'Изображение кейса' } : null,
  })) || [];

  const technologies = home.technologies?.map((techGroup) => ({
  type: techGroup.type || 'Без типа',
  list: techGroup.list?.map((tech) => ({
    techName: tech.techName || 'Без названия',
    logo: tech.logo ? { url: tech.logo.url, alt: tech.techName || 'Логотип технологии' } : null,
  })) || [],
  })) || [];

  return (
    <>
      <WebSolutions cases={cases.docs} />
      <AboutUs content={home.aboutCompanySection || ''} person={{}} />
      <WeCreated items={home.weCreateItems || []} />
      <Portfolio items={home.portfolioItems || []} themes={home.portfolioThemes || []} />
      <MobileApp items={home.mobileAppItems || []} />
      <Cases
        cases={highlightedCases}
        description={home.casesDescription?.root?.children?.map((child) => child.children?.map((c) => c.text).join('')) || ''}
      />
      <Technology technologies={technologies} />
    </>
  );
}