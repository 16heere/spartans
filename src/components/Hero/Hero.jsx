import React from "react";
import "./Hero.css";

const Hero = ({ title }) => {
    return (
        <div className="hero-section">
            <img src="/assets/hero-img.jpg" alt="Hero" className="hero-img" />
            <h1 className="hero-title">{title}</h1>
        </div>
    );
};

export default Hero;
