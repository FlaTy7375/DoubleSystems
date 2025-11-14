// hooks/useTranslation.js
"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

// Глобальный кэш
let translationCache = {};

// Fallback переводы для всех текстов сайта
const getFallbackTranslation = (text) => {
  const fallbackTranslations = {
    // Header
    'Цены': 'Prices',
    'О нас': 'About us',
    'Портфолио': 'Portfolio',
    'Услуги': 'Services',
    'Блог': 'Blog',
    'Связаться': 'Contact',
    'Что мы делаем': 'What we do',
    'Напишите нам!': 'Write to us!',
    'Поиск по сайту': 'Site search',
    
    // Footer
    'Часто встречающиеся вопросы': 'Frequently Asked Questions',
    'Постарались ответить на основные': 'We tried to answer the main ones',
    'Наши проекты говорят сами за себя': 'Our projects speak for themselves',
    'Закажите бесплатную консультацию': 'Order a free consultation',
    'Как с Вами связаться?': 'How to contact you?',
    'Имя': 'Name',
    'Комментарий': 'Comment',
    'Свяжитесь со мной': 'Contact me',
    'Это совершенно бесплатно! Мы не будем навязывать свои услуги.': 'It\'s completely free! We will not impose our services.',
    'Email:': 'Email:',
    'Telegram:': 'Telegram:',
    'ИП Егошин А.В.': 'IE Egoshin A.V.',
    'ОГРНИП 315121500002541': 'OGRNIP 315121500002541',
    'WhatsApp': 'WhatsApp',
    'Phone': 'Phone',
    'Telegram': 'Telegram',
    'VK': 'VK',
    'Double Systems': 'Double Systems',
    
    // WebSolutions
    'Кейс:': 'Case:',
    'Экосистема здоровья': 'Health Ecosystem',
    'Рассказываем о проекте': 'Tell about the project',
    'ПРИЛОЖЕНИЕ': 'APPLICATION',
    'ПОРТАЛ': 'PORTAL',
    'ЭКОСИСТЕМА ЗДОРОВЬЯ': 'HEALTH ECOSYSTEM',
    
    // AboutUs
    'О компании': 'About company',
    'Написать': 'Write',
    'Информация о компании пока не добавлена.': 'Company information not added yet.',
    'Егошин Алексей Валерьевич': 'Egor Alexey Valerievich',
    'директор Double Systems': 'director of Double Systems',
    'Кандидат технических наук, доцент кафедры информатики и системного программирования': 'Candidate of Technical Sciences, Associate Professor of Informatics and System Programming',
    'Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта': 'Expert in web development, mobile solutions and artificial intelligence',
    
    // WeCreated
    'Мы создаём.': 'We create.',
    'Без названия': 'No title',
    'Нет описания': 'No description',
    'Нет преимуществ': 'No advantages',
    'Web-решения': 'Web solutions',
    'Мобильные приложения': 'Mobile applications',
    'Искусственный интеллект': 'Artificial intelligence',
    'Видеотехнологии': 'Video technologies',
    'Безопасность данных': 'Data security',
    'Парсинг данных': 'Data parsing',
    'Разработка сайтов и порталов': 'Website and portal development',
    'Корпоративные системы': 'Corporate systems',
    'SaaS-платформы': 'SaaS platforms',
    'E-commerce': 'E-commerce',
    'Разработка iOS/Android': 'iOS/Android development',
    'Кроссплатформенные приложения': 'Cross-platform applications',
    'Интеграции и API': 'Integrations and API',
    'Машинное обучение': 'Machine learning',
    'AI-ассистенты (чат-боты, анализ данных)': 'AI assistants (chat bots, data analysis)',
    'AI-обработка фото': 'AI photo processing',
    'WebRTC и видеоконференции': 'WebRTC and video conferences',
    'Корпоративные видеосервисы': 'Corporate video services',
    'VPN, шифрование, P2P-чаты': 'VPN, encryption, P2P chats',
    'Защита данных': 'Data protection',
    'AI-ассистенты (чат-боты, анализ)': 'AI assistants (chat bots, analysis)',

    // Portfolio
    'Портфолио': 'Portfolio',
    'Сервисы:': 'Services:',
    'Сайты и порталы:': 'Websites and portals:',
    'Мобильные приложения:': 'Mobile applications:',
    'СAI-проекты:': 'AI projects:',
    'Собственные продукты:': 'Our products:',
    'Маркетплейс автозапчастей': 'Auto parts marketplace',
    'AI-ассистент для мероприятий': 'AI assistant for events',
    'AI-рекомендации по здоровью': 'AI health recommendations',
    'Финансовая аналитика': 'Financial analytics',
    'Сайт Университета (Норвегия)': 'University website (Norway)',
    'Туристический портал': 'Tourism portal',
    'Альянс производителей камня': 'Stone manufacturers alliance',
    'Brain Twin (Норвегия)': 'Brain Twin (Norway)',
    'Путь солнца': 'Path of the sun',
    'Единая Сеть Экспедиторов (ЕСЭ)': 'Unified Forwarders Network',
    'AI-анализ комментариев': 'AI comment analysis',
    'Чат-бот с RAG': 'Chat bot with RAG',
    'AI-обработка фото': 'AI photo processing',
    'WarOnMap (стратегия)': 'WarOnMap (strategy)',
    'P2P Video Chat': 'P2P Video Chat',

    // MobileApp
    'Изображение мобильного приложения': 'Mobile application image',
    'Изображение приложения для логистики': 'Logistics application image', 
    'Изображение транспортной платформы': 'Transport platform image',
    'Мобильное приложение международного транспортного форума ESE-2025': 'Mobile application for international transport forum ESE-2025',
    'Приложение для логистики 2025': 'Logistics application 2025',
    'Транспортная платформа 2025': 'Transport platform 2025',

    // Cases
    'Наши кейсы': 'Our cases',
    'Кейсы не найдены. Добавьте их в коллекцию "Портфолио (кейсы)".': 'Cases not found. Add them to the "Portfolio (cases)" collection.',
    'Запросить коммерческое предложение': 'Request a commercial proposal',
    'Экосистема здоровья, маркетплейс, приложение «HealthHub»': 'Health ecosystem, marketplace, "HealthHub" application',
    'Международный транспортный форум ESE ASIA-2025': 'International transport forum ESE ASIA-2025',
    'Автоматизированная система мониторинга «Croft»': 'Automated monitoring system "Croft"',
    'Ресторан «Ногай»': 'Restaurant "Nogai"',
    'Альметьевский молочный комбинат': 'Almetyevsk dairy plant',
    'ДИЗАЙН': 'DESIGN',
    'ВЫСТАВКА': 'EXHIBITION', 
    'САЙт': 'WEBSITE',
    'БЛОКЧЕЙН': 'BLOCKCHAIN',
  };

  return fallbackTranslations[text] || text;
};

