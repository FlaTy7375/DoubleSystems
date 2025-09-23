import styled from "styled-components";

export const StyledContactsForm = styled.main`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 68px;

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

    .contacts-title {
        font-weight: 700;
        font-size: 50px;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 20px;
    }

    .contacts-wrapper {
        display: flex;
        gap: 13px;
    }

    .contacts-list {
        width: 877px;
        list-style-type: none;
    }

    .contacts-element:not(:last-child) {
        margin-bottom: 30px;
    }

    .contacts-info {
        font-size: 20px;
        font-weight: 450;
        line-height: 165%;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
    }

    .contacts-info.bold {
        font-weight: 700;
    }

    .contacts-form {
        width: 863px;
        margin-left: auto;
    }

    .form-title {
        font-size: 32px;
        letter-spacing: -1px;
        color: rgba(47, 52, 63, 1);
    }

    .form-list {
        display: flex;
        flex-direction: column;
        gap: 47px;
        margin-top: 48px;
        list-style-type: none;
    }

    .field-label {
        font-size: 17px;
        color: #000;
    }

    .buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
        margin-bottom: 8px;
    }

    .socials-button {
        position: relative;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        padding: 0px 10px 0px 10px;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-weight: 300;
        font-size: 13px;
        color: #000;
    }

    .socials-button.active {
        border: 1px solid rgba(68, 75, 90, 1);
        border-radius: 4px;
    }

    .form-field {
        width: 100%;
        height: 60px;
        border: none;
        border-bottom: 1px solid rgba(37, 37, 37, 1);
        color: #fff;
        background-color: transparent;
        cursor: pointer;
    }

    .form-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        min-width: 256px;
        padding: 0 60px;
        margin: 0 auto;
        background-color: rgba(255, 70, 0, 1);
        margin-top: 65px;
        font-size: 14px;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }

    .form-button:hover {
        color: rgba(255, 70, 0, 1);
        background-color: rgba(120, 120, 128, 0.12);
    }

    .input-container {
        display: flex;
        align-items: center;
        margin-left: 8px;
        margin-top: 18px;
    }

    .contacts-checkbox {
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: 1px solid rgba(0, 66, 105, 0.28);
    }

    .input-description {
        margin-left: 8px;
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 32, 51, 1);
    }

    .tegs-title {
        margin-top: 5px;
        margin-bottom: 23px;
        font-weight: 700;
        font-size: 50px;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
    }
`