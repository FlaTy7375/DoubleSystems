'use client';

import Image from 'next/image';
import { StyledInfoBlock } from './style';

export default function InfoBlock({ Img, data, views, children }) {
  
  const imageSrc = Img?.url || Img || '/placeholder-image.jpg';
  
  const imageAlt = Img?.alt || 'Изображение кейса';

  return (
    <StyledInfoBlock>
      <Image
        className="info-img"
        src={imageSrc} 
        alt={imageAlt}
        width={562}
        height={562}
      />
      {children}
      <div className="info-wrapper">
        <p className="info-data">{data}</p>
        <div className="views-container">
          <p className="info-views">{views}</p>
        </div>
      </div>
    </StyledInfoBlock>
  );
}
// .info-title - для заголовка блока
// .theme-container - контейнер для тем (для отступов)
// .info-theme - для тем под фото