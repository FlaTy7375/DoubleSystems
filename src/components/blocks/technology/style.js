import styled from "styled-components";

export const StyledTechnology = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 104px;
    padding-bottom: 152px;

    .technology-wrapper {
        display: flex;
        gap: 210px;
    }

    .technology-title {
        margin-bottom: 105px;
        font-size: 50px;
        letter-spacing: -2px;
        color: rgba(26, 23, 27, 1);
    }

    .technology-directions {
        display: flex;
        flex-direction: column;
        gap: 278px;
        width: 186px;
        margin-top: 18px;
    }

    .technology-direction {
        font-size: 24px;
        color: rgba(214, 214, 214, 1);
    }
`

export const StyledTechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 106px;
    row-gap: 52px;
    max-width: 1370px;

    .tech-image {
        filter: grayscale(100%);
        cursor: pointer;
        transition: 0.5s;
    }

    .tech-image:hover {
        filter: grayscale(0%);
    }

    &.small {
        margin-top: 52px;
        max-width: 1160px;
    }
`