import React, { useState, useEffect } from "react";
import MarineBg from "../../assets/img/marine_bg.png";
import IndustrialBg from "../../assets/img/industrial_bg.png";
import "./Hero.css"; // Import a separate CSS file for styles (Hero.css)

const Hero = () => {
  return (
    <section
      className="bg-blue-500 text-white py-20"
      style={{
        backgroundImage: 'url("your-background-image.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">MARINE & INDUSTRIAL</h1>
        <h1 className="text-5xl font-extrabold mb-8">
          ELECTRICAL AND AUTOMATION
        </h1>
        <p className="text-lg mb-8">
          Leading the way in innovative solutions for automation and
          electronics.
        </p>
        <button className="bg-white text-blue-500 hover:bg-blue-100 py-2 px-4 rounded-full">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
