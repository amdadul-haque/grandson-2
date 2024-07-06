import { Hero, ContactUs } from '@/components';
import SplashContainer from '@/components/home/SplashContainer';
import Layout from '@/components/Layout';
import { PageFooter, Section1, Section2, Section3, Section4 } from '@/components/social-media';
import { socialMediaTexts } from '@/public/data/social-media';
import React from 'react'

export const metadata = {
  title: ' Warsztaty Dziennikarskie i Szkolenia Medialne | Grandson Media',
  description: 'Dołącz do naszych warsztatów dziennikarskich i szkoleń medialnych. Rozwijaj umiejętności komunikacyjne z ekspertami branży i osiągnij sukces w mediach!'
};

const PodcastPage = () => {

  return (
    <Layout>
      <SplashContainer />
      <Hero/>
      <Section1 />
      <Section2 />
      <Section3 />
      {
        socialMediaTexts.map((text, index) => (
          <Section4 key={index} text={text} index={index} />
        ))
      }
      <PageFooter isTransparent={true} />
      <ContactUs />
    </Layout>
  )
}

export default PodcastPage


