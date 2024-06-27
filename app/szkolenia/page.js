import { Hero, ContactUs, Layout } from '@/components';
import { Section1, Section2, Section3, Section4, Section5 } from '@/components/media';
import React from 'react'

export const metadata = {
  title: ' Warsztaty Dziennikarskie i Szkolenia Medialne | Grandson Media',
  description: 'Dołącz do naszych warsztatów dziennikarskich i szkoleń medialnych. Rozwijaj umiejętności komunikacyjne z ekspertami branży i osiągnij sukces w mediach!'
};

const MediaPage = () => {
  return (
    <Layout>
      <Hero />
      <Section1 />
      <Section2 />
      <ContactUs title="Masz pytanie dotyczące warsztatów? <br/> Skontaktuj się z nami. Chętnie odpowiemy" />
      <Section3 />
      <Section4 />
      <Section5 />
      <ContactUs title="Masz pytanie dotyczące warsztatów? <br/> Skontaktuj się z nami. Chętnie odpowiemy" />
    </Layout>
  )
}

export default MediaPage


