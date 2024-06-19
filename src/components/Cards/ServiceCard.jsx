import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ bg, title, description, short }) => {
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
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 laptop:px-20 py-8 relative">
          <hr className="h-[1.5px] bg-white mb-6" />
          <div className="w-full flex flex-col justify-between items-center laptop:px-4">
            <h5 className="text-white text-center text-2xl font-bold">
              {title}
            </h5>
            <Link
              to={`/services/${short}`}
              state={{ bg, title, description }}
            >
            </Link>
          </div>
          <hr className="h-[1px] bg-white mt-6" />
        </div>
      </div>
    </div>
  );
};


export default ServiceCard;