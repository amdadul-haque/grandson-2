"use client";
import React, { useEffect, useState } from "react";

// react icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaBehance,
} from "react-icons/fa";

// frammer motion
// import { motion } from "framer-motion";

const Hero = () => {
  // change the background text in hero section
  const [index, setIndex] = useState(0);
  const words = ["DEVELOPING", "CREATIVITY", "DESIGNING"];
  const [text, setText] = useState(words[index]);
  const typing = () => {
    setText(words[index]);
    setIndex((index) => index + 1);
  };
  useEffect(() => {
    if (index < words.length) {
      setTimeout(typing, 2000);
    } else {
      setIndex(0);
    }
  }, [index]);

  return (
    <div id="hero" className="w-full bg-hero bg-center bg-gray-800 h-[100vh] text-white flex items-center justify-center text-center">
      <div className="w-full mx-auto ">
        <h2 className=" font-bold text-[0.9rem] 400px:text-[1.1rem]">
          WEB DEVELOPER & UX DESIGNER
        </h2>
        <h1 className="text-[3.2rem] transition-all duration-300 400px:text-[4rem] font-extrabold  ">
          {text}
        </h1>
        <h4 className="text-[0.9rem] 400px:text-[1.1rem]">
          I’m a Creative Designer and I make things work.
          <p>Turning your dreams into reality.</p>
        </h4>
        <div className="flex items-center gap-6 pt-8 400px:pt-16 mx-auto w-full justify-center">
          <FaFacebookF className=" text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer" />
          <FaTwitter className=" text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer" />
          <FaInstagram className=" text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer" />
          <FaPinterestP className=" text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer" />
          <FaBehance className=" text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
