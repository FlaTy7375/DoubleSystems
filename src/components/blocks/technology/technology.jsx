"use client";

import { StyledTechnology } from './style';
import TechnologyList from './technology-list';
import { useTranslate } from '@/components/translate/useTranslation';

export default function Technology({ technologies = [] }) {

  const Technology = useTranslate('Технологии');

  return (
    <StyledTechnology>
      <h1 className="technology-title">{Technology}</h1>
      <div className="technology-wrapper">
        <div className="technology-directions">
          {technologies.length > 0 ? (
            technologies.map((techGroup, index) => (
              <p key={index} className={`technology-direction ${index === 0 ? 'active' : ''}`}>
                {techGroup.type}
              </p>
            ))
          ) : (
            <>
              <p className="technology-direction active">Backend:</p>
              <p className="technology-direction">Frontend:</p>
              <p className="technology-direction">AI & Parsing:</p>
            </>
          )}
        </div>
        <TechnologyList technologies={technologies} />
      </div>
    </StyledTechnology>
  );
}