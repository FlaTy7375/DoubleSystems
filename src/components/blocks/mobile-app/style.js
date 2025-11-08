import styled from "styled-components";

export const StyledMobileApp = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 113px;

    .mobile-title {
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 20px;
        max-width: 1200px;
        word-wrap: break-word;
    }

    .image-container {
        width: 1760px;
        height: 706px;
    }

    .app-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 10%;
        transition: opacity 0.5s ease;
    }

    .image-container {
    position: relative;
    margin: 0 auto;
    }

    .app-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

  .slider-button {
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 10;

    &.prev {
      left: 7px;
    }

    &.next {
      right: 7px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

    @media (max-width: 1799px) {
        .image-container {
            width: 100%;
            
        }
    }

    @media (max-width: 1279px) {
        margin-top: 60px;
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