"use client";
import React, { useEffect, useRef, useState } from "react";
;
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { pageTitles } from "@/public/data/common";

const Hero = () => {

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
  const interval = 2000;
  const pathname = usePathname().split('/')[1];
  const texts = pageTitles.filter((title) => title.page === pathname)[0].texts;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(textChangeInterval);
  }, [texts, interval]);

  const videoDir = pageTitles.filter((title) => title.page === pathname)[0].videDir;
  return (
    <div id="start" className="w-full xl:h-[100vh] bg-gray-950 text-white flex items-center justify-center text-center">
      <div className="w-full z-0 relative h-full">
        <video
          ref={videoRef}
          autoplay
          loop
          muted
          className="object-cover w-full h-full aspect-[4/3] sm:aspect-video"
        >
          <source src={`/images/${videoDir}/hero.mp4`} type="video/mp4"></source>
        </video>
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {texts.map((text, index) => (
            <h1
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center leading-5 ${index === currentTextIndex ? 'transform rotateX-0' : 'transform rotateX-90'
                }`}
            >
              {text}
            </h1>
          ))}
          
        </motion.div>
        <div className="mx-auto absolute bottom-[10vh] left-1/2 translate-x-[-50%]">
          <button
            onClick={handleScroll}
          >
            <BsChevronDown className="text-4xl animate-bounce" />
          </button>
        </div>
      </div>
    </div >
  );
};

export default Hero;
