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
      ref={ref}
      className="bg-[#050505] w-full 1040px:px-0 400px:px-12 px-6 mx-auto flex justify-between font-oswald items-center 1040px:flex-row flex-col 1040px:py-0 py-12 gap-16">
      <motion.div animate={leftAnimation} className="text-[#fff] 1040px:pl-24">
        <h1 className="400px:text-[2rem] text-[1.5rem] font-bold ">ABOUT US</h1>
        <p className="400px:my-10 my-6 text-[0.8rem]  400px:text-[1rem] ">
          I’m a Graphic Designer and I make things work.without cross-media
          value. Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
          <br />
          <br />
          Completely synergize resource taxing relationships premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>

        <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          SEE OUR WORKS
        </button>
      </motion.div>

      <motion.div animate={rightAnimation} className="w-full  1040px:w-[100%]">
        <img
          src="https://html.dynamiclayers.net/it/alison/img/about-background.jpg"
          alt="about-background"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
