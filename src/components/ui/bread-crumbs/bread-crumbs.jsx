"use client";

import { StyledBreadCrumbs } from "./style";

export default function BreadCrumbs({ currentIndex = 0 }) {
  const crumbCount = 5;

  return (
    <StyledBreadCrumbs>
      {Array.from({ length: crumbCount }, (_, index) => (
        <li
          key={index}
          className={`bread-crumb ${index === currentIndex ? 'active' : ''}`}
        ></li>
      ))}
    </StyledBreadCrumbs>
  );
}