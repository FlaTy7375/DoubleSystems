"use client";

import Image from 'next/image';
import { StyledAboutUs } from "./style"
import Person from "@/assets/images/Alex.png"
import Link from 'next/link';

export default function AboutUs() {
    return (
        <StyledAboutUs>
            <h2 className="about-title">О компании</h2>
            <div className="about-person">
                <div className="person-container">
                    <Image src={Person} alt='Изображение Автора' width={100} height={100}></Image>
                    <Link className="write-button" href="/contacts">Написать</Link>
                </div>
                <h3 className="person-name">Егошин Алексей Валерьевич</h3>
                <p className="person-role">директор Double Systems</p>
                <p className="person-description">Кандидат технических наук, доцент кафедры информатики и системного программирования</p>
                <p className="person-description">Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта</p>
            </div>
            <div className="about-container">
                <p className="about-description small">
                    Double Systems, команда экспертов с более чем 10-летним опытом в
                    разработке цифровых решений. Мы создаем высоконагруженные
                    веб-системы, мобильные приложения, AI-сервисы, видеосвязь и
                    безопасные коммуникации для бизнеса.
                </p>
                <p className="about-description">Наш подход – инновации, надежность и масштабируемость.</p>
                <p className="about-description">
                    Мы создаём решения, которые помогают компаниям
                    автоматизировать процессы, обеспечивать безопасность данных и
                    создавать удобную коммуникацию
                </p>
            </div>
        </StyledAboutUs>
    )
}