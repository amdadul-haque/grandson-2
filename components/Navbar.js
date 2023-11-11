import React from "react";

// react icons
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center absolute top-0 left-0 justify-between w-full text-[#fff] 1040px:p-8 p-6 navBar">
      <h1>logo</h1>
      <ul className="flex items-center gap-6 relative">
        <li className=" cursor-pointer">
          <p>Home</p>
          <span>Home</span>
        </li>

        <li className=" cursor-pointer flex items-center gap-2 group">
          <p>Portfolio</p>
          <span>Portfolio</span>
          <BsChevronDown className="text-[#fff] 1040px:text-[1rem]" />
          <div className=" megamenu opacity-0 fixed top-[7%] w-[300px] right-[10%] bg-[#000] group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0 translate-y-[100px]">
            <ul className="p-6">
              <li>portfolio</li>
              <li>portfolio</li>
              <li>portfolio</li>
              <li>portfolio</li>
              <li>portfolio</li>
            </ul>
          </div>
        </li>

        <li className=" cursor-pointer">
          <p>About</p>
          <span>About</span>
        </li>

        <li className=" cursor-pointer flex items-center gap-2 group">
          <p>Services</p>
          <span>Services</span>
          <BsChevronDown className="service text-[#fff] 1040px:text-[1rem]" />
          <div className=" megamenu opacity-0 fixed top-[7%] w-[300px] right-[3%] bg-[#000] group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0 translate-y-[100px]">
            <ul className="p-6">
              <li>Service</li>
              <li>Service</li>
              <li>Service</li>
              <li>Service</li>
              <li>Service</li>
              <li>Service</li>
            </ul>
          </div>
        </li>

        <li className=" cursor-pointer">
          <p>Contact</p>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
