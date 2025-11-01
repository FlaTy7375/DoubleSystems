"use client"

import { StyledCase1 } from "./style"
import Link from "next/link"
import BreadCrumbs from "@/components/ui/bread-crumbs/bread-crumbs"
import CaseAbout from "./blocks/about/about"
import Goals from "./blocks/goals/goals"
import Buisness from "./blocks/buisness/buisness"
import Portfolio from "../portfolio/portfolio"
import Image from "next/image"
import TabletAndPhone from "@/assets/images/tablet-and-phone.png"
import Person from "@/assets/images/Alex.png"

export default function StaticCase1() {
    // Функция для плавной прокрутки к якорю
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <StyledCase1>
            <div className="link-container">
                <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="cases-link" href="/cases">\&nbsp;Кейсы&nbsp;</Link>
                <Link className="cases-link active" href="/cases/case1">\&nbsp;Экосистема здоровья</Link>
            </div>
            <div className="case-wrapper">
                <h1 className="case-title">Кейс: HealthHub — проектирование и разработка единой экосистемы здоровья</h1>
                
                {/* Hero Section с BreadCrumbs сразу после */}
                <div id="hero" className="case-container">
                    <ul className="stamps-list for-mobile">
                        <li className="stamp">ПРИЛОЖЕНИЕ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ЭКОСИСТЕМА ЗДОРОВЬЯ</li>
                    </ul>
                    <h2 className="container-title">
                        Проектирование и разработка единой экосистемы здоровья
                    </h2>
                    <h2 className="container-title for-mobile">
                        Экосистема здоровья
                    </h2>
                    <ul className="stamps-list">
                        <li className="stamp">ПРИЛОЖЕНИЕ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ЭКОСИСТЕМА ЗДОРОВЬЯ</li>
                    </ul>
                    <p className="container-description">Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                    <Image className="container-image" src={TabletAndPhone} alt="Изображение планшета и телефона" width={322} height={231}></Image>
                    <button className="container-button">Рассказываем о проекте</button>
                </div>
                <BreadCrumbs></BreadCrumbs>
                
                {/* Остальные секции с правильными ID */}
                <div id="about-project">
                    <CaseAbout onAnchorClick={scrollToSection} />
                </div>
                
                <div id="goals">
                    <Goals />
                </div>

                <div id="strategy">
                    <Goals 
                        strategyTitle="Наша стратегия базируется на трех китах:"
                        processTitle="Процесс реализации"
                        processDescription="HealthHub — это не просто еще одно приложение для здоровья. Это проектируемая цифровая экосистема, которая объединит пациентов, врачей и поставщиков медицинских товаров в едином, интуитивно понятном пространстве. Мы разрабатываем кроссплатформенное мобильное приложение, которое станет универсальным инструментом для управления здоровьем, профессионального роста специалистов и развития бизнеса нашего клиента. Проект призван превратить сложную идею «все о здоровье в одном месте» в успешный коммерческий продукт с высоким потенциалом вовлеченности пользователей и четкими бизнес-целями."
                        imageDescription="Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий."
                    />
                </div>
                
                <div id="business">
                    <Buisness />
                </div>

                <div id="conclusion">
                    <Goals 
                        showAuthor={true}
                        imageDescription="Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий."
                    />
                </div>
            </div>
            
            {/* Секция портфолио */}
            <Portfolio className="case-portfolio"></Portfolio>
        </StyledCase1>
    )
}