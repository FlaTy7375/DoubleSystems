"use client";

import Link from "next/link";
import Portfolio from "../portfolio/portfolio";
import Image from "next/image";
import Card from "@/components/ui/card/card";
import { useState, useRef } from "react";
import { useTranslate } from "@/components/translate/useTranslation";
import { usePopup } from '../case1/blocks/popup/usePopup';
import ContactPopup from '../case1/blocks/popup/ContactPopup';
import { GlobalPopupStyles } from '../case1/blocks/popup/GlobalPopupStyles';

import { StyledCase1, StyledHeroSection } from "../case1/style";
import { StyledCaseAbout } from "../case1/blocks/about/style";
import { StyledGoals } from "../case1/blocks/goals/style";
import { StyledBuisness } from "../case1/blocks/buisness/style";

const AboutProjectSection = ({ section, index, blockId, scrollToAnchor }) => {
  const clientText = useTranslate('Клиент:');
  const statusText = useTranslate('Статус:');

  return (
    <StyledCaseAbout key={index} id={blockId}>
      <div className="about-wrapper">
        <div className="about-project">
          <h2 className="project-title">{useTranslate(section.projectTitle)}</h2>
          <p className="project-description">{useTranslate(section.projectDescription)}</p>
          <p className="project-description">{clientText}<br></br> <span className="decoration">{useTranslate(section.client)}</span></p>
          <p className="project-description">{statusText}<br></br> <span className="decoration">{useTranslate(section.status)}</span></p>
        </div>
        <div className="about-case">
          <h1 className="about-title">{useTranslate(section.caseTitle)}</h1>
          <p className="about-description">{useTranslate(section.caseDescription)}</p>
        </div>
      </div>
    </StyledCaseAbout>
  );
};

