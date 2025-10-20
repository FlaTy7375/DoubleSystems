// // src/app/cases1/[slug]/page.jsx

// import { getPayload } from 'payload';
// import payloadConfig from '@payload-config';
// import PortfolioItemContent from '@/components/blocks/portfolio1/PortfolioItemContent'; 
// import "../../../../styles.css"; // ⚠️ ВНИМАНИЕ: Импорт CSS здесь не должен вызывать проблему.

// // Функция для генерации статических путей при сборке
// export async function generateStaticParams() {
//   const payload = await getPayload({ config: payloadConfig });
//   const items = await payload.find({ collection: 'cases', limit: 100 }); 

//   return items.docs.map(item => ({
//     slug: item.slug,
//   }));
// }


// export default async function SinglePortfolioPage({ params }) {
    
//     // ... логика получения данных
//     const awaitedParams = await params;
//     const slug = awaitedParams.slug; 
    
//     const payload = await getPayload({ config: payloadConfig });

//     const itemData = await payload.find({
//         collection: 'cases',
//         where: { slug: { equals: slug } },
//         limit: 1,
//         depth: 2, 
//     });
    
//     const item = itemData.docs[0];

//     if (!item) {
//         return <main><h1>404 | Проект "{slug}" не найден</h1></main>;
//     }

//     return (
//         <main>
//             {/* PortfolioItemContent - это клиентский компонент, но его рендер 
//                 корректно обрабатывается Next.js. Проблема в импортах. */}
//             <PortfolioItemContent item={item} /> 
//         </main>
//     );
// }