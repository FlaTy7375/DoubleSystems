"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { StyledHeader } from "./style";
import HeaderLogo from '@/assets/images/header-logo.svg';
import SearchLogo from '@/assets/images/svg/search-logo.svg';
import WhatsAppLogo from '@/assets/images/svg/whatsapp.svg';
import TgLogo from '@/assets/images/svg/telegram.svg';
import Link from 'next/link';
import { useLanguage } from '@/components/translate/LanguageContext';
import { useTranslate } from "@/components/translate/useTranslation"
import { useLocalizedPath } from '@/components/translate/useLocalizedPath';
import { StyledPortfolio } from '@/components/blocks/portfolio/style';
import { useDebounce } from '@/components/blocks/search/useDebounce'
import { SearchResultsList } from '@/components/blocks/search/SearchResultsList';

const STATIC_DEFAULT_DROPDOWN = [
    {
      title: 'Сервисы:',
      links: [
        { text: 'Маркетплейс автозапчастей', url: '/marketplace' },
        { text: 'AI-ассистент для мероприятий', url: '/ai-assistant' },
        { text: 'AI-рекомендации по здоровью', url: '/ai-health' },
        { text: 'Финансовая аналитика', url: '/finance-analytics' }
      ],
    },
    {
      title: 'Сайты и порталы:',
      links: [
        { text: 'Сайт Университета (Норвегия)', url: '/university-site' }, 
        { text: 'Туристический портал', url: '/tour-portal' }, 
        { text: 'Альянс производителей камня', url: '/stone-alliance' }
      ],
    },
    {
      title: 'Мобильные приложения:',
      links: [
        { text: 'Brain Twin (Норвегия)', url: '/brain-twin' }, 
        { text: 'Путь солнца', url: '/sun-path' }, 
        { text: 'Единая Сеть Экспедиторов (ЕСЭ)', url: '/ese-app' }
      ],
    },
    {
      title: 'СAI-проекты:',
      links: [
        { text: 'AI-анализ комментариев', url: '/ai-comments' }, 
        { text: 'Чат-бот с RAG', url: '/rag-chatbot' }, 
        { text: 'AI-обработка фото', url: '/ai-photo-processing' }
      ],
    },
    {
      title: 'Собственные продукты:',
      links: [
        { text: 'WarOnMap (стратегия)', url: '/waronmap' }, 
        { text: 'P2P Video Chat', url: '/p2p-video-chat' }
      ],
    },
];

const TranslatedLink = ({ linkItem }) => {
    const getLocalizedPath = useLocalizedPath();
    const translatedText = useTranslate(linkItem.text);
    
    return (
        <Link
            className="item-link"
            href={getLocalizedPath(linkItem.url)}
        >
            {translatedText}
        </Link>
    );
};

const LinkListBlock = ({ item }) => {
    const translatedTitle = useTranslate(item.title);

    return (
        <li className="portfolio-item">
            <h2 className="item-title">{translatedTitle}</h2>
            <div className="item-container">
                {item.links?.map((linkItem, linkIndex) => (
                    <TranslatedLink 
                        key={linkIndex} 
                        linkItem={linkItem} 
                    />
                ))}
            </div>
        </li>
    );
};

const DropdownContent = ({ data }) => {
    
    if (!data || data.length === 0) {
        return null; 
    }
    
    const isBlocks = data[0]?.blockType;

    return (
        <StyledPortfolio className='header-dropdown-content'>
            <ul className="portfolio-list">
                {data.map((item, index) => {
                    if (isBlocks) {
                        if (item.blockType === 'linkList') {
                            const blockData = {
                                title: item.title,
                                links: item.links
                            };
                            return <LinkListBlock key={index} item={blockData} />;
                        }
                        return null;
                    }
                    return <LinkListBlock key={index} item={item} />;
                })}
            </ul>
        </StyledPortfolio>
    );
};

