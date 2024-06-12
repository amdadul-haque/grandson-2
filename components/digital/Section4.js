'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <div className='lg:min-h-[700px] flex items-center w-full section-2 py-8 md:py-16'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Reklamy PPC - Kampanie Google Ads i inne platformy </h3>
            <p>
              Nasze usługi PPC obejmują szczegółowe planowanie kampanii, wybór odpowiednich
              platform (takich jak Google AdWords, Bing Ads), a także ciągłą analizę i optymalizację
              kampanii, aby zapewnić najlepsze wykorzystanie budżetu reklamowego. Realizujemy
              kampanie reklamowe skoncentrowane na konwersji, które docierają do osób
              zainteresowanych Twoimi produktami czy usługami w odpowiednim czasie i miejscu.
            </p>
          </motion.div>

          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> E-mail marketing</h3>
            <p>
              Specjalizujemy się w e-mail marketingu i budowaniu list mailingowych, które są skutecznymi
              kanałami dotarcia do klienta. Projektujemy personalizowane kampanie e-mail marketingowe,
              które pomagają budować relacje z obecnymi i przyszłymi klientami.
              Opracowujemy strategie segmentacji listy mailingowej, aby dostarczyć e-maile dopasowane
              do Twoich potrzeb. Tworzymy atrakcyjne wizualnie i treściowo wiadomości oraz
              monitorujemy skuteczność wysyłek, modyfikując podejście w odpowiedzi na feedback
              odbiorców.
              Dzięki naszemu doświadczeniu w obszarze e-mail marketingu i budowy listy mailingowej
              możemy pomóc w osiągnięciu Twoich biznesowych celów.
            </p>
          </motion.div>

        </div>
      </div>
    </div>

  )
}

export default Section4