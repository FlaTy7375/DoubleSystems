"use client";

import { StyledPortfolio } from "./style";
import Themes from "./themes";

export default function Portfolio({className}) {
    return(
        <StyledPortfolio className={className}>
            <h1 className="portfolio-title">Портфолио</h1>
            <Themes></Themes>
            <ul className="portfolio-list">
                <li className="portfolio-item">
                    <h2 className="item-title">Сервисы:</h2>
                    <div className="item-container">
                        <a className="item-link">Маркетплейс автозапчастей</a>
                        <a className="item-link">AI-ассистент для мероприятий</a>
                        <a className="item-link">AI-рекомендации по здоровью</a>
                        <a className="item-link">Финансовая аналитика</a>
                    </div>
                </li>
                <li className="portfolio-item">
                    <h2 className="item-title">Сайты и порталы:</h2>
                    <div className="item-container">
                        <a className="item-link">Сайт Университета (Норвегия)</a>
                        <a className="item-link">Туристический портал</a>
                        <a className="item-link">Альянс производителей камня</a>
                    </div>
                </li>
                <li className="portfolio-item">
                    <h2 className="item-title">Мобильные приложения:</h2>
                    <div className="item-container">
                        <a className="item-link">Brain Twin (Норвегия)</a>
                        <a className="item-link">Путь солнца</a>
                        <a className="item-link">Единая Сеть Экспедиторов (ЕСЭ)</a>
                    </div>
                </li>
                <li className="portfolio-item">
                    <h2 className="item-title">СAI-проекты:</h2>
                    <div className="item-container">
                        <a className="item-link">AI-анализ комментариев</a>
                        <a className="item-link">Чат-бот с RAG</a>
                        <a className="item-link">AI-обработка фото</a>
                    </div>
                </li>
                <li className="portfolio-item">
                    <h2 className="item-title">Собственные продукты:</h2>
                    <div className="item-container">
                        <a className="item-link">WarOnMap (стратегия)</a>
                        <a className="item-link">P2P Video Chat</a>
                    </div>
                </li>
            </ul>
        </StyledPortfolio>
    )
}