import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Voltron_logo.png";

const Header = () => {
  const navigationArr = ["Home", "About Us", "Services", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed h-[80px] w-full z-50 px-4 sm:px-8 py-3 sm:py-5 flex flex-row justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-70" : "bg-gray-100 bg-opacity-10"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-8 py-3 sm:py-5 flex flex-row justify-between items-center transition-all duration-300">
        <Link to="/">
        <img
          src={logo}
          alt="Voltron"
          className="h-12 sm:h-16 opacity-85"
          style={{
            filter: "invert(1)",
          }}
        />
        </Link>
       

        {/* Burger menu for mobile screens */}
        <div
          className={`block sm:hidden cursor-pointer z-30 transition-transform ${
            isMenuOpen ? "transform rotate-90 translate-y-1" : ""
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </div>

        {/* Navigation for medium and large screens */}
        <nav className="hidden sm:flex">
          <ul className="w-full flex flex-row justify-between text-white">
          {navigationArr.map((el, index) => (
  <li key={index} className="pr-6 sm:pr-10 text-xl font-normal cursor-pointer">
    <ScrollLink
      to={el.toLowerCase()}
      smooth={true}
      duration={500}
    >
      {el}
    </ScrollLink>
  </li>
))}
          </ul>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden pt-16 fixed inset-0 bg-black bg-opacity-70 z-20">
          <div className="flex flex-col items-center">
            {navigationArr.map((el, index) => (
              <ScrollLink
                to={el.toLowerCase()}
                smooth={true}
                duration={500}
                key={index}
              >
                <a className="text-white py-4 mb-10 text-2xl">{el}</a>
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
