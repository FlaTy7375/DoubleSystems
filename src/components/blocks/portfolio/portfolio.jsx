'use client';

import { StyledPortfolio } from './style';
import Themes from './themes';
import { useTranslate } from '@/components/translate/useTranslation';
import Link from 'next/link'; // 💡 Импортируем Link для внутренних ссылок

export default function Portfolio({ className, items = [], themes = [] }) {
  
  const defaultItems = [
    {
      title: 'Сервисы:',
      links: [
        { text: 'Маркетплейс автозапчастей', url: '/marketplace' },
        { text: 'AI-ассистент для мероприятий', url: '/ai-assistant' },
        { text: 'AI-рекомендации по здоровью', url: '/ai-health' },
        { text: 'Финансовая аналитика', url: '/finance-analytics' }
      ],
    },
    {
      title: 'Сайты и порталы:',
      links: [
        { text: 'Сайт Университета (Норвегия)', url: '/university-site' }, 
        { text: 'Туристический портал', url: '/tour-portal' }, 
        { text: 'Альянс производителей камня', url: '/stone-alliance' }
      ],
    },
    {
      title: 'Мобильные приложения:',
      links: [
        { text: 'Brain Twin (Норвегия)', url: '/brain-twin' }, 
        { text: 'Путь солнца', url: '/sun-path' }, 
        { text: 'Единая Сеть Экспедиторов (ЕСЭ)', url: '/ese-app' }
      ],
    },
    {
      title: 'СAI-проекты:',
      links: [
        { text: 'AI-анализ комментариев', url: '/ai-comments' }, 
        { text: 'Чат-бот с RAG', url: '/rag-chatbot' }, 
        { text: 'AI-обработка фото', url: '/ai-photo-processing' }
      ],
    },
    {
      title: 'Собственные продукты:',
      links: [
        { text: 'WarOnMap (стратегия)', url: '/waronmap' }, 
        { text: 'P2P Video Chat', url: '/p2p-video-chat' }
      ],
    },
  ];

  const defaultThemes = ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ', 'ЭКОСИСТЕМА ЗДОРОВЬЯ'];

  // Преобразуем данные для отображения
  const displayItems = items.length > 0
    ? items.map((item) => ({
        title: item.title || 'Без названия',
        // 💡 Обрабатываем массив ссылок, ожидая { text, url } из Payload
        links: item.links?.map((link) => ({
            text: link.text || 'Нет названия',
            // Используем URL из Payload. Если URL пустой, создаем #якорь-заглушку.
            url: link.url || `#${(link.text || 'no-link').toLowerCase().replace(/\s+/g, '-')}`,
        })) || [],
      }))
    : defaultItems;
    
  const displayThemes = themes.length > 0 ? themes.map(t => t.text) : defaultThemes;

  // Переводим все тексты
  const portfolioTitle = useTranslate("Портфолио");
  
  // Переводим displayItems (только текстовое поле)
  const translatedItems = displayItems.map(item => ({
    ...item,
    title: useTranslate(item.title),
    links: item.links.map(link => ({
        ...link,
        text: useTranslate(link.text),
    }))
  }));

  // Переводим темы
  const translatedThemes = displayThemes.map(theme => useTranslate(theme));

  return (
    <StyledPortfolio className={className}>
      <h1 className="portfolio-title">{portfolioTitle}</h1>
      <Themes themes={translatedThemes} />
      <ul className="portfolio-list">
        {translatedItems.map((item, index) => (
          <li key={index} className="portfolio-item">
            <h2 className="item-title">{item.title}</h2>
            <div className="item-container">
              {item.links.map((linkItem, linkIndex) => (
                // 💡 Используем компонент Link из Next.js
                <Link
                  key={linkIndex}
                  className="item-link"
                  // Используем url из объекта
                  href={linkItem.url}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </StyledPortfolio>
  );
}