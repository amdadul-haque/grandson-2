'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <div className='lg:min-h-[700px] w-full section-3 py-8 md:py-16'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'> Dlaczego Grandson Media?</h2>
        </motion.div>
        <div className='grid md:grid-cols-2 gap-5 lg:gap-8'>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Doświadczenie i Profesjonalizm w Produkcji Wideo </h3>
            <p className='text-center'>Grandson Media, jako agencja video marketing, posiada ponad dziesięcioletnie
              doświadczenie w branży produkcji wideo. Nasz zespół składa się z wykwalifikowanych
              pasjonatów, posiadających wiedzę, energię i talent do tworzenia video na najwyższym
              poziomie. Dzięki naszemu bogatemu doświadczeniu, jesteśmy w stanie sprostać nawet
              najbardziej wymagającym projektom, dostarczając profesjonalne i innowacyjne rozwiązania.</p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Indywidualne Podejście  </h3>
            <p className='text-center'>Jako profesjonaliści od video marketingu, uważamy że każdy klient jest wyjątkowy, dlatego też każdy projekt traktujemy indywidualnie. Nasze podejście skupia się na głębokim zrozumieniu
              potrzeb i celów klienta, co pozwala nam dostarczyć spersonalizowane rozwiązania, które
              przynoszą realne rezultaty. Dążymy do budowania trwałych relacji z naszymi klientami,
              opartych na wzajemnym zaufaniu i zrozumieniu. </p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Skuteczność i Efektywność  </h3>
            <p className='text-center'>Naszym celem jest nie tylko tworzenie pięknych produkcji wideo, ale przede wszystkim
              osiąganie konkretnych celów marketingowych. Dlatego naszą ambicją jest generowanie
              wysokiej konwersji i zaangażowanie odbiorców. Dzięki naszemu zaawansowanemu
              podejściu do produkcji video oraz skutecznej strategii marketingowej, pomagamy naszym
              klientom osiągać sukces na rynku. </p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>  Portfolio i Referencje </h3>
            <p className='text-center'>Nasz długoletni staż w branży produkcji video umożliwił nam zgromadzenie bogatego
              portfolio, zawierającego różnorodne projekty dla klientów z różnych branż i sektorów. Nasze
              realizacje są dowodem naszej kompetencji oraz zdolności do dostosowania się do
              różnorodnych potrzeb i oczekiwań klientów.  </p>
          </motion.div>
        </div>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <p className='text-center'> Ponadto, posiadamy liczne referencje od zadowolonych klientów, którzy potwierdzają naszą
            skuteczność i profesjonalizm w pracy. Dzięki naszemu zróżnicowanemu portfolio oraz
            pozytywnym rekomendacjom, możesz mieć pewność, że jesteśmy odpowiednim partnerem
            do realizacji Twojego projektu video. </p>
        </motion.div>
      </div>
    </div>

  )
}

export default Section3