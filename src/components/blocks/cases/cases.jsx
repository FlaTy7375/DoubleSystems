"use client";

import { StyledCases } from "./style";
import InfoBlock from "@/components/ui/info-block/info-block";
import Case1 from "@/assets/images/case1.jpg"
import Case2 from "@/assets/images/case2.png"
import Case3 from "@/assets/images/case3.png"
import Case4 from "@/assets/images/case4.png"
import Case5 from "@/assets/images/case5.png"

export default function Cases() {
    return(
        <StyledCases>
            <h1 className="cases-title">Наши кейсы</h1>
            <div className="cases-wrapper">
                <InfoBlock Img={Case1} data={"20.08.2025 09:20"} views={"85"}>
                    <div className="theme-container">
                        <p className="info-theme">ПРИЛОЖЕНИЕ</p>
                        <p className="info-theme">ПОРТАЛ</p>
                        <p className="info-theme">ЭКОСИСТЕМА ЗДОРОВЬЯ</p>
                    </div>
                    <h1 className="info-title">Экосистема здоровья, маркетплейс,
                    приложение «HealthHub»</h1>
                </InfoBlock>
                <InfoBlock Img={Case2} data={"17.08.2025 04:48"} views={"85"}>
                    <div className="theme-container">
                        <p className="info-theme">ПРИЛОЖЕНИЕ</p>
                        <p className="info-theme">ДИЗАЙН</p>
                        <p className="info-theme">ВЫСТАВКА</p>
                    </div>
                    <h1 className="info-title">Международный транспортный
                    форум ESE ASIA-2025</h1>
                </InfoBlock>
                <InfoBlock Img={Case3} data={"08.08.2025 11:29"} views={"365"}>
                    <div className="theme-container">
                        <p className="info-theme">САЙТ</p>
                        <p className="info-theme">БЛОКЧЕЙН</p>
                    </div>
                    <h1 className="info-title">Автоматизированная система
                    мониторинга «Croft»</h1>
                </InfoBlock>
                <InfoBlock Img={Case4} data={"27.07.2025 11:50"} views={"85"}>
                    <div className="theme-container">
                        <p className="info-theme">ПРИЛОЖЕНИЕ</p>
                        <p className="info-theme">ПОРТАЛ</p>
                    </div>
                    <h1 className="info-title">Ресторан «Ногай»</h1>
                </InfoBlock>
                <InfoBlock Img={Case5} data={"14.07.2025 15:49"} views={"85"}>
                    <div className="theme-container">
                        <p className="info-theme">ПРИЛОЖЕНИЕ</p>
                        <p className="info-theme">ПОРТАЛ</p>
                    </div>
                    <h1 className="info-title">Альметьевский молочный комбинат</h1>
                </InfoBlock>
                <button className="cases-button">Запросить коммерческое предложение</button>
            </div>
        </StyledCases>
    )
}