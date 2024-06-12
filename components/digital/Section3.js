'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <div className='lg:min-h-[700px] flex items-center w-full digital-bg-2 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>

        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Tworzenie aplikacji mobilnych na systemy Android i iOS</h3>
            <p>
              W naszej firmie specjalizujemy się w tworzeniu aplikacji mobilnych na systemy Android i
              iOS, które dostarczają użytkownikom praktyczne i intuicyjne interfejsy, sprzyjające
              wygodnemu korzystaniu z Twojej aplikacji oraz szybki dostęp do potrzebnych informacji na
              każdym urządzeniu mobilnym. <br />
              Nasz zespół programistów i projektantów ma doświadczenie w projektowaniu interfejsów
              mobilnych, które są intuicyjne i przyjazne dla użytkownika, a jednocześnie oferują wszystkie
              niezbędne funkcje i możliwości. Nasza metodyka projektowania opiera się na testach
              użyteczności, które pozwalają nam tworzyć aplikacje mobilne, które są responsywne i
              stabilne, niezależnie od urządzenia czy systemu operacyjnego. <br />
              Jeśli potrzebujesz profesjonalnego wsparcia w tworzeniu aplikacji, nasze doświadczenie w
              projektowaniu interfejsów mobilnych zapewni Ci wysokiej jakości rozwiązania.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Skuteczny marketing treści i optymalizacja SEO</h3>
            <p>
              W dzisiejszych czasach marketing treści i optymalizacja SEO są nieodłącznymi elementami
              skutecznej strategii online. Kreujemy wartościowe treści, optymalizując je pod kątem SEO.
              Dostarczamy teksty, które informują i angażują Twoją grupę docelową i generują ruch na
              stronie. <br />
              Nasze treści są dostosowane do branży, zainteresowań odbiorców i aktualnych trendów, co
              sprawia, że są one relewantne i przyciągają uwagę. Realizujemy szeroki zakres formatów
              treści, od artykułów na blogach, przez e-booki, po infografiki i video, aby jak najlepiej
              odpowiadać na potrzeby Twoich klientów. <br />
              Jeżeli poszukujesz efektywnego content marketingu i optymalizacji treści pod kątem SEO,
              możemy pomóc w osiągnięciu Twoich celów.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Section3