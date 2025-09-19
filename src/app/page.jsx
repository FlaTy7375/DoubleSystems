import React from "react";
import "../styles.css";
import WebSolutions from "@/components/blocks/web-solutions/websolutions";
import AboutUs from "@/components/blocks/about-us/about-us";
import WeCreated from "@/components/blocks/we-created/we-created";

export default function Main() {

    return (
        <>
            <WebSolutions></WebSolutions>
            <AboutUs></AboutUs>
            <WeCreated></WeCreated>
        </>
    );
  }
  