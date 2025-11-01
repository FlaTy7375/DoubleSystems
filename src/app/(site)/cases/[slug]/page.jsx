import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicCase from '@/components/blocks/case1/dynamic-case';
import StaticCase1 from '@/components/blocks/case1/case-page';
import "../../../../styles.css";

export async function generateStaticParams() {
  const payload = await getPayload({ config: payloadConfig });
  const cases = await payload.find({ 
    collection: 'cases', 
    limit: 100 
  });

  const params = cases.docs.map(caseItem => ({
    slug: caseItem.slug,
  }));

  // Добавляем case1 только если его нет в базе
  const hasCase1 = cases.docs.some(caseItem => caseItem.slug === 'case1');
  if (!hasCase1) {
    params.push({ slug: 'case1' });
  }

  return params;
}

export default async function CasePage({ params }) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug; 
  
  const payload = await getPayload({ config: payloadConfig });

  // Если запрашивается case1, проверяем есть ли он в базе
  if (slug === 'case1') {
    const case1FromDB = await payload.find({
      collection: 'cases',
      where: { slug: { equals: 'case1' } },
      limit: 1,
      depth: 2,
    });
    
    // Если case1 нет в базе, показываем статичную версию
    if (!case1FromDB.docs[0]) {
      return <StaticCase1 />;
    }
  }

  // Для всех кейсов (включая case1 если он есть в базе) загружаем данные
  const caseData = await payload.find({
    collection: 'cases',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  
  const caseItem = caseData.docs[0];

  if (!caseItem) {
    return <div>Кейс не найден</div>;
  }

  return <DynamicCase caseData={caseItem} />;
}