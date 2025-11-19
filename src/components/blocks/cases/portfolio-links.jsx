"use client"

import Link from "next/link"
import { StyledPortfolioLinks } from "./style"
import { useTranslate } from "@/components/translate/useTranslation"

export default function PortfolioLinks() {

    const breadcrumbHome = useTranslate('DoubleSystems')
    const breadcrumbPortfolio = useTranslate('Портфолио')


    return(
        <StyledPortfolioLinks>
            <div className="link-container">
                <Link className="cases-link" href="/">{breadcrumbHome} &nbsp;</Link>
                <Link className="cases-link active" href="/portfolio">\ &nbsp;{breadcrumbPortfolio}</Link>
            </div>
            <h1 className="portfolio-title">{breadcrumbPortfolio}</h1>
        </StyledPortfolioLinks>
    )
}