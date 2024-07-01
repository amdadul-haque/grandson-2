'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section5 = () => {
  return (
    <div className='lg:min-h-[700px] flex items-center w-full digital-bg-3 py-8 md:py-16'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Automatyzacja procesów biznesowych</h3>
            <p>
              Dzięki wdrażanym przez nas systemom, kluczowe operacje, takie jak elektroniczne
              zarządzanie dokumentacją, obsługa zamówień czy zarządzanie zapasami, stają się bardziej
              efektywne i oszczędzają czas. <br />
              Pozwala to firmom skoncentrować się na bardziej strategicznych zadaniach, podczas gdy
              rutynowe procesy są sprawnie i precyzyjnie obsługiwane przez nasze automatyczne
              systemy. Nasze rozwiązania opierają się na najnowszych technologiach, co zapewnia nie
              tylko oszczędność czasu, ale także minimalizację błędów oraz zwiększenie efektywności
              działania całej organizacji. <br />
              Jeśli szukasz efektywnej automatyzacji procesów biznesowych, zapewniamy najwyższą
              jakość naszych usług.
            </p>
          </motion.div>

          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Analiza danych biznesowych </h3>
            <p>
              Grandson Media wykorzystuje zaawansowane techniki analizy danych, aby dostarczyć firmom kluczowych informacji, które mogą znacząco wpływać na ich decyzje strategiczne. Nasze usługi obejmują zbieranie, segregowanie i analizowanie danych z różnych źródeł, w tym danych demograficznych, behawioralnych i transakcyjnych. Wykorzystujemy narzędzia analizy Big Data, platformy analizy predykcyjnej oraz narzędzia do wizualizacji danych, co pozwala na odkrywanie wzorców i trendów, które nie są widoczne przy tradycyjnych metodach analizy. <br />
              Nie czekaj, aż konkurencja wyprzedzi Cię w cyfrowym wyścigu. Skontaktuj się z nami i dowiedz się w jaki sposób nasze usługi cyfrowe mogą zmienić oblicze Twojego biznesu. W ramach spersonalizowanych konsultacji dokładnie omówimy Twoje potrzeby i przedstawimy dopasowane do nich rozwiązania. Nasz zespół doświadczonych ekspertów jest gotowy, aby wspólnie z Tobą opracować strategię sukcesu online, która przyniesie realne rezultaty.
            </p>
          </motion.div>

        </div>
      </div>
    </div>

  )
}

export default Section5