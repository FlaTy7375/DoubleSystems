"use client"

import Link from "next/link"
import { StyledNews } from "./style"
import InfoBlock from "@/components/ui/info-block/info-block"
import News1 from "@/assets/images/news1.png"
import News2 from "@/assets/images/case4.png"
import News3 from "@/assets/images/news3.png"
import News4 from "@/assets/images/news4.png"
import News5 from "@/assets/images/news5.png"
import News6 from "@/assets/images/case1.jpg"
import News7 from "@/assets/images/news7.png"
import News8 from "@/assets/images/news8.png"
import News9 from "@/assets/images/news9.png"
import NewsTheme from "./news-themes"

export default function News() {
    return(
        <StyledNews>
            <div className="link-container">
                <Link className="news-link" href="/">DoubleSystems &nbsp;</Link>
                <Link className="news-link" href="/blog">\&nbsp;Блог Новости&nbsp;</Link>
                <Link className="news-link active" href="/blog">\&nbsp;Студии</Link>
            </div>
            <h1 className="news-title">Новости компании</h1>
            <div className="news-wrapper">
                <InfoBlock Img={News1} data={"08.08.2025 11:29"} views={"365"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News2} data={"07.08.2025 18:46"} views={"209"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News3} data={"05.08.2025 19:54"} views={"567"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News4} data={"25.07.2025 07:39"} views={"872"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News5} data={"21.07.2025 00:31"} views={"114"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News6} data={"17.07.2025 04:19"} views={"85"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News7} data={"26.06.2025 13:07"} views={"451"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News8} data={"20.06.2025 15:38"} views={"158"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
                <InfoBlock Img={News9} data={"04.06.2025 08:42"} views={"647"}>
                    <div className="theme-container">
                        <p className="info-theme">НОВОСТИ СТУДИИ</p>
                        <p className="info-theme">НОВОСТИ</p>
                        <p className="info-theme">АКЦИИ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                    <p className="info-description">Мы разрабатываем кроссплатформенное мобильное приложение,
                    которое станет универсальным инструментом для управления здоровьем, профессионального роста
                    специалистов и развития бизнеса нашего клиента.</p>
                </InfoBlock>
            </div>
            <button className="news-button">Показать ещё</button>
            <NewsTheme></NewsTheme>
        </StyledNews>
    )
}