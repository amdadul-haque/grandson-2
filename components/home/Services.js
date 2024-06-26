"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: '/icons/video.png',
      title: 'Video Marketing',
      link: "video",
      description:
        'Spoty, które realizują cele biznesowe oraz misję organizacji. Filmy wizerunkowe, reklamy AI, animowane explainery.',
    },
    {
      icon: '/icons/szkolenia.png',
      title: 'Szkolenia medialne',
      link: "szkolenia",
      description: "Doświadczeni dziennikarze i managerowie uczą strategii komunikacyjnych, mediów społecznościowych oraz publicznego występowania. Kompleksowe szkolenia dla biznesu i przyszłych dziennikarzy. To wszystko w ramach warsztatów, Mistrzowie Mediów"
    },

    {
      icon: '/icons/digital.png',
      title: 'Digital',
      link: "digital",
      description: 'Od responsywnych stron internetowych po innowacyjne aplikacje mobilne i skuteczne kampanie z influencerami. Zrealizujemy Twoje cele w cyfrowym świecie.',
    },
    {
      icon: '/icons/atlbtl.png',
      title: "Podcasty",
      link: "podcast",
      description: 'Kompleksowe rozwiązania podcastowe dla budowania marki i zaangażowania klientów. Wysoka jakość treści dostosowana do biznesowych celów, realizowane przez doświadczonych producentów w naszym studiu.',
    },
    {
      icon: '/icons/social_media.png',
      title: 'Social Media',
      link: "social-media",
      description: "Innowacyjne podejście i unikalne treści. Nasze strategie zbudują zaangażowanie i lojalność klientów. Pozwól nam wzmocnić Twoją obecność online."
    },
    {
      icon: '/icons/planowanie.png',
      title: 'Strategia marketingowa',
      link: "strategia",
      description: 'Skuteczne targetowanie, więcej klientów, wzrost sprzedaży. Efektywne wykorzystanie mediów tradycyjnych poprzez synergię ATL/BTL, zapewniające skuteczną promocję Twoich produktów.',
    },



  ];

  return (
    <div className="w-full  bg-hero bg-no-repeat bg-cover bg-center">
      <div
        id="oferta"
        className=" w-full max-w-[1320px] mx-auto gap-12 px-4 lg:px-0 py-12 flex flex-col items-center justify-between lg:flex-row lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="text-white lg:text-start text-center lg:w-[60%]">
          <h1 className="text-[1.5rem] xsm:text-[2rem] font-bold ">Oferta</h1>
          <p className="mt-4 xsm:text-base text-[13px]">
            Kreatywne rozwiązania dla Twojej marki.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {services.map((service, index) => (
            <Link key={index} href={service?.link}
              className="bg-[#36363856] transition-colors duration-300 hover:bg-[#464647] p-3 py-4 sm:p-6 text-[#ffff]"
            >
              <Image src={service.icon} width={40} height={40} />
              <h2 className="my-3 font-extrabold">{service.title}</h2>
              <p className="text-[13px]">{service.description}</p>
            </Link>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Services;
