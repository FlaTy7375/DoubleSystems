import React from "react";
import "../styles.css";
import WebSolutions from "@/components/blocks/web-solutions/websolutions";
import AboutUs from "@/components/blocks/about-us/about-us";
import WeCreated from "@/components/blocks/we-created/we-created";
import Portfolio from "@/components/blocks/portfolio/portfolio";
import MobileApp from "@/components/blocks/mobile-app/mobile-app";
import Cases from "@/components/blocks/cases/cases";
import Technology from "@/components/blocks/technology/technology";

export default function Main() {

    return (
        <>
            <WebSolutions></WebSolutions>
            <AboutUs></AboutUs>
            <WeCreated></WeCreated>
            <Portfolio></Portfolio>
            <MobileApp></MobileApp>
            <Cases></Cases>
            <Technology></Technology>
        </>
    );
  }
  