import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Promo from "../components/Promo/Promo";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <Hero />
      <About />
      <Promo />
      <Contact />
    </div>
  );
};

export default HomePage;
