import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    width: 100%;
    margin: 0 auto;
    height: 86px;
    background-color: #fff;
    color: #000;
    z-index: 100;
    box-sizing: border-box;

    &.scrolled {
        height: 60px;
    }

    .logo-link {
        cursor: pointer;
        z-index: 101;
    }

    .header-phone {
        color: rgba(47, 52, 63, 1);
        font-weight: 600;
        font-size: 20px;
    }

    .header-phone:hover {
        color: rgba(255, 70, 0, 1)
    }

    .socials-list {
        display: flex;
        gap: 24px;
        align-items: center;
        list-style-type: none;
    }

    .social-link, .search-button {
        background: none;
        border: none;
        transition: filter 0.3s ease;
        cursor: pointer;
    }

    .social-link:hover, .search-button:hover {
        filter: brightness(2);
    }

    .header-nav {
        display: flex;
        justify-content: space-between;
        width: 706px;
    }

    .nav-item-wrapper {
        position: relative;
    }

    .nav-link {
        font-size: 16px;
        color: rgba(47, 52, 63, 1);
        font-weight: 600;
        cursor: pointer;
        transition: color 0.2s ease;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .nav-link:hover,
    .nav-link.hovered {
        color: rgba(255, 70, 0, 1);
    }

    /* Мобильные стили для навигации */
    .mobile-nav-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .mobile-nav-link {
        flex: 1;
        text-align: left;
        padding: 12px 0;
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        font-size: inherit;
        font-weight: inherit;
        cursor: pointer;
    }

    .dropdown-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6c757d;
        transition: color 0.2s ease;
    }

    .dropdown-toggle:hover,
    .dropdown-toggle.expanded {
        color: rgba(255, 70, 0, 1);
    }
    .dropdown-arrow {
    position: relative;
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    }

    .dropdown-arrow1 {
        font-size: 10px;
    }

    .dropdown-arrow1.open {
        transform: rotate(180deg);
    }

    .dropdown-arrow::before,
    .dropdown-arrow::after {
    content: '';
    position: absolute;
    background-color: #000000ff;
    border-radius: 1px;
    }

    .dropdown-arrow::before {
    top: 2px;
    left: -2px;
    width: 9px;
    height: 3px;
    transform: rotate(45deg);
    }

    .dropdown-arrow::after {
    top: 2px;
    right: 0;
    width: 9px;
    height: 3px;
    transform: rotate(-45deg);
    }

    .lang-container {
        display: flex;
        gap: 18px;
    }

    .lang-button {
        border: none;
        background-color: rgba(255, 70, 0, 0.12);
        color: rgba(255, 70, 0, 1);
        border-radius: 50%;
        width: 34px;
        height: 34px;
        cursor: pointer;
    }

    .lang-button:hover {
        background-color: rgba(255, 70, 0, 0.32);
    }

    .active {
        background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
        color: #fff;
    }

    .active:hover {
        background: linear-gradient(rgba(38, 49, 67, 0.8), rgba(11, 14, 21, 0.8));
    }

    .message-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 157px;
        height: 34px;
        background-color: rgba(120, 120, 128, 0.12);
        color: rgba(255, 70, 0, 1);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        border-radius: 30px;
        border: none;
        text-decoration: none;
    }

    .message-button:hover {
        background-color: rgba(255, 70, 0, 1);
        color: #fff;
    }

    .menu-button {
        position: relative;
        display: flex;
        align-items: center;
        background-color: transparent;
        width: 28px;
        height: 19px;
        border: none;
        cursor: pointer;
        z-index: 101;
    }

    .menu-button::after {
        position: absolute;
        content: "";
        top: 0;
        width: 28px;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
        transition: all 0.3s ease;
    }

    .menu-button::before {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        width: 18px;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
        transition: all 0.3s ease;
    }

    .button-decor {
        height: 3px;
        width: 28px;
        background-color: rgba(255, 70, 0, 1);
        transition: all 0.3s ease;
    }

    .menu-button:hover::after, .menu-button:hover::before, .menu-button:hover .button-decor {
        background-color: #000;
    }

    /* Состояние активного меню */
    &.menu-open .menu-button::after {
        transform: rotate(45deg) translate(5px, 5px);
        width: 20px;
    }

    &.menu-open .menu-button::before {
        transform: rotate(-45deg) translate(5px, -5px);
        width: 20px;
        left: 0px;
        top: 14px;
    }

    &.menu-open .button-decor {
        opacity: 0;
    }

    .socials-list, .header-nav{
        display: none; 
    }

    .search-container {
        display: none;
        max-width: 886px;
        width: 100%;
        margin: 0 20px;
    }

    .search-container.active-block {
        display: flex;
    }

    .header-nav.active-block, .socials-list.active-block {
        display: flex;
    }

    .search-input-wrapper {
        display: flex;
        width: 100%;
    }

    .search-debug-info, .search-results-header, .loading-state {
        padding: 20px 30px;
    }

    .no-results-state, .search-tips {
        padding: 0px 30px;
        padding-bottom: 10px;
    }

    .no-results-state {
        padding-top: 10px;
    }

    .search-field {
        padding-bottom: 5px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #000;
    }

    .search-field:focus {
        outline: none;
        border-bottom: 1px solid rgba(255, 70, 0, 1);
    }

    .search-field::-webkit-search-cancel-button {
        display: none;
    }

    .search-field::-moz-search-cancel-button {
        display: none;
    }

    .search-field::-ms-clear {
        display: none;
    }

    .search-field::placeholder {
        color: #000;
    }

    .search-button {
        background: none;
        border: none;
        margin-left: 24px;
        cursor: pointer;
    }

    .clear-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: none;
        border: none;
        width: 18px;
        height: 18px;
        margin-left: 24px;
        cursor: pointer;
    }

    .clear-button::before {    
        position: absolute;
        content: "";
        width: 18px;
        height: 2px;
        background-color: rgba(255, 70, 0, 1);
        transform: rotate(45deg);
    }

    .clear-button::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 18px;
        background-color: rgba(255, 70, 0, 1);
        transform: rotate(45deg);
    }

    .clear-button:hover::before, .clear-button:hover::after  {
        background-color: #000;
    }

    .lang-dropdown {
        position: relative;
        display: inline-block;
    }

    .lang-dropdown-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background-color: rgba(120, 120, 128, 0.12);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #574c49ff;
        transition: all 0.2s ease;
        min-width: 60px;
        justify-content: center;
    }

    .lang-dropdown-toggle:hover {
        background: #e9ecef;
    }

    .dropdown-arrow {
        font-size: 10px;
        transition: transform 0.2s ease;
        color: #6c757d;
    }

    .dropdown-arrow.open {
        transform: rotate(180deg);
    }

    .lang-dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #dee2e6;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        z-index: 100;
        margin-top: 4px;
        overflow: hidden;
    }
    
    .header-nav.menu-scrollable {
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}

    .lang-option {
        display: block;
        width: 100%;
        padding: 8px 16px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        transition: background-color 0.2s ease;
        color: #495057;
    }

    .lang-option:hover {
        background: #f8f9fa;
    }

    .lang-option.active {
        background: rgba(125, 125, 125, 1);
        color: white;
        font-weight: 500;
    }

    .lang-option:not(:last-child) {
        border-bottom: 1px solid #dee2e6;
    }

    .dropdown-menu-wrapper {
        position: fixed; 
        top: 85px; 
        left: 0;
        width: 100%;
        min-height: 250px; 
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        z-index: 90; 
        padding: 30px 40px;
        padding-top: 15px;
        margin-top: -5px;
        opacity: 1;
        transition: opacity 0.3s ease; 
        box-sizing: border-box;
    }
    
    &.scrolled .dropdown-menu-wrapper {
        top: 60px; 
    }

    .header-dropdown-content {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0;
        
        .portfolio-list {
            padding: 0;
            margin: 0;
        }
    }

        .search-results-dropdown {
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 1000;
}

