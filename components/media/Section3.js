'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <div className='lg:min-h-[700px] w-full section-2 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Dlaczego Nasze Warsztaty Dziennikarskie są Wyjątkowe?</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Doświadczeni Nauczyciele </h3>
            <p>
              Nasi instruktorzy to doświadczeni dziennikarze i managerowie, którzy posiadają głęboką wiedzę praktyczną z zakresu strategii komunikacyjnych, mediów społecznościowych oraz publicznego występowania. Dzięki ich ekspertyzie uczestnicy będą mieć<br />dostęp do najnowszych trendów i praktyk branżowych.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Kompleksowe Szkolenie Medialne</h3>
            <p>
              Warsztaty "Mistrzowie Mediów" oferują kompleksowe szkolenie biznesowo medialne, które obejmuje szeroki zakres tematyczny - od realizowania newsów techniki wystąpień publicznych po strategie budowania marki w mediach społecznościowych. Bez względu na obszar zainteresowania, uczestnicy otrzymają umiejętności, które mogą od razu zastosować w praktyce.
            </p>
          </motion.div>
        </div>
        <motion.div className='text-box'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h3 className='section-title'>Dla Biznesu i Przyszłych Dziennikarzy </h3>
          <p>
            Nasza oferta warsztatów skierowana jest nie tylko do indywidualnych uczestników, ale także do firm, które pragną przeszkolić swoich pracowników <br /> w  komunikacji medialnej. Warsztaty są dedykowane osobom pracującym w biznesie, chcącym doskonalić swoje umiejętności komunikacyjne w celu skuteczniejszego zarządzania firmą. Ponadto, kierujemy je również do przyszłych dziennikarzy, którzy pragną zdobyć praktyczną wiedzę i umiejętności niezbędne do rozpoczęcia kariery w mediach.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Section3
