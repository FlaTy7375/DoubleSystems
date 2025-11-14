"use client"

import { StyledBuisness } from "./style"
import Card from "@/components/ui/card/card"
import { useTranslate } from "@/components/translate/useTranslation"

export default function Buisness() {
    // Переводим все тексты
    const businessTitle = useTranslate('Бизнес-задача, поставленная перед нашим агентством,')
    const businessSubtitle = useTranslate('разработать и запустить мобильное приложение «под ключ», которое:')
    
    const cardText1 = useTranslate('Объединит ключевые потребности пользователей в сфере здоровья в одном интерфейсе.')
    const cardText2 = useTranslate('Создаст ценность как для обычных пользователей, так и для медицинских специалистов.')
    const cardText3 = useTranslate('Обеспечит монетизацию через модель платных консультаций и встроенный маркетплейс.')
    const cardText4 = useTranslate('Станет технологической основой для будущего масштабирования бизнеса клиента.')

    return(
        <StyledBuisness>
            <h1 className="buisness-title">{businessTitle}</h1>
            <h2 className="buisness-subtitle">{businessSubtitle}</h2>
            <ul className="cards-list">
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardText1}</h2>
                    <p className="card-number">/01</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardText2}</h2>
                    <p className="card-number">/02</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card>
                    <h2>{cardText3}</h2>
                    <p className="card-number">/03</p>
                    </Card>
                </li>
                <li className="card-wrapper">
                    <Card className="light">
                    <h2>{cardText4}</h2>
                    <p className="card-number">/04</p>
                    </Card>
                </li>
            </ul>
        </StyledBuisness>
    )
}