&.scrolled .search-results-dropdown {
    top: 59px;
}

.initial-state, .search-examples, .hint-state {
    padding: 10px 30px;
}

.search-examples ul {
    padding-left: 20px;
    padding-top: 5px;
}

.search-results-list {
  padding: 0;
}

.results-group {
  border-bottom: 1px solid #f5f5f5;
}

.results-group:last-child {
  border-bottom: none;
}

.group-title {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 16px 20px 12px;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.group-count {
  font-size: 11px;
  color: #888;
  font-weight: normal;
}

.results-group-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-item {
  border-bottom: 1px solid #f8f8f8;
}

.result-item:last-child {
  border-bottom: none;
}

.result-link {
  display: block;
  padding: 16px 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s;
}

.result-link:hover {
  background-color: #f0f7ff;
}



.item-meta {
  margin-bottom: 6px;
}

.item-relevance {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 8px;
  font-weight: 500;
}

.item-relevance.high {
  background: #e8f5e8;
  color: #2e7d32;
}

.item-relevance.medium {
  background: #fff3e0;
  color: #ef6c00;
}

.item-relevance.low {
  background: #f5f5f5;
  color: #757575;
}

.item-url {
  display: block;
  font-size: 12px;
  color: #666;
  font-family: monospace;
}

.no-results {
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.search-highlight {
    background-color: #ffeb3b;
    padding: 1px 3px;
    border-radius: 2px;
    font-weight: 600;
    color: #000;
}

.item-snippet {
    display: block;
    font-size: 12px;
    color: #666;
    line-height: 1.4;
    margin-top: 4px;
    margin-bottom: 4px;
    
    /* Обрезаем длинный текст */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.item-debug {
    font-size: 10px;
    padding: 1px 4px;
    background: #e9ecef;
    color: #6c757d;
    border-radius: 8px;
}

    /* ======================================= */

    @media (max-width: 1799px) {
        padding: 0 36px;

        .header-phone, .message-button {
            display: none;
        }

        .dropdown-menu-wrapper {
             padding: 30px 36px;
             padding-top: 35px;
        }
    }

    @media (max-width: 1279px) {
        &.scrolled {
             height: 86px;
        }
        
        &.scrolled .dropdown-menu-wrapper {
            top: 75px; 
        }

        .dropdown-menu-wrapper {
            top: 155px;
        }
        /* Показываем кнопку меню на планшетах */
        .menu-button {
            display: flex;
        }

        /* Скрываем обычную навигацию на планшетах по умолчанию */
        .header-nav.active-block{
            display: none;
        }

    &.menu-open .header-nav {
        position: absolute;
        top: 85px;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 30px 36px;
        width: 100%;
        height: auto;
        min-height: calc(100vh - 86px);
        background: #fff;
        gap: 0;
        z-index: 95;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: scroll;
    }

    &.menu-open .dropdown-menu-wrapper {
        display: block;
        position: static;
        padding: 20px 0;
        margin-top: 0;
        box-shadow: none;
        min-height: auto;
        width: 100%;
        top: auto;
        left: auto;
    }

    .dropdown-menu-wrapper {
        display: none;
    }

        &.menu-open .nav-item-wrapper {
            width: 100%;
            border-bottom: 1px solid #f0f0f0;
        }

        &.menu-open .mobile-nav-item {
            padding: 15px 0;
        }

        &.menu-open .mobile-nav-link {
            font-size: 18px;
            padding: 0;
        }


        .socials-list {
            margin-left: auto;
        }

        .lang-dropdown {
            margin-right: 30px;
            margin-left: auto;
        }
    }
        @media (max-width: 756px) {
        padding: 0 36px;

        &.menu-open {
            height: 108px;
            background-color: rgba(38, 49, 67, 1);
        }

        &.active-block {
            background: rgba(38, 49, 67, 1);
        }

        &.active-block .header-logo {
            filter: grayscale(100%) brightness(470%);
        }

        &.active-block .search-button {
            filter: invert(100%);
        }

        &.active-block .lang-button {
            background-color: #ffffff7b;
        }

        &.active-block .active.lang-button {
            background: none;
            color: rgba(255, 70, 0, 1);
            background-color: #ffffffff;
        }
        
        .header-phone, .social-link.search, .message-button, .search-container, .search-container.active-block {
            display: none;
        }

        .menu-button::before, .menu-button::after, .button-decor {
            background-color: rgba(255, 70, 0, 1);
        }

        .menu-button:hover::after, .menu-button:hover::before, .menu-button:hover .button-decor {
            background-color: rgba(255, 70, 0, 1);
        }

        .socials-list.active-block {
            display: flex;
            margin-left: auto;
            margin-right: 30px;
        }

        .search-container.active-block {
            position: absolute;
            top: 85px;
            left: 0px;
            display: flex;
            align-items: center;
            width: 100%;
            height: 80px;
            margin-left: 0;
            padding: 0 36px;
            background: rgba(38, 49, 67, 1);
        }

        .lang-dropdown.active-block {
            display: flex;
            margin-left: auto;
            margin-right: 30px;
        }

        .lang-dropdown-toggle {
            display: none;
            background-color: #f8f9fa;
        }

        &.menu-open .lang-dropdown-toggle {
            display: flex;
        }

        &.menu-open .social-link img {
            filter: brightness(100);
            display: none;
        }

        &.menu-open .header-logo {
            filter: brightness(0) invert(1);
        }

        .search-field {
            padding-left: 2px;
            padding-bottom: 10px;
            border: none;
            border-bottom: 1px solid #fff;
            background-color: transparent;
        }

        .search-field::placeholder {
            color: #fff;
        }

        .dropdown-arrow::before, .dropdown-arrow::after {
            background-color: #fff;
        }

        .dropdown-arrow.open::before, .dropdown-arrow.open::after {
            background-color: rgba(255, 70, 0, 1);
        }

        /* Мобильное меню */
        &.menu-open .header-nav {
            position: absolute;
            top: 85px;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 30px 36px;
            padding-top: 0;
            width: 100%;
            height: auto;
            min-height: calc(100vh - 86px);
            background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
            gap: 0;
            z-index: 95;
            box-shadow: none;
        }

        &.menu-open .nav-item-wrapper {
            width: 100%;
            border-bottom: none;
        }

        &.menu-open .mobile-nav-item {
            padding: 15px 0;
        }

        &.menu-open .mobile-nav-link {
            font-size: 24px;
            font-weight: 400;
            padding: 0;
            color: #fff;
        }

        &.menu-open .mobile-nav-link.expanded {
            color: rgba(255, 70, 0, 1);
        }

        /* Выпадающее меню на мобильном */
        &.menu-open .dropdown-menu-wrapper {
            display: block;
            position: static;
            padding: 20px 0;
            margin-top: 0;
            background-color: transparent;
            box-shadow: none;
            min-height: auto;
        }

        .socials-list.active-block {
            margin-right: 0;
            margin-left: 20px;
        }

        .item-title, .item-link {
            color: #fff;
        }

        .item-container::before {
            background-color: #fff;
        }

        .header-dropdown-content {
            padding-left: 0;
        }
    }
`