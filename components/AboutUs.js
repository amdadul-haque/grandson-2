"use client";

import React, { useEffect } from "react";

// frammer motion
import { motion, useAnimation } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // intersection observer
  const { ref, inView } = useInView({ threshold: 0.1 });

  // animation
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });

      rightAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      leftAnimation.start({
        opacity: 0,
        x: -150,
      });

      rightAnimation.start({
        opacity: 0,
        x: 150,
      });
    }
  }, [inView]);

  return (
    <div 
    id="aboutus"
    className="w-full bg-[#050505] py-[100px]">

      <div
        ref={ref}
        className="w-full max-w-[1320px] mx-auto 1040px:px-0 400px:px-12 px-6 flex justify-between  items-center 1040px:flex-row flex-col 1040px:py-0 gap-16">
        <motion.div animate={leftAnimation} className="text-[#fff] w-full">
          <h1 className="400px:text-[2rem] text-[1.5rem] font-bold ">ABOUT US</h1>
          <p className="400px:my-10 my-6 text-[0.8rem]  400px:text-[1rem] ">
            Maciej Łuczyński i Bartłomiej Wasilewski to absolwenci Wydziału Organizacji Produkcji Filmowej i Telewizyjnej w Łódzkiej Szkole Filmowej (PWSFTiTV w Łodzi). Wieloletni producenci treści audiowizualnych w grupach medialnych TVP S.A. oraz ZPR Media S.A. Współpracowali z takimi markami jak: Bugatti, Eska, Gerda, Itaka, KIA, Mentos, Pocztex, Polsat, Redbull, Teatr Ateneum, Teatr Polski, Teatr Studio, Warszawska Opera Kameralna, WWF czy Zamek Królewski w Warszawie.
          </p>

          <a href="#services">
            <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
              SEE OUR WORKS
            </button>
          </a>
        </motion.div>

        <motion.div animate={rightAnimation} className="w-full">
          <div className="flex gap-10">
            <img
              src="/assets/images/people-1.png"
              alt="about-background"
              className="w-1/2 h-full object-cover"
            />
            <img
              src="/assets/images/people-2.png"
              alt="about-background"
              className="w-1/2 h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
