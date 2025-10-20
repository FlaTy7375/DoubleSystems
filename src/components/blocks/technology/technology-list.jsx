"use client";

import Image from 'next/image';
import { StyledTechnologyList } from './style';

export default function TechnologyList({ technologies = [] }) {
  // Локальные изображения как запасной вариант
  const defaultLargeTechImages = Array.from({ length: 14 }, (_, i) => ({
    url: require(`@/assets/images/tech/tech${i + 1}.png`).default,
    alt: `Tech ${i + 1}`,
  }));

  const defaultSmallTechImages = Array.from({ length: 24 }, (_, i) => ({
    url: require(`@/assets/images/tech/tech${i + 15}.png`).default,
    alt: `Tech ${i + 15}`,
  }));

  // Фильтруем технологии для больших и малых изображений с проверкой
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
                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
              />
            ) : (
              <Image
                className="tech-image"
                src={defaultLargeTechImages[index % defaultLargeTechImages.length].url}
                alt={defaultLargeTechImages[index % defaultLargeTechImages.length].alt}
                width={104}
                height={104}
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
                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
              />
            ) : (
              <Image
                className="tech-image"
                src={defaultSmallTechImages[(index) % defaultSmallTechImages.length].url}
                alt={defaultSmallTechImages[(index) % defaultSmallTechImages.length].alt}
                width={104}
                height={104}
              />
            )}
          </li>
        ))}
      </StyledTechnologyList>
    </div>
  );
}