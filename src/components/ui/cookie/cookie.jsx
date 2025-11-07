"use client";

import { useState, useEffect } from 'react';
import { StyledCookie } from './style';

function Cookie() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, не соглашался ли уже пользователь
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <StyledCookie>
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="text-container">
            <h3>Внимание!</h3>
            <p>
                На сайте осуществляется обработка пользовательских данных с использованием Cookie в соответствии
                с Условиями обработки персональных данных (ссылка). Вы можете запретить сохранение Cookie в настройках своего браузера.
            </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-accept" onClick={acceptCookies}>
            Принимаю
          </button>
          <button className="cookie-decline" onClick={declineCookies} />
        </div>
      </div>
    </div>
    </StyledCookie>
  );
}

export default Cookie;