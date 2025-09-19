import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    max-width: 1920px;
    margin: 0 auto;
    height: 86px;
    background-color: #fff;
    color: #000;

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
        width: 100%;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
    }

    .menu-button::before {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        width: 66%;
        height: 3px;
        background-color: rgba(255, 70, 0, 1);
    }

    .button-decor {
        height: 3px;
        width: 100%;
        background-color: rgba(255, 70, 0, 1);
    }
`