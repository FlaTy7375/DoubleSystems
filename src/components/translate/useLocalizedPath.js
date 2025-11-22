"use client";

import { useCallback } from 'react';
import { useLanguage } from './LanguageContext';

export const useLocalizedPath = () => {
    const { language } = useLanguage(); 

    const getLocalizedPath = useCallback((href) => {
        const langCode = language.toLowerCase(); 
        const normalizedHref = href.startsWith('/') ? href : `/${href}`;

        if (normalizedHref.startsWith('http') || normalizedHref.startsWith('#')) {
            return normalizedHref;
        }

        if (normalizedHref === '/') {
            return `/${langCode}`;
        }
        
        return `/${langCode}${normalizedHref}`;
    }, [language]);

    return getLocalizedPath;
};