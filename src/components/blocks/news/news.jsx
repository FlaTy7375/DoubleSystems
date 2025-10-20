'use client'; 

import Link from 'next/link';
import { useState, useMemo } from 'react'; 
import { StyledNews } from './style';
import InfoBlock from '@/components/ui/info-block/info-block';

// 🛑 Статические импорты для дефолтного контента
import News1 from '@/assets/images/news1.png';
import News2 from '@/assets/images/case4.png';
import News3 from '@/assets/images/news3.png';
import News4 from '@/assets/images/news4.png';
import News5 from '@/assets/images/news5.png';
import News6 from '@/assets/images/case1.jpg';
import News7 from '@/assets/images/news7.png';
import News8 from '@/assets/images/news8.png';
import News9 from '@/assets/images/news9.png';
import NewsTheme from './news-themes';

// 💡 Массив дефолтного контента (сокращенно, но должен быть полным)
const DEFAULT_POSTS = [
    { id: 'default-1', slug: 'healthhub', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '08.08.2025 11:29', views: '365', themes: [{theme: 'НОВОСТИ СТУДИИ'}, {theme: 'АКЦИИ'}], image: News1, },
    { id: 'default-2', slug: 'case4', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатфортное мобильное приложение...', date: '07.08.2025 18:46', views: '209', themes: [{theme: 'НОВОСТИ СТУДИИ'}, {theme: 'АКЦИИ'}], image: News2, },
    { id: 'default-3', slug: 'news3', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '05.08.2025 19:54', views: '567', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News3, },
    { id: 'default-4', slug: 'news4', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '25.07.2025 07:39', views: '872', themes: [{theme: 'ПОРТАЛ'}], image: News4, },
    { id: 'default-5', slug: 'news5', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '21.07.2025 00:31', views: '114', themes: [{theme: 'ЭКОСИСТЕМА ЗДОРОВЬЯ'}], image: News5, },
    { id: 'default-6', slug: 'case1', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '17.07.2025 04:19', views: '85', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News6, },
    { id: 'default-7', slug: 'news7', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '26.06.2025 13:07', views: '451', themes: [{theme: 'ПОРТАЛ'}], image: News7, },
    { id: 'default-8', slug: 'news8', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '20.06.2025 15:38', views: '158', themes: [{theme: 'ЭКОСИСТЕМА ЗДОРОВЬЯ'}], image: News8, },
    { id: 'default-9', slug: 'news9', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '04.06.2025 08:42', views: '647', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News9, },
];

const DEFAULT_THEMES_LIST = [
    { themeName: 'ПРИЛОЖЕНИЕ' }, 
    { themeName: 'ПОРТАЛ' }, 
    { themeName: 'ЭКОСИСТЕМА ЗДОРОВЬЯ' }, 
    { themeName: 'НОВОСТИ СТУДИИ' },
    { themeName: 'АКЦИИ' },
];

const formatPostDate = (dateString) => {
    if (!dateString) return 'Дата не указана';
    
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Месяцы с 0
    const year = dateObj.getFullYear();
    
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    // Формат ДД.ММ.ГГГГ ЧЧ:ММ
    return `${day}.${month}.${year} ${hours}:${minutes}`;
};


export default function News({ pageData = {} }) {
    
    // 1. Состояния для активной темы (фильтрации)
    const [activeTheme, setActiveTheme] = useState(null); 
    
    // 2. НОВОЕ СОСТОЯНИЕ: Количество постов, которое нужно показать (начальное: 6)
    const [postsToShow, setPostsToShow] = useState(6); 


    // 3. Извлечение данных и Fallback
    const adminTitle = pageData.title;
    const adminPosts = pageData.posts || []; 
    const adminThemesList = pageData.themesList || []; 

    const finalPosts = adminPosts.length > 0 ? adminPosts : DEFAULT_POSTS;
    const finalThemesList = adminThemesList.length > 0 ? adminThemesList : DEFAULT_THEMES_LIST;
    const finalTitle = adminTitle || 'Новости компании'; 

    // 4. Логика фильтрации (по-прежнему, с useMemo)
    const filteredPosts = useMemo(() => {
        if (!activeTheme) {
            return finalPosts;
        }
        return finalPosts.filter(post => {
            const postThemes = post.themes?.map(t => t.theme) || [];
            return postThemes.includes(activeTheme);
        });
    }, [finalPosts, activeTheme]); 

    // 5. Логика "Показать ещё": Обрезаем отфильтрованный массив до текущего лимита
    const visiblePosts = filteredPosts.slice(0, postsToShow);

    // 6. Функция, увеличивающая лимит на 3 (или до максимального значения)
    const handleShowMore = () => {
        setPostsToShow(prevCount => prevCount + 3);
    };

    // 7.  Условие для кнопки: Показываем, если есть еще не показанные посты
    const showLoadMoreButton = filteredPosts.length > postsToShow;

    return (
        <StyledNews>
            <div className="link-container">
                <Link className="news-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="news-link active" href="/blog">\&nbsp;Блог Новости&nbsp;</Link>
            </div>
            <h1 className="news-title">{finalTitle}</h1>
            <div className="news-wrapper">
                {/* 1. Проверка: Если постов нет, выводим сообщение */}
                {filteredPosts.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', width: '100%' }}>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>
                            Нет постов, соответствующих теме: **{activeTheme}**.
                        </p>
                        <button 
                            onClick={() => setActiveTheme(null)} 
                            className='all-news'
                        >
                            Показать все новости
                        </button>
                    </div>
                ) : (
                    // 2. Итерация по видимым постам (visiblePosts)
                    visiblePosts.map((post, index) => {
                        
                        const themes = post.themes?.map(t => t.theme) || [];
                        const postLink = `/blog/${post.slug}`;

                        return (
                            <InfoBlock 
                                key={post.id || index}
                                Img={post.image} 
                                data={formatPostDate(post.date)}
                                views={post.views || '85'}
                            >
                                <div className="theme-container">
                                    {themes.map((theme, i) => (
                                        <p key={i} className="info-theme">{theme}</p>
                                    ))}
                                </div>
                                
                                <Link className="info-title" href={postLink}>
                                    {post.title}
                                </Link>
                                
                                <p className="info-description">
                                    {post.description}
                                </p>
                            </InfoBlock>
                        );
                    })
                )}
            </div>
            
            {showLoadMoreButton && (
                <button className="news-button" onClick={handleShowMore}>
                    Показать ещё
                </button>
            )}
            
            <NewsTheme 
                themesList={finalThemesList} 
                activeTheme={activeTheme}
                setActiveTheme={setActiveTheme} 
            />
        </StyledNews>
    )
}