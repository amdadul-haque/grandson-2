'use client'
import React from 'react'
import { motion } from "framer-motion";
import ContactUs from '../ContactUs';

const Section1 = () => {
  return (
    <div className='lg:h-[700px] w-full media-bg-1 py-8 md:py-16 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>

        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <div>
            <motion.div className="text-box "
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-header'>
                Startujemy 7 września <br /> Dołącz do nas!
              </h2>
            </motion.div>
            <motion.div className='text-box mt-5 sm:mt-8'
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h3 className='section-title'>Profesjonalne Warsztaty Dziennikarskie: <br />
                <span className='text-xl md:text-2xl'>Rozwijaj Swoje Umiejętności Komunikacyjne</span>
              </h3>
              <p className='text-center'>
                Mistrzowie Mediów to seria warsztatów medialnych, które mają na celu wyposażenie uczestników w niezbędne narzędzia komunikacyjne,<br />dzięki którym osiągną sukces w biznesie i karierze dziennikarskiej.
              </p>
            </motion.div>
          </div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <ContactUs isTransparent="true" title="Masz pytanie dotyczące warsztatów? <br/> Skontaktuj się z nami. <br/> Chętnie odpowiemy." />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1
