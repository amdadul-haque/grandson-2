import { Hero, PageFooter, Section1, Section2, Section3, Section4 } from '@/components/strategia';
import { socialMediaTexts } from '@/data';
import React from 'react'

export const metadata = {
  title: 'Skuteczne Strategie Reklamowe | Agencja Marketingowa Grandson Media',
  description: 'Odkryj potencjał strategii reklamowych z Grandson Media. Specjalizujemy się w kreowaniu marki i kampaniach globalnych. Skontaktuj się z nami i dowiedz się więcej.'
};

const PodcastPage = () => {

  return (
    <>

      <div className='overflow-hidden'>
        {/* <Hero /> */}
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  )
}

export default PodcastPage


