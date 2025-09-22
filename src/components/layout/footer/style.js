import styled from "styled-components";

export const StyledFooter = styled.footer`

    .footer-container {
        background: linear-gradient(rgba(38, 49, 67, 1), rgba(30, 39, 54, 1), rgba(11, 14, 21, 1));
        padding-top: 90px;
        padding-bottom: 73px;
    }
    
    .footer-container.dark {
        position: relative;
        overflow: hidden;
        padding-top: 30px;
        padding-bottom: 214px;
        background: none;
        background-color: rgba(11, 14, 21, 1);
    }

    .footer-container.dark::after {
        position: absolute;
        content: "";
        top: 0px;
        width: 100%;
        height: 2px;
        background-color: rgb(18, 18, 18);
    }

    .footer-wrapper {
        max-width: 1608px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .footer-title {
        font-size: 42px;
        color: #fff;
    }

    .footer-description {
        margin-top: 40px;
        font-size: 22px;
        font-weight: 400;
        color: #fff;
    }

    .accordeon-list {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }

    .accordeon-list::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgb(91, 91, 91);
        top: 0;
    }

    .accordeon-item {
        position: relative;
        cursor: pointer;
        border-bottom: 1px solid rgb(91, 91, 91);
        padding: 27px 60px 27px 0;
    }

    .accordeon-title {
        font-size: 22px;
        color: #fff;
        margin: 0;
        padding-right: 50px;
    }

    .accordeon-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
    }

    .accordeon-item.active .accordeon-content {
        max-height: 200px;
        transition: max-height 0.4s ease-in;
    }

    .accordeon-description {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin: 20px 0 0 0;
        padding-right: 50px;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
    }

    .accordeon-item.active .accordeon-description {
        opacity: 1;
        transform: translateY(0);
    }

    .decoration {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(26, 23, 27, 1);
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .decoration::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 22px;
        background-color: rgba(127, 185, 60, 1);
        transition: all 0.3s ease;
    }

    .decoration::after {
        position: absolute;
        content: "";
        width: 22px;
        height: 1px;
        background-color: rgba(127, 185, 60, 1);
        transition: all 0.3s ease;
    }

    .decoration.active {
        transform: translateY(-50%) rotate(45deg);
    }

    .decoration.active::before,
    .decoration.active::after {
        background-color: rgba(240, 81, 63, 1);
    }

    .accordeon-item::after {
        
    }

    .form-wrapper {
        display: flex;
        gap: 114px;
        max-width: 1608px;
        margin: 0 auto;
    }

    .footer-info {
        max-width: 406px;
        margin-top: 103px;
    }

    .info-description {
        font-size: 30px;
        letter-spacing: -1px;
        color: #fff;
        margin-bottom: 90px;
    }

    .info-contacts {
        font-size: 30px;
        font-weight: 700;
        color: #fff;
        letter-spacing: -1px;
    }

    .info-contacts.tg {
        margin-bottom: 24px;
    }

    .orange {
        color: rgba(255, 70, 0, 1);
    }

    .info {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -1px;
        color: #fff;
    }

    .footer-logo {
        margin-top: 14px;
    }

    .footer-form {
        width: 100%;
    }

    .form-title {
        font-size: 40px;
        letter-spacing: -1px;
        color: #fff;
        margin-top: 38px;
    }

    .form-list {
        display: flex;
        flex-direction: column;
        gap: 35px;
        margin-top: 35px;
    }

    .field-label {
        font-size: 17px;
        color: #fff;
    }

    .buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
        margin-bottom: 8px;
    }

    .socials-button {
        position: relative;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        padding: 0px 10px 0px 10px;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-weight: 300;
        font-size: 13px;
        color: #fff;
    }

    .socials-button.active {
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 4px;
    }

    .form-field {
        width: 100%;
        height: 60px;
        border: none;
        border-bottom: 1px solid rgba(37, 37, 37, 1);
        color: #fff;
        background-color: transparent;
        cursor: pointer;
    }

    .form-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        min-width: 256px;
        padding: 0 60px;
        margin: 0 auto;
        background-color: rgba(255, 70, 0, 1);
        margin-top: 35px;
        font-size: 14px;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }

    .form-button:hover {
        color: rgba(255, 70, 0, 1);
        background-color: rgba(120, 120, 128, 0.12);
    }

    .form-description {
        text-align: center;
        margin-top: 20px;
        font-size: 13px;
        font-weight: 400;
        color: #fff;
    }

    .decor-text {
        position: absolute;
        width: 1740px;
        font-size: 237px;
        bottom: -60px;
        color: #fff;
        letter-spacing: -10px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`;