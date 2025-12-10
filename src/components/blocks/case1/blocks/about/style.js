import styled from "styled-components";

export const StyledCaseAbout = styled.section`
    position: relative;
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 45px;

    .placeholder {
        height: 1px;
    }

    .content-container {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    }

    .content-container.collapsed {
        max-height: 0;
        opacity: 0;
    }

    .content-container.expanded {
        max-height: 1000px;
        opacity: 1;
    }

    .anchor-link {
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        padding: 0;
        font: inherit;
        width: 100%;
        color: inherit;
    }

    .anchor-link:hover .decoration {
        text-decoration: underline;
    }

    .decoration {
        word-wrap: break-word;
        hyphens: auto;
    }

    .content-list {
        list-style: decimal;
        padding-left: 20px;
    }

    .content-element {
        margin-bottom: 5px;
        display: flex;
        align-items: flex-start;
        position: relative;
        counter-increment: list-counter;
    }

    .content-element::before {
        content: counter(list-counter) ".";
        position: absolute;
        left: -1.5em;
        top: 5px;
        font-weight: bold;
        font-size: 18px;
        color: rgba(68, 75, 90, 1);
        min-width: 2em;
    }

    .about-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 40px;
    }

    .about-project {
        max-width: 456px;
        min-width: 400px;
    }

    .project-title {
        font-weight: 700;
        font-size: 24px;
        color: rgba(47, 52, 63, 1);
        margin-bottom: 70px;
        word-wrap: break-word;
        hyphens: auto;
    }

    .project-description {
        font-weight: 500;
        font-size: 24px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        line-height: 175%;
        word-wrap: break-word;
        hyphens: auto;
    }

    .project-description .decoration {
        color: rgba(68, 75, 90, 1);
        font-weight: 700;
    }

    .project-description:not(:last-child) {
        margin-bottom: 44px;
    }

    .about-case {
        max-width: 1245px;
        width: 100%;
    }

    .about-title {
        font-size: 42px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        margin-bottom: 30px;
        overflow-wrap: break-word;
        word-break: break-word;
        hyphens: auto;
    }

    .about-description {
        font-weight: 450;
        font-size: 24px;
        line-height: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        overflow-wrap: break-word;
        word-break: break-word;
        hyphens: auto;
    }

    .about-description:not(:last-child) {
        margin-bottom: 44px;
    }

    .about-content {
        margin-top: 146px;
    }

    .about-client {
        margin-top: 60px;
    }

    .about-content {
        position: relative;
        margin-right: 20px;
        max-width: 456px;
        height: fit-content;
        border-radius: 30px;
        padding: 20px 60px 30px 20px;
        background-color: rgba(255, 255, 255, 0.94);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .about-content.fixed {
        position: fixed;
        max-width: 416px;
        top: 70px;
        z-index: 1000;
    }

    .about-content.collapsed-state {
        padding: 16px 50px 16px 16px;
        min-height: 60px;
        display: flex;
        align-items: center;
        background: var(--white);
        border: 1px solid var(--neutral-100);
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        
        .content-title {
            display: none;
        }
        
        .content-container {
            padding: 0;
            height: 0;
            overflow: hidden;
        }
        
        &.fixed {
            width: 56px;
            height: 56px;
            padding: 0;
            border-radius: 50%;
            left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .content-title {
        font-size: 20px;
        font-weight: 700;
        color: rgba(142, 142, 147, 1);
        letter-spacing: -5%;
        margin-bottom: 4px;
        margin-left: 20px;
    }

    .content-list {
        max-width: 376px;
        margin-left: 20px;
    }

    .content-theme {
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -5%;
        line-height: 165%; 
        color: rgba(68, 75, 90, 1);
    }

    .content-theme .decoration {
        font-weight: 700;
    }

    .content-toggle-button {
        position: absolute;
        right: 16px;
        top: 16px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(240, 242, 245, 1);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 101;
        
        &:hover {
            background: rgba(220, 222, 225, 1);
            transform: scale(1.05);
        }
        
        &.expanded {
            .toggle-icon {
                transform: rotate(180deg);
            }
        }
        
        &:not(.expanded) {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 32px;
            height: 32px;
            
            .toggle-icon {
                transform: rotate(90deg);
            }
        }
        
        &.fixed-state:not(.expanded) {
            position: absolute;
            right: 12px;
            top: 12px;
            width: 32px;
            height: 32px;
            
            .toggle-icon svg {
                width: 16px;
                height: 16px;
            }
        }
    }
    
    .toggle-icon {
        width: 16px;
        height: 16px;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        svg {
            width: 100%;
            height: 100%;
            color: rgba(68, 75, 90, 1);
        }
    }

    .content-button {
        display: none;
    }

    .about-client {
        position: relative;
        padding-top: 637px;
        max-width: 1245px;
    }

    .client-image.tablet {
        position: absolute;
        top: 22px;
        left: 125px;
    }

    .images-description {
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -1px;
        line-height: 135%;
        margin: 0 auto;
        margin-top: 3px;
        text-align: center;
        font-style: italic;
        color: rgba(142, 142, 147, 1);
        max-width: 728px;
        word-wrap: break-word;
        word-break: break-all;
        hyphens: auto;
    }

    .client-title {
        margin-top: 50px;
        font-size: 42px;
        letter-spacing: -1px;
        color: #000;
        word-wrap: break-word;
        hyphens: auto;
    }

    .client-subtitle {
        margin-top: 35px;
        font-weight: 700;
        font-size: 32px;
        letter-spacing: -1px;
        line-height: 50px;
        color: rgba(68, 75, 90, 1);
        word-wrap: break-word;
        hyphens: auto;
    }

    .client-description {
        margin-top: 35px;
        font-size: 24px;
        font-weight: 450;
        line-height: 50px;
        letter-spacing: -1px;
        color: rgba(68, 75, 90, 1);
        word-wrap: break-word;
        hyphens: auto;
    }

    .client-image.layout {
        margin-top: 50px;
    }

    .images-description.layout {
        margin-top: 20px;
        margin-bottom: 66px;
    }

    .client-image.for-mobile {
        display: none;
    }

    @media (max-width: 1799px) {
        padding: 0;

        .about-wrapper {
            display: grid;
        }

        .about-client {
            max-width: none;
        }

        .about-client {
            padding-top: 0;
        }

        .client-image.tablet {
            position: relative;
            height: auto;
            width: 100%;
            margin-bottom: 20px;
            left: 0;
        }

        .client-image.layout {
            width: 100%;
            height: auto;
        }

        .about-content, .about-client {
            margin-top: 80px;
        }
    }

    @media (max-width: 1279px) {
        .about-content.fixed {
            max-width: none;
            width: 95%;
            left: 2.5%;
        }
        
        .about-content.fixed.collapsed-state {
            width: 56px;
            height: 56px;
            left: 20px;
        }

        .about-wrapper {
            display: flex;
            flex-direction: column;
        }

        .about-project {
            max-width: none;
        }

        .about-content, .content-list {
            max-width: none;
        }

        .about-client {
            margin-top: 0;
        }
    }

    @media (max-width: 756px) {
        padding: 0;

        .about-content.fixed {
            width: 90%;
            left: 5%;
        }
        
        .about-content.fixed.collapsed-state {
            width: 48px;
            height: 48px;
            left: 10px;
        }

        .about-wrapper {
            display: flex;
            flex-direction: column;
        }

        .about-project {
            min-width: auto;
        }

        .project-title {
            letter-spacing: -5%;
            margin-bottom: 30px;
        }

        .project-description {
            font-size: 20px;
            line-height: 135%;
        }

        .project-description br {
            display: none;
        }

        .about-title {
            font-size: 32px;
            line-height: 135%;
        }

        .about-description {
            font-size: 20px;
            line-height: 165%;
        }

        .about-content {
            margin-top: 40px;
            max-width: 100%;
        }
        
        .about-content.collapsed-state {
            min-height: 48px;
            padding: 12px 50px 12px 12px;
        }

        .content-list {
            max-width: 100%;
        }

        .about-client {
            margin-top: 0;
            padding-top: 0;
        }

        .client-image.tablet {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
        }

        .images-description {
            font-size: 16px;
        }

        .client-image.for-mobile {
            display: block;
            width: 80%;
            height: auto;
            margin: 0 auto;
            margin-top: 30px;
        }   

        .client-title {
            margin-top: 35px;
            font-size: 24px;
        }

        .client-subtitle, .client-description {
            font-size: 20px;
            line-height: 165%;
        }

        .client-image.layout {
            width: 100%;
            height: auto;
            margin-top: 35px;
        }

        .images-description.layout {
            margin-top: 15px;
            margin-bottom: 80px;
        }
    }
`