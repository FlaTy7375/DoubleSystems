import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicCase from '@/components/blocks/case1/dynamic-case';
import StaticCase1 from '@/components/blocks/case1/case-page';
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

export default async function CasePage(props) {
  
  const { slug } = await props.params; 
  
  const payload = await getPayload({ config: payloadConfig });

  // 1. Логика для специального slug 'case1'
  if (slug === 'case1') {
    const case1FromDB = await payload.find({
      collection: 'cases',
      where: { slug: { equals: 'case1' } },
      limit: 1,
      depth: 2,
      // Отключаем кэширование Next.js для свежести данных
      cache: 'no-store', 
    });
    
    if (!case1FromDB.docs[0]) {
      return <StaticCase1 />;
    }
  }

  // 2. Загрузка данных для всех кейсов
  const caseData = await payload.find({
    collection: 'cases',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    // Отключаем кэширование Next.js для свежести данных
    cache: 'no-store', 
  });
  
  const caseItem = caseData.docs[0];

  if (!caseItem) {
    return <div>Кейс не найден</div>; 
  }

  return <DynamicCase caseData={caseItem} />;
}