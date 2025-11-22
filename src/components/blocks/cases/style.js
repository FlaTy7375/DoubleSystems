import styled from "styled-components";

export const StyledCases = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 140px;
    margin-bottom: 60px;

    .cases-title {
        margin-bottom: 28px;
        font-size: 50px;
        letter-spacing: -2px;
        word-wrap: break-word;
    }

    .cases-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        align-items: stretch;
        gap: 37px;
        row-gap: 54px;
    }

    .cases-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        font-size: 18px;
        font-weight: 500;
        color: rgba(238, 240, 243, 1);
        padding: 0 100px;
        border-radius: 30px;
        border: none;
        height: 55px;
        background-color: rgba(255, 70, 0, 1);
        cursor: pointer;
    }

    .cases-button:hover {
        color: rgba(255, 70, 0, 1);
        background-color: rgba(120, 120, 128, 0.12);
    }

    @media (max-width: 1799px) {
        margin-top: 80px;

        .cases-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 1279px) {
        .cases-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        }
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        margin-top: 40px;

        .cases-title {
            font-size: 32px;
            margin-bottom: 35px;
        }

        .cases-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 35px;
        }

        .cases-button {
            width: 100%;
            font-size: 15px;
            padding: 0 28px;
        }
    }
`

export const StyledPortfolioLinks = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    padding: 0 20px;
    max-width: 1800px;

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

    .portfolio-title {
        font-weight: 700;
        font-size: 50px;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 20px;
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        .cases-link {
            font-size: 13px;
        }

        .contacts-title {
            margin-bottom: 40px;
            font-size: 32px;
            letter-spacing: -2px;
        }
    }
`