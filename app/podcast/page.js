import { Hero, Section1, Section2, Section3, Section4, } from '@/components/podcast'
import React from 'react'

export const metadata = {
  title: ' Profesjonalna Produkcja Podcastów | Podcast Studio Grandson Media',
  description: 'Odkryj profesjonalne studio podcastowe Grandson Media. Specjalizujemy się w produkcji i promocji podcastów, które angażują i promują Twoją markę'
};

const PodcastPage = () => {
  return (
    <>

      <div className='overflow-hidden'>
        <Hero />
        <Section1 />
        {/* <Section2 /> */}
        <Section3 />
        <Section4 />
      </div>
    </>
  )
}

export default PodcastPage

