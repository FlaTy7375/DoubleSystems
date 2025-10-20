import styled from "styled-components";

export const StyledWeCreated = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 170px;

    .created-title {
        color: rgba(47, 52, 63, 1);
        font-size: 50px;
        font-weight: 600;
        letter-spacing: -2px;
        margin-bottom: 42px;
        word-wrap: break-word;
    }

    .card-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 41px;
        row-gap: 30px;
        list-style-type: none;
    }

    @media (max-width: 1799px) {
        margin-top: 80px;
    }

    @media (max-width: 1279px) {
        .card-list {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        margin-top: 80px;

        .created-title {
            font-size: 42px;
            margin-bottom: 35px;
        }

        .card-list {
            grid-template-columns: 1fr;
        }
    }
`