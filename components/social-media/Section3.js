'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <div className=' h-auto w-full bg-black/90 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Nasze Usługi</h2>
        </motion.div>

        <motion.div className='text-box'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <ul className='list-decimal section-title !text-left space-y-5 pt-5 px-5 md:pl-10'>
            <li><h3>Dla Biznesu i Przyszłych Dziennikarzy </h3></li>
            <li><h3>Content Marketing</h3></li>
            <li><h3>Zarządzanie i Monitoring Mediów Społecznościowych</h3></li>
            <li><h3> Reklama i Kampanie Promocyjne w Social Media</h3></li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Section3