"use client"

import { StyledCase1 } from "./style"
import Link from "next/link"
import BreadCrumbs from "@/components/ui/bread-crumbs/bread-crumbs"
import CaseAbout from "./blocks/about/about"
import Goals from "./blocks/goals/goals"
import Buisness from "./blocks/buisness/buisness"
import Repeat from "./blocks/repeat-section/repeat"
import Portfolio from "../portfolio/portfolio"

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
                    <h2 className="container-title">
                        Проектирование и разработка единой экосистемы здоровья
                    </h2>
                    <ul className="stamps-list">
                        <li className="stamp">ПРИЛОЖЕНИЕ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ПОРТАЛ</li>
                        <li className="stamp">ЭКОСИСТЕМА ЗДОРОВЬЯ</li>
                    </ul>
                    <p className="container-description">Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.</p>
                    <button className="container-button">Рассказываем о проекте</button>
                </div>
                <BreadCrumbs></BreadCrumbs>
            </div>
            <CaseAbout></CaseAbout>
            <Goals></Goals>
            <Buisness></Buisness>
            <Repeat></Repeat>
            <Portfolio></Portfolio>
        </StyledCase1>
    )
}