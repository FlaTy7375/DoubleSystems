"use client";

import Image from 'next/image';
import { StyledTechnologyList } from './style';

const technologyNames = [
    // Large Techs (1-14)
    'Bootstrap', 'Astro', 'Lodash', 'NGXS', 'Redux', 'Svelte', 'Three.js', 
    'CSS3', 'JavaScript', 'MUI/Material UI', 'Nuxt.js', 'ReduxSaga', 'TypeScript', 'WebSocket',
    // Small Techs (15-38)
    'Cypress', 'Jest', 'MobX', 'Protractor JS', 'Three.js', 'VueMeta',
    'Angular Formly', 'Karma Vector', 'Mocha', 'PWA', 'RxJS', 'Vue Router',
    'Gulp', 'Lerna', 'Next.js', 'React', 'Sass', 'Vue.js',
    'Lonic', 'LESS', 'NgRx', 'React Native', 'Stylus', 'Vuex'
];

export default function TechnologyList({ technologies = [] }) {
  // 1. Запасные изображения (с добавлением имени из списка technologyNames)
  const defaultLargeTechImages = Array.from({ length: 14 }, (_, i) => ({
    url: require(`@/assets/images/tech/tech${i + 1}.png`).default,
    alt: technologyNames[i] || `Tech ${i + 1}`, // Используем имя
    name: technologyNames[i] || `Tech ${i + 1}`, // Добавляем name для title
  }));

  const defaultSmallTechImages = Array.from({ length: 24 }, (_, i) => ({
    url: require(`@/assets/images/tech/tech${i + 15}.png`).default,
    alt: technologyNames[i + 14] || `Tech ${i + 15}`, // Используем имя
    name: technologyNames[i + 14] || `Tech ${i + 15}`, // Добавляем name для title
  }));

  // 2. Фильтрация и обогащение данных (логика без изменений)
  const largeTechs = technologies.length > 0 && technologies[0]?.list
    ? technologies[0].list
        .filter((tech, index) => index < 14)
        .map((tech, index) => ({
          ...tech,
          image: tech.logo
            ? { url: tech.logo.url, alt: tech.techName || 'Логотип технологии' }
            : defaultLargeTechImages[index % defaultLargeTechImages.length],
        }))
    : defaultLargeTechImages;

  const smallTechs = technologies.length > 0 && technologies[0]?.list
    ? technologies[0].list
        .filter((tech, index) => index >= 14 && index < 38)
        .map((tech, index) => ({
          ...tech,
          image: tech.logo
            ? { url: tech.logo.url, alt: tech.techName || 'Логотип технологии' }
            : defaultSmallTechImages[(index - 14) % defaultSmallTechImages.length],
        }))
    : defaultSmallTechImages;

  return (
    <div className="lists-wrapper">
      <StyledTechnologyList>
        {largeTechs.map((tech, index) => (
          <li key={index} className="tech-element">
            {tech.image && tech.image.url ? (
              <Image
                className="tech-image"
                src={tech.image.url}
                alt={tech.image.alt}
                width={104}
                height={104}
                title={tech.techName || tech.image.alt}
                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
              />
            ) : (
              <Image
                className="tech-image"
                src={defaultLargeTechImages[index % defaultLargeTechImages.length].url}
                alt={defaultLargeTechImages[index % defaultLargeTechImages.length].alt}
                width={104}
                height={104}
                title={defaultLargeTechImages[index % defaultLargeTechImages.length].name}
              />
            )}
          </li>
        ))}
      </StyledTechnologyList>
      <StyledTechnologyList className="small">
        {smallTechs.map((tech, index) => (
          <li key={index} className="tech-element">
            {tech.image && tech.image.url ? (
              <Image
                className="tech-image"
                src={tech.image.url}
                alt={tech.image.alt}
                width={104}
                height={104}
                title={tech.techName || tech.image.alt}
                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
              />
            ) : (
              <Image
                className="tech-image"
                src={defaultSmallTechImages[(index) % defaultSmallTechImages.length].url}
                alt={defaultSmallTechImages[(index) % defaultSmallTechImages.length].alt}
                width={104}
                height={104}
                title={defaultSmallTechImages[(index) % defaultSmallTechImages.length].name}
              />
            )}
          </li>
        ))}
      </StyledTechnologyList>
    </div>
  );
}