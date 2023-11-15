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

  const portfolios = [
    {
      id: 1,
      img: "/assets/images/portfolio/1.jpg",
      color: "border-[#f16464]",
    },
    {
      id: 2,
      img: "/assets/images/portfolio/2.jpg",
      color: "border-[#f1c40f]",
    },
    {
      id: 3,
      img: "/assets/images/portfolio/3.jpg",
      color: "border-[#2ecc71]",
    },
    {
      id: 4,
      img: "/assets/images/portfolio/4.jpg",
      color: "border-[#3498db]",
    },
    {
      id: 5,
      img: "/assets/images/portfolio/5.jpg",
      color: "border-[#9b59b6]",
    },
    {
      id: 6,
      img: "/assets/images/portfolio/6.jpg",
      color: "border-[#e67e22]",
    },
  ];

  return (
    <div id="portfolio" className="bg-black w-full ">
      <div
        ref={ref}
        className="w-full max-w-[1320px] mx-auto flex justify-between  1040px:flex-row flex-col items-center gap-16 py-12 1040px:py-24">

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
          className="w-[95%] mx-auto h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  lg:w-[65%] "
          style={{zIndex: 1}}
          >

          {
            portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="w-full h-[280px] relative group transition duration-300 overflow-hidden">
                <img
                  src={portfolio.img}
                  alt="img"
                  className="absolute w-full h-full object-cover group-hover:scale-110 overflow-hidden transition-all duration-300"
                />
                <div className={`absolute h-full w-full ${portfolio.color} border-[50px] group-hover:border-0 transition-border duration-500`}>
                </div>
                <h2>{portfolio.color}</h2>
              </div>
            ))
          }
        </motion.div>
      </div >
    </div >
  );
};

export default Portfolio;
