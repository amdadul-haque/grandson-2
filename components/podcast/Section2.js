'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section2 = () => {
  return (
    <div className='w-full section-2 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Podcast Studio - Unikalna Oferta</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p>Nasza oferta obejmuje różnorodne formaty podcastów, dopasowane do różnych potrzeb i preferencji naszych klientów. Możemy zrealizować podcasty wieloosobowe, gdzie uczestniczy kilka osób, rozmowy dwóch osób, jak również łączenia z gośćmi z innych miast czy krajów. Dzięki wykorzystaniu wielu kamer w trakcie nagrywania, nasze produkcje są dynamiczne i atrakcyjne wizualnie, co przyciąga uwagę widzów.</p>
          </motion.div>

          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p >Ponadto, nasze podcasty mogą być transmitowane w czasie rzeczywistym, co umożliwia interakcję z widzami w trakcie emisji. Po zakończeniu transmisji, mamy możliwość dowolnej edycji materiału, dostosowując go do potrzeb różnych platform mediów społecznościowych. Dzięki temu nasze podcasty są wszechstronne i mogą być efektywnie wykorzystywane w promocji i budowaniu zaangażowania online.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Section2