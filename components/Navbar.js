'use client'
import React, { useEffect, useState } from "react";

// react icons
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  useEffect(() => {
    window.innerWidth < 768 && setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolY, setScrolY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolY(window.scrollY);
      });
    };
  }, []);



  return (
    // <nav className={`w-full ${window.scrollY > 60 && 'bg-[#151515]'} py-2 fixed`}>
    <nav className={`w-full ${typeof window !== 'undefined' && scrolY > 60 && 'bg-[#151515]'} px-3 lg:px-0 py-2 fixed z-100`}>
      <nav className="max-w-[1140px] mx-auto flex items-center justify-between w-full text-[#fff] navBar">
        <a href="#hero">
          <img src="/assets/images/logo.png" alt="logo" className="h-[70px]" />
        </a>

        <div
          className="sm:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-[25px]" />
        </div>
        <motion.ul
          className={`${isMobileMenuOpen ? 'flex flex-col' : 'hidden'} flex-col absolute px-4 py-2 top-[80px] left-0 right-0 w-[90%] md:w-auto mx-auto md:mx-0 md:top-0  bg-white md:bg-transparent text-black md:text-white md:flex md:flex-row justify-end md:items-centern gap-2 md:gap-6 md:relative`}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0, display: isMobileMenuOpen ? 'flex' : 'none' }}
        >
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
        </motion.ul>
      </nav>
    </nav >
  );
};

export default Navbar;  