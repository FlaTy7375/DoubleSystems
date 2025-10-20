'use client';

import { StyledWeCreated } from './style';
import Card from '@/components/ui/card/card';

export default function WeCreated({ items = [] }) {
  // Значения по умолчанию
  const defaultItems = [
    {
      title: 'Web-решения',
      description:
        'Создаем корпоративные порталы, SaaS-платформы и интернет-магазины, которые выдерживают высокие нагрузки и радуют пользователей.',
      advantages: ['Разработка сайтов и порталов', 'Корпоративные системы', 'SaaS-платформы', 'E-commerce'],
      number: '/01',
      gradient: 'blue-gradient',
    },
    {
      title: 'Мобильные приложения',
      description:
        'Разрабатываем кроссплатформенные и нативные приложения для iOS и Android, которые удобны, быстры и функциональны.',
      advantages: ['Разработка iOS/Android', 'Кроссплатформенные приложения', 'Интеграции и API'],
      number: '/02',
      gradient: 'green-gradient',
    },
    {
      title: 'Искусственный интеллект',
      description:
        'Внедряем AI-решения: от чат-ботов и анализа данных до обработки изображений с помощью нейросетей.',
      advantages: ['Машинное обучение', 'AI-ассистенты (чат-боты, анализ данных)', 'AI-обработка фото'],
      number: '/03',
      gradient: 'red-gradient',
    },
    {
      title: 'Видеотехнологии',
      description:
        'Разрабатываем системы видеосвязи и конференц-связи на базе WebRTC для бизнеса любого масштаба.',
      advantages: ['WebRTC и видеоконференции', 'Корпоративные видеосервисы'],
      number: '/04',
      light: true,
    },
    {
      title: 'Безопасность данных',
      description: 'Защищаем ваши коммуникации с помощью VPN, шифрования и P2P-технологий.',
      advantages: ['VPN, шифрование, P2P-чаты', 'Защита данных'],
      number: '/05',
      light: true,
    },
    {
      title: 'Парсинг данных',
      description:
        'Внедряем AI-решения: от чат-ботов и анализа данных до обработки изображений с помощью нейросетей.',
      advantages: ['Машинное обучение', 'AI-ассистенты (чат-боты, анализ)', 'AI-обработка фото'],
      number: '/06',
      light: true,
    },
  ];

  // Преобразуем данные из Payload в нужный формат
  const displayItems = items.length > 0
    ? items.map((item) => ({
        title: item.title || 'Без названия',
        description: item.description || 'Нет описания',
        advantages: item.advantages?.map((adv) => adv.text || 'Нет преимуществ') || [],
        number: item.number || `/${(items.indexOf(item) + 1).toString().padStart(2, '0')}`,
        gradient: item.gradient || (item.light ? '' : 'blue-gradient'), // Логика по умолчанию
        light: item.light || false,
      }))
    : defaultItems;

  return (
    <StyledWeCreated>
      <h1 className="created-title">Мы создаём.</h1>
      <ul className="card-list">
        {displayItems.map((item, index) => (
          <li key={index} className="card-wrapper">
            <Card className={item.light ? 'light' : ''}>
              <h2>{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <div>
                {item.advantages.map((adv, advIndex) => (
                  <p key={advIndex} className="card-adv">
                    {adv}
                  </p>
                ))}
              </div>
              <p className="card-number">{item.number}</p>
              {item.gradient && <div className={item.gradient}></div>}
            </Card>
          </li>
        ))}
      </ul>
    </StyledWeCreated>
  );
}