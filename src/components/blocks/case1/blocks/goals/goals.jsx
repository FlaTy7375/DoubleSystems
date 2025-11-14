"use client"

import { StyledGoals } from "./style"
import Card from "@/components/ui/card/card"
import Image from "next/image"
import ClientLayout from "@/assets/images/client-layout.png"
import StrategyImage from "@/assets/images/strategy-image.png"
import Person from "@/assets/images/Alex.png"
import Link from "next/link"
import { useTranslate } from "@/components/translate/useTranslation"

export default function Goals() {
    // Переводим все тексты
    const goalsTitle = useTranslate('Цели проекта и прогнозируемые показатели')
    const goalsDescription = useTranslate('Поскольку сервис находится в стадии активной разработки, мы оперируем целевыми метриками, заложенными в стратегию проекта.')
    
    const cardTitle1 = useTranslate('Пользовательская база:')
    const cardDescription1 = useTranslate('Обеспечить быстрый органический и маркетинговый рост для формирования активного комьюнити.')
    
    const cardTitle2 = useTranslate('Пользовательская оценка:')
    const cardDescription2 = useTranslate('Достичь и поддерживать высокий рейтинг удовлетворенности (целевой показатель 4.7/5 и выше) за счет продуманного UX и стабильной работы.')
    
    const cardTitle3 = useTranslate('Позиции в сторах:')
    const cardDescription3 = useTranslate('Занять лидирующие позиции в категории «Медицина» в App Store и Google Play после запуска.')
    
    const cardTitle4 = useTranslate('Вовлеченность (Engagement Rate):')
    const cardDescription4 = useTranslate('Стимулировать регулярное использование нескольких функций платформы, превращая приложение в ежедневный инструмент пользователя.')
    
    const cardTitle5 = useTranslate('Монетизация:')
    const cardDescription5 = useTranslate('Построить эффективную воронку, обеспечивающую высокую конверсию в платные услуги (консультации, товары из маркетплейса).')
    
    const strategyTitle = useTranslate('Стратегическое решение: От разрозненных сервисов к All-in-One платформе')
    const strategyDescription = useTranslate('Проанализировав рынок и болевые точки целевых аудиторий, мы предложили не просто создать еще одно приложение, а разработать полноценную цифровую экосистему.')
    
    const strategySubtitle = useTranslate('Наша стратегия базируется на трех китах:')
    const strategyDesc1 = useTranslate('Универсальность:')
    const strategyText1 = useTranslate('Создать единую точку входа для всех вопросов, связанных со здоровьем. От быстрой консультации до комплексного ведения хронических заболеваний.')
    const strategyDesc2 = useTranslate('Двойная ценность:')
    const strategyText2 = useTranslate('Платформа должна быть одинаково полезна и удобна как для пациента (B2C), так и для врача (B2B2C), создавая синергетический эффект.')
    const strategyDesc3 = useTranslate('Масштабируемость:')
    const strategyText3 = useTranslate('Заложить в архитектуру возможность легкого добавления новых модулей и интеграций в будущем.')
    const strategyBold = useTranslate('Именно этот подход позволит HealthHub выделиться на фоне узкоспециализированных конкурентов и предложить пользователям уникальную ценность.')
    
    const imagesDescription = useTranslate('Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.')
    
    const processSubtitle = useTranslate('Процесс реализации')
    const processDescription1 = useTranslate('HealthHub — это не просто еще одно приложение для здоровья. Это проектируемая цифровая экосистема, которая объединит пациентов, врачей и поставщиков медицинских товаров в едином, интуитивно понятном пространстве. Мы разрабатываем кроссплатформенное мобильное приложение, которое станет универсальным инструментом для управления здоровьем, профессионального роста специалистов и развития бизнеса нашего клиента.')
    const processDescription2 = useTranslate('Проект призван превратить сложную идею «все о здоровье в одном месте» в успешный коммерческий продукт с высоким потенциалом вовлеченности пользователей и четкими бизнес-целями.')
    
    const writeButton = useTranslate('Написать')
    const personName = useTranslate('Егошин Алексей Валерьевич')
    const personRole = useTranslate('директор Double Systems')
    const personDescription1 = useTranslate('Кандидат технических наук, доцент кафедры информатики и системного программирования')
    const personDescription2 = useTranslate('Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта')

    return(
        <StyledGoals>
            <h1 className="goals-title">{goalsTitle}</h1>
            <p className="goals-description">{goalsDescription}</p>
            <ul className="cards-list">
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardTitle1}</h2>
                    <p className="card-description">
                        {cardDescription1}
                    </p>
                    <p className="card-number">/01</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardTitle2}</h2>
                    <p className="card-description">
                        {cardDescription2}
                    </p>
                    <p className="card-number">/02</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card>
                    <h2>{cardTitle3}</h2>
                    <p className="card-description">
                        {cardDescription3}
                    </p>
                    <p className="card-number">/03</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardTitle4}</h2>
                    <p className="card-description">
                        {cardDescription4}
                    </p>
                    <p className="card-number">/04</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardTitle5}</h2>
                    <p className="card-description">
                        {cardDescription5}
                    </p>
                    <p className="card-number">/05</p>
                    </Card>
                </li>
            </ul>
            
            {/* Секция стратегических решений с якорем */}
            <div className="goals-wrapper" id="strategy">
                <div className="text-container">
                    <h2 className="container-title">{strategyTitle}</h2>
                    <p className="container-description">
                        {strategyDescription}
                    </p>
                </div>
                <div className="strategy-container">
                    <h2 className="strategy-title">{strategySubtitle}</h2>
                    <p className="strategy-description"><span className="decoration">{strategyDesc1}</span><br></br>
                    {strategyText1}</p>
                    <p className="strategy-description"><span className="decoration">{strategyDesc2}</span><br></br>
                    {strategyText2}</p>
                    <p className="strategy-description"><span className="decoration">{strategyDesc3}</span><br></br>
                    {strategyText3}</p>
                    <p className="strategy-description bold">{strategyBold}</p>
                    <Image className="strategy-image" src={StrategyImage} alt="Изображение макета" width={1244} height={759}></Image>
                    <p className="images-description strategy">{imagesDescription}</p>
                    
                    {/* Секция процесса реализации с якорем */}
                    <div id="process">
                        <h2 className="strategy-subtitle">{processSubtitle}</h2>
                        <p className="process-description">{processDescription1}</p>
                        <p className="process-description">{processDescription2}</p>
                    </div>
                </div>
            </div>
            
            {/* Секция выводов с якорем */}
            <div id="conclusion">
                <div className="goals-wrapper">
                    <div className="about-person">
                        <div className="person-container">
                            <Image src={Person} alt='Изображение Автора' width={100} height={100}></Image>
                            <Link className="write-button" href="/contacts">{writeButton}</Link>
                        </div>
                        <h3 className="person-name">{personName}</h3>
                        <p className="person-role">{personRole}</p>
                        <p className="person-description">{personDescription1}</p>
                        <p className="person-description">{personDescription2}</p>
                    </div>
                    <div>
                        <Image className="client-image layout" src={ClientLayout} alt="Изображение макета" width={1257} height={672}></Image>
                        <p className="images-description client">{imagesDescription}</p>
                    </div>
                </div>
            </div>
        </StyledGoals>
    )
}