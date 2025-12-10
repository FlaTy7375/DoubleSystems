'use client'; 

import Link from 'next/link';
import { useState, useMemo } from 'react'; 
import { StyledNews } from './style';
import InfoBlock from '@/components/ui/info-block/info-block';
import NewsTheme from './news-themes';
import { useTranslate } from "@/components/translate/useTranslation"

import News1 from '@/assets/images/news1.png';
import News2 from '@/assets/images/case4.png';
import News3 from '@/assets/images/news3.png';
import News4 from '@/assets/images/news4.png';
import News5 from '@/assets/images/news5.png';
import News6 from '@/assets/images/case1.jpg';
import News7 from '@/assets/images/news7.png';
import News8 from '@/assets/images/news8.png';
import News9 from '@/assets/images/news9.png';

const TranslatedPost = ({ post, formatPostDate }) => {
    const title = useTranslate(post.title || 'Без названия');
    const description = useTranslate(post.description || 'Нет описания');
    const imageAlt = useTranslate(post.image?.alt) || title;
    
    const themes = post.themes?.map(t => ({
        ...t,
        theme: useTranslate(t.theme)
    })) || [];
    
    const postLink = `/blog/${post.slug}`;

    return (
        <InfoBlock 
            Img={{ 
                url: getImageUrl(post.image), 
                alt: imageAlt
            }}
            data={formatPostDate(post.date)}
            views={post.views || '85'}
        >
            <div className="theme-container">
                {themes.map((theme, i) => (
                    <p key={i} className="info-theme">{theme.theme}</p>
                ))}
            </div>
            
            <Link className="info-title" href={postLink}>
                {title}
            </Link>
            
            <p className="info-description">
                {description}
            </p>
        </InfoBlock>
    );
};

const TranslatedDefaultPost = ({ post, formatPostDate }) => {
    const title = useTranslate(post.title);
    const description = useTranslate(post.description);
    
    const themes = post.themes?.map(t => ({
        ...t,
        theme: useTranslate(t.theme)
    })) || [];
    
    const postLink = `/blog/${post.slug}`;

    return (
        <InfoBlock 
            Img={{ 
                url: getImageUrl(post.image), 
                alt: title 
            }}
            data={formatPostDate(post.date)}
            views={post.views || '85'}
        >
            <div className="theme-container">
                {themes.map((theme, i) => (
                    <p key={i} className="info-theme">{theme.theme}</p>
                ))}
            </div>
            
            <Link className="info-title" href={postLink}>
                {title}
            </Link>
            
            <p className="info-description">
                {description}
            </p>
        </InfoBlock>
    );
};

const getImageUrl = (image) => {
    if (image && typeof image === 'object' && image.url) {
        return image.url;
    }
    return image;
};

const DEFAULT_POSTS = [
    { id: 'default-1', slug: 'ecosystem-health', title: 'Экосистема здоровья, маркетплейс...', description: 'Мы разрабатываем кроссплатформенное мобильное приложение...', date: '02.02.2025 11:24', views: '245', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News1, },
    { id: 'default-2', slug: 'app-update', title: 'Большое обновление приложения', description: 'Описание обновления...', date: '03.12.2025 14:35', views: '347', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News2, },
    { id: 'default-3', slug: 'new-design', title: 'Новый фирменный стиль студии', description: 'Подробности о нашем ребрендинге...', date: '05.08.2025 19:54', views: '567', themes: [{theme: 'НОВОСТИ СТУДИИ'}], image: News3, },
    { id: 'default-4', slug: 'portal-launch', title: 'Запуск нового B2B портала', description: 'Мы запустили мощный корпоративный портал...', date: '25.07.2025 07:39', views: '872', themes: [{theme: 'ПОРТАЛ'}], image: News4, },
    { id: 'default-5', slug: 'system-promo', title: 'Акция на разработку CRM системы', description: 'Специальное предложение до конца месяца...', date: '21.07.2025 00:31', views: '114', themes: [{theme: 'АКЦИИ'}], image: News5, },
    { id: 'default-6', slug: 'tech-review', title: 'Обзор технологий 2026 года', description: 'Наш прогноз на будущее IT...', date: '17.07.2025 04:19', views: '85', themes: [{theme: 'НОВОСТИ СТУДИИ'}], image: News6, },
    { id: 'default-7', slug: 'team-expansion', title: 'Наша команда расширяется', description: 'Мы ищем новые таланты в отдел разработки...', date: '26.06.2025 13:07', views: '451', themes: [{theme: 'НОВОСТИ СТУДИИ'}], image: News7, },
    { id: 'default-8', slug: 'web-standards', title: 'Новые стандарты веб-разработки', description: 'Как мы адаптируемся к изменениям...', date: '20.06.2025 15:38', views: '158', themes: [{theme: 'ПОРТАЛ'}], image: News8, },
    { id: 'default-9', slug: 'mobile-trends', title: 'Тренды мобильных приложений 2025', description: 'Аналитика и прогнозы от наших экспертов...', date: '04.06.2025 08:42', views: '647', themes: [{theme: 'ПРИЛОЖЕНИЕ'}], image: News9, },
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
    
    let dateObj = null;
    dateObj = new Date(dateString);

    if (isNaN(dateObj.getTime())) {
        const [datePart, timePart] = dateString.split(' ');
        
        if (datePart && timePart) {
            const [day, month, year] = datePart.split('.').map(Number);
            const [hours, minutes] = (timePart || '00:00').split(':').map(Number);
            
            dateObj = new Date(year, month - 1, day, hours, minutes);
        }
    }

    if (!dateObj || isNaN(dateObj.getTime())) {
        return 'Ошибка даты';
    }

    const formattedDay = String(dateObj.getDate()).padStart(2, '0');
    const formattedMonth = String(dateObj.getMonth() + 1).padStart(2, '0');
    const formattedYear = dateObj.getFullYear();
    const formattedHours = String(dateObj.getHours()).padStart(2, '0');
    const formattedMinutes = String(dateObj.getMinutes()).padStart(2, '0');

    return `${formattedDay}.${formattedMonth}.${formattedYear} ${formattedHours}:${formattedMinutes}`;
};

