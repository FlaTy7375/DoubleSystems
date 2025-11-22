"use client";

import { useState, useEffect } from 'react';
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

export default function Header({ 
  headerData
}) {
  const [searchValue, setSearchValue] = useState("");
  const [activeId, setActiveId] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { language, changeLanguage } = useLanguage();
  const getLocalizedPath = useLocalizedPath();

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

  const handleMenu = () => setActiveId(!activeId);
  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);

  const handleLangChange = (lang) => {
    changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleCloseSearch = () => {
    setActiveId(false);
    setSearchValue('');
  };

  return (
    <StyledHeader className={`${activeId === true ? 'active-block' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      {/* Логотип */}
      <Link className='logo-link' href={getLocalizedPath("/")}>
        <Image className='header-logo' src={HeaderLogo} alt="Логотип Double Systems" width="132" height="56" />
      </Link>
      
      {/* Динамический номер телефона */}
      <a className='header-phone' href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
        {phoneNumber}
      </a>
    
      <ul className={`socials-list ${activeId === false ? 'active-block' : ''}`}>
        <li className='social-item'>
          <button className='social-link search' onClick={handleMenu}>
            <Image src={SearchLogo} alt='Search' />
          </button>
        </li>
        <li className='social-item'>
          {/* Динамическая ссылка на WhatsApp */}
          <a className='social-link' href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Image src={WhatsAppLogo} alt='Whats app' />
          </a>
        </li>
        <li className='social-item'>
          {/* Динамическая ссылка на Telegram */}
          <a className='social-link' href={telegramLink} target="_blank" rel="noopener noreferrer">
            <Image src={TgLogo} alt='Telegram' />
          </a>
        </li>
      </ul>
      
      {/* Динамическое меню */}
      <nav className={`header-nav ${activeId === false ? 'active-block' : ''}`}>
        {navItems.map((item, index) => (
          <Link key={index} className='nav-link' href={getLocalizedPath(item.href)}>
            {useTranslate(item.title)}
          </Link>
        ))}
      </nav>
      
      <div className={`search-container ${activeId === true ? 'active-block' : ''}`}>
        <input 
          name='search' 
          className='search-field' 
          placeholder='Поиск по сайту'
          type='search' 
          autoComplete='search' 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='search-button'>
          <Image src={SearchLogo} alt='Search' />
        </button>
        <button className='clear-button' onClick={handleCloseSearch} />
      </div>
      
      <div className={`lang-dropdown ${activeId === true ? 'active-block' : ''}`}>
        <button className="lang-dropdown-toggle" onClick={toggleLangDropdown}>
          {language}
          <span className={`dropdown-arrow ${isLangDropdownOpen ? 'open' : ''}`}>▼</span>
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
      
      {/* Кнопка "Написать" */}
      <Link className='message-button' href={getLocalizedPath("/contacts")}>
        {buttonText}
      </Link>
      
      <button className='menu-button' onClick={handleMenu}>
        <span className='button-decor'></span>
      </button>
    </StyledHeader>
  );
}