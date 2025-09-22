import styled from "styled-components";

export const StyledNews = styled.section`
    margin: 0 auto;
    margin-top: 30px;
    max-width: 1760px;

    .link-container {
        display: flex;
        margin-bottom: 10px;
    }

    .news-link {
        font-size: 15px;
        font-weight: 400;
        color: rgba(46, 46, 46, 0.7);
        cursor: pointer;
    }

    .news-link.active {
        color: rgba(46, 46, 46, 1);
    }

    .news-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 37px;
        row-gap: 54px;
        margin-bottom: 65px;
    }

    .news-title, .themes-title {
        font-weight: 700;
        font-size: 50px;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 50px;
    }

    .news-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 224px;
        max-width: 578px;
        height: 55px;
        margin: 0 auto;
        margin-bottom: 65px;
        background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
        color: rgba(238, 240, 243, 1);
        font-size: 18px;
        font-weight: 500;
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }

    .news-button:hover {
        background: linear-gradient(rgb(66, 81, 105), rgb(34, 40, 53));
    }

    .themes-list {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
        margin-bottom: 60px;
    }

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