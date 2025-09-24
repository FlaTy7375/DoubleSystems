import styled from "styled-components";

export const StyledMobileApp = styled.section`
    max-width: 1760px;
    margin: 0 auto;
    margin-top: 113px;

    .mobile-title {
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 20px;
        max-width: 1200px;
    }

    .image-container {
        width: 1760px;
        height: 706px;
        background-image: url("./images/Mobile-section.jpg");
        background-position: 50% 10%;
    }

    @media (max-width: 756px) {
        padding: 0 15px;
        margin-top: 47px;

        .mobile-title {
            font-size: 24px;
            letter-spacing: -2px;
        }

        .image-container {
            width: 100%;
            height: 440px;
            background-size: 200%;
            border-radius: 30px;
        }
    }
`