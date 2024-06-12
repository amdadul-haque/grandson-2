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
          <h2 className='section-header'>Poznaj Naszych Ekspertów od Szkoleń Medialnych</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <Image src='/images/media/dariusz_lukawski.jpg' alt='Dariusz Łukawski' width={300} height={300} className="mx-auto mb-6" />
            <h3 className='section-title'> Dariusz Łukawski </h3>
            <p>
              Trener wystąpień publicznych i medialnych, komunikacji kryzysowej, wykładowca akademicki, dziennikarz, producent tv <br />i reżyser, prezenter, lektor. Przez 26 lat pracował w TVP (1989-2016) gdzie był reporterem, wydawcą, prezenterem <br />i Redaktorem Naczelnym PANORAMY <br />w telewizyjnej „Dwójce”. Autor projektów szkoleń medialnych i komunikacji kryzysowej, z którego doświadczenia skorzystały setki menedżerów takich organizacji jak: Ministerstwo Finansów, Deutsche Bank, Ikea, Arval , Interia.pl, Idea Bank, BNP Paribas.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <Image src="/images/media/kamila_drecka.jpg" alt="Kamila Drecka"width={300} height={300} className="mx-auto mb-6" />
            <h3 className='section-title'>Kamila Drecka</h3>
            <p>
              Ceniona dziennikarka telewizyjna, autorka książek biograficznych, wywiadów prasowych, wykładowczyni i trenerka zajęć z budowania wizerunku i umiejętności publicznych prezentacji na Uniwersytecie Warszawskim. Od kilku lat prowadzi zajęcia ze studentami UW kształtującymi tzw. kompetencje miękkie w budowaniu wizerunku ze szczególnym uwzględnieniem kompetencji liderskich, mowy ciała, umiejętności prezentacji i wszelkich zasad umiejętności zachowania się przed kamerą i przy wystąpieniach publicznych.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
          <Image src="/images/media/leszek_kablak.jpg" alt="Leszek Kabłak" width={300} height={300} className="mx-auto mb-6" />
            <h3 className='section-title'> Leszek Kabłak</h3>
            <p>
            Dziennikarz, operator, montażysta. Doświadczenie dziennikarskie zdobywał <br /> w Libii, Francji, Włoszech. Pracował między innymi dla RMF FM, TVP, Telewizji Puls, Polsatu, TVN24, PAP oraz największej telewizji informacyjnej w Europie, Euronews. Jest właścicielem domu produkcyjnego Kaizen Media. Jego pasją są podróże, filmowanie oraz języki obce (mówi po francusku, włosku, angielsku, hiszpańsku <br />i rosyjsku).
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Section2