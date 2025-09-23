"use client"

import { StyledGoals } from "./style"
import Card from "@/components/ui/card/card"
import Image from "next/image"
import ClientLayout from "@/assets/images/client-layout.png"
import StrategyImage from "@/assets/images/strategy-image.png"
import Person from "@/assets/images/Alex.png"

export default function Goals() {
    return(
        <StyledGoals>
            <h1 className="goals-title">Цели проекта и прогнозируемые показатели</h1>
            <p className="goals-description">Поскольку сервис находится в стадии активной разработки,
            мы оперируем целевыми метриками, заложенными в стратегию проекта.</p>
            <ul className="cards-list">
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Пользовательская база: </h2>
                    <p className="card-description">
                        Обеспечить быстрый органический и маркетинговый рост для формирования активного комьюнити.
                    </p>
                    <p className="card-number">/01</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Пользовательская оценка:</h2>
                    <p className="card-description">
                        Достичь и поддерживать высокий рейтинг удовлетворенности (целевой показатель 4.7/5 и выше)
                        за счет продуманного UX и стабильной работы.
                    </p>
                    <p className="card-number">/02</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card>
                    <h2>Позиции в сторах:</h2>
                    <p className="card-description">
                        Занять лидирующие позиции в категории «Медицина» в App Store и Google Play после запуска.
                    </p>
                    <p className="card-number">/03</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Вовлеченность (Engagement Rate):</h2>
                    <p className="card-description">
                        Стимулировать регулярное использование нескольких функций платформы,
                        превращая приложение в ежедневный инструмент пользователя.
                    </p>
                    <p className="card-number">/04</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Монетизация:</h2>
                    <p className="card-description">
                        Построить эффективную воронку, обеспечивающую высокую конверсию в платные услуги
                        (консультации, товары из маркетплейса).
                    </p>
                    <p className="card-number">/05</p>
                    </Card>
                </li>
            </ul>
            <div className="goals-wrapper">
                <div className="about-client">
                    <h1 className="client-title">О клиенте и задаче: Преодоление фрагментации рынка HealthTech</h1>
                    <h2 className="client-subtitle">Клиент: Инновационный медицинский холдинг, стремящийся
                    к цифровой трансформации своих услуг и выходу на широкий B2C-рынок.</h2>
                    <p className="client-description">Проблема: Современный пользователь сталкивается
                    с фрагментированным опытом управления здоровьем. Для консультации с врачом он использует
                    один сервис, для отслеживания тренировок — другой, для заказа анализов — третий. Это неудобно,
                    данные теряются, а общая картина здоровья остается размытой. Для врачей также отсутствует
                    единый инструмент для работы с пациентами, обучения и анализа своей практики.</p>
                </div>
                </div>
            <div className="goals-wrapper">
                <div className="about-person">
                    <div className="person-container">
                        <Image src={Person} alt='Изображение Автора' width={100} height={100}></Image>
                        <button className="write-button">Написать</button>
                    </div>
                    <h3 className="person-name">Егошин Алексей Валерьевич</h3>
                    <p className="person-role">директор Double Systems</p>
                    <p className="person-description">Кандидат технических наук, доцент кафедры информатики и системного программирования</p>
                    <p className="person-description">Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта</p>
                </div>
                <div>
                    <Image className="client-image layout" src={ClientLayout} alt="Изображение макета" width={1257} height={672}></Image>
                    <p className="images-description client">Веб-платформа и мобильное приложение,
                    объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                </div>
            </div>
            <div className="goals-wrapper">
                <div className="text-container">
                    <h2 className="container-title">Стратегическое решение: От разрозненных сервисов к All-in-One платформе</h2>
                    <p className="container-description">
                        Проанализировав рынок и болевые точки целевых аудиторий,
                        мы предложили не просто создать еще одно приложение, а разработать полноценную цифровую экосистему.
                    </p>
                </div>
                <div className="strategy-container">
                    <h2 className="strategy-title">Наша стратегия базируется на трех китах:</h2>
                    <p className="strategy-description"><span className="decoration">Универсальность:</span><br></br>
                    Создать единую точку входа для всех вопросов, связанных со здоровьем.
                    От быстрой консультации до комплексного ведения хронических заболеваний.</p>
                    <p className="strategy-description"><span className="decoration">Двойная ценность:</span><br></br>
                    Платформа должна быть одинаково полезна и удобна как для пациента (B2C), 
                    так и для врача (B2B2C), создавая синергетический эффект.</p>
                    <p className="strategy-description"><span className="decoration">Масштабируемость:</span><br></br>
                    Заложить в архитектуру возможность легкого добавления новых 
                    модулей и интеграций в будущем.</p>
                    <p className="strategy-description bold">Именно этот подход позволит HealthHub выделиться на фоне
                    узкоспециализированных конкурентов и предложить пользователям уникальную ценность.</p>
                    <Image className="strategy-image" src={StrategyImage} alt="Изображение макета" width={1244} height={759}></Image>
                    <p className="images-description strategy">Веб-платформа и мобильное приложение,
                    объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                    <h2 className="strategy-subtitle">Процесс реализации</h2>
                    <p className="process-description">HealthHub — это не просто еще одно приложение для здоровья. Это проектируемая цифровая экосистема,
                    которая объединит пациентов, врачей и поставщиков медицинских товаров в едином,
                    интуитивно понятном пространстве. Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                    <p className="process-description">Проект призван превратить сложную идею «все о здоровье в одном месте» в успешный
                    коммерческий продукт с высоким потенциалом вовлеченности пользователей и четкими бизнес-целями.</p>
                </div>
            </div>
        </StyledGoals>
    )
}