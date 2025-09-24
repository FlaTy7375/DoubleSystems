"use client"

import { StyledCaseAbout } from "./style"
import Image from "next/image"
import TabletAndPhone from "@/assets/images/tablet-phone-about.png"
import Phone from "@/assets/images/case-about-mobile.png"
import ClientImage from "@/assets/images/client-image.png"

export default function CaseAbout() {
    return(
        <StyledCaseAbout>
            <div className="about-wrapper">
                <div className="about-project">
                    <h2 className="project-title">О проекте</h2>
                    <p className="project-description">Экосистема здоровья:<br></br> <span className="decoration">
                    веб-платформа и мобильное приложение (в разработке)</span></p>
                    <p className="project-description">Клиент:<br></br> <span className="decoration">Россия</span></p>
                    <p className="project-description">Статус:<br></br> <span className="decoration">Активная разработка</span></p>
                </div>
                <div className="about-case">
                    <h1 className="about-title">Кейс: HealthHub — создание единой экосистемы здоровья</h1>
                    <p className="about-description">HealthHub — это не просто еще одно приложение для здоровья.
                    Это проектируемая цифровая экосистема, которая объединит пациентов,
                    врачей и поставщиков медицинских товаров в едином, интуитивно понятном пространстве.
                    Мы разрабатываем кроссплатформенное мобильное приложение, которое станет универсальным
                    инструментом для управления здоровьем, профессионального роста специалистов и развития бизнеса нашего клиента.</p>
                    <p className="about-description">Проект призван превратить сложную идею «все о здоровье в одном месте»
                    в успешный коммерческий продукт с высоким потенциалом вовлеченности пользователей и четкими бизнес-целями.</p>
                </div>
            </div>
            <div className="about-wrapper">
                <div className="about-content">
                    <h2 className="content-title">Содержание:</h2>
                    <ol className="content-list">
                        <li className="content-element">
                            <p className="content-theme"><span className="decoration">
                            Кейс: HealthHub — создание единой экосистемы здоровья</span></p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            О клиенте и задаче: Преодоление фрагментации рынка HealthTech</p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            Цели проекта и прогнозируемые показатели</p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            Стратегическое решение: От разрозненных сервисов к All-in-One платформе</p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            Процесс реализации:<br></br>5.1. Дизайн-концепция: мотивация и доверие<br></br>
                            5.2. Архитектура и разработка: ставка на производительность и гибкость<br></br>
                            5.3. Ключевой функционал как точки роста</p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            Бизнес-потенциал и перспективы роста</p>
                        </li>
                        <li className="content-element">
                            <p className="content-theme">
                            Выводы: Что обеспечит успех проектасистемы здоровья</p>
                        </li>
                    </ol>
                    <button className="content-button"></button>
                </div>
                <div className="about-client">
                    <Image className="client-image tablet" src={TabletAndPhone} alt="Изображение планшета и телефона" width={996} height={612}></Image>
                    <p className="images-description">Веб-платформа и мобильное приложение,
                    объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                    <Image className="client-image for-mobile" src={Phone} alt="Изображение телефона" width={320} height={653}></Image>
                    <h1 className="client-title">О клиенте и задаче: Преодоление фрагментации рынка HealthTech</h1>
                    <h2 className="client-subtitle">Клиент: Инновационный медицинский холдинг, стремящийся
                    к цифровой трансформации своих услуг и выходу на широкий B2C-рынок.</h2>
                    <p className="client-description">Проблема: Современный пользователь сталкивается
                    с фрагментированным опытом управления здоровьем. Для консультации с врачом он использует
                    один сервис, для отслеживания тренировок — другой, для заказа анализов — третий. Это неудобно,
                    данные теряются, а общая картина здоровья остается размытой. Для врачей также отсутствует
                    единый инструмент для работы с пациентами, обучения и анализа своей практики.</p>
                    <Image className="client-image layout" src={ClientImage} alt="Изображение макета" width={1244} height={663}></Image>
                    <p className="images-description layout">Веб-платформа и мобильное приложение,
                    объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                </div>
            </div>
        </StyledCaseAbout>
    )
}