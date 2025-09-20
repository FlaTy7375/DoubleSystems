"use client";

import { StyledWeCreated } from "./style";
import Card from "@/components/ui/card/card";

export default function WeCreated() {
  return (
    <StyledWeCreated>
      <h1 className="created-title">Мы создаём.</h1>
      <ul className="card-list">
        <li className="card-wrapper">
            <Card>
            <h2>Web-решения</h2>
            <p className="card-description">
                Создаем корпоративные порталы, SaaS-платформы и интернет-магазины,
                которые выдерживают высокие нагрузки и радуют пользователей.
            </p>
            <div>
                <p className="card-adv">— Разработка сайтов и порталов</p>
                <p className="card-adv">— Корпоративные системы</p>
                <p className="card-adv">— SaaS-платформы</p>
                <p className="card-adv">— E-commerce</p>
            </div>
            <p className="card-number">/01</p>
            <div className="blue-gradient"></div>
            </Card>
        </li>
        <li className="card-wrapper">
            <Card>
            <h2>Мобильные приложения</h2>
            <p className="card-description">
                Разрабатываем кроссплатформенные и нативные приложения для
                iOS и Android, которые удобны, быстры и функциональны.
            </p>
            <div>
                <p className="card-adv">— Разработка iOS/Android</p>
                <p className="card-adv">— Кроссплатформенные приложения</p>
                <p className="card-adv">— Интеграции и API</p>
            </div>
            <p className="card-number">/02</p>
            <div className="green-gradient"></div>
            </Card>
        </li>
        <li className="card-wrapper">
            <Card>
            <h2>Искусственный интеллект</h2>
            <p className="card-description">
                Внедряем AI-решения: от чат-ботов и анализа данных до обработки
                изображений с помощью нейросетей.
            </p>
            <div>
                <p className="card-adv">— Машинное обучениев</p>
                <p className="card-adv">— AI-ассистенты (чат-боты, анализ данных)</p>
                <p className="card-adv">— AI-обработка фото</p>
            </div>
            <p className="card-number">/03</p>
            <div className="red-gradient"></div>
            </Card>
        </li>
        <li className="card-wrapper">
            <Card className="light">
            <h2>Видеотехнологии</h2>
            <p className="card-description">
                Разрабатываем системы видеосвязи и конференц-связи на базе
                WebRTC для бизнеса любого масштаба.
            </p>
            <div>
                <p className="card-adv">WebRTC и видеоконференции</p>
                <p className="card-adv">Корпоративные видеосервисы</p>
            </div>
            <p className="card-number">/04</p>
            </Card>
        </li>
        <li className="card-wrapper">
            <Card className="light">
            <h2>Безопасность данных</h2>
            <p className="card-description">
                Защищаем ваши коммуникации с помощью VPN,
                шифрования и P2P-технологий.
            </p>
            <div>
                <p className="card-adv">VPN, шифрование, P2P-чаты</p>
                <p className="card-adv">Защита данных</p>
            </div>
            <p className="card-number">/05</p>
            </Card>
        </li>
        <li className="card-wrapper">
            <Card className="light">
            <h2>Парсинг данных</h2>
            <p className="card-description">
                Внедряем AI-решения: от чат-ботов и анализа данных до обработки
                изображений с помощью нейросетей.
            </p>
            <div>
                <p className="card-adv">Машинное обучение</p>
                <p className="card-adv">AI-ассистенты (чат-боты, анализ)</p>
                <p className="card-adv">AI-обработка фото</p>
            </div>
            <p className="card-number">/06</p>
            </Card>
        </li>
      </ul>
    </StyledWeCreated>
  );
}
