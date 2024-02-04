import React from "react";
import { Fade } from "react-reveal";
import bg_img_about from "../../assets/img/about_bg.jpg";
import Stats from "./Stats/Stats";

const About = () => {
  return (
    <section
      id="about us"
      className="h-[100vh] overflow-hidden bg-white flex flex-col justify-between"
    >
      <div className="container mx-auto lg:container-lg">
        <h2 className="text-3xl lg:text-4xl font-extrabold pt-20 text-right font-popponi">
          <span className="text-6xl text-gray-400 border-2 p-1">A</span>bout Us
        </h2>
        <div className="flex flex-row ">
          <Fade left duration={2000} delay={200}>
            {" "}
            <div className="md:w-1/2 px-16 relative">
              <img
                src={bg_img_about}
                alt=""
                className="rounded-r rounded-3xl shadow-md"
              />
            </div>
          </Fade>

          <div className="mt-16">
            <Fade right duration={2000}>
              {" "}
              <div className="flex flex-col  w-1/2 absolute bg-white shadow-xl rounded-l rounded-3xl p-6 right-40">
                <p className="text-xl">
                  Welcome to{" "}
                  <span className="text-2xl font-semibold">Voltron</span>, your
                  partner in delivering top-notch maritime and industrial
                  electrical and automation solutions. With a focus on
                  innovation and excellence, we take pride in our dedicated team
                  and commitment to meeting the unique needs of our clients.
                </p>
                <p className="text-xl mt-4">
                  Our headquarters in Szczecin, strategically located near the
                  Baltic Sea, positions us to efficiently serve the maritime
                  industry. At
                  <span> Voltron</span>, we understand the critical importance
                  of reliable electrical systems and advanced automation in
                  maritime and industrial operations.
                </p>
                <p className="text-xl mt-4">
                  Our team of highly skilled professionals is equipped to handle
                  complex challenges, from designing electrical systems for
                  marine vessels to implementing cutting-edge automation
                  solutions for industrial facilities. We strive for operational
                  excellence and are dedicated to delivering tailored solutions
                  that exceed expectations.
                </p>
                <p className="text-xl mt-4">
                  Explore the world of marine and industrial electrical
                  excellence with <span> Voltron</span>. Contact us today to
                  discuss your project and discover how our commitment to
                  quality and innovation can elevate your operations.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default About;
