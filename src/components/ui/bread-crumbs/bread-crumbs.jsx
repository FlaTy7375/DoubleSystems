"use client";

import { StyledBreadCrumbs } from "./style";

export default function BreadCrumbs({ currentIndex = 0, total = 1 }) {

  const crumbCount = Math.min(total, 5);

  if (crumbCount <= 1) {
    return null;
  }

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