import { Footer, Hero, Navbar, SocialMedia, Spotlight, Today, TrendingVideo } from '@/components/europa'
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
            <Today title="Latest News" data={latest} className='mt-20' />
            <div className='mt-10 border border-black/50 p-5 rounded-lg'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='h-6 w-2 bg-purple-400 rounded'></div>
                <h2 className='text-purple-600 text-lg font-bold'>Politics Story Lines</h2>
              </div>
              <div className='w-full md:w-1/3 lg:w-full grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-4 '>
                {
                  storylines.map((item, index) => (
                    <div key={index} className='first-of-type:col-span-2 md:first-of-type:col-span-1'>
                      <div className='rounded-lg overflow-hidden'>
                        <Image src={item.image} alt={item.title} height={125} width={224} className='w-full aspect-video object-cover  hover:scale-105 transition' />
                      </div>
                      <h1 className='text-base mt-2 font-semibold'>
                        {item.title}
                      </h1>
                    </div>
                  ))
                }

              </div>
            </div>
            <Today title="Sports News" data={sports} />
          </div>
          <div className='lg:col-span-1 lg:h-[2710px] sticky top-20 z-0 rounded-lg'>
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