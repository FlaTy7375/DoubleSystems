"use client"

import { StyledCases } from './style';
import InfoBlock from '@/components/ui/info-block/info-block';
import Case1 from '@/assets/images/case1.jpg';
import Case2 from '@/assets/images/case2.png';
import Case3 from '@/assets/images/case3.png';
import Case4 from '@/assets/images/case4.png';
import Case5 from '@/assets/images/case5.png';
import Link from 'next/link';

export default function Cases({ cases = [], description = '' }) {
  // Значения по умолчанию с локальными изображениями
  const defaultCases = [
    {
      title: 'Экосистема здоровья, маркетплейс, приложение «HealthHub»',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ', 'ЭКОСИСТЕМА ЗДОРОВЬЯ'],
      date: '20.08.2025 09:20',
      views: '85',
      image: { url: Case1, alt: 'Изображение кейса HealthHub' },
    },
    {
      title: 'Международный транспортный форум ESE ASIA-2025',
      themes: ['ПРИЛОЖЕНИЕ', 'ДИЗАЙН', 'ВЫСТАВКА'],
      date: '17.08.2025 04:48',
      views: '85',
      image: { url: Case2, alt: 'Изображение форума ESE ASIA-2025' },
    },
    {
      title: 'Автоматизированная система мониторинга «Croft»',
      themes: ['САЙТ', 'БЛОКЧЕЙН'],
      date: '08.08.2025 11:29',
      views: '365',
      image: { url: Case3, alt: 'Изображение системы Croft' },
    },
    {
      title: 'Ресторан «Ногай»',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ'],
      date: '27.07.2025 11:50',
      views: '85',
      image: { url: Case4, alt: 'Изображение ресторана Ногай' },
    },
    {
      title: 'Альметьевский молочный комбинат',
      themes: ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ'],
      date: '14.07.2025 15:49',
      views: '85',
      image: { url: Case5, alt: 'Изображение молочного комбината' },
    },
  ];

  // Преобразуем данные для совместимости
  const displayCases = cases.length > 0
    ? cases.map((caseItem) => {
        console.log('Case Item:', caseItem);
        return {
          title: caseItem.title || 'Без названия',
          themes: caseItem.themes || [],
          date: caseItem.date || 'Не указано',
          views: caseItem.views || '85',
          image: caseItem.image || defaultCases.find((dc) => dc.title === caseItem.title)?.image || { url: '/placeholder-image.jpg', alt: caseItem.title },
        };
      })
    : defaultCases;

  return (
    <StyledCases>
      <div className="cases-description">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <h1 className="cases-title">Наши кейсы</h1>
      <div className="cases-wrapper">
        {displayCases.length > 0 ? (
          displayCases.map((caseItem, index) => (
            <InfoBlock
              key={index}
              Img={caseItem.image}
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
              <Link className="info-title" href={`/cases${index+1}`}>
                {caseItem.title}
              </Link>
            </InfoBlock>
          ))
        ) : (
          <p>Кейсы не найдены. Добавьте их в админке.</p>
        )}
        <button className="cases-button">Запросить коммерческое предложение</button>
      </div>
    </StyledCases>
  );
}