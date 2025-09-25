import styled from "styled-components";

export const StyledRepeat = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 128px;

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
        display: flex;
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

    .person-container::before {
        position: absolute;
        content: "";
        width: 318px;
        height: 3px;
        background-color: rgba(47, 52, 63, 1);
        top: 160px;
        left: 0;
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
    }

    .container-description {
        font-weight: 400;
        letter-spacing: -1px;
        font-size: 24px;
        line-height: 135%;
        color: #000;
        margin: 0;
        max-width: 432px;
    }

    .strategy-container {
        max-width: 1257px;
    }

    .strategy-title {
        font-size: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 35px;
    }

    .strategy-description {
        font-weight: 450;
        font-size: 24px;
        line-height: 135%;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 35px;
        max-width: 860px;
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

    .image-container {
        position: relative;
        width: 456px;
        height: 734px;
    }

    .image-iphone {
        position: absolute;
        left: 43px;
        top: 40px;
    }

    @media (max-width: 1799px) {
        padding: 0;

        .goals-wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .client-image.layout, .strategy-image, .image-container {
            width: 100%;
            height: auto;
        }

        .about-person {
            width: 100%;
            padding-right: 0;
        }

        .text-container {
            width: 100%;
        }
    }

    @media (max-width: 1279px) { 
        margin-top: 50px;

        .goals-wrapper {
            grid-template-columns: 1fr;
        }

        .container-title, .container-description, .strategy-description {
            max-width: none;
        }

        .image-iphone {
            position: relative;
            left: auto;
            top: auto;
        }

        .image-container {
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 756px) {
        margin-top: 0;
        padding: 0;

        .about-person, .image-iphone, .project-description br, .image-container {
            display: none;
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

        .container-description {
            max-width: 100%;
            font-size: 20px;
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

        .text-container {
            width: 100%;
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