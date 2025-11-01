"use client";

import Image from 'next/image';
import { StyledHeader } from "./style"
import HeaderLogo from '@/assets/images/header-logo.svg'
import SearchLogo from '@/assets/images/svg/search-logo.svg'
import WhatsAppLogo from '@/assets/images/svg/whatsapp.svg'
import TgLogo from '@/assets/images/svg/telegram.svg'
import Link from 'next/link'

export default function Header() {
    return (
    <StyledHeader>
        <Link className='logo-link' href="/"><Image className='header-logo' src={HeaderLogo} alt="Логотип Double Systems" width="132" height="56"></Image></Link>
        <a className='header-phone' href='tel:8 800 543 22 44'>8 800 543 22 44</a>
        <ul className='socials-list'>
            <li className='social-item'><a className='social-link search' href='search'><Image src={SearchLogo} alt='Search'></Image></a></li>
            <li className='social-item'><a className='social-link' href='whatsapp'><Image src={WhatsAppLogo} alt='Whats app'></Image></a></li>
            <li className='social-item'><a className='social-link' href='telegram'><Image src={TgLogo} alt='Telegram'></Image></a></li>
        </ul>
        <nav className='header-nav'>
            <a className='nav-link' href="/prices">Prices</a>
            <Link className='nav-link' href="/about-us">About Us</Link>
            <a className='nav-link'  href="/portfolio">Portfolio</a>
            <a className='nav-link' href="/services">Services</a>
            <Link className='nav-link' href="/blog">Blog</Link>
            <Link className='nav-link' href="/contacts">Contact Us</Link>
            <a className='nav-link' href="/what-we-do">What we do</a>
        </nav>
        <div className='lang-container'>
            <button className='active lang-button'>Ru</button>
            <button className='lang-button'>En</button>
        </div>
        <Link className='message-button' href="/contacts">Напишите нам!</Link>
        <button className='menu-button'><span className='button-decor'></span></button>
    </StyledHeader>
    )
}