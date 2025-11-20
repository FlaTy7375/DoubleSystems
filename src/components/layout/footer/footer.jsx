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
import TranslatedFaqItem from './TranslatedFaqItem';
import ModalMessage from './formMessage';

const CONTACT_METHODS = {
    1: 'WhatsApp',
    2: 'Phone',
    3: 'Telegram',
    4: 'VK',
};

export default function Footer({ faq = {} }) {
  const [activeId, setActiveId] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const defaultFaqItems = [
    { id: 0, question: 'Высокое качество', answer: 'Мы являемся ведущей фирмой по предоставлению качества и ценности нашим клиентам...' },
    { id: 1, question: 'Хорошая поддержка', answer: 'Мы являемся ведущей фирмой по предоставлению качества и ценности нашим клиентам...' },
    { id: 2, question: 'Индивидуальный подход', answer: 'Мы являемся ведущей фирмой по предоставлению качества и ценности нашим клиентам...' },
  ];
  const defaultTitle = 'Часто встречающиеся вопросы';
  const defaultDescription = 'Постарались ответить на основные';

  const faqTitle = faq.title || defaultTitle;
  const faqDescription = faq.description || defaultDescription;
  
  const finalFaqList = (faq.items && faq.items.length > 0) ? faq.items : defaultFaqItems;
  
  const [activeItems, setActiveItems] = useState(new Array(finalFaqList.length).fill(false)); 

  useEffect(() => {
    const itemCount = finalFaqList.length; 
    if (activeItems.length !== itemCount) {
      setActiveItems(new Array(itemCount).fill(false));
    }
  }, [finalFaqList.length, activeItems.length]);

  const handleClass = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };
  
  const handleContactMethodChange = (id) => {
    setActiveId(id);
    setFormData(prev => ({ ...prev, phone: '' })); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
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

  const msgErrorRequired = useTranslate("Пожалуйста, заполните имя и контактные данные.");
  const msgSubmitting = useTranslate("Отправка...");
  const msgSuccess = useTranslate("Заявка успешно отправлена! Скоро свяжемся.");
  const msgErrorAPI = useTranslate("Ошибка при отправке заявки. Попробуйте позже.");
  const msgErrorNetwork = useTranslate("Сетевая ошибка. Проверьте соединение.");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.phone) { 
      setMessage(msgErrorRequired); 
      return;
    }

    setIsSubmitting(true);
    setMessage(msgSubmitting); 

    const contactMethod = CONTACT_METHODS[activeId];
    
    let payloadData = {
      name: formData.name,
      email: 'no-email@doublesystems.com', 
      message: `
        Комментарий: ${formData.comment || 'Нет комментария'}
        ---
        Контакт для связи (${contactMethod}): ${formData.phone}
      `,
    };

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadData),
      });

      if (response.ok) {
        setMessage(msgSuccess); 
        setFormData({ phone: '', name: '', comment: '' }); 
        setActiveId(1);
      } else {
        setMessage(msgErrorAPI);
      }
    } catch (error) {
      setMessage(msgErrorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <StyledFooter>
      <ModalMessage 
          message={message} 
          onClose={() => setMessage('')} 
          duration={3000} 
      />
      
      <div className="footer-container">
        <div className="footer-wrapper">
          <h1 className="footer-title">{translatedFaqTitle}</h1>
          <p className="footer-description">{translatedFaqDescription}</p>
          <ul className="accordeon-list">
            {finalFaqList.map((item, index) => (
              <TranslatedFaqItem
                key={item.id || index}
                item={item}
                index={index}
                activeItems={activeItems}
                handleClass={handleClass}
              />
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
          <form className="footer-form" onSubmit={handleSubmit}>
            <h2 className="form-title">{translatedFormTitle}</h2>
            <ul className="form-list">
              <li className="list-item">
                <label className="field-label">{translatedContactLabel}</label>
                <div className="buttons-container">
                  <button className={`socials-button ${activeId === 1 ? "active" : ""}`} onClick={() => handleContactMethodChange(1)} type="button">
                    <Image className="social-image" src={WhatsApp} alt="Иконка whats app" width={18} height={18} />
                    {translatedWhatsapp}
                  </button>
                  <button className={`socials-button ${activeId === 2 ? "active" : ""}`} onClick={() => handleContactMethodChange(2)} type="button">
                    <Image className="social-image" src={PhoneLogo} alt="Иконка phone" width={18} height={18} />
                    {translatedPhone}
                  </button>
                  <button className={`socials-button ${activeId === 3 ? "active" : ""}`} onClick={() => handleContactMethodChange(3)} type="button">
                    <Image className="social-image" src={Telegram} alt="Иконка telegram" width={18} height={18} />
                    {translatedTelegramBtn}
                  </button>
                  <button className={`socials-button ${activeId === 4 ? "active" : ""}`} onClick={() => handleContactMethodChange(4)} type="button">
                    <Image className="social-image" src={Vk} alt="Иконка vk" width={18} height={18} />
                    {translatedVk}
                  </button>
                </div>
                <input 
                  className="form-field" 
                  type="tel"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  placeholder="+1 (000) 000-0000" 
                />
              </li>
              <li className="list-item">
                <label className="field-label">{translatedNameLabel}</label>
                <input 
                  className="form-field" 
                  type="text" 
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  placeholder="Как к Вам обращаться?" 
                />
              </li>
              <li className="list-item">
                <label className="field-label">{translatedCommentLabel}</label>
                <input 
                  className="form-field" 
                  type="text" 
                  name="comment"
                  value={formData.comment || ''}
                  onChange={handleInputChange}
                />
              </li>
            </ul>

            <button className="form-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? msgSubmitting : translatedButtonText}
            </button>
            
            <p className="form-description">{translatedFormDescription}</p>
          </form>
          <p className="decor-text">{translatedDecorText}</p>
        </div>
      </div>
    </StyledFooter>
  );
}