import styled from "styled-components";

export const StyledCases = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 140px;

    .cases-title {
        margin-bottom: 28px;
        font-size: 50px;
        letter-spacing: -2px;
    }

    .cases-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 37px;
        row-gap: 54px;
    }

    .cases-button {
        display: flex;
        align-items: center;
        justify-content: center;
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
`