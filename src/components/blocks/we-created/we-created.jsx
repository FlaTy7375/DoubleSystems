'use client';

import { StyledWeCreated } from './style';
import Card from '@/components/ui/card/card';
import Link from 'next/link';
import { useTranslate } from '@/components/translate/useTranslation';

export default function WeCreated({ items = [] }) {
  
  const defaultItems = [
    {
      title: 'Web-решения',
      description:
        'Создаем корпоративные порталы, SaaS-платформы и интернет-магазины, которые выдерживают высокие нагрузки и радуют пользователей.',
      advantages: [
        { text: 'Разработка сайтов и порталов', url: '/services/sites' }, 
        { text: 'Корпоративные системы', url: '/services/corp' }, 
        { text: 'SaaS-платформы', url: '/services/saas' }, 
        { text: 'E-commerce', url: '/services/ecommerce' }
      ],
      number: '/01',
      gradient: 'blue-gradient',
    },
    {
      title: 'Мобильные приложения',
      description:
        'Разрабатываем кроссплатформенные и нативные приложения для iOS и Android, которые удобны, быстры и функциональны.',
      advantages: [
        { text: 'Разработка iOS/Android', url: '/services/ios-android' }, 
        { text: 'Кроссплатформенные приложения', url: '/services/cross-platform' }, 
        { text: 'Интеграции и API', url: '/services/integrations' }
      ],
      number: '/02',
      gradient: 'green-gradient',
    },
    {
      title: 'Искусственный интеллект',
      description:
        'Внедряем AI-решения: от чат-ботов и анализа данных до обработки изображений с помощью нейросетей.',
      advantages: [
        { text: 'Машинное обучение', url: '/services/ml' }, 
        { text: 'AI-ассистенты (чат-боты, анализ данных)', url: '/services/ai-bots' }, 
        { text: 'AI-обработка фото', url: '/services/ai-photo' }
      ],
      number: '/03',
      gradient: 'red-gradient',
    },
    {
      title: 'Видеотехнологии',
      description:
        'Разрабатываем системы видеосвязи и конференц-связи на базе WebRTC для бизнеса любого масштаба.',
      advantages: [
        { text: 'WebRTC и видеоконференции', url: '/services/webrtc' }, 
        { text: 'Корпоративные видеосервисы', url: '/services/video-corp' }
      ],
      number: '/04',
      light: true,
    },
    {
      title: 'Безопасность данных',
      description: 'Защищаем ваши коммуникации с помощью VPN, шифрования и P2P-технологий.',
      advantages: [
        { text: 'VPN, шифрование, P2P-чаты', url: '/services/security-chat' }, 
        { text: 'Защита данных', url: '/services/data-security' }
      ],
      number: '/05',
      light: true,
    },
    {
      title: 'Парсинг данных',
      description:
        'Внедряем AI-решения: от чат-ботов и анализа данных до обработки изображений с помощью нейросетей.',
      advantages: [
        { text: 'Машинное обучение', url: '/services/ml' }, 
        { text: 'AI-ассистенты (чат-боты, анализ)', url: '/services/ai-bots' }, 
        { text: 'AI-обработка фото', url: '/services/ai-photo' }
      ],
      number: '/06',
      light: true,
    },
  ];

  const createdTitle = useTranslate("Мы создаём.");
  
  // 1. Преобразование данных из Payload
  const displayItems = items.length > 0
    ? items.map((item) => ({
        title: item.title || 'Без названия',
        description: item.description || 'Нет описания',
        advantages: item.advantages?.map((adv) => ({
            text: adv.text || 'Нет преимуществ',
            url: adv.url || '#',
        })) || [],
        number: item.number || `/${(items.indexOf(item) + 1).toString().padStart(2, '0')}`,
        gradient: item.gradient || (item.light ? '' : 'blue-gradient'),
        light: item.light || false,
      }))
    : defaultItems;

  // 2. Перевод данных
  const translatedItems = displayItems.map(item => ({
    ...item,
    title: useTranslate(item.title),
    description: useTranslate(item.description),
    advantages: item.advantages.map(adv => ({
        ...adv,
        text: useTranslate(adv.text),
    }))
  }));
  
  // Функция рендера содержимого карточки
  const renderCardContent = (item) => (
    <Card className={item.light ? 'light' : ''}>
        <h2>{item.title}</h2>
        <p className="card-description">{item.description}</p>
        
        <ul className="card-advantages-list">
            {item.advantages.map((adv, advIndex) => (
                <li key={advIndex}>
                    <Link 
                        className="card-adv"
                        href={adv.url && adv.url !== '#' ? adv.url : '#'} 
                    >
                        {adv.text}
                    </Link>
                </li>
            ))}
        </ul>
        
        <p className="card-number">{item.number}</p>
        {item.gradient && <div className={item.gradient}></div>}
    </Card>
  );

  return (
    <StyledWeCreated>
      <h1 className="created-title">{createdTitle}</h1>
      <ul className="card-list">
        {translatedItems.map((item, index) => (
          <li key={index} className="card-wrapper">
            {renderCardContent(item)}
          </li>
        ))}
      </ul>
    </StyledWeCreated>
  );
}