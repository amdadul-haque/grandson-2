import { ContactUs, Hero } from '@/components';
import { FacebookMsg } from '@/components/home';
import SplashContainer from '@/components/home/SplashContainer';
import Layout from '@/components/Layout';
import { Section1, Section2, Section3, Section4, Section5 } from '@/components/videos'
import React from 'react'

export const metadata = {
  title: "Profesjonalna Produkcja Video i Video Marketing - Grandson Media",
  description: "Odkryj profesjonalne usługi produkcji wideo i marketingu wideo w Grandson Media. Tworzymy treści, które przyciągają uwagę i realizują cele marketingowe",
};

const VideosPage = () => {
  return (
    // <Layout>
    <>
      <SplashContainer />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ContactUs />
      <FacebookMsg />
    </>
    // </Layout>
  )
}

export default VideosPage