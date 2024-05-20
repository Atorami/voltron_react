import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardButton from "../Buttons/CardButton";
import Page from "../Page/Page";

export default function ServiceCard({ bg, title, description, size }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardBgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.3s",
    transform: isHovered ? "scale(1.1)" : "scale(1.0)",
  };


  return (
    <div
      className="min-w-[300px] h-[400px] overflow-hidden shadow-xl mx-10 rounded-tl-xl relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-end h-full">
        <div className="absolute w-full h-full" style={cardBgStyle}></div>
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 laptop:px-20 py-8 relative z-10">
          <span className="h-[1.5px] bg-white mb-6"></span>
          <div className="w-full flex flex-col justify-between items-center laptop:px-4">
            <h5 className="text-white text-center text-2xl font-bold mb-4">
              {title}
            </h5>
            <Link to={Page}>
              <CardButton />
            </Link>
          </div>
          <span className="h-[1.5px] bg-white mt-6"></span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-white">
          {description && description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
