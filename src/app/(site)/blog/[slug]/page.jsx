import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPost from '@/components/blocks/case1/dynamic-post';
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

export default async function PostPage(props) {

  const { slug } = await props.params; 
  
  const payload = await getPayload({ config: payloadConfig });

  const postData = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    // Отключаем кэширование Next.js для свежести данных
    cache: 'no-store', 
  });
  
  const postItem = postData.docs[0];

  if (!postItem) {
    return <div>Запись блога не найдена</div>; 
  }

  // Передаем данные в DynamicPost
  return <DynamicPost postData={postItem} />;
}