import styled from "styled-components";

export const StyledCase1 = styled.main`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 84px;

    .link-container {
        display: flex;
        margin-bottom: 10px;
    }

    .cases-link {
        font-size: 15px;
        font-weight: 400;
        color: rgba(46, 46, 46, 0.7);
        cursor: pointer;
    }

    .cases-link.active {
        color: rgba(46, 46, 46, 1);
    }

    .case-wrapper {
        max-width: 1760px;
        margin: 0 auto;
        margin-top: 16px;
    }


    .case-title {
        margin-bottom: 20px;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        max-width: 1240px;
    }

    .case-container {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: rgba(241, 245, 249, 1);
        background-image: url("./images/Mobile-section.jpg");
        filter: brightness(1.1);
        background-size: 140%;
        background-position: 0% 40%;
        padding-top: 120px;
        padding-left: 52px;
        padding-bottom: 110px;
        border-radius: 10px 10px 30px 30px;
        z-index: 1;
    }

    .container-title {
        font-weight: 700;
        font-size: 48px;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        max-width: 728px;
    }

    .stamps-list {
        display: flex;
        gap: 13px;
        margin-top: 40px;
    }

    .stamp {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        font-weight: 600;
        font-size: 12px;
        color: rgba(255, 70, 0, 1);
        border-radius: 30px;
        height: 34px;
        padding: 0 21px;
    }

    .container-description {
        margin-top: 24px;
        font-weight: 600;
        font-size: 32px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        max-width: 728px;
    }

    .container-button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        background-color: rgba(68, 75, 90, 1);
        border-radius: 30px;
        border: none;
        width: 400px;
        height: 55px;
        margin-top: 36px;
        cursor: pointer;
    }

    .container-button:hover {
        background-color: rgba(255, 70, 0, 1);
        color: #fff;
    }
`