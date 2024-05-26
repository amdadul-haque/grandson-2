'use client'
import React from 'react'
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className='lg:h-[700px] w-full media-bg-1 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Szkolenia Medialne Mistrzowie Mediów</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Profesjonalne Warsztaty Dziennikarskie: <br /> Rozwijaj Swoje Umiejętności Komunikacyjne</h3>
            <p className='text-center'>
              Mistrzowie Mediów to seria warsztatów medialnych, które mają na celu wyposażenie uczestników w niezbędne komunikacyjne dzięki którym osiągną sukces w biznesie i karierze dziennikarskiej.
            </p>
          </motion.div>
          {/* <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'>Podcast Studio - Unikalna Oferta</h2>
            <p className='text-center'> Nasza oferta obejmuje różnorodne formaty podcastów, dopasowane do różnych potrzeb i preferencji naszych klientów. Możemy zrealizować podcasty wieloosobowe, gdzie uczestniczy kilka osób, rozmowy dwóch osób, jak również łączenia z gośćmi z innych miast czy krajów. Dzięki wykorzystaniu wielu kamer w trakcie nagrywania, nasze produkcje są dynamiczne i atrakcyjne wizualnie, co przyciąga uwagę widzów.
              <br />
              <br />
              Ponadto, nasze podcasty mogą być transmitowane w czasie rzeczywistym, co umożliwia interakcję z widzami w trakcie emisji. Po zakończeniu transmisji, mamy możliwość dowolnej edycji materiału, dostosowując go do potrzeb różnych platform mediów społecznościowych. Dzięki temu nasze podcasty są wszechstronne i mogą być efektywnie wykorzystywane w promocji i budowaniu zaangażowania online.
            </p>
          </motion.div> */}
        </div>
      </div>
    </div>
  )
}

export default Section1