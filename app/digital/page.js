import Layout from '@/components/Layout';
import { Hero, Section1, Section2, Section3, Section4, Section5 } from '@/components/digital';
import React from 'react'

export const metadata = {
  title: 'Agencja Digital Marketing Grandson Media - Usługi Cyfrowe',
  description: 'Jesteśmy agencją digital marketingu, oferującą kompleksowe usługi cyfrowe i zautomatyzowane procesy biznesowe. Skontaktuj się z nami i osiągnij sukces w świecie cyfrowym.'
};

const MediaPage = () => {
  return (
    <Layout>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  )
}

export default MediaPage

