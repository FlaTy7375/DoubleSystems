'use client'

import { useState } from "react"
import { StyledContactsForm } from "./style"
import Link from "next/link"
import Image from "next/image"
import WhatsApp from "@/assets/images/svg/whatsapp-footer.svg"
import PhoneLogo from "@/assets/images/svg/call-footer.svg"
import Telegram from "@/assets/images/svg/tg-footer.svg"
import Vk from "@/assets/images/svg/vk-footer.svg"
import Themes from "../portfolio/themes"
import { useTranslate } from "@/components/translate/useTranslation"
import ModalMessage from "@/components/layout/footer/formMessage"

const CONTACT_METHODS = {
    1: 'WhatsApp',
    2: 'Phone',
    3: 'Telegram',
    4: 'VK',
};

export default function ContactsForm() {

    const [activeId, setActiveId] = useState(1)
    const [formData, setFormData] = useState({
        phone: '',
        name: '',
        comment: '',
        agreement: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleActiveItem = (id) => {
        setActiveId(id)
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const breadcrumbHome = useTranslate('DoubleSystems')
    const breadcrumbContacts = useTranslate('Контакты')
    const contactsTitle = useTranslate('Контакты')
    const phoneLabel = useTranslate('Телефон')
    const workHoursLabel = useTranslate('Режим работы')
    const workHoursText = useTranslate('в будние дни с 9:00 до 18:00')
    const salesLabel = useTranslate('Отдел продаж')
    const innLabel = useTranslate('ИНН')
    const generalQuestionsLabel = useTranslate('Общие вопросы')
    const addressLabel = useTranslate('Юридический и фактический адрес:')
    const addressText = useTranslate('респ. Марий Эл, м. р-н Медведевский, пгт. Медведево, ул. Мира, д. 22, кв. 44')
    
    const formTitle = useTranslate('Закажите бесплатную консультацию')
    const contactLabel = useTranslate('Как с Вами связаться?')
    const nameLabel = useTranslate('Имя')
    const commentLabel = useTranslate('Комментарий')
    const whatsappText = useTranslate('WhatsApp')
    const phoneText = useTranslate('Phone')
    const telegramText = useTranslate('Telegram')
    const vkText = useTranslate('VK')
    const phonePlaceholder = useTranslate('+1 (000) 000-0000')
    const namePlaceholder = useTranslate('Как к Вам обращаться?')
    
    const agreementText = useTranslate('Нажимая "Свяжитесь со мной" вы даёте согласие на обработку персональных данных')
    const buttonText = useTranslate('Свяжитесь со мной')
    
    const tagsTitle = useTranslate('Теги:')

    const msgErrorRequired = useTranslate("Пожалуйста, заполните имя, контактные данные и примите соглашение.");
    const msgSubmitting = useTranslate("Отправка...");
    const msgSuccess = useTranslate("Заявка успешно отправлена! Скоро свяжемся.");
    const msgErrorAPI = useTranslate("Ошибка при отправке заявки. Попробуйте позже.");
    const msgErrorNetwork = useTranslate("Сетевая ошибка. Проверьте соединение.");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (!formData.name || !formData.phone || !formData.agreement) { 
            setMessage(msgErrorRequired); 
            return;
        }

        setIsSubmitting(true);
        setMessage(msgSubmitting); 

        const contactMethod = CONTACT_METHODS[activeId];
        
        let payloadData = {
            name: formData.name,
            email: 'no-email-contact-page@doublesystems.com', 
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
                setFormData({ phone: '', name: '', comment: '', agreement: false });
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


    return(
        <StyledContactsForm>
            <ModalMessage 
                message={message} 
                onClose={() => setMessage('')} 
                duration={5000} 
            />

            <div className="link-container">
                <Link className="cases-link" href="/">{breadcrumbHome} &nbsp;</Link>
                <Link className="cases-link active" href="/contacts">\ &nbsp;{breadcrumbContacts}</Link>
            </div>
            <h1 className="contacts-title">{breadcrumbContacts}</h1>
            <div className="contacts-wrapper">
                <ul className="contacts-list">
                    <li className="contacts-element">
                        <p className="contacts-info">{phoneLabel}</p>
                        <p className="contacts-info bold">+7 987 654 32 10</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">{workHoursLabel}</p>
                        <p className="contacts-info bold">{workHoursText}</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">{salesLabel}</p>
                        <p className="contacts-info bold">sales@double.systems</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">{innLabel}</p>
                        <p className="contacts-info bold">1200007037</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">{generalQuestionsLabel}</p>
                        <p className="contacts-info bold">info@double.systems</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">{addressLabel}</p>
                        <p className="contacts-info bold">{addressText}</p>
                    </li>
                </ul>
                <form className="contacts-form" onSubmit={handleSubmit}>
                    <h2 className="form-title">{formTitle}</h2>
                    <ul className="form-list">
                        <li className="list-item">
                            <label className="field-label">{contactLabel}</label>
                                <div className="buttons-container">
                                    <button className={`socials-button ${activeId === 1 ? "active" : ""}`} onClick={() => handleActiveItem(1)} type="button">
                                    <Image className="social-image" src={WhatsApp} alt="Иконка whats app" width={18} height={18} />
                                    {whatsappText}
                                    </button>
                                    <button className={`socials-button ${activeId === 2 ? "active" : ""}`} onClick={() => handleActiveItem(2)} type="button">
                                    <Image className="social-image" src={PhoneLogo} alt="Иконка phone" width={18} height={18} />
                                    {phoneText}
                                    </button>
                                    <button className={`socials-button ${activeId === 3 ? "active" : ""}`} onClick={() => handleActiveItem(3)} type="button">
                                    <Image className="social-image" src={Telegram} alt="Иконка telegram" width={18} height={18} />
                                    {telegramText}
                                    </button>
                                    <button className={`socials-button ${activeId === 4 ? "active" : ""}`} onClick={() => handleActiveItem(4)} type="button">
                                    <Image className="social-image" src={Vk} alt="Иконка vk" width={18} height={18} />
                                    {vkText}
                                    </button>
                                </div>
                            <input 
                                className="form-field" 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={phonePlaceholder}
                            />
                        </li>
                        <li className="list-item">
                            <label className="field-label">{nameLabel}</label>
                            <input 
                                className="form-field" 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={namePlaceholder}
                            />
                        </li>
                        <li className="list-item">
                            <label className="field-label">{commentLabel}</label>
                            <input 
                                className="form-field" 
                                type="text"
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                            />
                        </li>
                    </ul>
                    <div className="input-container">
                        <input 
                            className="contacts-checkbox" 
                            type="checkbox" 
                            name="agreement" 
                            id="agreement"
                            checked={formData.agreement}
                            onChange={handleInputChange}
                        />
                        <label className="input-description" htmlFor="agreement">{agreementText}</label>
                    </div>
                    <button className="form-button" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? msgSubmitting : buttonText}
                    </button>
                </form>
            </div>
            <h1 className="tegs-title">{tagsTitle}</h1>
            <Themes></Themes>
        </StyledContactsForm>
    )
}