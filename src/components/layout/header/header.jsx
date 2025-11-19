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

export default function Header({ 
  headerData = {
    phone: "8 800 543 22 44",
    nav: [
      { href: "/prices", title: "Цены" },
      { href: "/about-us", title: "О нас" },
      { href: "/portfolio", title: "Портфолио" },
      { href: "/services", title: "Услуги" },
      { href: "/blog", title: "Блог" },
      { href: "/contacts", title: "Связаться" },
      { href: "/what-we-do", title: "Что мы делаем" }
    ],
    cta: "Напишите нам!"
  }
}) {
  const [searchValue, setSearchValue] = useState("");
  const [activeId, setActiveId] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { language, changeLanguage } = useLanguage();

  const navPrices = useTranslate("Цены");
  const navAbout = useTranslate("О нас");
  const navPortfolio = useTranslate("Портфолио");
  const navServices = useTranslate("Услуги");
  const navBlog = useTranslate("Блог");
  const navContacts = useTranslate("Связаться");
  const navWhatWeDo = useTranslate("Что мы делаем");
  const ctaText = useTranslate("Напишите нам!");

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
  
  // Функция для скрытия инпута
  const handleCloseSearch = () => {
    setActiveId(false);
    setSearchValue(''); // Очищаем значение при закрытии для удобства
  };

  return (
    <StyledHeader className={`${activeId === true ? 'active-block' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <Link className='logo-link' href="/">
        <Image className='header-logo' src={HeaderLogo} alt="Логотип Double Systems" width="132" height="56" />
      </Link>
      
      <a className='header-phone' href='tel:8 800 543 22 44'>
        8 800 543 22 44
      </a>
    
      <ul className={`socials-list ${activeId === false ? 'active-block' : ''}`}>
        <li className='social-item'>
          <button className='social-link search' onClick={handleMenu}>
            <Image src={SearchLogo} alt='Search' />
          </button>
        </li>
        <li className='social-item'>
          <a className='social-link' href='whatsapp'>
            <Image src={WhatsAppLogo} alt='Whats app' />
          </a>
        </li>
        <li className='social-item'>
          <a className='social-link' href='telegram'>
            <Image src={TgLogo} alt='Telegram' />
          </a>
        </li>
      </ul>
      
      <nav className={`header-nav ${activeId === false ? 'active-block' : ''}`}>
        <Link className='nav-link' href="/prices">{navPrices}</Link>
        <Link className='nav-link' href="/about-us">{navAbout}</Link>
        <Link className='nav-link' href="/portfolio">{navPortfolio}</Link>
        <Link className='nav-link' href="/services">{navServices}</Link>
        <Link className='nav-link' href="/blog">{navBlog}</Link>
        <Link className='nav-link' href="/contacts">{navContacts}</Link>
        <Link className='nav-link' href="/what-we-do">{navWhatWeDo}</Link>
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
      
      <Link className='message-button' href="/contacts">
        {ctaText}
      </Link>
      
      <button className='menu-button' onClick={handleMenu}>
        <span className='button-decor'></span>
      </button>
    </StyledHeader>
  );
}