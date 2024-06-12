'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { strategia } from '@/public/data/strategia'

const Section3 = () => {
  return (
    <div className='h-auto w-full bg-black/90 py-8 md:py-16 strategia-bg-3'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>{strategia.section3.heading}</h2>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
          {
            strategia.section3.card.map((card, index) => (
              <motion.div className='text-box'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
              >
                <p>{card.description}</p>
              </motion.div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Section3