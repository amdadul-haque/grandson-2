import { Hero, PageFooter, Section1, Section2, Section3, Section4 } from '@/components/social-media';
import { socialMediaTexts } from '@/data';
import React from 'react'

export const metadata = {
  title: ' Warsztaty Dziennikarskie i Szkolenia Medialne | Grandson Media',
  description: 'Dołącz do naszych warsztatów dziennikarskich i szkoleń medialnych. Rozwijaj umiejętności komunikacyjne z ekspertami branży i osiągnij sukces w mediach!'
};

const PodcastPage = () => {

  return (
    <>

      <div className='overflow-hidden'>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        {
          socialMediaTexts.map((text, index) => (
            <Section4 key={index} text={text} index={index} />
          ))
        }
        <PageFooter isTransparent={true}/>
      </div>
    </>
  )
}

export default PodcastPage


