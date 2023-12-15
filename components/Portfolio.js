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
      img: "/images/case-studies/pocztex2.png",
      color: "border-[#f16464]",
      text: `Wakacyjna trasa kin plenerowych zrealizowana dla <b>Pocztex.</b>`,
      bg: "bg-[#f16464]"
    },
    {
      id: 2,
      img: "/images/case-studies/fundacja_dziedzictwo_przyrodnicze.png",
      color: "border-[#f1c40f]",
      text: `Kampania „Lasy, Bagna i Drzewa – dla czystego powietrza Małopolski” dla
      <b>Fundacji Dziedzictwo Przyrodnicze </b>`,
      bg: "bg-[#f1c40f]"

    },
    {
      id: 3,
      img: "/images/case-studies/Izby_gospodarczej_energetyki.png",
      color: "border-[#2ecc71]",
      text: `Realizacja gali jubileuszowej 30-lecia <b>Izby Gospodarczej Energetyki i
      Ochrony Środowiska</b>`,
      bg: "bg-[#2ecc71]"
    },
    {
      id: 4,
      img: "/images/case-studies/lewiatan.png",
      color: "border-[#3498db]",
      text: `Seria szkoleń medialnych realizowanych dla konfederacji <b>Lewiatan.</b>`,
      bg: "bg-[#3498db]"
    },
    {
      id: 5,
      img: "/images/case-studies/Zamku_Krolewskiego.png",
      color: "border-[#9b59b6]",
      text: `Produkcja kampanii video „Jubileusz 50-lecia Odbudowy” dla <b>Zamku
      Królewskiego w Warszawie</b>`,
      bg: "bg-[#9b59b6]"
    },
    {
      id: 6,
      img: "/images/case-studies/hotelmania.png",
      color: "border-[#e67e22]",
      text: `Realizacja akcji autopromocyjnej dla „WorldTour International by <b>Hotelmania</b>”
      – spoty, transmisje z wydarzeń, relacje z Japonii oraz Grecji`,
      bg: "bg-[#e67e22]"
    },
  ];

  return (
    <div id="casestudies" className="bg-black w-full ">
      <div
        ref={ref}
        className="w-full max-w-[1320px] mx-auto flex justify-between 1040px:flex-row flex-col items-center gap-16 py-12 1040px:py-24">

        <motion.div
          animate={leftAnimation}
          className="text-[#fff] 1040px:px-0 400px:px-12 px-6 1040px:w-[35%] 1040px:text-start text-center">
          <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">
            Case Studies
          </h1>
          <p className="my-5 text-[0.8rem] 400px:text-[1rem]">
            Poznaj nasze realizacje. Niech staną się inspiracją dla nowych, innowacyjnych
            pomysłów.
          </p>
        </motion.div>

        <motion.div
          animate={rightAnimation}
          className="w-[95%] mx-auto h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[65%] "
          style={{ zIndex: 1 }}
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
                <div className={`h-full w-full -mt-[25px] px-6 bg-white opacity-80 hidden group-hover:flex justify-center items-center`}>
                  <p dangerouslySetInnerHTML={{ __html: portfolio.text }} />
                </div>
              </div>
            ))
          }
        </motion.div>
      </div >
    </div >
  );
};

export default Portfolio;
