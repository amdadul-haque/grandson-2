"use client";
import React, { useEffect, useRef, useState } from "react";
;
import { motion } from "framer-motion";

const Hero = () => {

  const videoRef2 = useRef();
  useEffect(() => {
    videoRef2.current.play();
  }, []);


  return (
    <div id="start" className="w-full xl:h-[100vh] bg-gray-950 text-white flex items-center justify-center text-center">
      <div className="w-full z-0 relative h-full">
        <video
          ref={videoRef2}
          autoplay
          loop
          muted
          className="object-cover w-full h-full aspect-[4/3] sm:aspect-video"
        >
          <source src="/images/media/hero.mp4" type="video/mp4"></source>
        </video>
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-5">
            {/* Szkolenia Medialne <br /> Mistrzowie Mediów <br /> */}
          </h1>
        </motion.div>
      </div>
    </div >
  );
};

export default Hero;
