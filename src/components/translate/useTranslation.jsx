"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

let translationCache = {};

const getFallbackTranslation = (text) => {
  const fallbackTranslations = {
    "Часто встречающиеся вопросы": "Frequently Asked Questions",
    "Постарались ответить на основные": "We tried to answer the main ones",
    "Наши проекты говорят сами за себя": "Our projects speak for themselves",
    "Закажите бесплатную консультацию": "Order a free consultation",
    "Как с Вами связаться?": "How to contact you?",
    "Имя": "Name",
    "Комментарий": "Comment",
    "Свяжитесь со мной": "Contact me",
    "Это совершенно бесплатно! Мы не будем навязывать свои услуги.":
      "It's completely free! We will not impose our services.",
    "Email:": "Email:",
    "Telegram:": "Telegram:",
    "ИП Егошин А.В.": "IE Egoshin A.V.",
    "ОГРНИП 315121500002541": "OGRNIP 315121500002541",
    "WhatsApp": "WhatsApp",
    "Phone": "Phone",
    "VK": "VK",
    "Double Systems": "Double Systems",
    "Кейс:": "Case:",
    "Экосистема здоровья": "Health Ecosystem",
    "Рассказываем о проекте": "Tell about the project",
    "ПРИЛОЖЕНИЕ": "APPLICATION",
    "ПОРТАЛ": "PORTAL",
    "ЭКОСИСТЕМА ЗДОРОВЬЯ": "HEALTH ECOSYSTEM",
    "О компании": "About company",
    "Написать": "Write",
    "Информация о компании пока не добавлена.":
      "Company information not added yet.",
    "Егошин Алексей Валерьевич": "Egor Alexey Valerievich",
    "директор Double Systems": "director of Double Systems",
    "Кандидат технических наук, доцент кафедры информатики и системного программирования":
      "Candidate of Technical Sciences, Associate Professor of Informatics and System Programming",
    "Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта":
      "Expert in web development, mobile solutions and artificial intelligence",
    "Мы создаём.": "We create.",
    "Без названия": "No title",
    "Нет описания": "No description",
    "Нет преимуществ": "No advantages",
    "Web-решения": "Web solutions",
    "Мобильные приложения": "Mobile applications",
    "Искусственный интеллект": "Artificial intelligence",
    "Видеотехнологии": "Video technologies",
    "Безопасность данных": "Data security",
    "Парсинг данных": "Data parsing",
    "Разработка сайтов и порталов": "Website and portal development",
    "Корпоративные системы": "Corporate systems",
    "SaaS-платформы": "SaaS platforms",
    "E-commerce": "E-commerce",
    "Разработка iOS/Android": "iOS/Android development",
    "Кроссплатформенные приложения": "Cross-platform applications",
    "Интеграции и API": "Integrations and API",
    "Машинное обучение": "Machine learning",
    "AI-ассистенты (чат-боты, анализ данных)":
      "AI assistants (chat bots, data analysis)",
    "AI-обработка фото": "AI photo processing",
    "WebRTC и видеоконференции": "WebRTC and video conferences",
    "Корпоративные видеосервисы": "Corporate video services",
    "VPN, шифрование, P2P-чаты": "VPN, encryption, P2P chats",
    "Защита данных": "Data protection",
    "AI-ассистенты (чат-боты, анализ)": "AI assistants (chat bots, analysis)",
    "Портфолио": "Portfolio",
    "Сервисы:": "Services:",
    "Сайты и порталы:": "Websites and portals:",
    "Мобильные приложения:": "Mobile applications:",
    "СAI-проекты:": "AI projects:",
    "Собственные продукты:": "Our products:",
    "Маркетплейс автозапчастей": "Auto parts marketplace",
    "AI-ассистент для мероприятий": "AI assistant for events",
    "AI-рекомендации по здоровью": "AI health recommendations",
    "Финансовая аналитика": "Financial analytics",
    "Сайт Университета (Норвегия)": "University website (Norway)",
    "Туристический портал": "Tourism portal",
    "Альянс производителей камня": "Stone manufacturers alliance",
    "Brain Twin (Норвегия)": "Brain Twin (Norway)",
    "Путь солнца": "Path of the sun",
    "Единая Сеть Экспедиторов (ЕСЭ)": "Unified Forwarders Network",
    "AI-анализ комментариев": "AI comment analysis",
    "Чат-бот с RAG": "Chat bot with RAG",
    "AI-обработка фото": "AI photo processing",
    "WarOnMap (стратегия)": "WarOnMap (strategy)",
    "P2P Video Chat": "P2P Video Chat",
    "Изображение мобильного приложения": "Mobile application image",
    "Изображение приложения для логистики": "Logistics application image",
    "Изображение транспортной платформы": "Transport platform image",
    "Мобильное приложение международного транспортного форума ESE-2025":
      "Mobile application for international transport forum ESE-2025",
    "Приложение для логистики 2025": "Logistics application 2025",
    "Транспортная платформа 2025": "Transport platform 2025",
    "Наши кейсы": "Our cases",
    "Кейсы не найдены. Добавьте их в коллекцию \"Портфолио (кейсы)\".":
      "Cases not found. Add them to the \"Portfolio (cases)\" collection.",
    "Запросить коммерческое предложение": "Request a commercial proposal",
    "Экосистема здоровья, маркетплейс, приложение «HealthHub»":
      'Health ecosystem, marketplace, "HealthHub" application',
    "Международный транспортный форум ESE ASIA-2025":
      "International transport forum ESE ASIA-2025",
    "Автоматизированная система мониторинга «Croft»":
      'Automated monitoring system "Croft"',
    "Ресторан «Ногай»": 'Restaurant "Nogai"',
    "Альметьевский молочный комбинат": "Almetyevsk dairy plant",
    "ДИЗАЙН": "DESIGN",
    "ВЫСТАВКА": "EXHIBITION",
    "САЙт": "WEBSITE",
    "БЛОКЧЕЙН": "BLOCKCHAIN",
  };

  return fallbackTranslations[text] || text;
};

