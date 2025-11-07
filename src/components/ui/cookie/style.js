import styled from "styled-components";

export const StyledCookie = styled.div`
    .cookie-consent {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        max-width: 1920px;
        width: 90%;
        height: 86px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .text-container {
        display: flex;
        align-items: center;
    }

    .cookie-content {
        height: 86px;
        display: flex;
        align-items: center;
        padding: 0 80px;
        padding-right: 370px;
    }

    .cookie-content h3 {
        font-size: 20px;
        color: rgba(47, 52, 63, 1);
        margin-right: 60px;
    }

    .cookie-content p {
        font-size: 16px;
        color: rgba(47, 52, 63, 1);
    }

    .cookie-buttons {
        display: flex;
        align-items: center;
    }

    .cookie-accept {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(38, 49, 67, 1);
        color: #fff;
        border: none;
        width: 157px;
        height: 34px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: background 0.3s ease;
        margin-left: 20px;
    }

    .cookie-accept:hover {
        background: rgba(38, 49, 67, 0.88);
    }

    .cookie-decline {
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

    .cookie-decline::before {    
        position: absolute;
        content: "";
        width: 12px;
        height: 2px;
        background-color: rgba(255, 70, 0, 1);
        transform: rotate(45deg);
    }

    .cookie-decline::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 12px;
        background-color: rgba(255, 70, 0, 1);
        transform: rotate(45deg);
    }

    .cookie-decline:hover::before, .cookie-decline:hover::after  {
        background-color: #000;
    }

    @keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    @media (max-width: 1799px) {

        .cookie-consent {
            height: auto;
            padding: 20px;
        }

        .cookie-content {
            padding-right: 80px;
            height: auto;
        }
    }

    @media (max-width: 1279px) {
        .cookie-content {
            flex-direction: column;
            padding: 0 20px;
        }

        .text-container {
            flex-direction: column;
        }

        .cookie-buttons {
            margin-top: 20px;
            gap: 10px;
        }

        .cookie-content h3 {
            margin-bottom: 10px;
            margin-right: 0;
        }
        
        .cookie-accept, .cookie-decline {
            margin-left: 0;
        }
    }
`