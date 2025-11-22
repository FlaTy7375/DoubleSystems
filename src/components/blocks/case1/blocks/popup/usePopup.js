import { useState, useCallback } from 'react';

/**
 * Хук для управления состоянием Pop-up окна.
 * @returns {{
 * isPopupOpen: boolean,
 * popupTargetElement: HTMLElement | null,
 * handleOpenPopup: (e: React.MouseEvent, targetElement: HTMLElement) => void,
 * handleClosePopup: () => void
 * }}
 */
export const usePopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupTargetElement, setPopupTargetElement] = useState(null);

    const handleOpenPopup = useCallback((e, targetElement) => {
        // Предотвращаем стандартное действие (например, переход по ссылке)
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        setPopupTargetElement(targetElement); // Сохраняем ссылку на элемент-триггер
        setIsPopupOpen(true);
    }, []);

    const handleClosePopup = useCallback(() => {
        setIsPopupOpen(false);
        setPopupTargetElement(null);
    }, []);

    return {
        isPopupOpen,
        popupTargetElement,
        handleOpenPopup,
        handleClosePopup
    };
};