import React from "react";
import logo from "../../assets/img/Voltron_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="w-40">
            <a href="">
              {" "}
              <img src={logo} alt="Voltron" />
            </a>
          </div>
          <div className="flex flex-row justify-between items-center pt-4">
            <p>© 2024 Voltron. All rights reserved.</p>
            <p>
              Created by <a href="#"> AM </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
