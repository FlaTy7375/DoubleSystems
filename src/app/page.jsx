import React from "react";
import "../styles.css";
import WebSolutions from "@/components/blocks/web-solutions/websolutions";
import AboutUs from "@/components/blocks/about-us/about-us";
import WeCreated from "@/components/blocks/we-created/we-created";
import Portfolio from "@/components/blocks/portfolio/portfolio";

export default function Main() {

    return (
        <>
            <WebSolutions></WebSolutions>
            <AboutUs></AboutUs>
            <WeCreated></WeCreated>
            <Portfolio></Portfolio>
        </>
    );
  }
  