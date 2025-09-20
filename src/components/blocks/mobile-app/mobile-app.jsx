"use client";

import { StyledMobileApp } from "./style";
import BreadCrumbs from "@/components/ui/bread-crumbs/bread-crumbs";

export default function MobileApp() {
    return(
        <StyledMobileApp>
            <h1 className="mobile-title">Мобильное приложение международного транспортного форума ESE-2025</h1>
            <div className="image-container"></div>
            <BreadCrumbs></BreadCrumbs>
        </StyledMobileApp>
    )
}