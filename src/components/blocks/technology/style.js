import styled from "styled-components";

export const StyledTechnology = styled.section`
    max-width: 1800px;
    padding: 0 20px;
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

    @media (max-width: 1799px) {
        padding-bottom: 80px;
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        margin-top: 35px;

        .technology-title {
            font-size: 32px;
            margin-bottom: 12px;
        }

        .technology-wrapper {
            flex-direction: column;
            gap: 12px;
        }

        .technology-directions {
            width: 100%;
            flex-direction: row;
            gap: 22px;
            margin-top: 0;
        }

        .technology-direction {
            font-size: 18px;
        }

        .technology-direction.active {
            color: rgba(47, 52, 63, 1);
        }

        .lists-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 10px;
            margin-bottom: 50px;
        }
    }
`

export const StyledTechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 106px;
    row-gap: 52px;
    max-width: 1370px;
    list-style-type: none;

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

    @media (max-width: 756px) {
        gap: 12px;
        display: contents;

        .tech-image {
            width: 79px;
            height: 79px;
        }

        &.small {
            margin-top: 0;
        }

        .tech-element {
            order: var(--mobile-order);
        }

    }
    
`