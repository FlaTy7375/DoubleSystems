"use client"

import { StyledCase1 } from "./style"
import Link from "next/link"
import CaseAbout from "./blocks/about/about"
import Goals from "./blocks/goals/goals"
import Buisness from "./blocks/buisness/buisness"
import Portfolio from "../portfolio/portfolio"
import Image from "next/image"
import TabletAndPhone from "@/assets/images/tablet-and-phone.png"
import { useTranslate } from "@/components/translate/useTranslation"
import { usePopup } from '../case1/blocks/popup/usePopup';
import ContactPopup from '../case1/blocks/popup/ContactPopup';
import { GlobalPopupStyles } from '../case1/blocks/popup/GlobalPopupStyles';

export default function StaticCase1() {
    const { 
        isPopupOpen, 
        popupTargetElement, 
        handleOpenPopup, 
        handleClosePopup 
    } = usePopup();

    // Эта функция обеспечивает плавный скролл к нужному ID
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const casesLink = useTranslate('Портфолио')
    const healthEcosystem = useTranslate('Экосистема здоровья')
    const caseTitle = useTranslate('Кейс: HealthHub — проектирование и разработка единой экосистемы здоровья')
    
    const stamp1 = useTranslate('ПРИЛОЖЕНИЕ')
    const stamp2 = useTranslate('ПОРТАЛ')
    const stamp3 = useTranslate('ЭКОСИСТЕМА ЗДОРОВЬЯ')
    
    const containerTitle = useTranslate('Проектирование и разработка единой экосистемы здоровья')
    const containerTitleMobile = useTranslate('Экосистема здоровья')
    const containerDescription = useTranslate('Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.')
    const containerButton = useTranslate('Рассказываем о проекте')

    return(
        <StyledCase1>
            <GlobalPopupStyles /> 

            <div className="link-container">
                <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="cases-link" href="/portfolio">\&nbsp;{casesLink}&nbsp;</Link>
                <Link className="cases-link active" href="/portfolio/case1">\&nbsp;{healthEcosystem}</Link>
            </div>
            <div className="case-wrapper">
                <h1 className="case-title">{caseTitle}</h1>
                
                <div id="hero" className="case-container">
                    <ul className="stamps-list for-mobile">
                        <li className="stamp">{stamp1}</li>
                        <li className="stamp">{stamp2}</li>
                        <li className="stamp">{stamp3}</li>
                    </ul>
                    <h2 className="container-title">
                        {containerTitle}
                    </h2>
                    <h2 className="container-title for-mobile">
                        {containerTitleMobile}
                    </h2>
                    <ul className="stamps-list">
                        <li className="stamp">{stamp1}</li>
                        <li className="stamp">{stamp2}</li>
                        <li className="stamp">{stamp2}</li>
                        <li className="stamp">{stamp2}</li>
                        <li className="stamp">{stamp3}</li>
                    </ul>
                    <p className="container-description">{containerDescription}</p>
                    <Image className="container-image" src={TabletAndPhone} alt="Изображение планшета и телефона" width={322} height={231}></Image>
                    
                    {/* 👈 Заменяем button на Link и добавляем обработчик скролла */}
                    <Link 
                        className="container-button" 
                        href="#about-project" // Это обеспечит работу ссылки, даже если JS отключен
                        onClick={(e) => {
                            e.preventDefault(); // Отменяем стандартное поведение Link
                            scrollToSection('about-project'); // Вызываем плавный скролл
                        }}
                    >
                        {containerButton}
                    </Link>
                </div>
                
                <div id="about-project">
                    <CaseAbout onAnchorClick={scrollToSection} />
                </div>
                
                <div id="goals">
                    <Goals onWriteButtonClick={handleOpenPopup} />
                </div>

                <div id="strategy">
                    <Goals 
                        strategyTitle={useTranslate('Наша стратегия базируется на трех китах:')}
                        processTitle={useTranslate('Процесс реализации')}
                        processDescription={useTranslate('HealthHub — это не просто еще одно приложение для здоровья. Это проектируемая цифровая экосистема, которая объединит пациентов, врачей и поставщиков медицинских товаров в едином, интуитивно понятном пространстве. Мы разрабатываем кроссплатформенное мобильное приложение, которое станет универсальным инструментом для управления здоровьем, профессионального роста специалистов и развития бизнеса нашего клиента. Проект призван превратить сложную идею «все о здоровье в одном месте» в успешный коммерческий продукт с высоким потенциалом вовлеченности пользователей и четкими бизнес-целями.')}
                        imageDescription={useTranslate('Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.')}
                        onWriteButtonClick={handleOpenPopup} 
                    />
                </div>
                
                <div id="business">
                    <Buisness />
                </div>

                <div id="conclusion">
                    <Goals 
                        showAuthor={true}
                        imageDescription={useTranslate('Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.')}
                        onWriteButtonClick={handleOpenPopup} 
                    />
                </div>
            </div>
            
            <ContactPopup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                targetElement={popupTargetElement}
            />

            <Portfolio className="case-portfolio"></Portfolio>
        </StyledCase1>
    )
}