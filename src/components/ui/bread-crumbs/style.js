import styled from "styled-components";

export const StyledBreadCrumbs = styled.ul`
    display: flex;
    margin: 0 auto;
    margin-top: 23px;
    gap: 5px;
    max-width: 300px;

    .bread-crumb {
        width: 56px;
        height: 5px;
        background-color: rgba(238, 240, 243, 1);
    }

    .bread-crumb.active {
        background-color: rgba(0, 0, 0, 1);
    }
`