"use client";

import Image from 'next/image';
import { StyledWebSolutions } from "./style"
import PhoneAndTablet from '@/assets/images/tablet-and-phone.png'
import BreadCrumbs from '@/components/ui/bread-crumbs/bread-crumbs';

export default function WebSolutions() {
    return (
        <StyledWebSolutions>
            <h1 className="solutions-title">Web-решения, Мобильные приложения, Искусственный интеллект,
            Видеосвязь, Безопасные коммуникации</h1>
            <div className="solutions-container">
                <ul className="stamps-list for-mobile">
                    <li className="stamp">ПРИЛОЖЕНИЕ</li>
                    <li className="stamp">ПОРТАЛ</li>
                    <li className="stamp">ЭКОСИСТЕМА ЗДОРОВЬЯ</li>
                </ul>
                <h2 className="container-title for-pc">
                    Кейс: HealthHub — проектирование и разработка единой экосистемы здоровья
                </h2>
                <h2 className="container-title for-mobile">Экосистема здоровья</h2>
                <ul className="stamps-list for-pc">
                    <li className="stamp">ПРИЛОЖЕНИЕ</li>
                    <li className="stamp">ПОРТАЛ</li>
                    <li className="stamp">ПОРТАЛ</li>
                    <li className="stamp">ПОРТАЛ</li>
                    <li className="stamp">ЭКОСИСТЕМА ЗДОРОВЬЯ</li>
                </ul>
                <p className="container-description">Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                <Image className="container-image" src={PhoneAndTablet} alt='Изображение планшета и телефона' width={912} height={666}></Image>
                <button className="container-button">Рассказываем о проекте</button>
            </div>
            <BreadCrumbs></BreadCrumbs>
        </StyledWebSolutions>
    )
}