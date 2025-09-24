"use client";

import { StyledTechnology } from "./style";
import TechnologyList from "./technology-list";

export default function Technology() {
    return(
        <StyledTechnology>
            <h1 className="technology-title">Технологии</h1>
            <div className="technology-wrapper">
                <div className="technology-directions">
                    <p className="technology-direction active">Backend:</p>
                    <p className="technology-direction">Frontend:</p>
                    <p className="technology-direction">AI & Parsing:</p>
                </div>
                <TechnologyList></TechnologyList>
            </div>
        </StyledTechnology>
    )
}