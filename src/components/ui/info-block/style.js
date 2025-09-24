import styled from "styled-components";

export const StyledInfoBlock = styled.section`
    max-width: 562px;

    .info-img {
        object-fit: cover;
    }

    .info-title {
        font-size: 30px;
        margin-top: 10px;
        color: rgba(38, 49, 67, 1);
    }

    .info-title:hover {
        text-decoration: underline;
    }

    .info-description {
        margin: 12px 0;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -1px;
    }

    .theme-container {
        display: flex;
        gap: 13px;
        margin-top: 13px;
    }

    .info-theme {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        padding: 0 21px;
        font-size: 12px;
        color: rgba(60, 60, 67, 0.6);
        background-color: rgba(241, 245, 249, 1);
        border-radius: 30px;
        cursor: pointer;
    }

    .info-theme:hover {
        color: rgba(255, 70, 0, 1);
    }

    .info-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    
    .views-container {
        position: relative;
    }

    .views-container::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        background-image: url("./images/eye.svg");
        left: -20px;
    }

    .info-data, .info-views {
        font-size: 14px;
        color: rgba(68, 75, 90, 0.34);
    }

    @media (max-width: 756px) {
        max-width: 756px;
        width: 100%;

        .info-img {
            width: 100%;
            height: 360px;
        }

        .info-title {
            font-size: 19px;
        }

        .theme-container {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .info-theme {
            padding: 0 11px;
            height: 22px;
            font-size: 8px;
        }

        .info-data, .info-views {
            font-size: 12px;
        }
    }
`