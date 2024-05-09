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
    <nav className={`w-full fixed`}
      style={{ zIndex: 49 }}
    >
      <motion.div className="absolute z-0 w-full h-16 bg-[#151515]"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolY > 60 ? 1 : 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      ></motion.div>
      <div className="max-w-[1140px] mx-auto flex items-center justify-between w-full text-[#fff] navBar">
        <a href="/" className="z-10 flex h-full items-center">
          <img src="/images/upper_left_corner.png" alt="logo" className="h-[35px] lg:h-[50px] ml-2 my-2" />
        </a>

        <div
          className="md:hidden cursor-pointer z-10 mr-2"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-xl " />
        </div>
        <motion.ul
          className={`${isMobileMenuOpen ? 'flex flex-col' : 'hidden'} flex-col absolute px-4 py-2 top-[80px] left-0 right-0 w-[90%] md:w-auto mx-auto md:mx-0 md:top-0 bg-[#222] md:bg-transparent text-white md:flex md:flex-row justify-end md:items-centern gap-2 md:gap-6 md:relative`}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0, display: isMobileMenuOpen ? 'flex' : 'none' }}
        >
          <a href="#start">
            <li className="cursor-pointer">
              <p>Start</p>
              <span>Start</span>
            </li>
          </a>

          <a href="#oferta">
            <li className="cursor-pointer flex items-center gap-2 group">
              <p>Oferta</p>
              <span>Oferta</span>
            </li>
          </a>

          <a href="#casestudies">
            <li className="cursor-pointer flex items-center gap-2 group">
              <p>Case Studies</p>
              <span>Case Studies</span>
            </li>
          </a>

          <a href="#team">
            <li className="cursor-pointer">
              <p>Team</p>
              <span>Team</span>
            </li>
          </a>

          <a href="#kontakt">
            <li className="cursor-pointer">
              <p>Kontakt</p>
              <span>Kontakt</span>
            </li>
          </a>
        </motion.ul>
      </div>
    </nav >
  );
};

export default Navbar;  