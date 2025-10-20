import Link from 'next/link';
import React, { Suspense } from 'react';

const RichText = React.lazy(() => import('@payloadcms/richtext-slate').then(module => {
    return { default: module.RichText || module.default || (() => null) };
}).catch(err => {
    console.error("Failed to load RichText component dynamically:", err);
    return { default: () => <p style={{color: 'red'}}>Ошибка загрузки RichText</p> };
}));


const PAYLOAD_ADMIN_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL;

const RichTextRenderer = ({ data }) => {
    
    if (!data.text) return null;
    
    return (
        <div style={{ color: '#E0E0E0', padding: '15px 0', fontSize: '1.1rem' }}>
            <Suspense fallback={<p>Загрузка контента...</p>}>
                <RichText content={data.text} /> 
            </Suspense>
        </div>
    );
};

const ImageBlock = ({ data }) => {
    
    const imageUrl = data.image && typeof data.image === 'object' ? data.image.url : null;
    const imageAlt = data.image?.alt || data.caption || 'Изображение поста';
    
    return (
        <div style={{ margin: '30px 0', textAlign: 'center' }}>
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt={imageAlt} 
                    style={{ 
                        maxWidth: '100%', 
                        height: 'auto', 
                        borderRadius: '8px',
                        display: 'block',
                        margin: '0 auto',
                    }} 
                />
            ) : (
                <div style={{ padding: '20px', border: '1px dashed #888', color: '#888' }}>
                    [ИЗОБРАЖЕНИЕ: URL не найден. Проверьте настройки Media или наличие файла.]
                </div>
            )}
            {data.caption && (
                <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>
                    {data.caption}
                </p>
            )}
        </div>
    );
};


export default function Blog1({ post }) {
    
    const adminEditUrl = post.id 
        ? `${PAYLOAD_ADMIN_URL}/admin/collections/posts/${post.id}` 
        : null;

    return (
        <div 
            style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                padding: '0 20px', 
                color: '#E0E0E0' 
            }}
        >
            {/* Секция 1: Хлебные крошки / Навигация */}
            <div style={{ padding: '30px 0' }}>
                <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Главная</Link>
                <span style={{ color: '#555' }}> / </span>
                <Link href="/blog" style={{ color: '#888', textDecoration: 'none' }}>Блог / новости</Link>
                <span style={{ color: '#555' }}> / </span>
                <span style={{ color: '#E0E0E0' }}>{post.title}</span>
            </div>

            {/* Секция 2: Заголовок и кнопка редактирования */}
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start',
                    paddingBottom: '20px' 
                }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#E0E0E0' }}>
                    {post.title || 'Заголовок Поста'}
                </h1>
                 {/* Кнопка редактирования */}
                {adminEditUrl && PAYLOAD_ADMIN_URL && (
                    <Link 
                        href={adminEditUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            padding: '8px 15px', 
                            fontSize: '14px', 
                            fontWeight: 'bold', 
                            color: '#fff', 
                            backgroundColor: '#f97316', 
                            borderRadius: '4px',
                            textDecoration: 'none',
                            marginTop: '15px',
                        }}
                    >
                        Редактировать пост
                    </Link>
                )}
            </div>
            
            {/* Секция 3: Основное содержимое поста (Рендеринг Blocks) */}
            <div 
                style={{
                    backgroundColor: '#E0E0E020',
                    padding: '40px',
                    borderRadius: '8px',
                    lineHeight: '1.6',
                    minHeight: '400px',
                }}
            >
                {post.content && post.content.length > 0 ? (
                    post.content.map((block, index) => {
                        switch (block.blockType) {
                            case 'textContent':
                                return <RichTextRenderer key={index} data={block} />;
                            case 'imageContent':
                                return <ImageBlock key={index} data={block} />;
                            default:
                                return <p key={index}>[Неизвестный тип блока: {block.blockType}]</p>;
                        }
                    })
                ) : (
                    <h2 style={{ textAlign: 'center', color: '#E0E0E0' }}>
                        Контент поста пока пуст. Добавьте его в админке.
                    </h2>
                )}
            </div>

            {/* Секция 4: Форма заявки / контакты */}
            <h2 style={{ fontSize: '2rem', marginTop: '60px', marginBottom: '20px', color: '#E0E0E0' }}>
                Форма заявки / контакты
            </h2>
            <div 
                style={{
                    backgroundColor: '#E0E0E010',
                    minHeight: '200px',
                    padding: '30px',
                    borderRadius: '8px',
                    marginBottom: '80px',
                }}
            >
                <p style={{ textAlign: 'center', color: '#888' }}>
                    Здесь будет компонент с формой обратной связи.
                </p>
            </div>
        </div>
    );
}