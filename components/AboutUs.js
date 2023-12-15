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

  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div
      id="team"
      className="w-full bg-[#050505] py-[100px] relative">
      <div
        ref={ref}
        className="w-full max-w-[920px] mx-auto 1040px:px-0 400px:px-12 px-6 flex justify-between items-center 1040px:flex-row flex-col 1040px:py-0 gap-16">
        <motion.div animate={leftAnimation} className="text-[#fff] w-full flex flex-col justify-center">
          <h1 className="400px:text-[2rem] text-center text-[1.5rem] font-bold ">Team</h1>
          <p className="400px:my-10 my-6 text-[0.8rem]  400px:text-[1rem] ">
            Maciej Łuczyński i Bartłomiej Wasilewski to absolwenci Wydziału Organizacji Produkcji Filmowej i Telewizyjnej w Łódzkiej Szkole Filmowej (PWSFTiTV w Łodzi). Wieloletni producenci treści audiowizualnych w grupach medialnych TVP S.A. oraz ZPR Media S.A. Współpracowali z takimi markami jak: Bugatti, Eska, Gerda, Itaka, KIA, Mentos, Pocztex, Polsat, Redbull, Teatr Ateneum, Teatr Polski, Teatr Studio, Warszawska Opera Kameralna, WWF czy Zamek Królewski w Warszawie.
          </p>
          <div className="flex justify-center">
            <button
              className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] font-bold hover:bg-[#D92750] hover:text-white transition-colors duration-300"
              onClick={() => setModalOpen(!modalOpen)}
            >
              NASZ ZESPÓŁ
            </button>
          </div>
        </motion.div>
        {modalOpen &&
          <div className="absolute w-screen h-auto left-0 top-[50%] -translate-y-[50%] md:top-0 md:translate-y-0 bg-gray-900 p-3 sm:p-5 md:pb-8 lg:pb-10">
            <div className="w-full max-w-[1000px] mx-auto flex flex-col items-end gap-5">
              <button
                className=" flex justify-end"
                onClick={() => setModalOpen(!modalOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#fff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    // strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className=" flex gap-10">
                <img
                  src="/images/team_popup.png"
                  alt="about-background"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutUs;
