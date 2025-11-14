// components/layout/footer/footer.jsx
'use client';

import { useState, useEffect } from 'react';
import { StyledFooter } from './style';
import Image from 'next/image';
import HeaderLogo from '@/assets/images/header-logo.svg';
import WhatsApp from '@/assets/images/svg/whatsapp-footer.svg';
import PhoneLogo from '@/assets/images/svg/call-footer.svg';
import Telegram from '@/assets/images/svg/tg-footer.svg';
import Vk from '@/assets/images/svg/vk-footer.svg';
import { useTranslate } from '@/components/translate/useTranslation';

export default function Footer({ faq = {} }) {

  const [activeId, setActiveId] = useState(1)

  const handleActiveItem = (id) => {
    setActiveId(id)
  }
  
  // 1. Дефолтные данные для Fallback
  const defaultFaqItems = [
    { id: 0, question: 'High Quality', answer: 'We are a leading firm in providing quality and value to our customers...' },
    { id: 1, question: 'Good Support', answer: 'We are a leading firm in providing quality and value to our customers...' },
    { id: 2, question: 'Individual Approach', answer: 'We are a leading firm in providing quality and value to our customers...' },
  ];
  const defaultTitle = 'Часто встречающиеся вопросы';
  const defaultDescription = 'Постарались ответить на основные';

  // 2. ✅ Безопасное извлечение данных: если Payload пуст, используем дефолты
  const faqTitle = faq.title || defaultTitle;
  const faqDescription = faq.description || defaultDescription;
  
  // Если faq.items имеет данные, используем их; иначе — дефолтный список.
  const finalFaqList = (faq.items && faq.items.length > 0) ? faq.items : defaultFaqItems;
  
  // 3. Инициализация состояния (на основе длины финального списка)
  const [activeItems, setActiveItems] = useState(new Array(finalFaqList.length).fill(false)); 

  // 4. Синхронизация состояния activeItems
  useEffect(() => {
    const itemCount = finalFaqList.length; 
    if (activeItems.length !== itemCount) {
      setActiveItems(new Array(itemCount).fill(false));
    }
  }, [finalFaqList.length]);

  const handleClass = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };

  // Переводим все тексты
  const translatedFaqTitle = useTranslate(faqTitle);
  const translatedFaqDescription = useTranslate(faqDescription);
  const translatedInfoDescription = useTranslate('Наши проекты говорят сами за себя. Мы работаем с различными отраслями, предоставляя решения для бизнеса и пользователей.');
  const translatedFormTitle = useTranslate('Закажите бесплатную консультацию');
  const translatedContactLabel = useTranslate('Как с Вами связаться?');
  const translatedNameLabel = useTranslate('Имя');
  const translatedCommentLabel = useTranslate('Комментарий');
  const translatedButtonText = useTranslate('Свяжитесь со мной');
  const translatedFormDescription = useTranslate('Это совершенно бесплатно! Мы не будем навязывать свои услуги.');
  const translatedDecorText = useTranslate('Double Systems');
  const translatedEmail = useTranslate('Email:');
  const translatedTelegram = useTranslate('Telegram:');
  const translatedIp = useTranslate('ИП Егошин А.В.');
  const translatedOgrn = useTranslate('ОГРНИП 315121500002541');
  const translatedWhatsapp = useTranslate('WhatsApp');
  const translatedPhone = useTranslate('Phone');
  const translatedTelegramBtn = useTranslate('Telegram');
  const translatedVk = useTranslate('VK');

  // Переводим FAQ вопросы и ответы
  const translatedFaqList = finalFaqList.map(item => ({
    ...item,
    question: useTranslate(item.question),
    answer: useTranslate(typeof item.answer === 'string' 
      ? item.answer 
      : item.answer?.root?.children
          ?.flatMap(child => child.children?.map(c => c.text) || [])
          .join('') || '')
  }));

  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-wrapper">
          <h1 className="footer-title">{translatedFaqTitle}</h1>
          <p className="footer-description">{translatedFaqDescription}</p>
          <ul className="accordeon-list">
            {/* ✅ Используем финальный список, который всегда имеет минимум 3 элемента */}
            {translatedFaqList.map((item, index) => (
              <li
                key={item.id || index}
                className={`accordeon-item ${activeItems[index] ? 'active' : ''}`}
                onClick={() => handleClass(index)}
              >
                <h2 className="accordeon-title">{item.question}</h2>
                <div className="accordeon-content">
                  <p
                    className="accordeon-description"
                    dangerouslySetInnerHTML={{
                      __html: item.answer
                    }}
                  />
                </div>
                <button className={`decoration ${activeItems[index] ? 'active' : ''}`}></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-container dark">
        <div className="form-wrapper">
          <div className="footer-info">
            <p className="info-description">
              {translatedInfoDescription}
            </p>
            <p className="info-contacts">
              {translatedEmail} <span className="orange">hi@double.systems</span> /
            </p>
            <p className="info-contacts tg">
              {translatedTelegram} @<span className="orange">doublesystems</span> /
            </p>
            <p className="info">{translatedIp}</p>
            <p className="info">{translatedOgrn}</p>
            <Image className="footer-logo" src={HeaderLogo} alt="Логотип компании" width={205} height={87} />
          </div>
          <form className="footer-form">
            <h2 className="form-title">{translatedFormTitle}</h2>
            <ul className="form-list">
              <li className="list-item">
                <label className="field-label">{translatedContactLabel}</label>
                <div className="buttons-container">
                  <button className={`socials-button ${activeId === 1 ? "active" : ""}`} onClick={() => handleActiveItem(1)} type="button">
                    <Image className="social-image" src={WhatsApp} alt="Иконка whats app" width={18} height={18} />
                    {translatedWhatsapp}
                  </button>
                  <button className={`socials-button ${activeId === 2 ? "active" : ""}`} onClick={() => handleActiveItem(2)} type="button">
                    <Image className="social-image" src={PhoneLogo} alt="Иконка phone" width={18} height={18} />
                    {translatedPhone}
                  </button>
                  <button className={`socials-button ${activeId === 3 ? "active" : ""}`} onClick={() => handleActiveItem(3)} type="button">
                    <Image className="social-image" src={Telegram} alt="Иконка telegram" width={18} height={18} />
                    {translatedTelegramBtn}
                  </button>
                  <button className={`socials-button ${activeId === 4 ? "active" : ""}`} onClick={() => handleActiveItem(4)} type="button">
                    <Image className="social-image" src={Vk} alt="Иконка vk" width={18} height={18} />
                    {translatedVk}
                  </button>
                </div>
                <input className="form-field" type="phone" placeholder="+1 (000) 000-0000" />
              </li>
              <li className="list-item">
                <label className="field-label">{translatedNameLabel}</label>
                <input className="form-field" type="text" placeholder="Как к Вам обращаться?" />
              </li>
              <li className="list-item">
                <label className="field-label">{translatedCommentLabel}</label>
                <input className="form-field" type="text" />
              </li>
            </ul>
            <button className="form-button">{translatedButtonText}</button>
            <p className="form-description">{translatedFormDescription}</p>
          </form>
          <p className="decor-text">{translatedDecorText}</p>
        </div>
      </div>
    </StyledFooter>
  );
}