export const clearTranslationCache = () => {
  translationCache = {};
};

const TRANSLATION_APIS = [
  {
    name: "lingva",
    url: (text) => `https://lingva.ml/api/v1/ru/en/${encodeURIComponent(text)}`,
    parse: (data) => data.translation,
  },
  {
    name: "mymemory",
    url: (text) =>
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=ru|en`,
    parse: (data) => data.responseData.translatedText,
  },
  {
    name: "fallback",
    url: () => null,
    parse: () => null,
  },
];

export const useTranslate = (text) => {
  const [translated, setTranslated] = useState(text);
  const { language } = useLanguage();

  useEffect(() => {
    clearTranslationCache();
  }, [language]);

  useEffect(() => {
    const translate = async () => {
      if (!text || typeof text !== "string" || language === "Ru") {
        setTranslated(text);
        return;
      }

      const cacheKey = `${text}-${language}`;

      if (translationCache[cacheKey]) {
        setTranslated(translationCache[cacheKey]);
        return;
      }

      const fallback = getFallbackTranslation(text);
      setTranslated(fallback);
      translationCache[cacheKey] = fallback;

      for (const api of TRANSLATION_APIS) {
        if (api.name === "fallback") break;

        try {
          const res = await fetch(api.url(text));
          if (!res.ok) continue;

          const data = await res.json();
          const result = api.parse(data);

          if (
            result &&
            result !== text &&
            result.toLowerCase() !== text.toLowerCase()
          ) {
            setTranslated(result);
            translationCache[cacheKey] = result;
            break;
          }
        } catch {
          continue;
        }
      }
    };

    translate();
  }, [text, language]);

  return translated;
};

export const useTranslatedArray = (texts = []) => {
    const [translatedArray, setTranslatedArray] = useState(texts);
    const { language } = useLanguage();

    useEffect(() => {
        const translateArray = async () => {
            if (!texts || texts.length === 0 || language === "Ru") {
                setTranslatedArray(texts);
                return;
            }

            const newTranslations = [];
            
            if (!Array.isArray(texts)) {
                setTranslatedArray([]);
                return;
            }

            for (const text of texts) {
                if (typeof text !== "string") {
                    newTranslations.push(text);
                    continue;
                }
                
                const cacheKey = `${text}-${language}`;
                let translated = translationCache[cacheKey];

                if (!translated) {
                    translated = getFallbackTranslation(text);
                    translationCache[cacheKey] = translated;

                    for (const api of TRANSLATION_APIS) {
                        if (api.name === "fallback") break;
                        try {
                            const res = await fetch(api.url(text));
                            if (!res.ok) continue;
                            const data = await res.json();
                            const result = api.parse(data);

                            if (result && result !== text && result.toLowerCase() !== text.toLowerCase()) {
                                translated = result;
                                translationCache[cacheKey] = result;
                                break;
                            }
                        } catch {
                            continue;
                        }
                    }
                }
                newTranslations.push(translated);
            }
            
            setTranslatedArray(newTranslations);
        };

        translateArray();
    }, [texts, language]);

    return translatedArray;
};

export const useTranslatedCase = (caseItem) => {
    const safeCaseItem = caseItem || {};

    const translatedTitle = useTranslate(safeCaseItem.title || '');
    
    const imageAltSource = safeCaseItem.image?.alt || safeCaseItem.title || '';
    const translatedImageAlt = useTranslate(imageAltSource);

    const translatedThemes = useTranslatedArray(safeCaseItem.themes || []);

    return {
        ...safeCaseItem,
        title: translatedTitle,
        themes: translatedThemes,
        image: {
            ...safeCaseItem.image,
            alt: translatedImageAlt,
        }
    };
};