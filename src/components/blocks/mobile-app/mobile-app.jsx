'use client';

import { StyledMobileApp } from './style';
import BreadCrumbs from '@/components/ui/bread-crumbs/bread-crumbs';
import Image from 'next/image';
import { useState } from 'react';
import MobileSectionImg from "@/assets/images/Mobile-section.jpg"
import { useTranslate } from '@/components/translate/useTranslation';

export default function MobileApp({ items = [] }) {
  // Значения по умолчанию, если данные отсутствуют
  const defaultItems = [
    {
      title: 'Мобильное приложение международного транспортного форума ESE-2025',
      image: { url: MobileSectionImg, alt: 'Изображение мобильного приложения' },
    },
    {
      title: 'Приложение для логистики 2025',
      image: { url: MobileSectionImg, alt: 'Изображение приложения для логистики' },
    },
    {
      title: 'Транспортная платформа 2025',
      image: { url: MobileSectionImg, alt: 'Изображение транспортной платформы' },
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  // Управление слайдером
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayItems.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < displayItems.length - 1 ? prev + 1 : 0));
  };

  const placeholderImageAlt = useTranslate('Изображение мобильного приложения');

  // Переводим displayItems
  const translatedItems = displayItems.map(item => ({
    ...item,
    title: useTranslate(item.title),
    image: {
      ...item.image,
      alt: useTranslate(item.image?.alt || 'Изображение мобильного приложения')
    }
  }));

  const translatedCurrentItem = translatedItems[currentIndex] || {};

  return (
    <StyledMobileApp>
      <h1 className="mobile-title">{translatedCurrentItem.title}</h1>
      <div className="image-container">
        <Image
          src={translatedCurrentItem.image?.url || MobileSectionImg}
          alt={translatedCurrentItem.image?.alt || placeholderImageAlt}
          width={600}
          height={400}
          className="app-image"
        />
        <button className="slider-button prev" onClick={goToPrev}>
          &lt;
        </button>
        <button className="slider-button next" onClick={goToNext}>
          &gt;
        </button>
      </div>
      <BreadCrumbs currentIndex={currentIndex} total={displayItems.length} />
    </StyledMobileApp>
  );
}