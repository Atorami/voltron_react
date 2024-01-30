import React from "react";
import bg_img from "../../assets/img/hero_bg.png";
import Button from "../Buttons/Button";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden">
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
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="absolute bottom-10 text-white cursor-pointer"
        >
          <div className="bg-white bg-opacity-20 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
