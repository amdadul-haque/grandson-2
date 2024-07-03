"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/public/data/home";

const Oferta = () => {

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
          className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <Link key={index} href={service?.link}
              className="bg-[#36363856] transition-colors duration-300 hover:bg-[#464647] p-3 py-4 sm:p-5 md:p-6 lg:p-10 text-[#ffff] relative "
            >
              <Image src={service.icon} width={40} height={40} />
              <h2 className="my-3 font-extrabold">{service.title}</h2>
              <p className="text-[13px]">{service.description}</p>
              <div className="absolute top-0 left-0 h-full w-full border-[2px] sm:border-[3px] md:border-[4px] lg:border-[5px] border-[#FFFFFF] hover:border-0 transition-all duration-300">

              </div>
            </Link>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Oferta;
