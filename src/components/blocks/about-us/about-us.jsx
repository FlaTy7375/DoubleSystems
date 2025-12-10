'use client';

import Image from 'next/image';
import { StyledAboutUs } from './style';
import Link from 'next/link';
import Person from "@/assets/images/Alex.png"
import { useTranslate } from '@/components/translate/useTranslation';
import { useState, useRef } from 'react';
import { usePopup } from '../case1/blocks/popup/usePopup';
import ContactPopup from '../case1/blocks/popup/ContactPopup';
import { GlobalPopupStyles } from '../case1/blocks/popup/GlobalPopupStyles';

export default function AboutUs({ content = '', person = {} }) {
  // --- ЛОГИКА POP-UP ---
  const { 
      isPopupOpen, 
      popupTargetElement, 
      handleOpenPopup, 
      handleClosePopup 
  } = usePopup();
  
  const authorButtonRef = useRef(null); 

  const handleAuthorClick = (e) => {
      e.preventDefault(); 
      handleOpenPopup(e, authorButtonRef.current); 
  };
  // ----------------------
  
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

  // Переводим все тексты
  const aboutTitle = useTranslate("О компании");
  const writeButton = useTranslate("Написать");
  const noContentText = useTranslate("Информация о компании пока не добавлена.");

  // Переводим данные по умолчанию
  const translatedName = useTranslate(name);
  const translatedRole = useTranslate(role);
  const translatedImageAlt = useTranslate(imageAlt);
  
  // Переводим описание
  const translatedDescription = description.map(desc => useTranslate(desc));

  // Переводим параграфы по умолчанию
  const translatedParagraphs = paragraphs.map(para => useTranslate(para));

  return (
    <StyledAboutUs>
      <GlobalPopupStyles /> {/* Добавляем глобальные стили для Pop-up */}
      
      <h2 className="about-title">{aboutTitle}</h2>
      <div className="about-person">
        <div className="person-container">
          <Image src={imageUrl} alt={translatedImageAlt} width={100} height={100} />
          
          {/* Кнопка для вызова Pop-up */}
          <button 
            ref={authorButtonRef}
            className="write-button" 
            onClick={handleAuthorClick}
            type="button" 
          >
            {writeButton}
          </button>
          
        </div>
        <h3 className="person-name">{translatedName}</h3>
        <p className="person-role">{translatedRole}</p>
        {translatedDescription.map((desc, index) => (
          <p key={index} className="person-description">
            {desc}
          </p>
        ))}
      </div>
      <div className="about-container">
        {hasContent ? (
          translatedParagraphs.map((para, index) => (
            <p
              key={index}
              className={`about-description ${index === 0 ? 'small' : ''}`}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="about-description">{noContentText}</p>
        )}
      </div>

      {/* КОМПОНЕНТ POP-UP */}
      <ContactPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          targetElement={popupTargetElement}
      />
      {/* КОНЕЦ КОМПОНЕНТА POP-UP */}
    </StyledAboutUs>
  );
}