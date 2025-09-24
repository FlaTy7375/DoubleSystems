"use client";

import Image from "next/image";
import { StyledTechnologyList } from "./style";

const smallTechImages = Array.from({ length: 24 }, (_, i) => 
  require(`@/assets/images/tech/tech${i + 15}.png`).default
);

const largeTechImages = Array.from({ length: 14 }, (_, i) => 
  require(`@/assets/images/tech/tech${i + 1}.png`).default
);

export default function TechnologyList() {
  return (
    <div className="lists-wrapper">
      <StyledTechnologyList>
        {largeTechImages.map((src, index) => (
          <li key={index} className="tech-element">
            <Image className="tech-image" src={src} alt={`Tech ${index + 1}`} width={104} height={104} />
          </li>
        ))}
      </StyledTechnologyList>
      <StyledTechnologyList className="small">
        {smallTechImages.map((src, index) => (
          <li key={index} className="tech-element">
            <Image className="tech-image" src={src} alt={`Tech ${index + 15}`} width={104} height={104} />
          </li>
        ))}
      </StyledTechnologyList>
    </div>
  );
}