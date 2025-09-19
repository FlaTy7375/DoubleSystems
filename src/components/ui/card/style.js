import styled from "styled-components";

export const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 42px 79px 0px 37px;
    gap: 23px;
    background: linear-gradient(162deg, rgba(38, 49, 67, 1), rgba(11, 14, 21, 1));
    border-radius: 8px;
    width: 858px;
    height: 329px;
    overflow: hidden;

    &.light {
        background: rgba(241, 245, 249, 1);
    }

    h2 {
        font-size: 30px;
        letter-spacing: -1px;
        color: #fff;
        z-index: 1;
    }

    &.light h2 {
        color: rgba(47, 52, 63, 1);
    }

    .card-description {
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        z-index: 1;
    }

    &.light .card-description {
        color: rgba(47, 52, 63, 1);
    }

    .card-adv {
        font-weight: 700;
        font-size: 18px;
        color: rgba(255, 70, 0, 1);
        line-height: 30px;
        z-index: 1;
    }

    .card-number {
        position: absolute;
        right: 52px;
        bottom: -28px;
        font-size: 110px;
        font-weight: 700;
        color: #fff;
        z-index: 1;
    }

    &.light .card-number {
        color: rgba(47, 52, 63, 1);
        background-clip: padding-box;
        overflow: hidden;
    }

    .blue-gradient {
        position: absolute;
        content: "";
        width: 463px;
        height: 170px;
        right: 25px;
        bottom: 30px;
        background: linear-gradient(180deg, rgba(39, 233, 255, 0.19) 0%, rgba(0, 217, 255, 0.45) 100%);
        filter: blur(100px);
        z-index: 0;
    }

    .green-gradient {
        position: absolute;
        content: "";
        width: 463px;
        height: 170px;
        right: 25px;
        bottom: 30px;
        background: linear-gradient(180deg, rgba(39, 233, 255, 0.19) 0%, rgba(111, 255, 0, 0.45) 100%);
        filter: blur(100px);
        z-index: 0;
    }

    .red-gradient {
        position: absolute;
        content: "";
        width: 463px;
        height: 170px;
        right: 25px;
        bottom: 30px;
        background: linear-gradient(180deg, rgba(39, 233, 255, 0.19) 0%, rgba(255, 0, 0, 0.45) 100%);
        filter: blur(100px);
        z-index: 0;
    }
`