"use client"

import { useState } from "react"
import { StyledContactsForm } from "./style"
import Link from "next/link"
import Image from "next/image"
import WhatsApp from "@/assets/images/svg/whatsapp-footer.svg"
import PhoneLogo from "@/assets/images/svg/call-footer.svg"
import Telegram from "@/assets/images/svg/tg-footer.svg"
import Vk from "@/assets/images/svg/vk-footer.svg"
import Themes from "../portfolio/themes"

export default function ContactsForm() {

    const [activeId, setActiveId] = useState(1)

    const handleActiveItem = (id) => {
        setActiveId(id)
    }

    return(
        <StyledContactsForm>
            <div className="link-container">
                <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="cases-link active" href="/contacts">\&nbsp;Контакты&nbsp;</Link>
            </div>
            <h1 className="contacts-title">Контакты</h1>
            <div className="contacts-wrapper">
                <ul className="contacts-list">
                    <li className="contacts-element">
                        <p className="contacts-info">Телефон</p>
                        <p className="contacts-info bold">+7 987 654 32 10</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">Режим работы</p>
                        <p className="contacts-info bold">в будние дни с 9:00 до 18:00</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">Отдел продаж</p>
                        <p className="contacts-info bold">sales@double.systems</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">ИНН</p>
                        <p className="contacts-info bold">1200007037</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">Общие вопросы</p>
                        <p className="contacts-info bold">info@double.systems</p>
                    </li>
                    <li className="contacts-element">
                        <p className="contacts-info">Юридический и фактический адрес:</p>
                        <p className="contacts-info bold">респ. Марий Эл, м. р-н Медведевский, пгт. Медведево, ул. Мира, д. 22, кв. 44</p>
                    </li>
                </ul>
                <form className="contacts-form">
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
                    <div className="input-container">
                        <input className="contacts-checkbox" type="checkbox" name="agreement" id="agreement"></input>
                        <label className="input-description" htmlFor="agreement">Нажимая “Свяжитесь со мной” вы даёте согласие на обработку персональных данных</label>
                    </div>
                    <button className="form-button">Свяжитесь со мной</button>
                </form>
            </div>
            <h1 className="tegs-title">Теги:</h1>
            <Themes></Themes>
        </StyledContactsForm>
    )
}