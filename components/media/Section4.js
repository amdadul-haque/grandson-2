'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <div className='lg:min-h-[700px] w-full media-bg-2 py-8 md:py-16'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Co Oferujemy na Naszych Warsztatach</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Indywidualne Konsultacje </h3>
            <p>
              Na każdym etapie warsztatów nasi uczestnicy mają możliwość korzystania <br /> z indywidualnych konsultacji z naszymi doświadczonymi instruktorami. Dzięki <br /> temu każdy uczestnik może uzyskać personalizowane wsparcie i porady, dopasowane do swoich konkretnych potrzeb i celów. Podczas tych sesji konsultacyjnych, nasi instruktorzy są dostępni, aby udzielać fachowych wskazówek, dzielić się swoim doświadczeniem oraz pomagać <br /> w rozwiązywaniu konkretnych problemów związanych z komunikacją medialną. Indywidualne podejście pozwala nam skupić się na potrzebach każdego uczestnika, zapewniając mu pełne wsparcie w zdobywaniu i doskonaleniu umiejętności.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'>Interaktywne Ćwiczenia</h3>
            <p>
              Podczas warsztatów uczestnicy biorą udział w interaktywnych ćwiczeniach praktycznych, które pozwalają im <br /> w rzeczywistości stosować poznane techniki i strategie komunikacyjne. Poprzez zaangażowanie w różnorodne scenariusze <br /> i symulacje sytuacji z życia zawodowego, uczestnicy mają możliwość natychmia-<br />stowego praktycznego zastosowania zdobytej wiedzy. To nie tylko świetna okazja do doskonalenia umiejętności, ale także do budowania pewności siebie w praktyce pod okiem doświadczonych profesjona-<br />listów. Dzięki temu, uczestnicy mogą eksperymentować, popełniać błędy i uczyć się na nich, co prowadzi do szybszego <br />i bardziej skutecznego rozwoju <br />ich umiejętności komunikacyjnych.
            </p>
          </motion.div>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h3 className='section-title'> Analiza Przykładów <br /> i Strategii Komunikacyjnych</h3>
            <p>
              Podczas warsztatów, nasi instruktorzy prezentują praktyczne przykłady, analizując zastosowane strategie komunikacyjne <br />oraz ich efektywność. Korzystając <br /> z rzeczywistych case studies i przykładów <br /> z życia zawodowego, uczestnicy mają okazję bliżej przyjrzeć się różnym podejściom i technikom komunikacji <br /> w praktyce. Analiza tych przykładów pozwala uczestnikom lepiej zrozumieć, jakie strategie są najskuteczniejsze <br /> w konkretnych sytuacjach, oraz jak można je dostosować do własnych potrzeb <br /> i celów komunikacyjnych. Dzięki temu, uczestnicy zyskują praktyczną wiedzę <br /> i umiejętności, które mogą bezpośrednio zastosować w swojej pracy zawodowej.
            </p>
          </motion.div>

        </div>
      </div>
    </div>

  )
}

export default Section4
