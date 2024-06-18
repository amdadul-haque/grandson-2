import { Hero, Section1, Section2, Section3 } from '@/components/strategia';
import React from 'react'

export const metadata = {
  title: 'Skuteczne Strategie Reklamowe | Agencja Marketingowa Grandson Media',
  description: 'Odkryj potencjał strategii reklamowych z Grandson Media. Specjalizujemy się w kreowaniu marki i kampaniach globalnych. Skontaktuj się z nami i dowiedz się więcej.'
};

const PodcastPage = () => {

  return (
    <>

      <div className='overflow-hidden'>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  )
}

export default PodcastPage


