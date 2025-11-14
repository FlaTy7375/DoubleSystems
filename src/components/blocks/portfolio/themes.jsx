'use client';

import { StyledThemes } from './style';
import { useTranslate } from "@/components/translate/useTranslation"

export default function Themes({ themes = [] }) {
  // Значения по умолчанию
  const defaultThemes = ['ПРИЛОЖЕНИЕ', 'ПОРТАЛ', 'ЭКОСИСТЕМА ЗДОРОВЬЯ'];

  // Преобразуем данные для совместимости
  const displayThemes = themes.length > 0
    ? themes.map((theme) => (typeof theme === 'object' ? theme.text || theme.toString() : theme))
    : defaultThemes;

  return (
    <StyledThemes>
      {displayThemes.map((theme, index) => (
        <li key={index} className="theme">
          {useTranslate(theme)}
        </li>
      ))}
    </StyledThemes>
  );
}