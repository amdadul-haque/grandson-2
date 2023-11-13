'use client'
import React, { useEffect, useState } from "react";

// react icons
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to update scrollY state
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className={`w-full ${window.scrollY > 60 && 'bg-[#151515]'} py-2 fixed`}>
    <nav className={`w-full ${typeof window !== 'undefined' && window.scrollY > 60 && 'bg-[#151515]'} py-2 fixed`}>
      <nav className="max-w-[1140px] mx-auto flex items-center justify-between w-full text-[#fff] navBar">
        <a href="#hero">
          <img src="/assets/images/logo.png" alt="logo" className="h-[60px]" />
        </a>

        {/* Hamburger menu button for mobile */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="hamburger-icon" />
        </div>

        <ul className="sm:flex hidden sm:flex-row items-center gap-6 relative">
          <a href="#hero">
            <li className="cursor-pointer">
              <p>Home</p>
              <span>Home</span>
            </li>
          </a>

          <a href="#portfolio">
            <li className="cursor-pointer flex items-center gap-2 group">
              <p>Portfolio</p>
              <span>Portfolio</span>
              {/* <BsChevronDown className="text-[#fff] 1040px:text-[1rem]" />
            <div className="megamenu opacity-0 fixed top-[7%] w-[300px] right-[10%] bg-[#000] group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0 translate-y-[100px]">
              <ul className="p-6">
                <li>portfolio</li>
                <li>portfolio</li>
                <li>portfolio</li>
                <li>portfolio</li>
                <li>portfolio</li>
              </ul>
            </div> */}
            </li>
          </a>

          <a href="#aboutus">
            <li className="cursor-pointer">
              <p>About</p>
              <span>About</span>
            </li>
          </a>

          <a href="#services">
            <li className="cursor-pointer flex items-center gap-2 group">
              <p>Services</p>
              <span>Services</span>
              {/* <BsChevronDown className="service text-[#fff] 1040px:text-[1rem]" />
            <div className="megamenu opacity-0 fixed top-[7%] w-[300px] right-[3%] bg-[#000] group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0 translate-y-[100px]">
              <ul className="p-6">
                <li>Service</li>
                <li>Service</li>
                <li>Service</li>
                <li>Service</li>
                <li>Service</li>
                <li>Service</li>
              </ul>
            </div> */}
            </li>
          </a>

          <a href="#contactus">
            <li className="cursor-pointer">
              <p>Contact</p>
              <span>Contact</span>
            </li>
          </a>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;  