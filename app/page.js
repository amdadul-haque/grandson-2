'use client'
import React from 'react'
import Layout from "@/components/Layout";
import { Team, Hero, Oferta, Portfolio } from "@/components/home";
import { ContactUs } from "@/components";
import SplashContainer from "@/components/home/SplashContainer";

export default function Home() {
  return (
    <Layout>
      <SplashContainer />
      <Hero />
      <Oferta />
      <Portfolio />
      <Team />
      <ContactUs />
    </Layout>
  );
}
