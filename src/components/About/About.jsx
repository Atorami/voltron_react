import React from "react";
import { Fade } from "react-reveal";
import card1 from "../../assets/img/stats/card_1.png";
import card2 from "../../assets/img/stats/card_2.png";
import card3 from "../../assets/img/stats/card_3.png";
import img1 from "../../assets/img/about_bg.jpg";

const About = () => {
  return (
    <section
      id="about us"
      className="h-[1150px] laptop:h-[900px] overflow-hidden bg-gray-100 lg:bg-white flex flex-col justify-between"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-4xl font-extrabold pt-10 lg:pt-20 lg:text-right font-popponi px-2">
          <span className="text-6xl text-gray-400 border-2 p-1">A</span>bout Us
        </h2>
        <div className="flex flex-col laptop:flex-row mt-12 laptop:mt-32">
          <div className="left w-full  laptop:w-1/2 laptop:pr-20 flex flex-col justify-center">
            <h5 className="title"><span className="text-6xl font-semibold text">Voltron</span> is your partner in delivering top-notch maritime and industrial electrical and automation solutions</h5>
            <p className="my-4">
              Our headquarters in Szczecin, strategically located near the Baltic Sea, positions us to efficiently serve the maritime industry. At Voltron, we understand the critical importance of reliable electrical systems and advanced automation in maritime and industrial operations.
            </p>
            <p className="my-4">Our team of highly skilled professionals is equipped to handle complex challenges, from designing electrical systems for marine vessels to implementing cutting-edge automation solutions for industrial facilities. We strive for operational excellence and are dedicated to delivering tailored solutions that exceed expectations.</p>
            <p className="">Explore the world of marine and industrial electrical excellence with Voltron. Contact us today to discuss your project and discover how our commitment to quality and innovation can elevate your operations.</p>
          </div>
         
          <div className="right w-full laptop:w-1/2 mt-6 laptop:mt-0 grid grid-cols-2 grid-rows-3 gap-4 text-white">
            <div className="hidden laptop:block row-span-3">
              <img src={img1} className="h-[600px] object-cover rounded-tl-2xl" alt="Voltron" />
            </div>
            <div className="col-span-2 laptop:col-start-2 row-start-1 relative rounded-xl p-2 laptop:p-4 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-cover rounded-xl" style={{ backgroundImage: `url(${card1})` }}></div>
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl backdrop-filter backdrop-blur-3xl"></div>
              <div className="relative text-center">
                <p className="text-2xl laptop:text-4xl mb-2">Projects done:</p>
                <p className="text-4xl laptop:text-6xl font-bold">100 +</p>
              </div>
            </div>
            <div className="col-span-2 laptop:col-start-2 row-start-2 relative rounded-xl p-2 laptop:p-4 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-cover rounded-xl" style={{ backgroundImage: `url(${card2})` }}></div>
              <div className="absolute inset-0 opacity-50 rounded-xl backdrop-filter backdrop-blur-3xl"></div>
              <div className="relative text-center">
                <p className="text-2xl laptop:text-4xl mb-2">Clients Served:</p>
                <p className="text-4xl laptop:text-6xl font-bold">50 +</p>
              </div>
            </div>
            <div className="col-span-2 laptop:col-start-2 row-start-3 relative rounded-xl p-2 laptop:p-4 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-cover rounded-xl" style={{ backgroundImage: `url(${card3})` }}></div>
              <div className="absolute inset-0 opacity-50 rounded-xl backdrop-filter backdrop-blur-3xl"></div>
              <div className="relative text-center">
                <p className="text-2xl laptop:text-4xl mb-2">Years on market:</p>
                <p className="text-4xl laptop:text-6xl font-bold">5 +</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
