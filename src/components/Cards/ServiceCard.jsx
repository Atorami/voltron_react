import React, { useState } from "react";
import CardButton from "../Buttons/CardButton";

export default function ServiceCard({ bg, title, description, theme, size }) {
  const [isHovered, setIsHovered] = useState(false);

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };

  const innerContainerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "width 0.3s, height 0.3s",
    width: isHovered ? "120%" : "100%",
    height: isHovered ? "120%" : "100%",
  };

  return (
    <div
      className="min-w-[300px] h-[400px] overflow-hidden shadow-xl mx-10 rounded-tl-xl relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-end h-full">
        <div
          className="h-full w-full bg-black absolute"
          style={overlayStyle}
        ></div>
        <div className="inner-container" style={innerContainerStyle}></div>
        <span className="w-full h-[1.5px] bg-white z-10 mx-28 absolute mb-16"></span>
        <div className="w-full flex flex-row justify-between items-center px-4 absolute">
          <CardButton />
          <h5 className="text-white text-2xl font-bold p-4 z-10 text-right">
            PLC
          </h5>
        </div>
      </div>
      <div className="p-4">
        <div className="text-white">
          {/* {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))} */}
        </div>
      </div>
    </div>
  );
}
