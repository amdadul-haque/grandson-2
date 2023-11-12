"use client";

import React, { useEffect } from "react";

// react icons
import { SiSimpleanalytics, SiVorondesign } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { PiBicycleLight } from "react-icons/pi";

// intersection observer
import { useInView } from "react-intersection-observer";

// frammer motion
import { useAnimation, motion } from "framer-motion";

const Services = () => {
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
      className="flex items-center font-oswald justify-between w-full mx-auto bg-hero gap-12 1040px:px-0 400px:px-12 px-6 bg-center py-12 1040px:flex-row flex-col 1040px:py-24">
      <motion.div
        animate={leftAnimation}
        className="text-[#fff] 1040px:pl-24 1040px:text-start text-center 1040px:w-[60%]">
        <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">SERVICES</h1>
        <p className="mt-4 400px:text-[1rem] text-[0.8rem]">
          I’m a Creative Designer and I make things work.
          <br />
          Turning your dreams into reality.
        </p>
      </motion.div>

      <motion.div
        animate={rightAnimation}
        className="grid grid-cols-1 400px:grid-cols-2 1040px:grid-cols-3 gap-8  1040px:pr-24">
        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <SiVorondesign color="#f16464" className="text-[2.5rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <FaReact color="#f16464" className="text-[2.5rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <TbWriting color="#f16464" className="text-[2.5rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <CiMobile3 color="#f16464" className="text-[2.5rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <PiBicycleLight color="#f16464" className="text-[2.5rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <SiSimpleanalytics color="#f16464" className="text-[2rem]" />
          <h2 className="my-3 font-extrabold">WEB DESIGN</h2>

          <p className="text-[0.8rem]">
            I’m a Creative Designer and I make things work. Turning your dreams
            into reality.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
