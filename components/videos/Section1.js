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
            <h3 className='section-title'>Twoje historie w naszych obrazach</h3>
            <p >Video marketing to niezwykle skuteczne narzędzie, które pozwala na dynamiczne i
              angażujące dotarcie do Twojej grupy docelowej. Nasza profesjonalna produkcja video
              pomoże Ci w skutecznym przekazywaniu Twoich historii. Wykorzystując video, możemy
              przyciągnąć uwagę, zwiększyć świadomość Twojej marki oraz budować trwałe relacje z
              klientami. Dzięki profesjonalnemu podejściu do produkcji video i efektywnej strategii
              marketingowej, pomożemy Ci osiągnąć sukces na rynku.
            </p>
          </motion.div>
          <motion.div className='text-box '
            animate={rightAnimation}
          >
            <h2 className='section-title'>Nasze Formaty Video</h2>
            <p >Oferujemy różnorodne formaty video, które wzbogacą Twoją strategię marketingową,
              włączając w to animowane explainery, filmy wizerunkowe, podcasty oraz reklamy oparte na
              sztucznej inteligencji. Portfolio naszej agencji uzupełniają także regularne produkcje
              telewizyjne oraz pełnometrażowe dokumenty. Zapewniamy kompleksową obsługę od etapu
              developmentu, aż po postprodukcję, dbając o sprawny przebieg działań i wysoką jakość
              efektu końcowego, aby spełnić oczekiwania nawet najbardziej wymagających klientów.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section1