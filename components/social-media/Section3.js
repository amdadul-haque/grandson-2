'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Section3 = () => {
  return (
    <div className='h-auto w-full bg-black/90 py-8 md:py-16 xl:py-24 social-bg-3'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20'>
          {/* <h2 className='section-header'>Nasze Usługi</h2> */}
          <motion.div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 lg:gap-20'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <Link href="#1" className='text-box hover:bg-black transition-all duration-300'><h3 className="uppercase section-title">Dla Biznesu <br /> i Przyszłych Dziennikarzy </h3></Link>
            <Link href="#2" className='text-box hover:bg-black transition-all duration-300'><h3 className="uppercase section-title">Content Marketing</h3></Link>
            <Link href="#3" className='text-box hover:bg-black transition-all duration-300'><h3 className="uppercase section-title">Zarządzanie i Monitoring <br /> Mediów Społecznościowych</h3></Link>
            <Link href="#4" className='text-box hover:bg-black transition-all duration-300'><h3 className="uppercase section-title"> Reklama i Kampanie Promocyjne <br /> w Social Media</h3></Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section3