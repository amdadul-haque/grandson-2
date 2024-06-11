'use client'
import React from 'react'
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className='lg:min-h-[700px] w-full social-bg-1 py-8 md:py-16 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h3 className='section-header'>Efektywne Strategie Social Media dla Twojej Firmy</h3>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <p className='text-center'>
              W dzisiejszym świecie, media społecznościowe to nie tylko platformy dla osobistych interakcji, ale kluczowe narzędzia w budowaniu marki, angażowaniu odbiorców i przyspieszaniu wzrostu biznesowego. Nasza agencja social media oferuje kompleksowe usługi zarządzania mediami społecznościowymi, które pomagają naszym klientom wyprzedzać konkurencję, zwiększać zaangażowanie i optymalizować swoją obecność online.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'>Nasze Podejście do Social Media Marketingu</h2>
            <ul className='list-disc pl-5'>
              <li>
                <p>Tworzymy strategie dostosowane do specyfiki każdej branży  <br /> i indywidualnych potrzeb klienta.</p>
              </li>
              <li>
                <p>Korzystamy z najnowszych narzędzi i technologii</p>
              </li>
              <li>
                <p>Regularnie analizujemy i raportujemy klientom efekty naszych działań. </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1