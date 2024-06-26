'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section4 = ({ text, index }) => {
  const firstInitialPositions = [
    { opacity: 0, x: -150 },
    { opacity: 0, y: 100 },
    { opacity: 0, x: 150 },
  ];

  const secondInitialPositions = [
    { opacity: 0, x: -150 },
    { opacity: 0, y: 100 },
    { opacity: 0, x: 150 },
    { opacity: 0, x: -150 },
    { opacity: 0, x: 150 },
  ];

  const thirdInitialPositions = [
    { opacity: 0, x: -150 },
    { opacity: 0, x: 150 },
    { opacity: 0, x: -150 },
    { opacity: 0, x: 150 },
  ];

  return (
    <div className={`lg:min-h-[700px] w-full ${index === 3 ? 'social-bg-4' : index === 1 ? 'social-bg-2' : 'section-2'} py-8 md:py-16`} id={`${index+1}`}>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header mb-4 sm:mb-6'>{text.title}</h2>
          <p>{text.description}</p>
        </motion.div>

        {(index == 0 || index == 3) &&
          <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
            {
              text.sections.map((section, index) => (
                <motion.div className='text-box'
                  initial={firstInitialPositions[index] || { opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: .6 }}
                >
                  <h4 className='section-title' dangerouslySetInnerHTML={{ __html: section.title }} />
                  <p dangerouslySetInnerHTML={{ __html: section.description }} />
                </motion.div>
              ))
            }
          </div>
        }

        {index == 1 &&
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-8'>
            {
              text.sections.map((section, index) => (
                <motion.div className={`text-box ${index > 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
                  initial={secondInitialPositions[index] || { opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: .6 }}
                >
                  <h4 className='section-title' dangerouslySetInnerHTML={{ __html: section.title }} />
                  <p dangerouslySetInnerHTML={{ __html: section.description }} />
                </motion.div>
              ))
            }
          </div>
        }


        {index == 2 &&
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8'>
            {
              text.sections.map((section, index) => (
                <motion.div className='text-box'
                  initial={thirdInitialPositions[index] || { opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: .6 }}
                >
                  <h4 className='section-title' dangerouslySetInnerHTML={{ __html: section.title }} />
                  <p dangerouslySetInnerHTML={{ __html: section.description }} />
                </motion.div>
              ))
            }
          </div>
        }


      </div>
    </div>

  )
}

export default Section4