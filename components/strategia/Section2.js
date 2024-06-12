'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ContactUs from '../ContactUs'
import { strategia } from '@/public/data/strategia'

const Section2 = () => {
  return (
    <div className='h-auto w-full strategia-bg-2 py-8 md:py-16 xl:py-24 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>{strategia.section2.heading}</h2>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8'>
          {
            strategia.section2.cards.map((card, index) => (
              <motion.div className='text-box'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
              >
                <h3 className='section-title'>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))
          }
        </div>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <p>{strategia.section2.description}</p>
        </motion.div>

      </div>
    </div>
  )
}

export default Section2