"use client";

import Link from "next/link";
import BreadCrumbs from "@/components/ui/bread-crumbs/bread-crumbs";
import Portfolio from "../portfolio/portfolio";
import Image from "next/image";
import Card from "@/components/ui/card/card";
import { useState, useEffect, useRef } from "react";

// Импорты стилей
import { StyledCase1, StyledHeroSection } from "./style";
import { StyledCaseAbout } from "./blocks/about/style";
import { StyledGoals } from "./blocks/goals/style";
import { StyledBuisness } from "./blocks/buisness/style";

const AboutSection = ({ section, index, blockId, onAnchorClick }) => {

  return (
    <StyledCaseAbout key={index} id={blockId}>
      <div className="about-wrapper">
        <div className="about-project">
          <h2 className="project-title">{section.projectTitle}</h2>
          <p className="project-description">{section.projectDescription}</p>
          <p className="project-description">Клиент:<br></br> <span className="decoration">{section.client}</span></p>
          <p className="project-description">Статус:<br></br> <span className="decoration">{section.status}</span></p>
        </div>
        <div className="about-case">
          <h1 className="about-title">{section.caseTitle}</h1>
          <p className="about-description">{section.caseDescription}</p>
        </div>
      </div>
    </StyledCaseAbout>
  );
};

export default function DynamicCase({ caseData }) {
  // Функция для плавной прокрутки к якорю
  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };   

    const [isContentExpanded, setIsContentExpanded] = useState(false);
    // 👇 Состояния и рефы для фиксации оглавления (Sticky functionality)
    const [isContentFixed, setIsContentFixed] = useState(false);
    const aboutContentRef = useRef(null);
    const initialTop = useRef(0); 
    const contentHeight = useRef(0);

    const toggleContent = () => {
        setIsContentExpanded(!isContentExpanded);
    };
  
    useEffect(() => {
        // Устанавливаем исходную позицию и высоту ОДИН РАЗ при монтировании
        if (aboutContentRef.current && initialTop.current === 0) {
            const rect = aboutContentRef.current.getBoundingClientRect();
            // Позиция относительно верха документа
            initialTop.current = rect.top + window.scrollY; 
            contentHeight.current = rect.height;
        }

        const handleScroll = () => {
            if (aboutContentRef.current && initialTop.current > 0) {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                
                // Новая точка фиксации: на 300px раньше, чем блок достигнет верха
                const fixationPoint = initialTop.current - 160; 
            
                // 1. Установить фиксацию: когда прокрутка достигла точки фиксации
                if (scrollY >= fixationPoint) {
                    if (!isContentFixed) {
                        setIsContentFixed(true);
                    }
                } 
                // 2. Снять фиксацию: когда прокрутка вернулась выше точки фиксации
                else { // scrollY < fixationPoint
                    if (isContentFixed) {
                        setIsContentFixed(false);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isContentFixed]);

  // Функция для рендера секций
  const renderSection = (section, index) => {
    // Используем blockId из данных или генерируем fallback
    const blockId = section.blockId || `${section.blockType}-${index}`;
    const bgImageUrl = section.backgroundImage?.url;

    switch (section.blockType) {
      case 'heroSection':
        return (
          <StyledHeroSection key={index} id={blockId} $bgImage={bgImageUrl}>
            <div className="case-container">
              <ul className="stamps-list for-mobile">
                {section.stamps?.slice(0, 3).map((stamp, i) => (
                  <li key={i} className="stamp">{stamp.text}</li>
                ))}
              </ul>
              <h2 className="container-title">
                {section.subtitle}
              </h2>
              <h2 className="container-title for-mobile">
                {section.title}
              </h2>
              <ul className="stamps-list">
                {section.stamps?.map((stamp, i) => (
                  <li key={i} className="stamp">{stamp.text}</li>
                ))}
              </ul>
              <p className="container-description">{section.description}</p>
              {section.image && (
                <Image 
                  className="container-image" 
                  src={section.image.url} 
                  alt={section.image.alt || section.title} 
                  width={322} 
                  height={231}
                />
              )}
              <button className="container-button">{section.buttonText}</button>
            </div>
            <BreadCrumbs />
          </StyledHeroSection>
        );

      case 'aboutProjectSection':
        return (
          <AboutSection 
            key={index}
            section={section}
            index={index}
            blockId={blockId}
            onAnchorClick={scrollToAnchor}
          />
        );

      case 'clientSection':
        return (
          <StyledCaseAbout key={index} id={blockId}>
            <div className="about-wrapper">
              
              {isContentFixed && (
                    <div 
                        className="placeholder" 
                        style={{ height: contentHeight.current + 'px' }}
                    ></div>
                )}

              <div 
                ref={aboutContentRef}
                className={`about-content ${isContentFixed ? 'fixed' : ''}`}
              >
                <h2 className="content-title">{section.contentTitle}</h2>
                <div className={`content-container ${isContentExpanded ? 'expanded' : 'collapsed'}`}>
                <ol className="content-list">
                  {section.contentItems?.map((item, i) => (
                    i == 0 ? 
                      <li key={i} className="content-element first-visible">
                      <button 
                        className="content-theme anchor-link"
                        onClick={() => scrollToAnchor(item.anchorId)}
                      >
                        <span className="decoration">{item.text}</span>
                      </button>
                    </li> 
                    :
                     <li key={i} className="content-element">
                      <button 
                        className="content-theme anchor-link"
                        onClick={() => scrollToAnchor(item.anchorId)}
                      >
                      {item.text}
                      </button>
                    </li>
                  ))}
                </ol>
                </div>
                <button 
                  className={`content-button ${isContentExpanded ? 'expanded' : ''}`}
                  onClick={toggleContent}
                />
              </div>
              <div className="about-client">
                {section.clientImage && (
                  <Image 
                    className="client-image tablet" 
                    src={section.clientImage.url} 
                    alt={section.clientImage.alt || "Изображение клиента"} 
                    width={996} 
                    height={612}
                  />
                )}
                <p className="images-description">{section.clientImageDescription}</p>
                <h1 className="client-title">
                  {section.clientTitle}
                </h1>
                <h2 className="client-subtitle">{section.clientSubtitle}</h2>
                <p className="client-description">{section.clientDescription}</p>
                {section.layoutImage && (
                  <Image 
                    className="client-image layout" 
                    src={section.layoutImage.url} 
                    alt={section.layoutImage.alt || "Изображение макета"} 
                    width={1244} 
                    height={663}
                  />
                )}
                <p className="images-description layout">{section.layoutImageDescription}</p>
              </div>
            </div>
          </StyledCaseAbout>
        );

      case 'strategySection':
        return (
          <StyledGoals key={index} id={blockId}>
            <div className="goals-wrapper">
              <div className="text-container">
                <h2 className="container-title">{section.title}</h2>
                <p className="container-description">
                  {section.description}
                </p>
              </div>
              <div className="strategy-container">
                <h2 className="strategy-title">{section.strategyTitle}</h2>
                {section.strategyItems?.map((item, i) => (
                  <p key={i} className="strategy-description">
                    <span className="decoration">{item.title}:</span><br></br>
                    {item.description}
                  </p>
                ))}
                <p className="strategy-description bold">{section.conclusion}</p>
                {section.strategyImage && (
                  <Image 
                    className="strategy-image" 
                    src={section.strategyImage.url} 
                    alt={section.strategyImage.alt || "Изображение стратегии"} 
                    width={1244} 
                    height={759}
                  />
                )}
                <p className="images-description strategy">{section.imageDescription}</p>
                
                {/* Секция процесса реализации */}
                <div>
                  <h2 className="strategy-subtitle">{section.processTitle}</h2>
                  <p className="process-description">{section.processDescription}</p>
                </div>
              </div>
            </div>
          </StyledGoals>
        );

      case 'goalsSection':
        return (
          <StyledGoals key={index} id={blockId}>
            <h1 className="goals-title">{section.title}</h1>
            <p className="goals-description">{section.description}</p>
            <ul className="cards-list">
              {section.goals?.map((goal, i) => (
                <li key={i} className="card-wrapper">
                  <Card className={goal.isLight ? 'light' : ''}>
                    <h2>{goal.title}</h2>
                    <p className="card-description">{goal.description}</p>
                    <p className="card-number">/{String(i + 1).padStart(2, '0')}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </StyledGoals>
        );

      case 'businessSection':
        return (
          <StyledBuisness key={index} id={blockId}>
            <h1 className="buisness-title">{section.title}</h1>
            <h2 className="buisness-subtitle">{section.subtitle}</h2>
            <ul className="cards-list">
              {section.tasks?.map((task, i) => (
                <li key={i} className="card-wrapper">
                  <Card className={task.isLight ? 'light' : ''}>
                    <h2 className="card-description">{task.text}</h2>
                    <p className="card-number">/{String(i + 1).padStart(2, '0')}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </StyledBuisness>
        );

      case 'textSection':
        return (
          <StyledBuisness key={index} id={blockId}>
            <h1 className="buisness-title">{section.subtitle}</h1>
            <p>{section.description}</p>
          </StyledBuisness>
        );

      case 'authorSection':
        return (
          <div key={index} id={blockId} className="about-person">
            <div className="person-container">
              {section.authorImage && (
                <Image 
                  src={section.authorImage.url} 
                  alt={section.authorImage.alt || section.authorName} 
                  width={100} 
                  height={100}
                />
              )}
              <Link className="write-button" href="/contacts">
                {section.buttonText}
              </Link>
            </div>
            <h3 className="person-name">{section.authorName}</h3>
            <p className="person-role">{section.authorRole}</p>
            {section.authorDescription?.map((desc, i) => (
              <p key={i} className="person-description">{desc.text}</p>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <StyledCase1>
      <div className="link-container">
        <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
        <Link className="cases-link" href="/cases">\&nbsp;Кейсы&nbsp;</Link>
        <Link className="cases-link active" href={`/cases/${caseData.slug}`}>\&nbsp;{caseData.path}</Link>
      </div>
      <div className="case-wrapper">
        <h1 className="case-title">{caseData.title}</h1>
        
        {/* Рендерим все секции кейса */}
        {caseData.sections?.map(renderSection)}
        
      </div>
      
      {/* Секция портфолио, если включена */}
      {caseData.showPortfolio && <Portfolio className="case-portfolio" />}
    </StyledCase1>
  );
}