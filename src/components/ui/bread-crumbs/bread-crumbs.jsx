"use client";

import { StyledBreadCrumbs } from "./style";

export default function BreadCrumbs() {
    return(
        <StyledBreadCrumbs>
            <li className="bread-crumb active"></li>
            <li className="bread-crumb"></li>
            <li className="bread-crumb"></li>
            <li className="bread-crumb"></li>
            <li className="bread-crumb"></li>
        </StyledBreadCrumbs>
    )
}