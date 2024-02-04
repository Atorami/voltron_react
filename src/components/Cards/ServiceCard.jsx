import React from "react";

export default function ServiceCard({ bg, title, description, theme }) {
  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    // backgroundColor:
    //   theme === "red" ? "rgba(255, 0, 0, 0.8)" : "rgba(0, 0, 255, 0.8)",
    backgroundColor: "rgba(0,0,0,0.3)",
  };

  return (
    <div
      className="min-w-[300px] h-[400px] overflow-hidden shadow-lg mx-10 relative rounded-tl-xl"
      style={cardStyle}
    >
      <div className="flex flex-col justify-end h-full">
        <div
          className="h-full w-full bg-black absolute"
          style={overlayStyle}
        ></div>
        <span className="w-full h-[1.5px] bg-white z-10 mx-28"></span>
        <h5 className="text-white text-2xl font-bold p-4 z-10 text-right">
          PLC
        </h5>
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
