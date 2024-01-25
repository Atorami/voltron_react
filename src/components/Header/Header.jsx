import React from "react";
import { Navbar, Dropdown, DropdownItem } from "flowbite-react";
import logo from "../../assets/img/Voltron_logo.png"; // Assuming Flowbite components

const Header = () => {
  return (
    <header>
      <div className="text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <Dropdown label="Language">
            <DropdownItem href="#">English</DropdownItem>
            <DropdownItem href="#">Español</DropdownItem>
          </Dropdown>

          <div className="flex flex-row">
            <div className="flex items-center space-x-4 pr-10">
              <span>Phone: +123456789</span>
            </div>

            <div className="flex items-center space-x-4">
              <span>Email: voltron@voltron.com.pl</span>
            </div>
          </div>
        </div>
      </div>

      <Navbar fluid rounded className="bg-gray-100 text-white p-2">
        <Navbar.Brand>
          <img src={logo} alt="Voltron" className="h-16" />
        </Navbar.Brand>

        <Navbar.Collapse className="hidden md:flex">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About Us</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>

        <div className="md:hidden">
          <Navbar.Toggle />
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
