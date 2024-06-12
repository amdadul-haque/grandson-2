import ContactUs from '@/components/ContactUs';
import { Hero, Section1, Section2, Section3, Section4, Section5 } from '@/components/media';
import React from 'react'

export const metadata = {
  title: ' Warsztaty Dziennikarskie i Szkolenia Medialne | Grandson Media',
  description: 'Dołącz do naszych warsztatów dziennikarskich i szkoleń medialnych. Rozwijaj umiejętności komunikacyjne z ekspertami branży i osiągnij sukces w mediach!'
};

const MediaPage = () => {
  return (
    <>

      <div className='overflow-hidden'>
        <Hero />
        <Section1 />
        <Section2 />
        <ContactUs />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </>
  )
}

export default MediaPage

