'use client'
import React from 'react'
import { motion } from "framer-motion";
import ContactUs from '../ContactUs';

const Section1 = () => {
  return (
    <div className='w-full digital-bg-1 py-8 md:py-16 xl:py-28 flex items-center'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8'>
          <div>
            <motion.div className="text-box "
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h1 className='h1'>
                Marketing Cyfrowy
              </h1>
            </motion.div>
            <motion.div className='text-box mt-5 sm:mt-8'
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-title !text-left'>Digital Marketing <br /> - Twój sukces w nowoczesnym świeciee</h2>
              <p className='text-center'>
                Jesteśmy agencją digital marketing i oferujemy kompleksowe usługi marketingu cyfrowego,
                które obejmują szeroki zakres działań. Zaczynając od projektowania responsywnych stron
                internetowych, które nie tylko zachwycają estetyką, ale również zapewniają doskonałą
                funkcjonalność na różnych urządzeniach. <br />
                Nasze umiejętności obejmują również rozwój aplikacji mobilnych dla systemów Android i
                iOS, które są niezbędne dla firm chcących dotrzeć do klientów na każdym urządzeniu.
                Oferujemy także analizę danych, która umożliwia głębsze zrozumienie zachowań
                użytkowników i trendów rynkowych. <br />
                Dodatkowo, nasza automatyzacja procesów biznesowych pozwala na efektywne
                zarządzanie operacjami firmy, eliminując powtarzalne zadania i zwiększając produktywność
                zespołu. Dzięki kompleksowemu podejściu, każdy aspekt Twojej cyfrowej obecności
                zostanie zoptymalizowany, aby przyciągnąć uwagę klientów i utrzymać ich zaangażowanie
                na dłuższą metę
              </p>
            </motion.div>
          </div>
          <motion.div className='text-box flex items-center'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <ContactUs isTransparent="true" title="Masz pomysł na kreatywną kampanię lub szukasz inspiracji?
 Połączmy siły i stwórzmy coś wyjątkowego!" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1