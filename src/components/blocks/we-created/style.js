import styled from "styled-components";

export const StyledWeCreated = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 170px;

    .created-title {
        color: rgba(47, 52, 63, 1);
        font-size: 50px;
        font-weight: 600;
        letter-spacing: -2px;
        margin-bottom: 42px;
    }

    .card-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 41px;
        row-gap: 30px;
        list-style-type: none;
    }
`