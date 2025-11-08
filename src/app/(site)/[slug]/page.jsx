import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPage from '@/components/blocks/dynamic-page/dynamic-page';
import { notFound } from 'next/navigation';
import "../../../styles.css";

export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Page(props) {
  
  const { slug } = await props.params; 
  
  const payload = await getPayload({ config: payloadConfig });

  const pageData = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    // Отключаем кэширование Next.js
    cache: 'no-store', 
  });
  
  const pageItem = pageData.docs[0];

  if (!pageItem) {
    return notFound();
  }

  return <DynamicPage pageData={pageItem} />;
}