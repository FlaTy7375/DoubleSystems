'use client';

import { useState, useEffect } from 'react';
import { StyledFooter } from './style';
import Image from 'next/image';
import HeaderLogo from '@/assets/images/header-logo.svg';
import WhatsApp from '@/assets/images/svg/whatsapp-footer.svg';
import PhoneLogo from '@/assets/images/svg/call-footer.svg';
import Telegram from '@/assets/images/svg/tg-footer.svg';
import Vk from '@/assets/images/svg/vk-footer.svg';

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

  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-wrapper">
          <h1 className="footer-title">{faqTitle}</h1>
          <p className="footer-description">{faqDescription}</p>
          <ul className="accordeon-list">
            {/* ✅ Используем финальный список, который всегда имеет минимум 3 элемента */}
            {finalFaqList.map((item, index) => (
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
                      // ✅ Робастный рендеринг RichText/Lexical
                      __html: (typeof item.answer === 'string') 
                        ? item.answer // Если это дефолтная строка
                        : item.answer?.root?.children
                            ?.flatMap(child => child.children?.map(c => c.text) || [])
                            .join('') || '' // Если это объект Lexical
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
              Наши проекты говорят сами за себя. Мы работаем с различными отраслями, предоставляя решения для бизнеса и пользователей.
            </p>
            <p className="info-contacts">
              Email: <span className="orange">hi@double.systems</span> /
            </p>
            <p className="info-contacts tg">
              Telegram: @<span className="orange">doublesystems</span> /
            </p>
            <p className="info">ИП Егошин А.В.</p>
            <p className="info">ОГРНИП 315121500002541</p>
            <Image className="footer-logo" src={HeaderLogo} alt="Логотип компании" width={205} height={87} />
          </div>
          <form className="footer-form">
            <h2 className="form-title">Закажите бесплатную консультацию</h2>
            <ul className="form-list">
              <li className="list-item">
                <label className="field-label">Как с Вами связаться?</label>
                <div className="buttons-container">
                  <button className={`socials-button ${activeId === 1 ? "active" : ""}`} onClick={() => handleActiveItem(1)} type="button">
                    <Image className="social-image" src={WhatsApp} alt="Иконка whats app" width={18} height={18} />
                    WhatsApp
                  </button>
                  <button className={`socials-button ${activeId === 2 ? "active" : ""}`} onClick={() => handleActiveItem(2)} type="button">
                    <Image className="social-image" src={PhoneLogo} alt="Иконка phone" width={18} height={18} />
                    Phone
                  </button>
                  <button className={`socials-button ${activeId === 3 ? "active" : ""}`} onClick={() => handleActiveItem(3)} type="button">
                    <Image className="social-image" src={Telegram} alt="Иконка telegram" width={18} height={18} />
                    Telegram
                  </button>
                  <button className={`socials-button ${activeId === 4 ? "active" : ""}`} onClick={() => handleActiveItem(4)} type="button">
                    <Image className="social-image" src={Vk} alt="Иконка vk" width={18} height={18} />
                    VK
                  </button>
                </div>
                <input className="form-field" type="phone" placeholder="+1 (000) 000-0000" />
              </li>
              <li className="list-item">
                <label className="field-label">Имя</label>
                <input className="form-field" type="text" placeholder="Как к Вам обращаться?" />
              </li>
              <li className="list-item">
                <label className="field-label">Комментарий</label>
                <input className="form-field" type="text" />
              </li>
            </ul>
            <button className="form-button">Свяжитесь со мной</button>
            <p className="form-description">Это совершенно бесплатно! Мы не будем навязывать свои услуги.</p>
          </form>
          <p className="decor-text">Double Systems</p>
        </div>
      </div>
    </StyledFooter>
  );
}