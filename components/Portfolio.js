"use client";
import React, { useEffect } from "react";

// frammer motion
import { useAnimation, motion } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  // intersection observer
  const { ref, inView } = useInView({ threshold: 0.2 });

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
      className="bg-[#000000] w-full mx-auto flex justify-between font-oswald 1040px:flex-row flex-col items-center gap-16 py-12 1040px:py-24">
      <motion.div
        animate={leftAnimation}
        className="text-[#fff] 1040px:px-0 400px:px-12 px-6 1040px:pl-24 1040px:w-[35%] 1040px:text-start text-center">
        <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">
          PORTFOLIO
        </h1>
        <p className="my-5 text-[0.8rem] 400px:text-[1rem]">
          I’m a Creative Designer and I make things work.
          <br />
          Turning your dreams into reality.
        </p>
        <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          OUR ALL WORKS
        </button>
      </motion.div>

      <motion.div
        animate={rightAnimation}
        className="grid 400px:grid-cols-3 grid-cols-1  1040px:grid-cols-3 1040px:w-[65%]">
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-1.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-2.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-3.gif"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-4.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-5.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-6.jpg"
          alt="img"
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;
