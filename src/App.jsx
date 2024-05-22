import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ServicePage from "./pages/ServicePage"
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="bg-white font-popponi overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceTitle" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
