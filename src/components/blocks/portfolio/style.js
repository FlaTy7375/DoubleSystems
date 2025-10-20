import styled from "styled-components";

export const StyledPortfolio = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 92px;

    .portfolio-title {
        font-weight: 700;
        font-size: 50px;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 23px;
    }

    .portfolio-list {
        display: flex;
        gap: 30px;
        margin-top: 40px;
        list-style-type: none;
    }

    .item-title {
        font-weight: 700;
        font-size: 24px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 24px;
        max-width: 300px;
        word-wrap: break-word;
    }

    .item-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 35px;
        margin-left: 18px;
    }

    .item-container::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 100%;
        background-color: #000;
        left: -18px;
        bottom: 0;
    }

    .item-link {
        font-weight: 400;
        font-size: 18px;
        color: rgba(47, 52, 63, 1);
        cursor: pointer;
        max-width: 300px;
        word-wrap: break-word;
    }

    .item-link:hover {
        color: rgba(255, 70, 0, 1);
    }

    @media (max-width: 1279px) {
        &.case-portfolio {
            margin-top: 50px;
            padding: 0;
        }

        .portfolio-list {
            flex-direction: column;
            gap: 20px;
        }
        
    }

    @media (max-width: 756px) {
        display: none;

        &.case-portfolio {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            padding: 0;
        }

        .portfolio-title {
            font-size: 42px;
            margin-bottom: 0;
        }

        .portfolio-list {
            flex-direction: column;
            gap: 25px;
        }
    }
`

export const StyledThemes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    list-style-type: none;

    .theme {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        font-size: 12px;
        color: rgba(60, 60, 67, 0.6);
        background-color: rgba(241, 245, 249, 1);
        border-radius: 30px;
        height: 34px;
        cursor: pointer;
    }

    .theme:hover {
        color: rgba(255, 70, 0, 1);
    }

    @media (max-width: 756px) {
        display: none;

        .case-portfolio & {
            display: flex;
            margin-top: 40px;
        }
    }
`