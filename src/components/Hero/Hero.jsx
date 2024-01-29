import React from "react";
import bg_img from "../../assets/img/hero_bg.png";
import Button from "../Buttons/Button";

const Hero = () => {
  return (
    <section className="relative h-[1100px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg_img})`,
          filter: "blur(1.5px)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative flex flex-col justify-center items-center h-full text-white px-16">
        <h1 className="text-8xl pb-4 text-center">
          <span className="text-title_blue font-semibold">Marine</span> & {""}
          <span className="text-title_red font-semibold">Industrial</span>{" "}
        </h1>
        <h2 className="text-4xl pb-16 text-center">
          <span className="">Electrical</span> and{" "}
          <span className="">Automation</span>
        </h2>
        <Button className="" title="Explore our services" />
      </div>
    </section>
  );
};

export default Hero;
