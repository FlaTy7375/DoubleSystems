// ContactPopup.jsx (ОБНОВЛЕННЫЙ с логикой прокрутки и позиционирования)

'use client';

import { useState, useEffect, useRef } from 'react';
import ContactPopupFormContent from './ContactPopupFormContent';

export default function ContactPopup({ isOpen, onClose, targetElement }) {
    const [popupStyle, setPopupStyle] = useState({});
    const popupRef = useRef(null);

    // Логика позиционирования и прокрутки
    useEffect(() => {
        if (!isOpen || !targetElement) {
            setPopupStyle({});
            return;
        }

        const calculatePosition = () => {
            const buttonRect = targetElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Если Pop-up еще не отрендерен, используем минимальные значения
            const popupEl = popupRef.current;
            const popupWidth = popupEl ? popupEl.offsetWidth : 350;
            const popupHeight = popupEl ? popupEl.offsetHeight : 450; // Приблизительная высота формы
            
            const OFFSET = 10; // Отступ от кнопки
            const MAX_HEIGHT_VP = viewportHeight - 40; // Максимальная высота Pop-up (с учетом небольших полей сверху/снизу)

            let style = {
                position: 'fixed',
                top: buttonRect.top + buttonRect.height + OFFSET + 'px',
                left: buttonRect.left + 'px',
                transform: 'none',
                // По умолчанию убираем максимальную высоту, если она не нужна
                maxHeight: 'none', 
                overflowY: 'visible',
            };

            // 1. Коррекция по горизонтали (уже было)
            if (buttonRect.left + popupWidth > window.innerWidth) {
                style.left = 'auto';
                style.right = '20px';
            }

            // 2. Коррекция по вертикали: Если Pop-up не помещается снизу
            const bottomSpace = viewportHeight - (buttonRect.top + buttonRect.height + OFFSET);
            
            if (popupHeight > bottomSpace) {
                // Если не помещается, ограничиваем высоту и делаем прокручиваемым
                style.maxHeight = Math.min(bottomSpace - 10, MAX_HEIGHT_VP) + 'px'; // 10px отступ снизу
                style.overflowY = 'auto';
            }

            // 3. Если Pop-up не помещается даже при прокрутке и выходит за верхний край
            if (buttonRect.top < 20) {
                 // В этом случае, если кнопка находится слишком высоко,
                 // позиционируем Pop-up сверху, но ограничиваем его высоту
                 style.top = '20px';
                 style.maxHeight = viewportHeight - 40 + 'px';
                 style.overflowY = 'auto';
            }


            setPopupStyle(style);
        };
        
        // Добавляем небольшой таймаут, чтобы Pop-up успел отрендериться,
        // получить высоту и только потом корректно позиционироваться
        const timer = setTimeout(calculatePosition, 50);

        const handleResize = () => calculatePosition();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize, { passive: true }); // Повторная проверка при прокрутке

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
        
    }, [isOpen, targetElement]);


    if (!isOpen) {
        return null;
    }

    return (
        <>
            {/* Закрытие при клике по пустой области (оверлею) - уже реализовано */}
            <div className="popup-overlay" onClick={onClose} />
            
            <div 
                ref={popupRef}
                className="popup-container" 
                style={popupStyle} 
                onClick={(e) => e.stopPropagation()} 
            >
                {/* ContactPopupFormContent уже имеет padding внутри себя */}
                <ContactPopupFormContent onClose={onClose} /> 
            </div>
        </>
    );
}