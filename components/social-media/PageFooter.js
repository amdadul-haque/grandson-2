'use client'
import React from 'react'
import { motion } from 'framer-motion'

const PageFooter = () => {
  return (
    <div className='lg:min-h-[450px] w-full section-2 py-8 md:py-16 flex items-center'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <motion.div className="text-box"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'>Zaawansowany Social Media Marketing z Grandson Media</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-5 md:gap-8 md:justify-between'>
          <motion.div className='text-box'
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p>
              Dzięki zaawansowanemu targetowaniu, Grandson Media jako wiodąca agencja marketingowa social media jest w stanie dotrzeć do tych segmentów rynku, które są najbardziej wartościowe dla Twojej marki, zwiększając ROI i pomagając w skutecznym budowaniu świadomości marki. Nasze doświadczenie w prowadzeniu kampanii promocyjnych w różnych branżach pozwala nam oferować usługi na najwyższym poziomie, dostosowane do unikalnych potrzeb każdego klienta.
            </p>
          </motion.div>

          <motion.div className='text-box'
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <p>
              Nie pozwól, aby Twoja marka pozostała niezauważona w zatłoczonym cyfrowym świecie. Skontaktuj się z nami już dzisiaj, aby dowiedzieć się więcej o naszych usługach z zakresu marketingu w social media i rozpocząć skuteczną transformację Twojej obecności online. Zapewnij sobie miejsce na czele cyfrowej rewolucji, osiągając swoje cele biznesowe z Grandson Media. Zacznij teraz i odkryj, jak nasze kreatywne i strategiczne podejście może przynieść wymierne korzyści Twojej firmie.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default PageFooter