import styled from "styled-components";

export const StyledCaseAbout = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 45px;

    .about-wrapper {
        display: flex;
        gap: 40px;
    }

    .about-project {
        max-width: 456px;
    }

    .project-title {
        font-weight: 700;
        font-size: 24px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 70px;
    }

    .project-description {
        font-weight: 500;
        font-size: 24px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        line-height: 175%;
    }

    .project-description .decoration {
        color: rgba(68, 75, 90, 1);
        font-weight: 700;
    }

    .project-description:not(:last-child) {
        margin-bottom: 44px;
    }

    .about-case {
        max-width: 1245px;
    }

    .about-title {
        font-size: 42px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 30px;
    }

    .about-description {
        font-weight: 450;
        font-size: 24px;
        line-height: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
    }

    .about-description:not(:last-child) {
        margin-bottom: 44px;
    }

    .about-content, .about-client {
        margin-top: 146px;
    }

    .about-content {
        position: relative;
        max-width: 456px;
        height: fit-content;
        border-radius: 30px;
        padding: 20px 60px 30px 20px;
        background-color: rgba(255, 255, 255, 0.94);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .content-title {
        font-size: 20px;
        font-weight: 700;
        color: rgba(142, 142, 147, 1);
        letter-spacing: -5%;
        margin-bottom: 4px;
        margin-left: 20px;
    }

    .content-list {
        max-width: 376px;
        margin-left: 20px;
    }

    .content-theme {
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -5%;
        line-height: 165%; 
        color: rgba(68, 75, 90, 1);
    }

    .content-theme .decoration {
        font-weight: 700;
    }

    .content-button {
        position: absolute;
        width: 18px;
        height: 9px;
        background-image: url("./images/content-icon.svg");
        border: none;
        background-color: transparent;
        top: 58px;
        right: 30px;
        cursor: pointer;
    }

    .about-client {
        position: relative;
        padding-top: 637px;
        max-width: 1245px;
    }

    .client-image.tablet {
        position: absolute;
        top: 22px;
        left: 125px;
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

    .client-title {
        margin-top: 50px;
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
        color: rgba(68, 75, 90, 1);
    }

    .client-image.layout {
        margin-top: 50px;
    }

    .images-description.layout {
        margin-top: 20px;
        margin-bottom: 66px;
    }

    .client-image.for-mobile {
        display: none;
    }

    @media (max-width: 756px) {

        .about-wrapper {
            flex-direction: column;
        }

        .project-title {
            letter-spacing: -5%;
            margin-bottom: 30px;
        }

        .project-description {
            font-size: 20px;
            line-height: 135%;
        }

        .project-description br {
            display: none;
        }

        .about-title {
            font-size: 32px;
            line-height: 135%;
        }

        .about-description {
            font-size: 20px;
            line-height: 165%;
        }

        .about-content {
            margin-top: 40px;
            max-width: 100%;
        }

        .content-list {
            max-width: 100%;
        }

        .about-client {
            margin-top: 0;
            padding-top: 0;
        }

        .client-image.tablet {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
        }

        .images-description {
            font-size: 16px;
        }

        .client-image.for-mobile {
            display: block;
            width: 80%;
            height: auto;
            margin: 0 auto;
            margin-top: 30px;
        }   

        .client-title {
            margin-top: 35px;
            font-size: 24px;
        }

        .client-subtitle, .client-description {
            font-size: 20px;
            line-height: 165%;
        }

        .client-image.layout {
            width: 100%;
            height: auto;
            margin-top: 35px;
        }

        .images-description.layout {
            margin-top: 15px;
            margin-bottom: 80px;
        }
    }
`