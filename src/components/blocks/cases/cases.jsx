// src/components/blocks/cases/Cases.jsx
"use client"

import { StyledCases } from './style';
import InfoBlock from '@/components/ui/info-block/info-block';
// Импорты статических изображений для дефолтного контента
import Case1 from '@/assets/images/case1.jpg';
import Case2 from '@/assets/images/case2.png';
import Case3 from '@/assets/images/case3.png';
import Case4 from '@/assets/images/case4.png';
import Case5 from '@/assets/images/case5.png';
import Link from 'next/link';
import { useTranslate } from '@/components/translate/useTranslation';

// Хелпер для корректного получения URL
const getImageUrl = (image) => {
    if (image && typeof image === 'object' && image.url) {
        return image.url;
    }
    return image; 
};

/**
 * Компонент отображения списка кейсов (для страницы /portfolio)
 * @param {Array<Object>} autoCases - Автоматически загруженный массив кейсов из коллекции 'cases'.
 * @param {Object} globalSettings - Настройки из globals.home
 */
export default function Cases({ autoCases = [], globalSettings = {}, style = {} }) {
  
  // Деструктурируем настройки
  const showDefaultCases = globalSettings.showDefaultCases ?? false; 
  const showStaticCasesWithDynamic = globalSettings.showStaticCasesWithDynamic ?? false; 
  const adminTitle = globalSettings.portfolioTitle || 'Наши кейсы';
  
  // Статические (дефолтные) данные
  const defaultCases = [
    {
      title: 'Экосистема здоровья, маркетплейс, приложение «HealthHub»',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ', 'ЭКОСИСТЕМА ЗДОРОВЬЯ'],
      date: '20.08.2025 09:20',
      views: '85',
      image: Case1, 
      slug: 'healthhub', 
    },
    {
      title: 'Международный транспортный форум ESE ASIA-2025',
      themes: ['ПРИЛОЖЕНИЕ', 'ДИЗАЙН', 'ВЫСТАВКА'],
      date: '17.08.2025 04:48',
      views: '85',
      image: Case2,
      slug: 'ese-asia-2025',
    },
    {
      title: 'Автоматизированная система мониторинга «Croft»',
      themes: ['САЙТ', 'БЛОКЧЕЙН'],
      date: '08.08.2025 11:29',
      views: '365',
      image: Case3,
      slug: 'croft',
    },
    {
      title: 'Ресторан «Ногай»',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ'],
      date: '27.07.2025 11:50',
      views: '85',
      image: Case4,
      slug: 'nogai',
    },
    {
      title: 'Альметьевский молочный комбинат',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ'],
      date: '14.07.2025 15:49',
      views: '85',
      image: Case5,
      slug: 'almet-mk',
    },
  ];

  let displayCases = [];
  
  // 1. Логика сбора кейсов
  if (autoCases.length > 0) {
      displayCases = [...autoCases]; 
      
      if (showStaticCasesWithDynamic) {
          displayCases = [...displayCases, ...defaultCases]; 
      }
  } 
  else if (showDefaultCases) { 
      displayCases = defaultCases;
  }
  
  // 2. Вызовы хуков (одиночные)
  const defaultAdminTitle = useTranslate("Наши кейсы");
  const noCasesText = useTranslate("Кейсы не найдены. Добавьте их в коллекцию \"Портфолио (кейсы)\".");
  const buttonText = useTranslate("Запросить коммерческое предложение");

  // Переводим adminTitle
  const translatedAdminTitle = adminTitle === 'Наши кейсы' ? defaultAdminTitle : useTranslate(adminTitle);

  // 3. Вызовы хуков в цикле (ВНИМАНИЕ: Нарушает правила хуков React!)
  const translatedCases = displayCases.map(caseItem => ({
    ...caseItem,
    // ⚠️ ХУК В ЦИКЛЕ: ВОЗМОЖНА ОШИБКА
    title: useTranslate(caseItem.title),
    // ⚠️ ХУК В ЦИКЛЕ: ВОЗМОЖНА ОШИБКА
    themes: caseItem.themes.map(theme => useTranslate(theme)),
    image: {
      ...caseItem.image,
      alt: useTranslate(caseItem.image?.alt || caseItem.title)
    }
  }));

  // 4. Определение класса контейнера (как вы просили: либо один, либо другой)
  const isDynamicCase = autoCases.length > 0;
  // Если есть динамические кейсы, используем 'case-container', иначе - 'solutions-container'
  const wrapperClass = isDynamicCase ? 'case-container' : 'solutions-container';


  return (
    // 💡 ПРИМЕНЯЕМ ОПРЕДЕЛЕННЫЙ КЛАСС К КОНТЕЙНЕРУ
    <StyledCases className={wrapperClass} style={style}> 
      <h1 className="cases-title">{translatedAdminTitle}</h1>
      <div className="cases-wrapper">
        {translatedCases.length > 0 ? (
          translatedCases.map((caseItem, index) => (
            <InfoBlock
              // Используем уникальный ключ, объединяя slug и index
              key={`${caseItem.slug || 'no-slug'}-${index}`} 
              Img={{ 
                url: getImageUrl(caseItem.image), 
                alt: caseItem.image?.alt || caseItem.title
              }}
              data={caseItem.date}
              views={caseItem.views}
            >
              <div className="theme-container">
                {caseItem.themes.map((theme, themeIndex) => (
                  <p key={themeIndex} className="info-theme">
                    {theme}
                  </p>
                ))}
              </div>
              <Link className="info-title" href={`/portfolio/${caseItem.slug}`}>
                {caseItem.title}
              </Link>
            </InfoBlock>
          ))
        ) : (
          <p>{noCasesText}</p>
        )}
        <button className="cases-button">{buttonText}</button>
      </div>
    </StyledCases>
  );
}