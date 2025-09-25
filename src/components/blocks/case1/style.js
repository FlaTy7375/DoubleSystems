import styled from "styled-components";

export const StyledCase1 = styled.main`
    max-width: 1800px;
    padding: 0 20px;
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

    .stamps-list.for-mobile, .container-title.for-mobile, .container-image, .about-person.for-mobile {
        display: none;
    }

    @media (max-width: 1799px) {
        .case-container {
            background-size: 180%;
            border: 2px solid rgb(190, 191, 193);
        }
    }

    @media (max-width: 1279px) {
        .case-container {
            overflow: hidden;
            background-image: none;
            background-color: rgba(241, 245, 249, 1);
            border: none;
            filter: none;
            padding-right: 40px;
        }

        .stamps-list {
            flex-wrap: wrap;
        }

        .container-image {
            display: block;
        }

        .container-image {
            width: 100%;
            height: auto;
            margin-top: 10px;
        }

        .container-title, .container-description {
            max-width: none;
        }

        .container-button {
            width: 100%;
            max-width: 780px;
            margin: 0 auto;
            margin-top: 30px;
        }
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        margin-top: 15px;
        margin-bottom: 60px;

        .cases-link {
            font-size: 13px;
        }

        .case-title {
            font-size: 32px;
            letter-spacing: -2px;
            line-height: 125%;
        }

        .case-container {
            border: none;
            padding: 20px 10px 52px 12px;
        }

        .container-title {
            font-size: 48px;
            font-weight: 800;
            letter-spacing: -5%;
        }

        .stamps-list, .container-title {
            display: none;
        }

        .stamps-list.for-mobile {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0;
            margin-bottom: 9px;
        }

        .container-title.for-mobile {
            display: block;
        }

        .container-description {
            margin-top: 10px;
            font-size: 20px;
            line-height: 27px;
        }

        .case-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            filter: none;
            height: auto;
            background-image: none;
            background-color: rgba(241, 245, 249, 1);
        }

        .container-image {
            width: 100%;
            height: auto;
            margin-top: 10px;
        }

        .container-button {
            background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
            font-size: 14px;
            width: 100%;
        }

        .container-button:hover {
            background: linear-gradient(rgb(61, 73, 93), rgb(52, 62, 87));
        }

        .case-container::before {
            position: absolute;
            content: "";
            width: 406px;
            height: 680px;
            background-image: url("/images/left-leaf.svg");
            background-repeat: no-repeat;
            top: -10px;
            left: 0;
            z-index: -1;
        }

        .card-description {
            font-size: 15px;
        }

        .about-person.for-mobile {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-right: 0;
        }

        .person-container::before {
            width: 100%;
        }
    }
`