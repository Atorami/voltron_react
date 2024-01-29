import React from "react";
import logo from "../../assets/img/Voltron_logo.png";

const Header = () => {
  const navigationArr = ["Home", "About Us", "Services", "Contact"];

  return (
    <header className="fixed h-[80px] w-full z-10 bg-gray-100 bg-opacity-10">
      <div className="w-full h-full px-16 py-5 flex flex-row justify-between items-center">
        <img
          src={logo}
          alt="Voltron"
          className="h-16 opacity-85"
          style={{
            filter: "invert(1)",
          }}
        />
        <nav>
          <ul className="w-full flex flex-row justify-between text-white">
            {navigationArr.map((el, index) => (
              <li
                key={index}
                className="pr-10 text-xl font-normal hover:font-bold transition-all duration-100 ease-linear"
              >
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
