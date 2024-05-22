import React from "react";
import logo from "../../assets/img/Voltron_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:items-baseline ">
          <div className="w-40">
            <a href="">
              {" "}
              <img src={logo} alt="Voltron" />
            </a>
          </div>
          <div className="w-full flex flex-col xl:flex-row xl:justify-between items-center pt-4">
            <p>© 2024 Voltron. All rights reserved.</p>
            <p>
              Created by <a href="https://linkedin.com/in/anton-martsinkevich"> AM </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
