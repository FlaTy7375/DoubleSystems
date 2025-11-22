'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'; // 👈 Добавляем импорт Link
import { StyledWebSolutions } from './style';
import PhoneAndTablet from '@/assets/images/tablet-and-phone.png'; 
import BreadCrumbs from '@/components/ui/bread-crumbs/bread-crumbs';
import { useTranslate } from '@/components/translate/useTranslation';
import TagsRenderer from './TagsRenderer'; 

const staticCaseFallback = {
    previewTitle: "HealthHub — проектирование и разработка единой экосистемы здоровья", 
    title: "Web-решения",
    sections: [
      { 
        blockType: 'heroSection', 
        description: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.',
        stamps: [{text: "ПРИЛОЖЕНИЕ"}, {text: "ПОРТАЛ"}, {text: "ЭКОСИСТЕМА ЗДОРОВЬЯ"}],
        backgroundImage: { url: null } 
      }
    ],
    tags: ["Web-решения", "Мобильные приложения"], 
    previewImage: { url: null, alt: "Статическое изображение заглушка" },
    slug: 'healthhub-project' // 👈 Добавлено поле slug для заглушки
};

export default function WebSolutions({ cases = [] }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const isDynamicCase = cases.length > 0;

  const casesToUse = isDynamicCase 
    ? cases.slice(0, 5) // Если есть динамические кейсы, берем первые 5
    : [staticCaseFallback]; // Иначе — один статический

  const totalCases = casesToUse.length;

  const currentCaseForHooks = casesToUse[currentIndex] || casesToUse[0];

  const heroSection = currentCaseForHooks.sections?.find(s => s.blockType === 'heroSection');

  const bgImageUrl = heroSection?.backgroundImage?.url || ''; 
  
  const title = useTranslate(currentCaseForHooks.previewTitle || currentCaseForHooks.title || 'Без названия');
  
  const rawTags = Array.isArray(heroSection?.stamps)
    ? heroSection.stamps.map(stamp => stamp?.text || '').filter(Boolean)
    : (
        Array.isArray(currentCaseForHooks.tags)
            ? currentCaseForHooks.tags.map(tag => (typeof tag === 'string' ? tag : tag?.title || '')).filter(Boolean)
            : []
    );

  const descriptionText = heroSection?.description || 'Описание отсутствует';
  const description = useTranslate(descriptionText);

  const imageAlt = useTranslate(currentCaseForHooks.previewImage?.alt || currentCaseForHooks.previewTitle || 'Кейс');
  
  const caseText = useTranslate('Кейс:');
  const buttonText = useTranslate('Рассказываем о проекте');

  // 1. Получаем слаг текущего кейса
  const currentCaseSlug = currentCaseForHooks.slug; 
  // 2. Формируем URL. Предполагаем, что страница кейса находится по пути /portfolio/[slug]
  const caseUrl = currentCaseSlug ? `/portfolio/${currentCaseSlug}` : '#'; 

  const containerClass = isDynamicCase ? 'case-container' : 'solutions-container';
  
  // Переключатель нужен, если кейсов больше одного
  const canSwitch = totalCases > 1;

  const goToPrev = () => {
    if (canSwitch) {
        setCurrentIndex(prev => (prev === 0 ? totalCases - 1 : prev - 1));
    }
  };
  const goToNext = () => {
    if (canSwitch) {
        setCurrentIndex(prev => (prev === totalCases - 1 ? 0 : prev + 1));
    }
  };

  const showStaticImage = !bgImageUrl;

  return (
    <StyledWebSolutions>
      <h1 className="solutions-title">{title}</h1>

      <div 
        className={containerClass}
        style={{
          backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
        }}
      >

        <ul className="stamps-list for-mobile">
          <TagsRenderer rawTags={rawTags} limit={3} />
        </ul>

        <h2 className="container-title for-pc">{caseText} {title}</h2>
        <h2 className="container-title for-mobile">{caseText} {title}</h2>

        <ul className="stamps-list for-pc">
          <TagsRenderer rawTags={rawTags} limit={0} />
        </ul>

        <p className="container-description">{description}</p>

        {showStaticImage ? (
             <Image
                className="container-image"
                src={PhoneAndTablet} 
                alt={imageAlt || "Статический образ по умолчанию"}
                width={912}
                height={666}
                priority
             />
        ) : (
             <div className="container-image-placeholder" /> 
        )}

        {/* 3. Заменяем кнопку на компонент Link с динамическим href */}
        <Link href={caseUrl} className="container-button">
            {buttonText}
        </Link>
        
        {canSwitch && <button className="slider-button prev" onClick={goToPrev}>&lt;</button>}
        {canSwitch && <button className="slider-button next" onClick={goToNext}>&gt;</button>}
      </div>

      {/* Передаем корректное общее количество кейсов */}
      <BreadCrumbs currentIndex={currentIndex} total={totalCases} />
    </StyledWebSolutions>
  );
}