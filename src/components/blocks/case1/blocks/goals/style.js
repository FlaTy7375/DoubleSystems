import styled from "styled-components";

export const StyledGoals = styled.section`
    margin: 0 auto;
    max-width: 1800px;
    padding: 0 20px;
    margin-top: 40px;

    .goals-title {
        font-size: 42px;
        letter-spacing: -2px;
        color: #000;
        margin-bottom: 35px;
    }

    .goals-description {
        margin-bottom: 35px;
        font-size: 30px;
        letter-spacing: -1px;
        color: #000;
    }

    .cards-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
        column-gap: 41px;
        row-gap: 42px;
        list-style-type: none;
        margin-bottom: 120px;
    }
    
    .light .card-number {
        color: #000;
    }

    .light h2 {
        color: #000;
    }

    .card-description {
        line-height: 185%;
        font-size: 24px;
        font-weight: 500;
    }

    .images-description {
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -1px;
        line-height: 135%;
        margin: 0 auto;
        margin-top: 3px;
        text-align: center;
        font-style: italic;
        color: rgba(142, 142, 147, 1);
        max-width: 728px;
    }

    .decor-container {
        min-width: 456px;
    }

    .about-client {
        max-width: 1257px;
        margin-left: auto;
    }

    .client-title {
        font-size: 42px;
        letter-spacing: -1px;
        color: #000;
    }

    .client-subtitle {
        margin-top: 35px;
        font-weight: 700;
        font-size: 32px;
        letter-spacing: -1px;
        line-height: 50px;
        color: rgba(68, 75, 90, 1);
    }

    .client-description {
        margin-top: 35px;
        font-size: 24px;
        font-weight: 450;
        line-height: 50px;
        letter-spacing: -1px;
        max-width: 1230px;
        color: rgba(68, 75, 90, 1);
    }

    .client-image.layout {
        margin-top: 40px;
    }

    .images-description.client {
        margin: 20px auto;
        margin-bottom: 42px;
    }

    .images-description.layout {
        margin-top: 20px;
        margin-bottom: 66px;
    }

    .goals-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 40px;
    }

    .about-person {
        margin-top: 40px;
        width: 456px;
        padding-right: 124px;
    }

    .person-container {
        position: relative;
        display: flex;
        gap: 42px;
        align-items: center;
        margin-bottom: 10px;
    }

    .write-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 131px;
        height: 30px;
        background-color: rgba(255, 70, 0, 1);
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
    }

    .write-button:hover {
        background-color: rgba(120, 120, 128, 0.12);
        color: rgba(255, 70, 0, 1);
    }

    .person-name {
        font-weight: 700;
        font-size: 16px;
    }

    .person-role {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 23px;
    }

    .person-description {
        font-weight: 400;
        font-size: 16px;
    }

    .person-description:not(:last-child) {
        margin-bottom: 20px;
    }

    .text-container {
        width: 456px;
    }

    .container-title {
        font-weight: 600;
        font-size: 30px;
        line-height: 42px;
        letter-spacing: -1px;
        margin-bottom: 34px;
        color: #000;
        max-width: 398px;
        word-wrap: break-word;
        hyphens: auto;
    }

    .container-description {
        font-weight: 400;
        letter-spacing: -1px;
        font-size: 24px;
        line-height: 135%;
        color: #000;
        margin: 0;
        max-width: 432px;
        word-wrap: break-word;
        hyphens: auto;
    }

    .strategy-container {
        max-width: 1257px;
    }

    .strategy-title {
        font-size: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 35px;
        word-wrap: break-word;
        hyphens: auto;
    }

    .strategy-description {
        font-weight: 450;
        font-size: 24px;
        line-height: 135%;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 35px;
        word-wrap: break-word;
        hyphens: auto;
    }

    .strategy-description .decoration {
        font-weight: 600;
        color: rgba(68, 75, 90, 1);
    }

    .strategy-description.bold {
        color: #000;
        margin-bottom: 45px;
        font-weight: 600;
        max-width: 1204px;
    }

    .images-description.strategy {
        margin: 20px auto;
    }

    .strategy-subtitle {
        font-size: 30px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 35px;
    }

    .process-description {
        font-weight: 450;
        font-size: 24px;
        line-height: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        max-width: 1245px;
    }

    .process-description:not(:last-child) {
        margin-bottom: 60px;
    }

    @media (max-width: 1799px) {
        padding: 0;

        .goals-wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .cards-list {
            margin-bottom: 30px;
        }

        .client-image.layout {
            width: 100%;
            height: auto;
        }

        .about-person {
            width: 100%;
            padding-right: 0;
        }

        .strategy-image {
            width: 100%;
            height: auto;
        }

        .text-container {
            width: 100%;
        }

        .container-title, .container-description, .strategy-description {
            max-width: none;
        }

        
    }

    @media (max-width: 1279px) { 
        .cards-list {
            grid-template-columns: 1fr;
        }

        .goals-wrapper {
            grid-template-columns: 1fr;
        }

        .about-person {
            width: fit-content;
        }
    }

    @media (max-width: 756px) {
        padding: 0;

        .about-person {
            display: none;
        }

        .goals-title {
            font-size: 24px;
            letter-spacing: -1px;
        }

        .goals-description {
            font-size: 20px;
            letter-spacing: -1px;
        }

        .cards-list {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 40px;
        }

        .client-title {
            font-size: 24px;
            margin-bottom: 35px;
        }

        .client-subtitle, .client-description {
            font-size: 20px;
            line-height: 165%;
        }

        .container-description {
            font-size: 20px;
            line-height: 165%;
            max-width: 100%;
        }

        .text-container {
            width: 100%;
        }

        .goals-wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .client-image.layout {
            width: 100%;
            height: auto;
        }

        .container-title {
            display: block;
            font-size: 24px;
            line-height: 135%;
            max-width: 100%;
        }

        .strategy-title {
            font-size: 32px;
        }

        .strategy-description {
            font-size: 20px;
        }

        .process-description {
            font-size: 20px;
            line-height: 150%;
        }

        .strategy-image {
            width: 100%;
            height: auto;
        }

        .process-description:not(:last-child) {
            margin-bottom: 30px;
        }
    }
`