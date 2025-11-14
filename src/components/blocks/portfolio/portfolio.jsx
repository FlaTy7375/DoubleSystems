'use client';

import { StyledPortfolio } from './style';
import Themes from './themes';
import { useTranslate } from '@/components/translate/useTranslation';

export default function Portfolio({ className, items = [], themes = [] }) {
  // Значения по умолчанию, если данные отсутствуют
  const defaultItems = [
    {
      title: 'Сервисы:',
      links: ['Маркетплейс автозапчастей', 'AI-ассистент для мероприятий', 'AI-рекомендации по здоровью', 'Финансовая аналитика'],
    },
    {
      title: 'Сайты и порталы:',
      links: ['Сайт Университета (Норвегия)', 'Туристический портал', 'Альянс производителей камня'],
    },
    {
      title: 'Мобильные приложения:',
      links: ['Brain Twin (Норвегия)', 'Путь солнца', 'Единая Сеть Экспедиторов (ЕСЭ)'],
    },
    {
      title: 'СAI-проекты:',
      links: ['AI-анализ комментариев', 'Чат-бот с RAG', 'AI-обработка фото'],
    },
    {
      title: 'Собственные продукты:',
      links: ['WarOnMap (стратегия)', 'P2P Video Chat'],
    },
  ];

  const defaultThemes = ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ', 'ЭКОСИСТЕМА ЗДОРОВЬЯ'];

  // Преобразуем данные для совместимости с объектами из Payload
  const displayItems = items.length > 0
    ? items.map((item) => ({
        title: item.title || 'Без названия',
        links: item.links?.map((link) => (typeof link === 'object' ? link.text || link.toString() : link)) || [],
      }))
    : defaultItems;
  const displayThemes = themes.length > 0 ? themes : defaultThemes;

  // Переводим все тексты
  const portfolioTitle = useTranslate("Портфолио");
  const noTitle = useTranslate("Без названия");

  // Переводим displayItems
  const translatedItems = displayItems.map(item => ({
    ...item,
    title: useTranslate(item.title),
    links: item.links.map(link => useTranslate(link))
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
              {item.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  className="item-link"
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </StyledPortfolio>
  );
}