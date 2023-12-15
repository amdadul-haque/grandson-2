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
import Image from "next/image";

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


  const services = [
    {
      icon: '/icons/social_media.png',
      title: 'Social Media',
      description:
        'Pomysły, które przyciągają uwagę i budują zaangażowanie. Pozwól nam wzmocnić twoją obecność online poprzez unikatowe treści i niebanalne podejście.',
    },
    {
      icon: '/icons/digital.png',
      title: 'Digital',
      description: 'Strony internetowe, aplikacje, influencerzy. Zrealizujemy Twoje cele w cyfrowym świecie.',
    },
    {
      icon: '/icons/atlbtl.png',
      title: 'ATL i BTL',
      description:
        'Kampanie w mediach masowych łączymy z bezpośrednimi działaniami BTL, zapewniając szeroki zasięg i personalizowany kontakt z marką.',
    },
    {
      icon: '/icons/planowanie.png',
      title: 'Planowanie mediów',
      description: 'Skuteczne strategie zagwarantują efektywną promocję Twoich produktów.',
    },
    {
      icon: '/icons/szkolenia.png',
      title: 'Szkolenia medialne',
      description:
        'Wspólnie z doświadczonymi dziennikarzami realizujemy skuteczną edukację z zakresu strategii komunikacyjnych, mediów społecznościowych oraz umiejętności publicznego występowania.',
    },
    {
      icon: '/icons/video.png',
      title: 'Produkcja Video',
      description:
        'Od animowanych explainerów, przez produkcje telewizyjne, po pełnometrażowe dokumenty. Zapewniamy sprawny przebieg działań od developmentu, aż po postprodukcję.',
    },
  ];

  return (
    <div className="w-full  bg-hero bg-no-repeat bg-cover bg-center">
      <div
        id="oferta"
        ref={ref}
        className=" w-full max-w-[1320px] mx-auto gap-12 px-4 1040px:px-0 py-12 flex flex-col items-center justify-between 1040px:flex-row 1040px:py-24">
        <motion.div
          animate={leftAnimation}
          className="text-[#fff] 1040px:text-start text-center 1040px:w-[60%]">
          <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">Oferta</h1>
          <p className="mt-4 400px:text-[1rem] text-[0.8rem]">
            Kreatywne rozwiązania dla Twojej marki.
          </p>
        </motion.div>

        <motion.div
          animate={rightAnimation}
          className="grid grid-cols-1 400px:grid-cols-2 1040px:grid-cols-3 gap-4 sm:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#36363856] transition-colors duration-300 hover:bg-[#464647] p-3 py-4 sm:p-6 text-[#ffff]"
            >
              <Image src={service.icon} width={40} height={40} />
              <h2 className="my-3 font-extrabold">{service.title}</h2>
              <p className="text-[0.8rem]">{service.description}</p>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
