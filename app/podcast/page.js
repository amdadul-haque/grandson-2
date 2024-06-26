import { ContactUs, Hero, Layout } from '@/components';
import { Section1, Section3, Section4, } from '@/components/podcast'
import React from 'react'

export const metadata = {
  title: ' Profesjonalna Produkcja Podcastów | Podcast Studio Grandson Media',
  description: 'Odkryj profesjonalne studio podcastowe Grandson Media. Specjalizujemy się w produkcji i promocji podcastów, które angażują i promują Twoją markę'
};

const PodcastPage = () => {
  return (
    <Layout>
      <Hero videoDir="podcast"/>
      <Section1 />
      <ContactUs />
      <Section3 />
      <Section4 />
      <ContactUs />
    </Layout>
  )
}

export default PodcastPage


