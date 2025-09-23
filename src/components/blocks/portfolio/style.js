import styled from "styled-components";

export const StyledPortfolio = styled.section`
    max-width: 1760px;
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
        justify-content: space-between;
        margin-top: 40px;
        list-style-type: none;
    }

    .item-title {
        font-weight: 700;
        font-size: 24px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 24px;
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
    }

    .item-link:hover {
        color: rgba(255, 70, 0, 1);
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
        padding: 0 21px;
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
`