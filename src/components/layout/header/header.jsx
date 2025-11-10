"use client";

import { useState } from 'react';
import Image from 'next/image';
import { StyledHeader } from "./style"
import HeaderLogo from '@/assets/images/header-logo.svg'
import SearchLogo from '@/assets/images/svg/search-logo.svg'
import WhatsAppLogo from '@/assets/images/svg/whatsapp.svg'
import TgLogo from '@/assets/images/svg/telegram.svg'
import Link from 'next/link'

export default function Header() {

    const [searchValue, setSearchValue] = useState("");
    const [activeId, setActiveId] = useState(false)

    const handleClear = () => {
        setSearchValue('');
    };

    const handleMenu = () => {
        setActiveId(!activeId);
    }

    return (
    <StyledHeader className={`${activeId === true ? 'active-block' : ''}`}>
        <Link className='logo-link' href="/"><Image className='header-logo' src={HeaderLogo} alt="Логотип Double Systems" width="132" height="56"></Image></Link>
        <a className='header-phone' href='tel:8 800 543 22 44'>8 800 543 22 44</a>
        <ul className={`socials-list ${activeId === false ? 'active-block' : ''}`}>
            <li className='social-item'><button className='social-link search' href='search' onClick={handleMenu}><Image src={SearchLogo} alt='Search'></Image></button></li>
            <li className='social-item'><a className='social-link' href='whatsapp'><Image src={WhatsAppLogo} alt='Whats app'></Image></a></li>
            <li className='social-item'><a className='social-link' href='telegram'><Image src={TgLogo} alt='Telegram'></Image></a></li>
        </ul>
        <nav className={`header-nav ${activeId === false ? 'active-block' : ''}`}>
            <Link className='nav-link' href="/prices">Цены</Link>
            <Link className='nav-link' href="/about-us">О нас</Link>
            <Link className='nav-link' href="/portfolio">Портфолио</Link>
            <Link className='nav-link' href="/services">Услуги</Link>
            <Link className='nav-link' href="/blog">Блог</Link>
            <Link className='nav-link' href="/contacts">Связаться</Link>
            <Link className='nav-link' href="/what-we-do">Что мы делаем</Link>
        </nav>
        <div className={`search-container ${activeId === true ? 'active-block' : ''}`}>
            <input name='search' className='search-field' placeholder='Поиск по сайту' type='search' 
            autoComplete='search' value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
            <button className='search-button'><Image src={SearchLogo} alt='Search'></Image></button>
            <button className='clear-button' onClick={handleClear}/>
        </div>
        <div className={`lang-container ${activeId === true ? 'active-block' : ''}`}>
            <button className='active lang-button'>Ru</button>
            <button className='lang-button'>En</button>
        </div>
        <Link className='message-button' href="/contacts">Напишите нам!</Link>
        <button className='menu-button' onClick={handleMenu}><span className='button-decor'></span></button>
    </StyledHeader>
    )
}