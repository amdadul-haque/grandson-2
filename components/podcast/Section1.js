'use client'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const Section1 = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // animation
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });

      rightAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      leftAnimation.start({
        opacity: 0,
        x: -150,
      });

      rightAnimation.start({
        opacity: 0,
        x: 150,
      });
    }
  }, [inView]);
  return (
    <div className='lg:h-[700px] w-full section-1 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex items-center'
        ref={ref}>
        <div className='flex flex-col lg:flex-row gap-5 sm:gap-8 md:justify-between'>
          <motion.div className='text-box '
            animate={leftAnimation}
          >
            <h3 className='section-title'>Twoje treści w naszym studio podcastowym</h3>
            <p className='text-center'> Oferujemy kompleksowe usługi produkcji podcastów, które nie tylko rozwijają obecność online, ale także angażują audytorium wnowy, dynamiczny sposób. Czy jesteście gotowi na ekscytującą podróż przez świat treści audio-video? Przekonajcie się, dlaczego warto wybrać nasze studio podcastowe! <br />
              Podcasty to rewolucja w sposobie, w jaki użytkownicy konsumują treści audiowizualne. Stają się one nie tylko popularnym źródłem rozrywki, ale także ważnym narzędziem do zdobywania wiedzy i pogłębiania zainteresowań. Ta forma konsumpcji pozwala słuchać ulubionych programów w drodze do pracy, podczas treningu, czy nawet w trakcie wykonywania codziennych obowiązków domowych. Te niezwykle elastyczne formy komunikacji, dają użytkownikom kontrolę nad czasem i miejscem, w którym chcą konsumować treści. W dobie szybkiego rozwoju technologii mobilnych i wzrostu popularności platform streamingowych, coraz więcej osób sięga po podcasty, co sprawia, że stanowią one znaczący kierunek rozwoju mediów i marketingu.
            </p>
          </motion.div>
          <motion.div className='text-box '
            animate={rightAnimation}
          >
            <h2 className='section-title'>Podcast Studio - Unikalna Oferta</h2>
            <p className='text-center'> Nasza oferta obejmuje różnorodne formaty podcastów, dopasowane do różnych potrzeb i preferencji naszych klientów. Możemy zrealizować podcasty wieloosobowe, gdzie uczestniczy kilka osób, rozmowy dwóch osób, jak również łączenia z gośćmi z innych miast czy krajów. Dzięki wykorzystaniu wielu kamer w trakcie nagrywania, nasze produkcje są dynamiczne i atrakcyjne wizualnie, co przyciąga uwagę widzów. 
            <br />
            <br />
            Ponadto, nasze podcasty mogą być transmitowane w czasie rzeczywistym, co umożliwia interakcję z widzami w trakcie emisji. Po zakończeniu transmisji, mamy możliwość dowolnej edycji materiału, dostosowując go do potrzeb różnych platform mediów społecznościowych. Dzięki temu nasze podcasty są wszechstronne i mogą być efektywnie wykorzystywane w promocji i budowaniu zaangażowania online.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1