// // src/components/blocks/portfolio1/PortfolioItemContent.jsx

// 'use client'; 
// import Link from 'next/link';
// import dynamic from 'next/dynamic'; 

// // ⚠️ ФИКС worker_threads: Используем dynamic с ssr: false для надежной загрузки RichText
// const RichText = dynamic(
//     () => import('@payloadcms/richtext-slate').then(module => {
//         // Логика извлечения компонента RichText
//         return module.RichText || module.default || (() => null);
//     }).catch(err => {
//         console.error("Failed to load RichText component dynamically:", err);
//         return () => <p style={{color: 'red'}}>Ошибка загрузки RichText</p>;
//     }),
//     {
//         loading: () => <p>Загрузка контента...</p>,
//         ssr: false // КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Отключаем рендеринг на сервере
//     }
// );

// const PAYLOAD_ADMIN_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL;

// // ----------------------------------------------------------------------
// // --- RichTextRenderer (Включает адаптер Lexical -> Slate) ---
// // ----------------------------------------------------------------------
// const RichTextRenderer = ({ data }) => {
    
//     let contentToRender = data.text;

//     // АДАПТЕР: Если данные в формате Lexical ({root: {...}}), преобразуем их в массив
//     if (contentToRender && typeof contentToRender === 'object' && 'root' in contentToRender) {
//         if (contentToRender.root && Array.isArray(contentToRender.root.children)) {
//             contentToRender = contentToRender.root.children;
//         } else {
//             contentToRender = null;
//         }
//     }
    
//     if (!contentToRender || (Array.isArray(contentToRender) && contentToRender.length === 0)) {
//         return null;
//     }
    
//     return (
//         <div style={{ color: '#E0E0E0', padding: '15px 0', fontSize: '1.1rem' }}>
//             <RichText content={contentToRender} /> 
//         </div>
//     );
// };

// // ----------------------------------------------------------------------
// // --- ImageBlock (Аналогично вашему блоку) ---
// // ----------------------------------------------------------------------
// const ImageBlock = ({ data }) => {
    
//     const imageUrl = data.image && typeof data.image === 'object' ? data.image.url : null;
//     const imageAlt = data.image?.alt || data.caption || 'Изображение портфолио';
    
//     return (
//         <div style={{ margin: '30px 0', textAlign: 'center' }}>
//             {imageUrl ? (
//                 <img 
//                     src={imageUrl} 
//                     alt={imageAlt} 
//                     style={{ 
//                         maxWidth: '100%', 
//                         height: 'auto', 
//                         borderRadius: '8px',
//                         display: 'block',
//                         margin: '0 auto',
//                     }} 
//                 />
//             ) : (
//                 <div style={{ padding: '20px', border: '1px dashed #888', color: '#888' }}>
//                     [ИЗОБРАЖЕНИЕ: URL не найден.]
//                 </div>
//             )}
//             {data.caption && (
//                 <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>
//                     {data.caption}
//                 </p>
//             )}
//         </div>
//     );
// };


// // ----------------------------------------------------------------------
// // --- ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ ПОРТФОЛИО (Blog1 -> PortfolioItemContent) ---
// // ----------------------------------------------------------------------
// export default function PortfolioItemContent({ item }) {
    
//     const adminEditUrl = item.id 
//         ? `${PAYLOAD_ADMIN_URL}/admin/collections/cases/${item.id}` // Ссылка на коллекцию 'cases'
//         : null;

//     return (
//         <div 
//             style={{ 
//                 maxWidth: '1200px', 
//                 margin: '0 auto', 
//                 padding: '0 20px', 
//                 color: '#E0E0E0' 
//             }}
//         >
//             {/* Секция 1: Хлебные крошки / Навигация */}
//             <div style={{ padding: '30px 0' }}>
//                 <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Главная</Link>
//                 <span style={{ color: '#555' }}> / </span>
//                 <Link href="/cases1" style={{ color: '#888', textDecoration: 'none' }}>Портфолио</Link>
//                 <span style={{ color: '#555' }}> / </span>
//                 <span style={{ color: '#E0E0E0' }}>{item.title}</span>
//             </div>

//             {/* Секция 2: Заголовок и кнопка редактирования */}
//             <div 
//                 style={{ 
//                     display: 'flex', 
//                     flexDirection: 'column', 
//                     alignItems: 'flex-start',
//                     paddingBottom: '20px' 
//                 }}
//             >
//                 <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#E0E0E0' }}>
//                     {item.title || 'Название Проекта'}
//                 </h1>
                
//                  {/* Кнопка редактирования */}
//                 {adminEditUrl && PAYLOAD_ADMIN_URL && (
//                     <Link 
//                         href={adminEditUrl}
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         style={{ 
//                             padding: '8px 15px', 
//                             fontSize: '14px', 
//                             fontWeight: 'bold', 
//                             color: '#fff', 
//                             backgroundColor: '#f97316', 
//                             borderRadius: '4px',
//                             textDecoration: 'none',
//                             marginTop: '15px',
//                         }}
//                     >
//                         Редактировать проект
//                     </Link>
//                 )}
//             </div>
            
//             {/* Секция 3: Основное содержимое проекта (Рендеринг Blocks) */}
//             <div 
//                 style={{
//                     backgroundColor: '#E0E0E020',
//                     padding: '40px',
//                     borderRadius: '8px',
//                     lineHeight: '1.6',
//                     minHeight: '400px',
//                 }}
//             >
//                 {/* 💡 Используем поле 'description' для краткого Rich Text, если оно есть */}
//                 {item.description && <RichTextRenderer data={{ text: item.description }} />}
                
//                 {/* 💡 Используем поле 'content' для блоков */}
//                 {item.content && item.content.length > 0 ? (
//                     item.content.map((block, index) => {
//                         switch (block.blockType) {
//                             case 'textContent':
//                                 return <RichTextRenderer key={index} data={block} />;
//                             case 'imageContent':
//                                 return <ImageBlock key={index} data={block} />;
//                             default:
//                                 return <p key={index}>[Неизвестный тип блока: {block.blockType}]</p>;
//                         }
//                     })
//                 ) : (
//                     <h2 style={{ textAlign: 'center', color: '#E0E0E0' }}>
//                         Контент портфолио пока пуст.
//                     </h2>
//                 )}
//             </div>

//             {/* Секция 4: Форма заявки / контакты */}
//             {/* Оставляем без изменений, как в вашем примере */}
//             <h2 style={{ fontSize: '2rem', marginTop: '60px', marginBottom: '20px', color: '#E0E0E0' }}>
//                 Форма заявки / контакты
//             </h2>
//             <div 
//                 style={{
//                     backgroundColor: '#E0E0E010',
//                     minHeight: '200px',
//                     padding: '30px',
//                     borderRadius: '8px',
//                     marginBottom: '80px',
//                 }}
//             >
//                 <p style={{ textAlign: 'center', color: '#888' }}>
//                     Здесь будет компонент с формой обратной связи.
//                 </p>
//             </div>
//         </div>
//     );
// }