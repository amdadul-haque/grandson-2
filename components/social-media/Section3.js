'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Section3 = () => {

  const cards = [
    {
      link: "#1",
      title: "Dla biznesu <br /> i przyszłych dziennikarzy",
    },
    {
      link: "#2",
      title: "Content Marketing",
    },
    {
      link: "#3",
      title: "Zarządzanie i monitoring <br /> Mediów Społecznościowych",
    },
    {
      link: "#4",
      title: "Reklama i Kampanie Promocyjne <br /> w Social Media",
    },
  ]

  return (
    <div className='h-auto w-full bg-black/90 py-8 md:py-16 xl:py-24 social-bg-3'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20'>
          <h2 className='section-header'>Nasze Usługi</h2>
          <motion.div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 lg:gap-20'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            {
              cards.map((card, index) => (
                <Link href={card.link} key={index} className='p-10 bg-black/30 hover:bg-black transition-all  relative flex items-center justify-center duration-500'>
                  <h3 className="section-title" dangerouslySetInnerHTML={{ __html: card?.title }} />
                  <div className='absolute w-full h-full top-0 left-0 border-[30px] border-black hover:border-0 transition-all duration-500'></div>
                </Link>
              ))
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section3