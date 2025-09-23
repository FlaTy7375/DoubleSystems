import styled from "styled-components";

export const StyledBuisness = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 80px;

    .buisness-title {
        font-size: 42px;
        letter-spacing: -2px;
        color: #000;
        margin-bottom: 30px;
    }

    .buisness-subtitle {
        font-weight: 700;
        font-size: 36px;
        letter-spacing: -1px;
        color: rgba(1, 1, 1, 1);
        margin-bottom: 30px;
    }

    .cards-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 41px;
        row-gap: 28px;
        list-style-type: none;
        margin-bottom: 120px;
    }

    .card-wrapper h2 {
        font-size: 30px;
        letter-spacing: -1px;
        font-weight: 600;
        max-width: 700px;
    }

    .card-wrapper .light h2 {
        color: #000;
    }
`