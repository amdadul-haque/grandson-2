import { Footer, Hero, Navbar, SocialMedia, Spotlight, Today, TrendingVideo, StoryLines } from '@/components/europa'
import { openSans } from '@/fonts'
import { latest, sports, storylines, today } from '@/public/data/europa'
import Image from 'next/image'
import React from 'react'

const Europa = () => {

  return (
    <div className={openSans.className}>

      <Navbar />
      <div className='europa-container mt-12 mb-16 lg:mb-20'>
        <div className='lg:grid lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            <Hero />
            <Today title="DZISIAJ" data={today} />
            <TrendingVideo />
            <Today title="Latest News" data={today} className='mt-20' />
            <StoryLines />
            
            <Today title="Sports News" data={today} />
          </div>
          <div className='lg:col-span-1 lg:h-[2950px] sticky top-20 z-0 rounded-lg'>
            <SocialMedia />
            <Spotlight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Europa