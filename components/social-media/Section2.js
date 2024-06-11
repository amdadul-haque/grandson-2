'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ContactUs from '../ContactUs'

const Section2 = () => {
  return (
    <div className='h-auto w-full section-2 py-8 md:py-16 xl:py-24 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <div className='w-full lg:w-1/2 flex items-center'>
            <motion.div className='text-box'
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-title'> Dlaczego Wybrać Nas jako Twoją Agencję Social
                Media? </h2>
              <p>
                Z Grandson Media zyskujesz partnera, który rozumie dynamikę cyfrowego świata i potrafi dostosować strategie social media do zmieniających się trendów i oczekiwań rynku. Nasze doświadczenie, kreatywność i technologiczna wiedza pozwalają nam oferować profesjonalne i innowacyjne podejście w branży.
              </p>
            </motion.div>
          </div>
          <motion.div className='text-box w-full lg:w-1/2'
            initial={{ opacity: 0, x: 150 }}
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

export default Section2