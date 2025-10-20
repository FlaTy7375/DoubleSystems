import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import Blog1 from '@/components/blocks/blog1/blog1';
import "../../../../styles.css";

export async function generateStaticParams() {
  const payload = await getPayload({ config: payloadConfig });
  const posts = await payload.find({ collection: 'posts', limit: 100 });

  return posts.docs.map(post => ({
    slug: post.slug,
  }));
}


export default async function SinglePostPage({ params }) {
    
    const awaitedParams = await params;
    const slug = awaitedParams.slug; 
    
    const payload = await getPayload({ config: payloadConfig });

    const postData = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 2,
    });
    
    const post = postData.docs[0];

    if (!post) {
        return <main><h1>404 | Пост "{slug}" не найден</h1></main>;
    }

    return (
        <main>
            <Blog1 post={post} />
        </main>
    );
}