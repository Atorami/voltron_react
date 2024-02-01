import React from "react";

const OfferCard = ({ src, title, description, theme }) => {
  const cardStyle =
    theme === "industrial"
      ? "hover:bg-title_red transition-all duration-700 ease-linear hover:opacity-60"
      : theme === "marine"
      ? "hover:bg-title_blue transition-all duration-700 ease-linear hover:opacity-60"
      : "bg-white transition-all duration-500 hover:bg-gray-100 ease-linear";

  const titleColor =
    theme === "industrial"
      ? "text-red-500"
      : theme === "marine"
      ? "text-blue-500"
      : "text-black";

  return (
    <div
      className={`max-w-full mx-4 ${cardStyle} rounded-l overflow-hidden shadow-lg`}
    >
      <div className="flex items-center">
        <div className="w-1/3 pr-4">
          <img
            src={src}
            alt="Card Image"
            className="rounded-l object-cover w-full h-full"
          />
        </div>
        <div className="w-2/3 p-4">
          <h5 className={`text-2xl font-bold tracking-tight ${titleColor}`}>
            {title || "Default Title"}
          </h5>
          <p className="font-normal text-black">
            {description || "Default Description"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
