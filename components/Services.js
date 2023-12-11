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

  return (
    <div
      id="oferta"
      ref={ref}
      className="flex items-center  justify-between w-full mx-auto bg-hero gap-12 1040px:px-0 400px:px-12 px-6 bg-center py-12 1040px:flex-row flex-col 1040px:py-24">
      <motion.div
        animate={leftAnimation}
        className="text-[#fff] 1040px:pl-24 1040px:text-start text-center 1040px:w-[60%]">
        <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">Oferta</h1>
        <p className="mt-4 400px:text-[1rem] text-[0.8rem]">
          Kreatywne rozwiązania dla Twojej marki.
        </p>
      </motion.div>

      <motion.div
        animate={rightAnimation}
        className="grid grid-cols-1 400px:grid-cols-2 1040px:grid-cols-3 gap-8  1040px:pr-24">
        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/social_media.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">Social Media</h2>
          <p className="text-[0.8rem]">
            pomysły, które przyciągają uwagę i budują zaangażowanie. Pozwól
            nam wzmocnić twoją obecność online poprzez unikatowe treści i niebanalne
            podejście.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/digital.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">Digital</h2>
          <p className="text-[0.8rem]">
            strony internetowe, aplikacje, influencerzy. Zrealizujemy Twoje cele w
            cyfrowym świecie.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/atlbtl.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">ATL i BTL</h2>
          <p className="text-[0.8rem]">
            kampanie w mediach masowych łączymy z bezpośrednimi działaniami
            BTL, zapewniając szeroki zasięg i personalizowany kontakt z marką.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/planowanie.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">Planowanie mediów</h2>
          <p className="text-[0.8rem]">
            skuteczne strategie zagwarantują efektywną promocję Twoich
            produktów.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/szkolenia.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">Szkolenia medialne</h2>
          <p className="text-[0.8rem]">
            wspólnie z doświadczonymi dziennikarzami realizujemy
            skuteczną edukację z zakresu strategii komunikacyjnych, mediów
            społecznościowych oraz umiejętności publicznego występowania.
          </p>
        </div>

        <div className="bg-[#36363856] transition-colors duration-300  hover:bg-[#464647] p-6 text-[#ffff]">
          <Image src="/icons/video.png" width={40} height={40} />
          <h2 className="my-3 font-extrabold">Produkcja Video</h2>
          <p className="text-[0.8rem]">
            od animowanych explainerów, przez produkcje telewizyjne, po
            pełnometrażowe dokumenty. Zapewniamy sprawny przebieg działań od
            developmentu, aż po postprodukcję.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
