"use client";

import { createContext, useContext, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferred-language') || 'Ru';
    }
    return 'Ru'; // Значение по умолчанию для SSR
  });

  const changeLanguage = (lang) => {
    const oldLangCode = language.toLowerCase();
    const newLangCode = lang.toLowerCase();
    
    // 1. Обновляем состояние и localStorage
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    
    // 2. Получаем путь без префикса языка
    let pathWithoutLocale = pathname;
    
    if (pathWithoutLocale.startsWith(`/${oldLangCode}`)) {
      pathWithoutLocale = pathWithoutLocale.substring(3); // Удаляем /ru или /en
    }
    
    // 3. Формируем новый путь
    let finalPath = `/${newLangCode}`; // Начинаем с нового префикса

    // Если путь не пустой и не корень, добавляем его
    if (pathWithoutLocale && pathWithoutLocale !== '/') {
        finalPath += pathWithoutLocale;
    }
    
    // 4. Перенаправляем
    router.push(finalPath);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};