'use client'
import React from 'react'
import { motion } from 'framer-motion'

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
            <h3 className='section-title'> Dariusz Łukawski </h3>
            <p>
              trener wystąpień publicznych i medialnych, komunikacji kryzysowej, wykładowca akademicki, dziennikarz, producent tv i reżyser, prezenter, lektor. Przez 26 lat pracował w TVP (1989-2016) gdzie był reporterem, wydawcą, prezenterem i Redaktorem Naczelnym PANORAMY w telewizyjnej „Dwójce”. Autor projektów szkoleń medialnych i komunikacji kryzysowej, z którego doświadczenia skorzystały setki menedżerów takich organizacji jak: Ministerstwo Finansów, Deutsche Bank, Ikea, Arval , Interia.pl, Idea Bank, BNP Paribas.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Kamila Drecka</h3>
            <p>
              ceniona dziennikarka telewizyjna, autorka książek biograficznych, wywiadów prasowych, wykładowczyni i trenerka zajęć z budowania wizerunku i umiejętności publicznych prezentacji na Uniwersytecie Warszawskim. Od kilku lat prowadzi zajęcia ze studentami Uniwersytetu Warszawskiego kształtującymi tzw. kompetencje miękkie w budowaniu wizerunku ze szczególnym uwzględnieniem kompetencji liderskich, mowy ciała, umiejętności prezentacji i wszelkich zasad umiejętności zachowania się przed kamerą i przy wystąpieniach publicznych.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Mateusz Kwiatkowski</h3>
            <p>
              doświadczony radiowiec z długim stażem w branży. Przez wiele lat pracował w renomowanych stacjach radiowych, takich jak Radio Zet Gold, Radio Wawa oraz Radio Supernova, zdobywając szerokie spektrum umiejętności i wiedzy. Jego pasje obejmują nie tylko świat mediów, ale również sport i motoryzację. Tworzył podcasty, w których poruszał tematy związane z różnymi dyscyplinami, relacjonując najważniejsze wydarzenia ze świata sportu. Na warsztatach medialnych będzie dzielił się swoją wiedzą i doświadczeniem w zakresie pracy w radiu, produkcji audycji, a także technik prowadzenia ciekawych i angażujących podcastów radiowych. Jego zaangażowanie oraz profesjonalizm sprawiają, że jest cenionym i rozpoznawalnym głosem w świecie mediów.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Section2