'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <div className='lg:min-h-[450px] w-full section-2 py-8 md:py-16 flex items-center'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p className='text-center'>Grandson Media to nie tylko agencja marketingowa - jesteśmy Twoim partnerem w osiąganiu
              sukcesu. Nasza wiedza, doświadczenie i pasja do tworzenia video oraz video marketingu
              pozwalają nam wyróżnić się na rynku i pomagać naszym klientom osiągnąć ich cele
              marketingowe. Jeśli poszukujesz agencji, która oferuje profesjonalizm i innowacyjne
              rozwiązania w dziedzinie produkcji wideo, video content marketingu, to jesteśmy tutaj, aby Ci pomóc i wspólnie stworzyć wyjątkowe projekty, które
              przyciągną uwagę i osiągną zamierzone cele.</p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p className='text-center'>Skontaktuj się z nami już dziś i podziel się swoją wizją! Jesteśmy gotowi wesprzeć Cię w
              realizacji Twojego projektu video, niezależnie od jego skali czy charakteru. Dzięki naszej
              wiedzy, doświadczeniu i zaangażowaniu, możemy wspólnie stworzyć wyjątkowe treści
              video, które przyciągną uwagę Twojej grupy docelowej i pomogą osiągnąć Twoje cele
              marketingowe. Napisz do nas i opowiedz nam o swoim pomyśle - jesteśmy tutaj, aby go
              zrealizować! </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section4