const isDefaultPost = (post) => {
    if (typeof post.id === 'string' && post.id.startsWith('default-')) {
        return true;
    }
    if (DEFAULT_POSTS.some(defaultPost => defaultPost.slug === post.slug)) {
        return true;
    }
    return false;
};

export default function News({ posts = [], globalSettings = {} }) {
    
    const [activeTheme, setActiveTheme] = useState(null); 
    const [postsToShow, setPostsToShow] = useState(6); 

    const adminTitle = useTranslate(globalSettings.title);
    const adminThemesList = globalSettings.themesList || []; 
    const showDefaultPosts = globalSettings.showDefaultPosts ?? true; 
    const showStaticPostsWithDynamic = globalSettings.showStaticPostsWithDynamic ?? false;

    const defaultTitle = useTranslate('Новости компании');
    const noPostsText = useTranslate('Нет постов, соответствующих теме:');
    const showAllNews = useTranslate('Показать все новости');
    const loadMoreButton = useTranslate('Показать ещё');
    const breadcrumbHome = useTranslate('DoubleSystems');
    const breadcrumbBlog = useTranslate('Блог Новости');

    const payloadPosts = posts.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.previewTitle || post.title || 'Без названия',
        description: post.previewDescription || post.title || 'Нет описания',
        date: post.previewDate || 'Не указано',
        views: String(post.previewViews || 85),
        themes: post.previewThemes || [],
        image: post.previewImage,
    }));

    let finalPosts = [];
    
    if (payloadPosts.length > 0) {
        finalPosts = payloadPosts;

        if (showStaticPostsWithDynamic) {
            finalPosts = [...payloadPosts, ...DEFAULT_POSTS];
        }
        
    } else if (showDefaultPosts) {
        finalPosts = DEFAULT_POSTS;
    }
    
    const finalThemesList = adminThemesList.length > 0 
        ? adminThemesList.map(theme => ({
            themeName: useTranslate(theme.themeName)
        })) 
        : DEFAULT_THEMES_LIST.map(theme => ({
            themeName: useTranslate(theme.themeName)
        }));
    
    const filteredPosts = useMemo(() => {
        if (!activeTheme) {
            return finalPosts;
        }
        return finalPosts.filter(post => {
            const postThemes = post.themes?.map(t => t.theme) || [];
            return postThemes.includes(activeTheme);
        });
    }, [finalPosts, activeTheme]); 

    const visiblePosts = filteredPosts.slice(0, postsToShow);

    const handleShowMore = () => {
        setPostsToShow(prevCount => prevCount + 3);
    };

    const showLoadMoreButton = filteredPosts.length > postsToShow;

    return (
        <StyledNews>
            <div className="link-container">
                <Link className="news-link" href="/">{breadcrumbHome} &nbsp;</Link>
                <Link className="news-link active" href="/blog">\&nbsp; {breadcrumbBlog}</Link>
            </div>
            <h1 className="news-title">
                    {
                    adminTitle 
                    ? useTranslate(adminTitle)
                    : defaultTitle 
                }</h1>
            <div className="news-wrapper">
                {filteredPosts.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', width: '100%' }}>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>
                            {noPostsText} **{activeTheme}**.
                        </p>
                        <button 
                            onClick={() => setActiveTheme(null)} 
                            className='all-news'
                        >
                            {showAllNews}
                        </button>
                    </div>
                ) : (
                    visiblePosts.map((post, index) => {
                        const key = post.id || post.slug || index;
                        
                        if (isDefaultPost(post)) {
                            return (
                                <TranslatedDefaultPost 
                                    key={key}
                                    post={post}
                                    formatPostDate={formatPostDate}
                                />
                            );
                        } else {
                            return (
                                <TranslatedPost 
                                    key={key}
                                    post={post}
                                    formatPostDate={formatPostDate}
                                />
                            );
                        }
                    })
                )}
            </div>
            
            {showLoadMoreButton && (
                <button className="news-button" onClick={handleShowMore}>
                    {loadMoreButton}
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