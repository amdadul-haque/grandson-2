'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <div className='lg:min-h-[700px] w-full podcast-bg-2 py-8 md:py-16'>
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        {/* <motion.div className="text-box "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <h2 className='section-header'> Dlaczego Grandson Media Podcasty?</h2>
        </motion.div> */}
        <div className='grid md:grid-cols-2 gap-5 lg:gap-8'>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'> Wysoka Jakość Produkcj </h2>
            <p > Wybierając Studio Podcastowe Grandson Media, nasz klient otrzymuje produkcję wysokiej
              jakości. Wszystkie nagrania w naszym studiu podcastowym realizujemy korzystając z uznanej na rynku serii kamer Sony FX oraz dedykowanych obiektywów Sony G-Master o niezwykłej wyrazistości i głębi obrazu. Materiał rejestrujemy w rozdzielczości 4K, co pozwoli cieszyć się wyjątkową jakością obrazu i dźwięku.
              <br />
              <br />
              Wysoki standard produkcji to nie tylko wartość dla odbiorców korzystających z urządzeń
              mobilnych czy komputerów, ale również komfort dla użytkowników nowoczesnych platform multimedialnych, takich jak smart TV. Dzięki temu nasze treści są dostępne dla szerszego grona odbiorców, którzy preferują oglądanie treści w domowym zaciszu na dużych ekranach. W ten sposób zapewniamy naszym słuchaczom niezapomniane wrażenia z  konsumowania treści, niezależnie od tego, gdzie i w jaki sposób decydują się je odtwarzać.

            </p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'> Eksperckie Doradztwo i Pomoc w Realizacji  </h2>
            <p >W Studio Podcastowym Grandson Media, nie pozostawiamy Cię samemu sobie w trakcie
              procesu produkcji. Nasz zespół nie tylko narzędzia, ale także oferuje wsparcie i
              eksperckie doradztwo na każdym etapie tworzenia  podcastu. Od pierwszych
              koncepcji po finalną edycję, jesteśmy tutaj, aby pomóc Ci w osiągnięciu Twoich celów marketingowych związanych z podcast marketingiem.
              <br />
              <br />
              Niezależnie od tego, czy potrzebujesz pomocy w planowaniu treści, czy też w technicznych
              aspektach produkcji i postprodukcji, możesz liczyć na nasze wsparcie i wskazówki. Nasze
              doświadczenie i zaangażowanie pozwolą Ci skoncentrować się na istocie treści, podczas
              gdy my zajmiemy się resztą, zapewniając Ci bezproblemową realizację Twojego projektu
              podcastowego
            </p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'>Podcasty Dla Wzmacniania Marki i Angażowania
              Odbiorców</h2>
            <p > Podcasty wideo są doskonałym narzędziem nie tylko do promocji marki, ale także do
              budowania trwałych relacji z odbiorcami. W Grandson Media, wierzymy w potencjał podcastów do wzmacniania świadomości marki, budowania zaufania  zaangażowania odbiorców. Nasze podcasty nie tylko dostarczają wartościowych treści, ale także budują więź emocjonalną z widzami, co przekłada się na lojalność i zaangażowanie</p>
          </motion.div>
          <motion.div className='text-box '
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-title'> Optymalizacja Treści i Podcast Marketing </h2>
            <p > Nasza obsługa nie kończy się na produkcji. Poza tworzeniem wysokiej jakości treści podcastowych, nasz zespół skupia się również na optymalizacji tych materiałów pod kątem SEO . Stosujemy najlepsze praktyki w zakresie optymalizacji treści, dbając o odpowiednie używanie słów kluczowych, meta opisów i tytułów, co przyczynia się do poprawy widoczności podcastów w wynikach wyszukiwania.

            </p>
          </motion.div>
        </div>
        <motion.div className="text-box "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <p > Dodatkowo, zajmujemy się promocją podcastów na różnych platformach społecznościowych, takich jak Facebook, Instagram, Twitter czy LinkedIn. Dzięki temu zapewniamy maksymalizację widoczności produkcji oraz skuteczność kampanii promocyjnych. Nasze starania w zakresie optymalizacji i promocji bezpośrednio przekładają się na osiąganie zamierzonych celów marketingowych naszych klientów, budując silną obecność online i przyciągając nową, zaangażowaną publiczność. </p>
        </motion.div>
      </div>
    </div>

  )
}

export default Section3