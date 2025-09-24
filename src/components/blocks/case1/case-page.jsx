"use client"

import { StyledCase1 } from "./style"
import Link from "next/link"
import BreadCrumbs from "@/components/ui/bread-crumbs/bread-crumbs"
import CaseAbout from "./blocks/about/about"
import Goals from "./blocks/goals/goals"
import Buisness from "./blocks/buisness/buisness"
import Repeat from "./blocks/repeat-section/repeat"
import Portfolio from "../portfolio/portfolio"
import Image from "next/image"
import TabletAndPhone from "@/assets/images/tablet-and-phone.png"
import Person from "@/assets/images/Alex.png"

export default function Case1() {
    return(
        <StyledCase1>
            <div className="link-container">
                <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="cases-link" href="/cases">\&nbsp;Кейсы&nbsp;</Link>
                <Link className="cases-link active" href="/cases">\&nbsp;Экосистема здоровья</Link>
            </div>
            <div className="case-wrapper">
                <h1 className="case-title">Кейс: HealthHub — проектирование и разработка единой экосистемы здоровья</h1>
                <div className="case-container">
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
            </div>
            <CaseAbout></CaseAbout>
            <Goals></Goals>
            <Buisness></Buisness>
            <Repeat></Repeat>
            <Portfolio className="case-portfolio"></Portfolio>
            <div className="about-person for-mobile">
                <div className="person-container">
                    <Image src={Person} alt='Изображение Автора' width={100} height={100}></Image>
                    <Link className="write-button" href="/contacts">Написать</Link>
                </div>
                <h3 className="person-name">Егошин Алексей Валерьевич</h3>
                <p className="person-role">директор Double Systems</p>
                <p className="person-description">Кандидат технических наук, доцент кафедры информатики и системного программирования</p>
                <p className="person-description">Эксперт в области веб-разработки, мобильных решений и искусственного интеллекта</p>
            </div>
        </StyledCase1>
    )
}