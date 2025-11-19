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

    &.scrolled {
        height: 60px;
    }

    .logo-link {
        cursor: pointer;
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

    .nav-link {
        font-size: 16px;
        color: rgba(47, 52, 63, 1);
        font-weight: 600;
        cursor: pointer;
    }

    .nav-link:hover {
        color: rgba(255, 70, 0, 1)
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
    }

    .menu-button::after {
        position: absolute;
        content: "";
        top: 0;
        width: 28px;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
    }

    .menu-button::before {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        width: 18px;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
    }

    .button-decor {
        height: 3px;
        width: 28px;
        background-color: rgba(255, 70, 0, 1);
    }

    .menu-button:hover::after, .menu-button:hover::before, .menu-button:hover .button-decor {
        background-color: #000;
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
        width: 12px;
        height: 2px;
        background-color: rgba(255, 70, 0, 1);
        transform: rotate(45deg);
    }

    .clear-button::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 12px;
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

    &:hover {
        background: #e9ecef;
        border-color: #adb5bd;
    }
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

    &:hover {
        background: #f8f9fa;
    }

    &.active {
        background: rgba(125, 125, 125, 1);
        color: white;
        font-weight: 500;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #dee2e6;
    }
    }


    @media (max-width: 1799px) {
        padding: 0 36px;

        .header-phone, .message-button {
            display: none;
        }
    }

    @media (max-width: 1279px) {

        &.scrolled {
             height: 86px;
        }
        .header-nav, .header-nav.active-block {
            display: none;
        }

        .header-nav {
            position: absolute;
            top: 86px;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 80px;
            width: 100%;
            background-color: #fff;
            height: 70px;
        }

        .socials-list {
            margin-left: 30px;
        }

        .lang-container {
            margin-left: auto;
            margin-right: 30px;
        }

        .lang-dropdown {
            margin-right: 30px;
        }
    }

    @media (max-width: 756px) {
        padding: 0 36px;

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
        
        .header-nav, .header-phone, .lang-dropdown, .social-link.search, .message-button, .search-container, .search-container.active-block {
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
            background-color: #fff;
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

        .header-nav {
            padding: 0;
            position: absolute;
            top: 164px;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
            height: 500px;
        }

        .nav-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100px;
            font-size: 24px;
            color: #fff;
        }
    }
`