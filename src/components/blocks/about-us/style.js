import styled from "styled-components";

export const StyledAboutUs = styled.section`
    position: relative;
    display: flex;
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 122px;
    gap: 278px;

    .about-title {
        position: absolute;
        color: rgba(47, 52, 63, 1);
        font-weight: 700;
        font-size: 24px;
        left: 0;
        top: 0;
    }

    .about-person {
        position: relative;
        margin-top: 164px;
        max-width: 324px;
    }

    .about-person::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        background-color: rgba(47, 52, 63, 1);
        top: 160px;
        left: 0;
    }

    .person-container {
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

    .about-container {
        display: flex;
        flex-direction: column;
        gap: 64px;
        max-width: 986px;
    }

    .about-description {
        font-weight: 600;
        font-size: 30px;
        line-height: 50px;
        letter-spacing: -1px;
        color: rgba(47, 52, 63, 1);
    }

    @media (max-width: 756px) {
        flex-direction: column-reverse;
        padding: 0 15px;
        margin-top: 35px;
        gap: 35px;


    .about-title {
        left: 15px;
    }

    .about-container {
        margin-top: 66px;
        gap: 30px;
    }

    .about-description {
        color: rgba(68, 75, 90, 1);
        font-weight: 700;
        font-size: 20px;
        line-height: 165%;
    }

    .about-description.small {
        font-weight: 450;
    }

    .about-person {
        margin: 0 auto;
        max-width: 100%;
    }

    &::before {
        width: 324px;
        top: auto;
        left: 50%;
        transform: translate(-50%, 0);
        top: 160px;
    }
    }
`