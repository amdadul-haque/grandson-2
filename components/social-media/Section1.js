'use client'
import React from 'react'
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className='lg:h-[700px] w-full social-bg-1 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Social Media Marketing</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Efektywne Strategie Social Media dla Twojej Firmy</h3>
            <p className='text-center'>
              W dzisiejszym świecie, media społecznościowe to nie tylko platformy dla osobistych interakcji, ale kluczowe narzędzia w budowaniu marki, angażowaniu odbiorców i przyspieszaniu wzrostu biznesowego. Nasza agencja social media oferuje kompleksowe usługi zarządzania mediami społecznościowymi, które pomagają naszym klientom wyprzedzać konkurencję, zwiększać zaangażowanie i optymalizować swoją obecność online.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1