import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicPost from '@/components/blocks/case1/dynamic-post';
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

export default async function PostPage(props) {

  const { slug } = await props.params; 
  
  const payload = await getPayload({ config: payloadConfig });

  // Загрузка данных для поста
  const postData = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    // depth: 2 должен быть достаточен для загрузки всех секций
    depth: 2,
    cache: 'no-store', 
  });
  
  const postItem = postData.docs[0];

  if (!postItem) {
    return <div>Запись блога **{slug}** не найдена</div>; 
  }

  // Передаем данные в DynamicPost
  return <DynamicPost postData={postItem} />;
}