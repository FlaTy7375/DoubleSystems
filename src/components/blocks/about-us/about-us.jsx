'use client';

import Image from 'next/image';
import { StyledAboutUs } from './style';
import Link from 'next/link';
import Person from "@/assets/images/Alex.png"

export default function AboutUs({ content = '', person = {} }) {
  // Данные по умолчанию, если пропсы пустые
  const {
    name = 'Егошин Алексей Валерьевич',
    role = 'директор Double Systems',
    description = [
      'Кандидат технических наук, доцент кафедры информатики и системного программирования',
      'Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта',
    ],
    imageUrl = Person,
    imageAlt = 'Изображение Автора',
  } = person;

  // Разделение content на параграфы или использование значений по умолчанию
  const paragraphs = content
    ? typeof content === 'string' && content.trim()
      ? content.split('\n').filter((p) => p.trim())
      : [content]
    : [
        'Double Systems, команда экспертов с более чем 10-летним опытом в разработке цифровых решений. Мы создаем высоконагруженные веб-системы, мобильные приложения, AI-сервисы, видеосвязь и безопасные коммуникации для бизнеса.',
        'Наш подход – инновации, надежность и масштабируемость.',
        'Мы создаём решения, которые помогают компаниям автоматизировать процессы, обеспечивать безопасность данных и создавать удобную коммуникацию.',
      ];

  const hasContent = paragraphs.length > 0;

  return (
    <StyledAboutUs>
      <h2 className="about-title">О компании</h2>
      <div className="about-person">
        <div className="person-container">
          <Image src={imageUrl} alt={imageAlt} width={100} height={100} />
          <Link className="write-button" href="/contacts">
            Написать
          </Link>
        </div>
        <h3 className="person-name">{name}</h3>
        <p className="person-role">{role}</p>
        {description.map((desc, index) => (
          <p key={index} className="person-description">
            {desc}
          </p>
        ))}
      </div>
      <div className="about-container">
        {hasContent ? (
          paragraphs.map((para, index) => (
            <p
              key={index}
              className={`about-description ${index === 0 ? 'small' : ''}`}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="about-description">Информация о компании пока не добавлена.</p>
        )}
      </div>
    </StyledAboutUs>
  );
}