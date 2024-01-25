import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Stay connected with us:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
          >
            Instagram
          </a>
        </div>
        <p className="mt-4">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
