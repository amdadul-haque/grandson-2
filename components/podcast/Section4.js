'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <div className='lg:min-h-[450px] w-full section-2 py-8 md:py-16 flex items-center'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'>Wybierz Nasze Studio Podcastowe</h2>
            <p> Podcasty to nie tylko ważny trend współczesnego świata mediów, ale również integralna
              część skutecznej strategii komunikacyjnej, realizująca dynamiczne oraz angażujące dialogi z grupą docelową. W Podcast Studio Grandson Media, łączymy kreatywność, profesjonalizm i zaangażowanie, by dostarczyć niezapomniane doświadczenia słuchaczom i widzom. Niezależnie od branży czy celu, nasz zespół stworzy dla Ciebie treści podcastowe, które przyciągną uwagę i spełnią Twoje oczekiwania. Skontaktuj się z nami już teraz, aby rozpocząć wspólną podróż w świat fascynującej produkcji podcastów!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section4