"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

// react icons
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";


const Hero = () => {
  // change the background text in hero section
  const [index, setIndex] = useState(0);
  const words = ["KREACJA", "MARKETING", "PASJA"];
  const [text, setText] = useState(words[index]);
  const subtitles = ['tworzymy historie', 'inspirujemy marki', 'integrujemy społeczności'];

  const [subtitle, setSubtitle] = useState(subtitles[index])
  const typing = () => {
    setText(words[index]);
    setSubtitle(subtitles[index]);
    setIndex((index) => index + 1);
  };

  useEffect(() => {
    if (index < words.length) {
      setTimeout(typing, 2000);
    } else {
      setIndex(0);
    }
  }, [index]);


  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  

const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const linkIconStyle = " text-[1.2rem] text-[#c7c7c7] hover:text-[#ffff] transition-colors duration-300 cursor-pointer";
  return (
    <div id="start" className="w-full bg-hero bg-center bg-gray-800 h-[100vh] text-white flex items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0">
        <video
          ref={videoRef}
          autoplay
          loop
          muted
          className="opacity-100 w-full h-full object-cover"
        >
          <source src="/images/hero.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="w-full mx-auto z-10">
        <h2 className=" font-bold text-[0.9rem] xsm:text-[1.1rem]">
          AGENCJA MARKETINGOWA 360
        </h2>
        <h1 className="text-[3.2rem] transition-all duration-300 xsm:text-[4rem] font-extrabold  ">
          {text} 
        </h1>
        <h4 className="text-[0.9rem] xsm:text-[1.1rem]">
          <p>{subtitle}</p>
        </h4>
        <div className="flex items-center gap-6 pt-8 xsm:pt-16 mx-auto w-full justify-center">
          <a href="https://www.facebook.com/grandson.media" target="_blank">
            <FaFacebookF className={linkIconStyle} />
          </a>
          <a href="https://www.youtube.com/@grandsonmedia" target="_blank">
            <FaYoutube className={linkIconStyle} />
          </a>
          <a href="https://www.instagram.com/grandson.media/" target="_blank">
            <FaInstagram className={linkIconStyle} />
          </a>
          <a href="mailto:hello@grandson.media">
            <FaMailBulk className={linkIconStyle} />
          </a>
        </div>
      </div>
      <div className="mx-auto absolute bottom-[5vh] left-1/2 translate-x-[-50%]">
          <button
            onClick={handleScroll}
          >
            <BsChevronDown className="text-4xl animate-bounce" />
          </button>
        </div>
    </div >
  );
};

export default Hero;