const DesktopNavLink = ({ item, isHovered, onMouseEnter, onMouseLeave }) => {
    const getLocalizedPath = useLocalizedPath();
    const translatedTitle = useTranslate(item.title);
    
    return (
        <Link 
            className={`nav-link ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
            href={getLocalizedPath(item.href)}
        >
            {translatedTitle}
        </Link>
    );
};

const MobileNavItem = ({ item, isExpanded, onToggleDropdown }) => {
    const getLocalizedPath = useLocalizedPath();
    const translatedTitle = useTranslate(item.title);
    
    const handleDropdownClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleDropdown(item);
    };
    
    return (
        <div className="mobile-nav-item">
            <Link 
                className={`nav-link mobile-nav-link ${isExpanded ? 'expanded' : ''}`}
                href={getLocalizedPath(item.href)}
            >
                <span>{translatedTitle}</span>
            </Link>
            <button 
                className={`dropdown-toggle ${isExpanded ? 'expanded' : ''}`}
                onClick={handleDropdownClick}
                aria-label={isExpanded ? 'Скрыть подменю' : 'Показать подменю'}
            >
                <span className={`dropdown-arrow ${isExpanded ? 'open' : ''}`}></span>
            </button>
        </div>
    );
};

const NavItemWithDropdown = ({ 
  item, 
  isDropdownVisible, 
  onMouseEnter, 
  onMouseLeave, 
  onToggleDropdown, 
  isExpanded, 
  isMobile,
  menuData 
}) => {
    return (
        <div className={`nav-item-wrapper ${isExpanded ? 'expanded' : ''}`}>
            {isMobile ? (
                <MobileNavItem 
                    item={item}
                    isExpanded={isExpanded}
                    onToggleDropdown={onToggleDropdown}
                />
            ) : (
                <DesktopNavLink 
                    item={item}
                    isHovered={isDropdownVisible}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            )}
            
            {isMobile && isExpanded && menuData && menuData.length > 0 && (
                <div className="dropdown-menu-wrapper mobile-dropdown">
                    <DropdownContent data={menuData} />
                </div>
            )}
        </div>
    );
};

const searchCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000;

export default function Header({ 
  headerData
}) {
  const [searchValue, setSearchValue] = useState("");
  const [activeId, setActiveId] = useState(false);
  
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false); 
  const [hoveredItem, setHoveredItem] = useState(null); 
  const [expandedNavItem, setExpandedNavItem] = useState(null);
  
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  
  const timerRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const searchControllerRef = useRef(null);

  const { language, changeLanguage } = useLanguage();
  const getLocalizedPath = useLocalizedPath();

  const [searchResults, setSearchResults] = useState([]); 
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    searchCache.clear();
  }, [language]);

  const performSearch = useCallback(async (query) => {
    if (!query || query.length < 3) {
        setSearchResults([]);
        return;
    }

    const cacheKey = `${language}:${query.toLowerCase().trim()}`;
    const cached = searchCache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setSearchResults(cached.results);
        return;
    }

    setIsSearching(true);
    
    if (searchControllerRef.current) {
        searchControllerRef.current.abort();
    }
    
    searchControllerRef.current = new AbortController();
    
    try {
        const response = await fetch(
            `/api/search?q=${encodeURIComponent(query)}&lang=${language}`, 
            {
                signal: searchControllerRef.current.signal,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const results = data.results || [];
        setSearchResults(results);
        
        if (results.length > 0) {
            searchCache.set(cacheKey, {
                results: results,
                timestamp: Date.now()
            });
        }
        
    } catch (error) {
        if (error.name === 'AbortError') {
            return;
        }
        
        if (process.env.NODE_ENV === 'development') {
            setSearchResults([
                {
                    id: 'test-1',
                    title: 'Тестовый результат поиска',
                    url: '/test',
                    type: 'Страница'
                }
            ]);
        } else {
            setSearchResults([]);
        }
    } finally {
        setIsSearching(false);
        searchControllerRef.current = null;
    }
  }, [language]);

  useEffect(() => {
    performSearch(debouncedSearchValue);
  }, [debouncedSearchValue, performSearch]);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth <= 1279);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  useEffect(() => {
    if (isMenuButtonClicked && isMobileView) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      const menuContainer = document.querySelector('.header-nav');
      if (menuContainer) {
        menuContainer.style.overflow = 'auto';
        menuContainer.style.maxHeight = 'calc(100vh - 100px)';
      }
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      const menuContainer = document.querySelector('.header-nav');
      if (menuContainer) {
        menuContainer.style.overflow = '';
        menuContainer.style.maxHeight = '';
      }
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      const menuContainer = document.querySelector('.header-nav');
      if (menuContainer) {
        menuContainer.style.overflow = '';
        menuContainer.style.maxHeight = '';
      }
    };
  }, [isMenuButtonClicked, isMobileView]); 

  useEffect(() => {
    return () => {
      if (searchControllerRef.current) {
        searchControllerRef.current.abort();
      }
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const fallbackNav = [
    { title: 'Цены', href: '/prices' },
    { title: 'О нас', href: '/about-us' },
    { title: 'Портфолио', href: '/portfolio' },
    { title: 'Услуги', href: '/services' },
    { title: 'Блог', href: '/blog' },
    { title: 'Связаться', href: '/contacts' },
    { title: 'Что мы делаем', href: '/what-we-do' },
  ];
  const fallbackCtaText = useTranslate("Напишите нам!");

  const navItems = headerData?.nav && headerData.nav.length > 0 ? headerData.nav : fallbackNav;
  const phoneNumber = headerData?.phoneNumber || "8 800 543 22 44";
  const whatsappLink = headerData?.whatsappLink || '#whatsapp'; 
  const telegramLink = headerData?.telegramLink || '#telegram'; 
  const buttonText = headerData?.ctaText || fallbackCtaText; 

  const defaultItem = navItems.find(item => item.title === 'Услуги' || item.href === '/services');

  const handleMenuClick = () => {
    const newMenuState = !isMenuButtonClicked;
    setIsMenuButtonClicked(newMenuState);
    setActiveId(false); 
    
    if (newMenuState) {
        setHoveredItem(defaultItem || navItems[0] || null); 
    } else {
        setHoveredItem(null); 
        setExpandedNavItem(null);
    }
  };
  
  const handleToggleDropdown = (item) => {
    if (expandedNavItem && expandedNavItem.href === item.href) {
      setExpandedNavItem(null);
      setHoveredItem(null);
    } else {
      setExpandedNavItem(item);
      setHoveredItem(item);
    }
  };
  
  const handleItemMouseEnter = useCallback((item) => {
    if (isMobileView) return;
    
    if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
    }
    setHoveredItem(item);
  }, [isMobileView]);
  
  const handleItemMouseLeave = useCallback(() => {
    if (isMobileView) return;
    
    if (!isMenuButtonClicked) {
        timerRef.current = setTimeout(() => {
             setHoveredItem(null);
        }, 200); 
    }
  }, [isMobileView, isMenuButtonClicked]);
  

  const handleSearchClick = () => {
    const nextActiveId = !activeId;
    setActiveId(nextActiveId);
    
    setIsMenuButtonClicked(false); 
    setHoveredItem(null); 
    setExpandedNavItem(null);
    
    if (!nextActiveId) {
      setSearchValue('');
      setSearchResults([]); 
    } else {
      setTimeout(() => {
        const searchField = document.querySelector('.search-field');
        if (searchField) searchField.focus();
      }, 100);
    }
  };
  
  const handleCloseSearch = () => {
    setActiveId(false);
    setSearchValue('');
    setSearchResults([]);
    
    if (searchControllerRef.current) {
      searchControllerRef.current.abort();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeId) {
        handleCloseSearch();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeId]);
  
  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);
  const handleLangChange = (lang) => {
    changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const getDropdownData = () => {
      // Если поиск активен, дропдаун не показываем
      if (activeId) {
          return [];
      }
      
      const specificContent = hoveredItem?.dropdownContent;
      const defaultContentFromPayload = headerData?.defaultDropdownContent;
      
      if (specificContent && specificContent.length > 0) {
          return specificContent; 
      }
      
      if (hoveredItem || isMenuButtonClicked || expandedNavItem) {
          // Payload данные
          if (defaultContentFromPayload && defaultContentFromPayload.length > 0) {
              return defaultContentFromPayload;
          }
          // Статическая заглушка
          return STATIC_DEFAULT_DROPDOWN;
      }
      
      return []; 
  };

  const menuData = getDropdownData();
  // Меню видимо, если: 1) есть наведенный пункт И есть данные ИЛИ 2) меню открыто кнопкой (мобильная логика) ИЛИ 3) раскрыт пункт на мобильном
  const isDropdownVisible = (hoveredItem && menuData.length > 0) || isMenuButtonClicked || expandedNavItem;

  const shouldShowNavigation = activeId === false;

  return (
    <StyledHeader 
        className={`
          ${isMenuButtonClicked ? 'menu-open' : ''} 
          ${activeId === true ? 'search-active' : ''} 
          ${isScrolled ? 'scrolled' : ''}
          ${isMobileView ? 'mobile-view' : 'desktop-view'}
        `}
    >
      <Link className='logo-link' href={getLocalizedPath("/")}>
        <Image 
          className='header-logo' 
          src={HeaderLogo} 
          alt="Логотип Double Systems" 
          width="132" 
          height="56" 
          priority
        />
      </Link>
      
      <a className='header-phone' href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
        {phoneNumber}
      </a>
    
      <ul className={`socials-list ${shouldShowNavigation ? 'active-block' : ''}`}>
        <li className='social-item'>
          <button 
            className='social-link search' 
            onClick={handleSearchClick}
            aria-label={activeId ? 'Закрыть поиск' : 'Открыть поиск'}
            aria-expanded={activeId}
          >
            <Image src={SearchLogo} alt='Search' />
          </button>
        </li>
        <li className='social-item'>
          <a className='social-link' href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Image src={WhatsAppLogo} alt='Whats app' />
          </a>
        </li>
        <li className='social-item'>
          <a className='social-link' href={telegramLink} target="_blank" rel="noopener noreferrer">
            <Image src={TgLogo} alt='Telegram' />
          </a>
        </li>
      </ul>
      
      <nav className={`header-nav ${shouldShowNavigation ? 'active-block' : ''} ${isMenuButtonClicked ? 'menu-scrollable' : ''}`}>
        {navItems.map((item, index) => (
          <NavItemWithDropdown 
            key={index}
            item={item}
            isDropdownVisible={isDropdownVisible && hoveredItem && hoveredItem.href === item.href}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
            onToggleDropdown={handleToggleDropdown}
            isExpanded={expandedNavItem && expandedNavItem.href === item.href}
            isMobile={isMobileView && isMenuButtonClicked}
            menuData={isMobileView && expandedNavItem && expandedNavItem.href === item.href ? menuData : []}
          />
        ))}
      </nav>
      
      {!isMobileView && isDropdownVisible && (
          <div 
            className="dropdown-menu-wrapper"
            onMouseEnter={() => handleItemMouseEnter(hoveredItem || defaultItem)} 
            onMouseLeave={handleItemMouseLeave} 
          >
              <DropdownContent data={menuData} />
          </div>
      )}

      <div className={`search-container ${activeId === true ? 'active-block' : ''}`}>
        <div className="search-input-wrapper">
          <input 
            name='search' 
            className='search-field' 
            placeholder='Поиск по сайту'
            type='search' 
            autoComplete='off' 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Поиск по сайту"
          />
          <button className='search-button' aria-label="Выполнить поиск">
            <Image src={SearchLogo} alt='Search' />
          </button>
        </div>
        
        <button 
          className='clear-button' 
          onClick={handleCloseSearch}
          aria-label="Закрыть поиск"
        /> 
        
        {activeId && (
          <div className='search-results-dropdown'>
            {isSearching && (
                <div className="search-state-message">
                  <div className="loading-spinner"></div>
                  <p className="loading-state">Ищем...</p>
                </div>
            )}
            
            {!isSearching && searchResults.length === 0 && searchValue.length >= 3 && (
              <div className="search-state-message">
                <p className="no-results-state">
                  По запросу <strong>"{searchValue}"</strong> ничего не найдено
                </p>
                <p className="search-tips">
                  Попробуйте изменить запрос или использовать другие ключевые слова
                </p>
              </div>
            )}

            {!isSearching && searchResults.length > 0 && (
              <>
                <div className="search-results-header">
                  <span className="results-count">
                    Найдено: {searchResults.length} {searchResults.length === 1 ? 'результат' : 
                    searchResults.length > 1 && searchResults.length < 5 ? 'результата' : 'результатов'}
                  </span>
                </div>
                <SearchResultsList 
                  results={searchResults} 
                  onCloseSearch={handleCloseSearch} 
                />
              </>
            )}
            
            {!isSearching && searchValue.length > 0 && searchValue.length < 3 && (
              <div className="search-state-message">
                <p className="hint-state">Введите минимум 3 символа для поиска</p>
              </div>
            )}

            {!isSearching && searchValue.length === 0 && (
              <div className="search-state-message">
                <p className="initial-state">
                  Введите поисковый запрос выше
                </p>
                <div className="search-examples">
                  <p>Например:</p>
                  <ul>
                    <li>Разработка сайтов</li>
                    <li>Мобильные приложения</li>
                    <li>AI проекты</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className={`lang-dropdown ${shouldShowNavigation ? 'active-block' : ''}`}>
        <button 
          className="lang-dropdown-toggle" 
          onClick={toggleLangDropdown}
          aria-expanded={isLangDropdownOpen}
          aria-label="Выбор языка"
        >
          {language}
          <span className={`dropdown-arrow1 ${isLangDropdownOpen ? 'open' : ''}`}>▼</span>
        </button>
        
        {isLangDropdownOpen && (
          <div className="lang-dropdown-menu">
            <button 
              className={`lang-option ${language === 'En' ? 'active' : ''}`} 
              onClick={() => handleLangChange('En')}
            >
              En
            </button>
            <button 
              className={`lang-option ${language === 'Ru' ? 'active' : ''}`} 
              onClick={() => handleLangChange('Ru')}
            >
              Ru
            </button>
          </div>
        )}
      </div>
      
      <Link className='message-button' href={getLocalizedPath("/contacts")}>
        {buttonText}
      </Link>
      
      <button 
        className='menu-button' 
        onClick={handleMenuClick}
        aria-label={isMenuButtonClicked ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isMenuButtonClicked}
      >
        <span className='button-decor'></span>
      </button>
    </StyledHeader>
  );
}