import styled from "styled-components";

export const StyledWebSolutions = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 132px;

    .solutions-title {
        margin-bottom: 57px;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
    }

    .solutions-container {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: rgba(241, 245, 249, 1);
        padding-top: 86px;
        padding-left: 52px;
        padding-bottom: 120px;
        border-radius: 10px 10px 30px 30px;
        z-index: 1;
    }

    .solutions-container::before {
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

    .solutions-container::after {
        position: absolute;
        content: "";
        width: 288px;
        height: 609px;
        background-image: url("/images/right-leaf.svg");
        background-repeat: no-repeat;
        top: 28px;
        right: -3px;
        z-index: -1;
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
        margin-top: 14px;
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
        margin-top: 23px;
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
        margin-top: 25px;
        cursor: pointer;
    }

    .container-button:hover {
        background-color: rgba(255, 70, 0, 1);
        color: #fff;
    }

    .container-image {
        position: absolute;
        right: 95px;
        bottom: 17px;
    }
`
