import styled from "styled-components";

export const StyledWebSolutions = styled.section`
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 132px;

    .solutions-title {
        max-width: 100%;
        margin-bottom: 57px;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        color: rgba(47, 52, 63, 1);
        word-wrap: break-word;
    }

    .solutions-container {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: rgba(241, 245, 249, 1);
        padding-top: 86px;
        padding-left: 52px;
        padding-bottom: 120px;
        border-radius: 10px 10px 30px 30px;
        z-index: 1;
    }

    .solutions-container::before {
        position: absolute;
        content: "";
        width: 406px;
        height: 680px;
        background-image: url("/images/left-leaf.svg");
        background-repeat: no-repeat;
        top: -10px;
        left: 0;
        z-index: -1;
    }

    .solutions-container::after {
        position: absolute;
        content: "";
        width: 288px;
        height: 609px;
        background-image: url("/images/right-leaf.svg");
        background-repeat: no-repeat;
        top: 28px;
        right: -3px;
        z-index: -1;
    }

    .container-title {
        font-weight: 700;
        font-size: 48px;
        letter-spacing: -3px;
        color: rgba(68, 75, 90, 1);
        max-width: 728px;
        word-wrap: break-word;
    }

    .stamps-list {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
        margin-top: 14px;
        list-style-type: none;
    }

    .stamp {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        font-weight: 600;
        font-size: 12px;
        color: rgba(255, 70, 0, 1);
        border-radius: 30px;
        height: 34px;
        padding: 0 21px;
    }

    .container-description {
        margin-top: 23px;
        font-weight: 600;
        font-size: 32px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        max-width: 728px;
        word-wrap: break-word;
    }

    .container-button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        background-color: rgba(68, 75, 90, 1);
        border-radius: 30px;
        border: none;
        width: 400px;
        height: 55px;
        margin-top: 25px;
        cursor: pointer;
    }

    .container-button:hover {
        background-color: rgba(255, 70, 0, 1);
        color: #fff;
    }

    .container-image {
        position: absolute;
        width: 50%;
        height: auto;
        top: 50%; 
        right: -230px;
        transform: translate(-50%, -50%);
    }

    .stamps-list.for-mobile, .container-title.for-mobile {
        display: none;
    }

    .solutions-container {
    position: relative; // Для позиционирования кнопок
  }

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    z-index: 10;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

    @media (max-width: 1799px) {
        margin-top: 80px;

        .container-image {

        }

        .solutions-container {
            overflow: hidden;
        }

        .container-description, .container-title.for-pc, .stamps-list.for-pc {
            max-width: 500px;
        }
    }

    @media (max-width: 1490px) {
        .container-image {
            display: none;
        }

        .container-description, .container-title.for-pc, .stamps-list.for-pc {
            max-width: 90%;
        }
    }

    @media (max-width: 756px) {
        padding: 0 14px;
        margin-top: 40px;

        .stamps-list.for-pc, .container-title.for-pc, .solutions-container::after {
            display: none;
        }

        .stamps-list.for-mobile {
            display: flex;
            margin-top: 0;
            margin-bottom: 9px;
        }

        .container-title.for-mobile {
            display: block;
            font-weight: 800;
            font-size: 48px;
            letter-spacing: -5%;
            color: rgba(68, 75, 90, 1);
            
        }

        .container-description {
            margin-top: 5px;
            font-size: 20px;
            line-height: 27px;
        }

        .solutions-title {
            margin-bottom: 47px;
            font-size: 25px;
            letter-spacing: -2px;
        }

        .solutions-container {
            padding: 20px 10px 53px 12px;
            overflow: hidden;
        }

        .container-button {
            width: 100%;
            margin: 0 auto;
            margin-top: 20px;
            background: linear-gradient(rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
        }

        .container-button:hover {
            background: linear-gradient(rgb(59, 71, 92), rgb(49, 59, 80));
        }

        .container-image {
            display: block;
            position: unset;
            transform: none;
            max-width: 100%;
            width: auto;
            height: auto;
            margin: 0 auto;
            margin-top: 20px;
        }
    }
`
