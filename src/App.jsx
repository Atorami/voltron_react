import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Promo from "./components/Promo/Promo";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
     <div className="bg-white font-popponi overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Promo />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
   
  );
}
