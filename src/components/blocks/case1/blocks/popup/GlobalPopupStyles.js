// GlobalPopupStyles.js

import { createGlobalStyle } from 'styled-components';

export const GlobalPopupStyles = createGlobalStyle`
    /* === СТИЛИ ДЛЯ ОВЕРЛЕЯ (ЗАКРЫТИЕ ПРИ КЛИКЕ) === */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98; 
        pointer-events: all;
    }

    /* === СТИЛИ ДЛЯ КОНТЕЙНЕРА POP-UP (ПОЗИЦИОНИРОВАНИЕ И ПРОКРУТКА) === */
    .popup-container {
        /* Позиционирование и overflow/max-height управляются через inline style в JS */
        position: fixed; /* Добавлено, чтобы избежать зависимости от JS */
        z-index: 99;
        background: #252525; /* Темный фон */
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        min-width: 350px;
        max-width: 90vw;
        pointer-events: auto;
        padding: 0; 
        box-sizing: border-box; /* Важно для корректного расчета max-height */
        
        /* Стили прокрутки по умолчанию (если заданы через JS) */
        scrollbar-width: thin; /* Firefox */
        scrollbar-color: #FF4600 #333; /* Firefox */
        
        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #FF4600;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track {
            background: #333;
            border-radius: 4px;
        }
    }
    
    /* === СТИЛИ ДЛЯ ВНУТРЕННЕЙ ФОРМЫ (.form-content-wrapper) === */
    .popup-container .form-content-wrapper {
        padding: 24px;
        /* Если overflowY: auto применяется к .popup-container, 
           этот внутренний padding становится частью прокручиваемой области. */
    }

    .popup-container .form-title {
        font-size: 1.5rem; 
        font-weight: 700;
        margin-bottom: 20px; 
        color: white;
    }

    /* --- Стили полей ввода и списка --- */
    .popup-container .form-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px; 
    }
    
    .popup-container .list-item {
        display: flex;
        flex-direction: column;
    }

    .popup-container .field-label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #B0B0B0; 
        margin-bottom: 6px;
    }

    .popup-container .form-field {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #444;
        border-radius: 8px; 
        background-color: #333;
        color: white;
        font-size: 1rem;
        transition: border-color 0.2s;

        &:focus {
            border-color: #FF4600; 
            outline: none;
        }
    }
    
    /* --- Стили для кнопок контакта (WhatsApp, Phone, etc.) --- */
    .popup-container .buttons-container {
        display: flex;
        gap: 8px;
        margin-bottom: 10px;
        flex-wrap: wrap; 
    }

    .popup-container .socials-button {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border: 1px solid #444;
        border-radius: 8px;
        background: transparent;
        color: white;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.2s, border-color 0.2s;

        .social-image {
            margin-right: 5px;
            filter: brightness(0.7);
        }

        &.active {
            border-color: #FF4600;
            background-color: rgba(255, 70, 0, 0.1);
            font-weight: 600;
            
            .social-image {
                filter: brightness(1.2); 
            }
        }
        
        &:hover:not(.active) {
            background-color: #333;
        }
    }

    /* --- Стили для соглашения (чекбокс) --- */
    .popup-container .input-container {
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .popup-container .contacts-checkbox {
        min-width: 18px; 
        height: 18px;
        margin-right: 10px;
        margin-top: 2px; 
    }

    .popup-container .input-description {
        font-size: 0.8rem;
        line-height: 1.3;
        color: #B0B0B0;
        cursor: pointer;
    }

    /* --- Стили для кнопки отправки --- */
    .popup-container .form-button {
        width: 100%;
        padding: 12px; 
        background-color: #FF4600;
        color: white;
        border: none;
        border-radius: 8px; 
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        
        &:disabled {
            background-color: #666;
            cursor: not-allowed;
        }
    }

    .popup-container .form-button:hover:not(:disabled) {
        background-color: #E03E00;
    }
`;