// БЕСПЛАТНЫЕ API ПЕРЕВОДА (с поддержкой ru → en)
const TRANSLATION_APIS = [
  // 1. Lingva.ml — работает, без CORS (через прокси или напрямую)
  {
    name: 'lingva',
    url: (text) => `https://lingva.ml/api/v1/ru/en/${encodeURIComponent(text)}`,
    parse: (data) => data.translation,
  },
  // 2. LibreTranslate (публичные инстансы)
  {
    name: 'libretranslate',
    url: (text) => `https://libretranslate.de/translate`,
    method: 'POST',
    body: (text) => ({ q: text, source: 'ru', target: 'en', format: 'text' }),
    parse: (data) => data.translatedText,
  },
  // 3. MyMemory (бесплатно до 1000 слов/день)
  {
    name: 'mymemory',
    url: (text) => `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ru|en`,
    parse: (data) => data.responseData.translatedText,
  },
  // 4. DeepL Free API (через неофициальный прокси)
  {
    name: 'deepl-proxy',
    url: (text) => `https://api.deepl.com/v2/translate?auth_key=FREE_KEY_NOT_NEEDED_HERE&text=${encodeURIComponent(text)}&source_lang=RU&target_lang=EN`,
    parse: (data) => data.translations?.[0]?.text,
    note: 'Требует прокси, если нет ключа',
  },
  // 5. Просто fallback (если всё упало)
  {
    name: 'fallback',
    url: () => null,
    parse: () => null,
  },
];

// Основной хук
export const useTranslate = (text) => {
  const [translated, setTranslated] = useState(text);
  const { language } = useLanguage();

  useEffect(() => {
    const translateText = async () => {
      if (!text || typeof text !== 'string' || language === 'Ru') {
        setTranslated(text);
        return;
      }

      const cacheKey = `${text}-${language}`;
      
      // Кэш
      if (translationCache[cacheKey]) {
        setTranslated(translationCache[cacheKey]);
        return;
      }

      // Сразу ставим fallback
      const fallback = getFallbackTranslation(text);
      setTranslated(fallback);
      translationCache[cacheKey] = fallback;

      // Пробуем API по очереди
      for (const api of TRANSLATION_APIS) {
        if (api.name === 'fallback') break;

        try {
          const url = api.url(text);
          let response;

          if (api.method === 'POST') {
            response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(api.body(text)),
            });
          } else {
            response = await fetch(url);
          }

          if (response.ok) {
            const data = await response.json();
            const result = api.parse(data);

            if (result && result !== text && result.toLowerCase() !== text.toLowerCase()) {
              setTranslated(result);
              translationCache[cacheKey] = result;
              break; // Успех — выходим
            }
          }
        } catch (error) {
          continue; // Пробуем следующий
        }
      }
    };

    translateText();
  }, [text, language]);

  return translated;
};

// Очистка кэша
export const clearTranslationCache = () => {
  translationCache = {};
};