export default function DynamicPage({ pageData }) {
  // --- ЛОГИКА POP-UP ---
  const { 
      isPopupOpen, 
      popupTargetElement, 
      handleOpenPopup, 
      handleClosePopup 
  } = usePopup();
  // ----------------------
  
  // Функция для плавной прокрутки к якорю
  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Переводим общие тексты
  const writeButtonText = useTranslate('Написать');
  const contentTitleText = useTranslate('Содержание:');

  const [isContentExpanded, setIsContentExpanded] = useState(true);

  const toggleContent = () => {
      setIsContentExpanded(!isContentExpanded);
  };
  
  // Функция для рендера секций
  const renderSection = (section, index) => {
    const blockId = section.blockId || `${section.blockType}-${index}`;
    const bgImageUrl = section.backgroundImage?.url;

    switch (section.blockType) {
      case 'heroSection':
        const targetAnchorId = 'about-project'; // Якорь для секции "О проекте"

        return (
          <StyledHeroSection key={index} id={blockId} $bgImage={bgImageUrl}>
            <div className="case-container">
              <ul className="stamps-list for-mobile">
                {section.stamps?.slice(0, 3).map((stamp, i) => (
                  <li key={i} className="stamp">{useTranslate(stamp.text)}</li>
                ))}
              </ul>
              <h2 className="container-title">{useTranslate(section.subtitle)}</h2>
              <h2 className="container-title for-mobile">{useTranslate(section.title)}</h2>
              <ul className="stamps-list">
                {section.stamps?.map((stamp, i) => (
                  <li key={i} className="stamp">{useTranslate(stamp.text)}</li>
                ))}
              </ul>
              <p className="container-description">{useTranslate(section.description)}</p>
              {section.image && (
                <Image 
                  className="container-image" 
                  src={section.image.url} 
                  alt={useTranslate(section.image.alt) || useTranslate(section.title)} 
                  width={322} 
                  height={231}
                />
              )}
              <Link
                className="container-button" 
                href={`#${targetAnchorId}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToAnchor(targetAnchorId);
                }}
              >
                {useTranslate(section.buttonText)}
              </Link>
            </div>
          </StyledHeroSection>
        );

      case 'aboutProjectSection':
        return (
          <AboutProjectSection 
            key={index}
            section={section}
            index={index}
            blockId={blockId}
            scrollToAnchor={scrollToAnchor}
          />
        );

case 'clientSection':
  const contentTitle = useTranslate('Содержание:');
  
  // Создаем массив переведенных элементов содержания
  const contentItems = section.contentItems?.map(item => useTranslate(item.text)) || [];

  return (
    <StyledCaseAbout key={index} id={blockId}>
      <div className="about-wrapper">
        
        {isContentFixed && (
          <div 
            className="placeholder" 
            style={{ height: `${contentHeight.current}px` }}
          ></div>
        )}

        <div 
          ref={aboutContentRef}
          className={`about-content ${isContentFixed ? 'fixed' : ''} ${isContentExpanded ? '' : 'collapsed-state'}`}
        >
          {/* Заголовок отображаем только когда развернуто */}
          {isContentExpanded && (
            <h2 className="content-title">{contentTitle}</h2>
          )}
          
          <div className={`content-container ${isContentExpanded ? 'expanded' : 'collapsed'}`}>
            {isContentExpanded ? (
              // РАЗВЕРНУТОЕ состояние - показываем весь список
              <ol className="content-list">
                {section.contentItems?.map((item, i) => (
                  i === 0 ? 
                    <li key={i} className="content-element">
                      <button 
                        className="content-theme anchor-link"
                        onClick={() => scrollToAnchor(item.anchorId)}
                      >
                        <span className="decoration">{contentItems[i]}</span>
                      </button>
                    </li> 
                  :
                    <li key={i} className="content-element">
                      <button 
                        className="content-theme anchor-link"
                        onClick={() => scrollToAnchor(item.anchorId)}
                      >
                        {contentItems[i]}
                      </button>
                    </li>
                ))}
              </ol>
            ) : (
              // СВЕРНУТОЕ состояние - только маленькая кнопка
              <div className="collapsed-indicator">
                {/* В свернутом состоянии ничего не показываем, кроме фоновой кнопки */}
              </div>
            )}
          </div>
          
          {/* Кнопка переключения - всегда видима */}
          <button 
            className={`content-toggle-button ${isContentExpanded ? 'expanded' : ''} ${isContentFixed ? 'fixed-state' : ''}`}
            onClick={toggleContent}
            aria-label={isContentExpanded ? 'Свернуть содержание' : 'Развернуть содержание'}
          >
            <span className="toggle-icon">
              {isContentExpanded ? (
                // Стрелка вниз когда развернуто
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                // Стрелка вправо когда свернуто
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className="about-client">
          {section.clientImage && (
            <Image 
              className="client-image tablet" 
              src={section.clientImage.url} 
              alt={useTranslate(section.clientImage.alt) || "Изображение клиента"} 
              width={996} 
              height={612}
            />
          )}
          <p className="images-description">{useTranslate(section.clientImageDescription)}</p>
          <h1 className="client-title">
            {useTranslate(section.clientTitle)}
          </h1>
          <h2 className="client-subtitle">{useTranslate(section.clientSubtitle)}</h2>
          <p className="client-description">{useTranslate(section.clientDescription)}</p>
          {section.layoutImage && (
            <Image 
              className="client-image layout" 
              src={section.layoutImage.url} 
              alt={useTranslate(section.layoutImage.alt) || "Изображение макета"} 
              width={1244} 
              height={663}
            />
          )}
          <p className="images-description layout">{useTranslate(section.layoutImageDescription)}</p>
        </div>
      </div>
    </StyledCaseAbout>
  );

      case 'strategySection':
        return (
          <StyledGoals key={index} id={blockId}>
            <div className="goals-wrapper">
              <div className="text-container">
                <h2 className="container-title">{useTranslate(section.title)}</h2>
                <p className="container-description">
                  {useTranslate(section.description)}
                </p>
              </div>
              <div className="strategy-container">
                <h2 className="strategy-title">{useTranslate(section.strategyTitle)}</h2>
                {section.strategyItems?.map((item, i) => (
                  <p key={i} className="strategy-description">
                    <span className="decoration">{useTranslate(item.title)}:</span><br></br>
                    {useTranslate(item.description)}
                  </p>
                ))}
                <p className="strategy-description bold">{useTranslate(section.conclusion)}</p>
                {section.strategyImage && (
                  <Image 
                    className="strategy-image" 
                    src={section.strategyImage.url} 
                    alt={useTranslate(section.strategyImage.alt) || "Изображение стратегии"} 
                    width={1244} 
                    height={759}
                  />
                )}
                <p className="images-description strategy">{useTranslate(section.imageDescription)}</p>
                
                <div>
                  <h2 className="strategy-subtitle">{useTranslate(section.processTitle)}</h2>
                  <p className="process-description">{useTranslate(section.processDescription)}</p>
                </div>
              </div>
            </div>
          </StyledGoals>
        );

      case 'goalsSection':
        return (
          <StyledGoals key={index} id={blockId}>
            <h1 className="goals-title">{useTranslate(section.title)}</h1>
            <p className="goals-description">{useTranslate(section.description)}</p>
            <ul className="cards-list">
              {section.goals?.map((goal, i) => (
                <li key={i} className="card-wrapper">
                  <Card className={goal.isLight ? 'light' : ''}>
                    <h2>{useTranslate(goal.title)}</h2>
                    <p className="card-description">{useTranslate(goal.description)}</p>
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
            <h1 className="buisness-title">{useTranslate(section.title)}</h1>
            <h2 className="buisness-subtitle">{useTranslate(section.subtitle)}</h2>
            <ul className="cards-list">
              {section.tasks?.map((task, i) => (
                <li key={i} className="card-wrapper">
                  <Card className={task.isLight ? 'light' : ''}>
                    <h2 className="card-description">{useTranslate(task.text)}</h2>
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
            <h1 className="buisness-title">{useTranslate(section.subtitle)}</h1>
            <p>{useTranslate(section.description)}</p>
          </StyledBuisness>
        );

      case 'authorSection':
        const authorButtonRef = useRef(null);

        const handleAuthorClick = (e) => {
            e.preventDefault();
            handleOpenPopup(e, authorButtonRef.current);
        };

        return (
          <div key={index} id={blockId} className="about-person">
            <div className="person-container">
              {section.authorImage && (
                <Image 
                  src={section.authorImage.url} 
                  alt={useTranslate(section.authorImage.alt) || useTranslate(section.authorName)} 
                  width={100} 
                  height={100}
                />
              )}
              <button 
                ref={authorButtonRef}
                className="write-button" 
                onClick={handleAuthorClick}
                type="button" 
              >
                {writeButtonText}
              </button>
            </div>
            <h3 className="person-name">{useTranslate(section.authorName)}</h3>
            <p className="person-role">{useTranslate(section.authorRole)}</p>
            {section.authorDescription?.map((desc, i) => (
              <p key={i} className="person-description">{useTranslate(desc.text)}</p>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <StyledCase1>
      <GlobalPopupStyles />
      
      <div className="link-container">
        <Link className="cases-link" href="/">DoubleSystems &nbsp;</Link>
        <Link className="cases-link active" href={`/${pageData.slug}`}>\&nbsp;{useTranslate(pageData.title)}</Link>
      </div>
      <div className="case-wrapper">
        <h1 className="case-title">{useTranslate(pageData.title)}</h1>
        
        {pageData.sections?.map(renderSection)}
        
      </div>
      
      {pageData.showPortfolio && <Portfolio className="case-portfolio" />}

      <ContactPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          targetElement={popupTargetElement}
      />

    </StyledCase1>
  );
}