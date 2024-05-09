"use client";
import React, { useEffect, useRef, useState } from "react";
;

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
          <source src="/images/videos/hero.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-5">
            Video  Marketing <br />
            <span className="text-base md:text-xl lg:text-2xl leading-3">Produkcja i Promocja</span>
          </h1>
        </div>
      </div>
    </div >
  );
};

export default Hero;
