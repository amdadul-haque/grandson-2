'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ContactUs from '../ContactUs'

const Section5 = () => {
  return (
    <div className='lg:min-h-[450px] w-full section-2 py-8 md:py-16 flex items-center'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'>Dołącz do Naszych Warsztatów Medialnych!</h2>
            <p>
              Jeśli chcesz doskonalić swoje umiejętności komunikacyjne i osiągnąć sukces w świecie mediów, to warsztaty "Mistrzowie Mediów" są dla Ciebie. Skontaktuj się z nami już teraz i dołącz do naszej społeczności ambitnych i kreatywnych profesjonalistów!
              <br />
              <br />
              Zapraszamy do udziału w naszych dedykowanych warsztatach medialnych, które są skrojone na miarę Twoich potrzeb w  umiejętności komunikacyjnych nezbędnych w mediach.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <ContactUs isTransparent="ture" title="Startujemy 7 września. Dołącz do nas!" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section5