import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Promo from "./components/Promo/Promo";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Promo />
      <Contact />
      <Footer />
    </div>
  );
}
