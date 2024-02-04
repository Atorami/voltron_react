import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/img/Voltron_logo.png";

const Header = () => {
  const navigationArr = ["Home", "About Us", "Services", "Contact"];
  const [scrolled, setScrolled] = useState(false);

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

  // navigationArr.map((el, index) => (
  //   console.log(el.toLowerCase)
  // )

  return (
    <header
      className={`fixed h-[80px] w-full z-10 px-16 py-5 flex flex-row justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-70" : "bg-gray-100 bg-opacity-10"
      }`}
    >
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
              <ScrollLink
                to={el.toLowerCase()}
                smooth={true}
                duration={500}
                key={index}
              >
                <li key={index} className="pr-10 text-xl font-normal">
                  <a
                    href="#"
                    className="w-full hover:font-bold transition-all duration-100 ease-linear"
                  >
                    {el}
                  </a>
                </li>
              </ScrollLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
