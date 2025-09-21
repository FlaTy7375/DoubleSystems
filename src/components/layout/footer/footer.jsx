"use client"

import { useState } from "react"
import { StyledFooter } from "./style"
import Image from "next/image"
import HeaderLogo from '@/assets/images/header-logo.svg'
import WhatsApp from "@/assets/images/svg/whatsapp-footer.svg"
import PhoneLogo from "@/assets/images/svg/call-footer.svg"
import Telegram from "@/assets/images/svg/tg-footer.svg"
import Vk from "@/assets/images/svg/vk-footer.svg"

export default function Footer() {

    const [activeItems, setActiveItems] = useState([false, false, false]);

    const handleClass = (index) => {
        const newActiveItems = [...activeItems];
        newActiveItems[index] = !newActiveItems[index];
        setActiveItems(newActiveItems);
    }

    return (
        <StyledFooter>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <h1 className="footer-title">Часто встречающиеся вопросы</h1>
                    <p className="footer-description">Постарались ответить на основные</p>
                    <ul className="accordeon-list">
                        <li className={`accordeon-item ${activeItems[0] ? "active" : ""}`} onClick={() => handleClass(0)}>
                            <h2 className="accordeon-title">High Quality</h2>
                            <div className="accordeon-content">
                                <p className="accordeon-description">
                                    We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience. We love what we do.
                                </p>
                            </div>
                            <button className={`decoration ${activeItems[0] ? "active" : ""}`}></button>
                        </li>
                        <li className={`accordeon-item ${activeItems[1] ? "active" : ""}`} onClick={() => handleClass(1)}>
                            <h2 className="accordeon-title">Good Support</h2>
                            <div className="accordeon-content">
                                <p className="accordeon-description">
                                    We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience. We love what we do.
                                </p>
                            </div>
                            <button className={`decoration ${activeItems[1] ? "active" : ""}`}></button>
                        </li>
                        <li className={`accordeon-item ${activeItems[2] ? "active" : ""}`} onClick={() => handleClass(2)}>
                            <h2 className="accordeon-title">Individual Approach</h2>
                            <div className="accordeon-content">
                                <p className="accordeon-description">
                                    We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience. We love what we do.
                                </p>
                            </div>
                            <button className={`decoration ${activeItems[2] ? "active" : ""}`}></button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-container dark">
                <div className="form-wrapper">
                <div className="footer-info">
                    <p className="info-description">Наши проекты говорят сами
                    за себя. Мы работаем с
                    различными отраслями,
                    предоставляя решения для
                    бизнеса и пользователей.</p>
                    <p className="info-contacts">Email: <span className="orange">hi@double.systems</span> /</p>
                    <p className="info-contacts tg">Telegram: @<span className="orange">doublesystems</span> /</p>
                    <p className="info">ИП Егошин А.В.</p>
                    <p className="info"> ОГРНИП 315121500002541</p>
                    <Image className="footer-logo" src={HeaderLogo} alt="Логотип компании" width={205} height={87}></Image>
                </div>
                <form className="footer-form">
                    <h2 className="form-title">Закажите бесплатную консультацию</h2>
                    <ul className="form-list">
                        <li className="list-item">
                            <label className="field-label">Как с Вами связаться?</label>
                            <div className="buttons-container">
                                <button className="socials-button active">
                                    <Image className="social-image" src={WhatsApp} alt="Иконка whats app" width={18} height={18}></Image>
                                    WhatsApp</button>
                                <button className="socials-button">
                                    <Image className="social-image" src={PhoneLogo} alt="Иконка phone" width={18} height={18}></Image>
                                    Phone</button>
                                <button className="socials-button">
                                    <Image className="social-image" src={Telegram} alt="Иконка telegram" width={18} height={18}></Image>
                                    Telegram</button>
                                <button className="socials-button">
                                    <Image className="social-image" src={Vk} alt="Иконка vk" width={18} height={18}></Image>
                                    VK</button>
                            </div>
                            <input className="form-field" type="phone" placeholder="+1 (000) 000-0000"></input>
                        </li>
                        <li className="list-item">
                            <label className="field-label">Имя</label>
                            <input className="form-field" type="text" placeholder="Как к Вам обращаться?"></input>
                        </li>
                        <li className="list-item">
                            <label className="field-label">Комментарий</label>
                            <input className="form-field" type="text"></input>
                        </li>
                    </ul>
                    <button className="form-button">Свяжитесь со мной</button>
                    <p className="form-description">Это совершенно бесплатно! Мы не будем навязывать свои услуги.</p>
                </form>
                <p className="decor-text">Double Systems</p>
                </div>
            </div>
        </StyledFooter>
    )
}