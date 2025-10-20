'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { StyledWebSolutions } from './style';
import PhoneAndTablet from "@/assets/images/tablet-and-phone.png"
import BreadCrumbs from '@/components/ui/bread-crumbs/bread-crumbs';

export default function WebSolutions({ cases = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cases.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < cases.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [cases]);

  const currentCase = cases[currentIndex] || {};
  const title = currentCase?.title || 'Web-решения, Мобильные приложения, Искусственный интеллект, Видеосвязь, Безопасные коммуникации';
  const description = currentCase?.description?.root?.children?.[0]?.children?.[0]?.text || 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.';
  const tags = currentCase?.tags?.map((tag) => ({ tag: tag.title })) || [{ tag: 'ПРИЛОЖЕНИЕ' }, { tag: 'ПОРТАЛ' }, { tag: 'ЭКОСИСТЕМА ЗДОРОВЬЯ' }];
  const featuredImageUrl = currentCase?.featuredImage?.url || PhoneAndTablet;
  const featuredImageAlt = currentCase?.featuredImage?.alt || 'Изображение кейса';


  return (
    <StyledWebSolutions>
      <h1 className="solutions-title">{title}</h1>
      <div className="solutions-container">
        <button className="slider-button prev" onClick={goToPrev}>
          &lt;
        </button>
        <ul className="stamps-list for-mobile">
          {tags.slice(0, 3).map((tag, index) => (
            <li key={index} className="stamp">
              {tag.tag}
            </li>
          ))}
        </ul>
        <h2 className="container-title for-pc">Кейс: {title}</h2>
        <h2 className="container-title for-mobile">Экосистема здоровья</h2>
        <ul className="stamps-list for-pc">
          {tags.map((tag, index) => (
            <li key={index} className="stamp">
              {tag.tag}
            </li>
          ))}
        </ul>
        <p
          className="container-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Image
          className="container-image"
          src={featuredImageUrl}
          alt={featuredImageAlt}
          width={912}
          height={666}
        />
        <button className="container-button">Рассказываем о проекте</button>
        <button className="slider-button next" onClick={goToNext}>
          &gt;
        </button>
      </div>
      <BreadCrumbs currentIndex={currentIndex} />
    </StyledWebSolutions>
  );
}