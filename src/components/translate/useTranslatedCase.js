// src/components/translate/useTranslatedCase.js
import { useTranslate, useTranslatedArray } from './useTranslation'; // Предполагаем, что useTranslation существует

/**
 * Хук для перевода всех текстовых полей ОДНОГО объекта кейса.
 * Это стабилизирует вызовы хуков, позволяя использовать его в циклах.
 * @param {Object} caseItem - Один объект кейса.
 * @returns {Object} Переведенный объект кейса.
 */
export const useTranslatedCase = (caseItem) => {
    const safeCaseItem = caseItem || {};

    // 1. Отдельные строковые поля
    const translatedTitle = useTranslate(safeCaseItem.title || '');
    
    // 2. Изображение
    const imageAltSource = safeCaseItem.image?.alt || safeCaseItem.title || '';
    const translatedImageAlt = useTranslate(imageAltSource);

    // 3. Массив themes (используем стабилизированный хук для массива)
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