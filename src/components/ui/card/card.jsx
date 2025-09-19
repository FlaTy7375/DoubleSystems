"use client";

import { StyledCard } from "./style";

export default function Card({className ,children}) {
    return(
        <StyledCard className={className}>{children}</StyledCard>
    )
}

// Для стилизации
// h2 - заголовок карточки
// .card-description - для описания
// .card-adv - для красных пунктов