'use client'
import React from 'react'
import { motion } from "framer-motion";
import { strategia } from '@/public/data/strategia';
import ContactUs from '../ContactUs';

const Section1 = () => {
  return (
    <div className='lg:min-h-[700px] w-full strategia-bg-1 py-8 md:py-16 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h1 className='section-header'>{strategia.section1.heading}</h1>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
          <h3 className="section-title">{strategia.section1.title}</h3>
            <p className='text-center'>
              {strategia.section1.description} 
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <ContactUs isTransparent={"true"} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1