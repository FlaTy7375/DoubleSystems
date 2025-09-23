"use client"

import { StyledBuisness } from "./style"
import Card from "@/components/ui/card/card"

export default function Buisness() {
    return(
        <StyledBuisness>
            <h1 className="buisness-title">Бизнес-задача, поставленная перед нашим агентством,</h1>
            <h2 className="buisness-subtitle">разработать и запустить мобильное приложение «под ключ», которое:</h2>
            <ul className="cards-list">
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Объединит ключевые потребности пользователей в сфере здоровья в одном интерфейсе. </h2>
                    <p className="card-number">/01</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Создаст ценность как для обычных пользователей, так и для медицинских специалистов.</h2>
                    <p className="card-number">/02</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card>
                    <h2>Обеспечит монетизацию через модель платных консультаций и встроенный маркетплейс.</h2>
                    <p className="card-number">/03</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>Станет технологической основой для будущего масштабирования бизнеса клиента.</h2>
                    <p className="card-number">/04</p>
                    </Card>
                </li>
            </ul>
        </StyledBuisness>
    )
}