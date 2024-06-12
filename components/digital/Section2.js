'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className='lg:min-h-[700px] w-full section-2 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Nasze Usługi Cyfrowe</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Tworzenie i optymalizacja responsywnych stron
              internetowych </h3>
            <p>
              Budujemy strony internetowe, korzystając z najnowocześniejszych technologii webowych,
              takich jak HTML5, CSS3, JavaScript, React, Angular, a także serwerowe rozwiązania takie
              jak Node.js czy Python Django. Dzięki temu, zaprojektowane przez nas strony są szybkie,
              responsywne i doskonale działają na wszystkich urządzeniach i przeglądarkach. <br />
              Dbamy o to, aby kod był czysty, zorganizowany i łatwy w utrzymaniu, co jest kluczowe w
              szybko zmieniających się trendach. Nasze rozwiązania webowe są również zabezpieczone
              przed najczęstszymi zagrożeniami cybernetycznymi, co zapewnia ochronę danych
              użytkowników i firm.

            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Projektowanie UX/UI dla efektywnej optymalizacji
              konwersji
            </h3>
            <p>
              Efektywne projektowanie UX/UI jest kluczowe dla sukcesu każdej strony internetowej. W
              Grandson Media priorytetem naszego zespołu projektantów jest projektowanie UX/UI na
              najwyższym poziomie. Zajmujemy się tworzeniem estetycznych rozwiązań, które są nie tylko
              estetyczne, ale przede wszystkim funkcjonalne i intuicyjne dla użytkowników. <br />
              Prowadzimy szczegółowe badania użytkowników, w tym testy użyteczności, które pomagają
              nam zrozumieć, jak użytkownicy wchodzą w interakcje z produktem, co pozwala na poprawę
              projektów pod kątem najlepszej wydajności i optymalizacji konwersji. Jeśli zależy Ci na
              efektywnym projektowaniu UX/UI, to jesteśmy doskonałym partnerem dla Ciebie.

            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Section2